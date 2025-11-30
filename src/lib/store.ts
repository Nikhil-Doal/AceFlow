import { create } from 'zustand';
import {
    Connection,
    Edge,
    EdgeChange,
    Node,
    NodeChange,
    addEdge,
    applyNodeChanges,
    applyEdgeChanges,
} from 'reactflow';
import { WorkflowState, NodeType } from './types';
import { v4 as uuidv4 } from 'uuid';

export const useWorkflowStore = create<WorkflowState>((set, get) => ({
    nodes: [],
    edges: [],
    executionStatus: 'idle',

    onNodesChange: (changes: NodeChange[]) => {
        set({
            nodes: applyNodeChanges(changes, get().nodes),
        });
    },

    onEdgesChange: (changes: EdgeChange[]) => {
        set({
            edges: applyEdgeChanges(changes, get().edges),
        });
    },

    onConnect: (connection: Connection) => {
        set({
            edges: addEdge(connection, get().edges),
        });
    },

    addNode: (type: NodeType, position: { x: number; y: number }) => {
        const id = uuidv4();

        const initialData: any = {
            label: type.charAt(0).toUpperCase() + type.slice(1) + ' Node',
            type,
            value: null,
        };

        if (type === 'api') {
            initialData.apiUrl = 'https://catfact.ninja/fact';
        } else if (type === 'ai-agent') {
            initialData.model = 'gemini-2.5-flash';
        }

        const newNode: Node = {
            id,
            type,
            position,
            data: initialData,
        };

        set({
            nodes: [...get().nodes, newNode],
        });
    },

    updateNodeData: (id: string, data: any) => {
        set({
            nodes: get().nodes.map((node) => {
                if (node.id === id) {
                    return {
                        ...node,
                        data: { ...node.data, ...data },
                    };
                }
                return node;
            }),
        });
    },

    deleteNode: (id: string) => {
        set({
            nodes: get().nodes.filter((node) => node.id !== id),
            edges: get().edges.filter((edge) => edge.source !== id && edge.target !== id),
        });
    },

    setExecutionStatus: (status) => set({ executionStatus: status }),

    clearCanvas: () => set({ nodes: [], edges: [], executionStatus: 'idle' }),

    saveWorkflow: () => {
        const { nodes, edges } = get();
        localStorage.setItem('workflow-nodes', JSON.stringify(nodes));
        localStorage.setItem('workflow-edges', JSON.stringify(edges));

        // Dynamic import to avoid SSR issues
        import('sonner').then(({ toast }) => {
            toast.success('Workflow saved to browser storage!');
        });
    },

    loadWorkflow: () => {
        const nodes = localStorage.getItem('workflow-nodes');
        const edges = localStorage.getItem('workflow-edges');
        if (nodes && edges) {
            set({
                nodes: JSON.parse(nodes),
                edges: JSON.parse(edges),
            });

            // Dynamic import to avoid SSR issues
            import('sonner').then(({ toast }) => {
                toast.success('Workflow loaded from browser storage!');
            });
        } else {
            // Dynamic import to avoid SSR issues
            import('sonner').then(({ toast }) => {
                toast.error('No saved workflow found in browser storage');
            });
        }
    },
}));
