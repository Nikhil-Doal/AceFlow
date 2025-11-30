import React, { memo, useState } from 'react';
import { Handle, Position } from 'reactflow';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useWorkflowStore } from '@/lib/store';
import { WorkflowNodeData } from '@/lib/types';
import { Sparkles, Loader2, Eye, EyeOff, Zap } from 'lucide-react';

interface AIAgentNodeProps {
    id: string;
    data: WorkflowNodeData;
}

const MODELS = [
    { value: 'gemini-2.5-flash', label: 'Gemini 2.5 Flash (Recommended)', icon: '⚡' },
    { value: 'gemini-flash-latest', label: 'Gemini Flash (Latest)', icon: '✨' },
];

const AIAgentNode = memo(({ id, data }: AIAgentNodeProps) => {
    const updateNodeData = useWorkflowStore((state) => state.updateNodeData);
    const [showApiKey, setShowApiKey] = useState(false);

    const handleApiKeyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateNodeData(id, { apiKey: e.target.value });
    };

    const handleModelChange = (value: string) => {
        updateNodeData(id, { model: value });
    };

    const isActive = data.isProcessing || data.value;
    const hasError = !!data.error;

    return (
        <div className="relative">
            {/* Animated glow effect */}
            {isActive && !hasError && (
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-xl blur-xl opacity-50 animate-pulse" />
            )}

            <Card className={`
        relative w-[340px] border-2 shadow-2xl transition-all duration-300 hover:shadow-purple-500/50
        ${hasError
                    ? 'border-red-500/50 bg-gradient-to-br from-red-950/20 to-red-900/10'
                    : 'border-purple-500/30 bg-gradient-to-br from-purple-950/40 via-slate-900/50 to-pink-950/40'
                }
        backdrop-blur-sm
      `}>
                <CardHeader className="p-4 pb-3 flex flex-row items-center justify-between space-y-0 border-b border-white/10">
                    <div className="flex items-center gap-2.5">
                        <div className={`
              p-2 rounded-lg transition-all duration-300
              ${isActive
                                ? 'bg-gradient-to-br from-purple-500 to-pink-500 animate-pulse'
                                : 'bg-gradient-to-br from-purple-600/30 to-pink-600/30'
                            }
            `}>
                            <Sparkles className="w-4 h-4 text-white" />
                        </div>
                        <div>
                            <CardTitle className="text-sm font-semibold bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                                AI Agent
                            </CardTitle>
                            <p className="text-xs text-purple-300/60 mt-0.5">Powered by Gemini</p>
                        </div>
                    </div>
                    {data.isProcessing && (
                        <div className="flex items-center gap-2 px-2.5 py-1 bg-purple-500/20 rounded-full border border-purple-500/30">
                            <Loader2 className="h-3.5 w-3.5 animate-spin text-purple-400" />
                            <span className="text-xs text-purple-300 font-medium">Thinking...</span>
                        </div>
                    )}
                </CardHeader>

                <CardContent className="p-4 space-y-4">
                    {/* API Key Input */}
                    <div className="space-y-2">
                        <Label className="text-xs text-purple-300/80 font-medium flex items-center gap-1.5">
                            <Zap className="w-3 h-3" />
                            Google API Key
                        </Label>
                        <div className="relative">
                            <Input
                                type={showApiKey ? 'text' : 'password'}
                                value={data.apiKey || ''}
                                onChange={handleApiKeyChange}
                                placeholder="Enter your Gemini API key..."
                                className="nodrag text-xs pr-10 bg-black/30 border-purple-500/30 text-purple-100 placeholder:text-purple-400/40 focus:border-purple-500 focus:ring-purple-500/20"
                            />
                            <button
                                onClick={() => setShowApiKey(!showApiKey)}
                                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-white/10 rounded transition-colors"
                                type="button"
                            >
                                {showApiKey ? (
                                    <EyeOff className="w-3.5 h-3.5 text-purple-400/60" />
                                ) : (
                                    <Eye className="w-3.5 h-3.5 text-purple-400/60" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Model Selector */}
                    <div className="space-y-2">
                        <Label className="text-xs text-purple-300/80 font-medium flex items-center gap-1.5">
                            <Sparkles className="w-3 h-3" />
                            Model
                        </Label>
                        <Select
                            onValueChange={handleModelChange}
                            value={data.model || 'gemini-2.5-flash'}
                        >
                            <SelectTrigger className="nodrag h-9 text-xs bg-black/30 border-purple-500/30 text-purple-100 focus:border-purple-500 focus:ring-purple-500/20">
                                <SelectValue placeholder="Select a model..." />
                            </SelectTrigger>
                            <SelectContent className="bg-slate-900 border-purple-500/30">
                                {MODELS.map((model) => (
                                    <SelectItem
                                        key={model.value}
                                        value={model.value}
                                        className="text-xs text-purple-100 focus:bg-purple-500/20 focus:text-purple-100"
                                    >
                                        <span className="flex items-center gap-2">
                                            <span>{model.icon}</span>
                                            <span>{model.label}</span>
                                        </span>
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>

                    {/* Error Display */}
                    {data.error && (
                        <div className="rounded-lg bg-red-500/10 border border-red-500/30 p-3 space-y-1 animate-in fade-in slide-in-from-top-1">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse" />
                                <p className="text-xs font-semibold text-red-400">Error</p>
                            </div>
                            <p className="text-xs text-red-300/80 leading-relaxed">{data.error}</p>
                        </div>
                    )}

                    {/* Response Preview */}
                    {data.value && !data.isProcessing && !data.error && (
                        <div className="rounded-lg bg-gradient-to-br from-purple-500/10 to-pink-500/10 border border-purple-500/30 p-3 space-y-2 animate-in fade-in slide-in-from-bottom-2">
                            <div className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                                <p className="text-xs font-semibold text-purple-300">Response</p>
                            </div>
                            <div className="max-h-24 overflow-y-auto scrollbar-thin scrollbar-thumb-purple-500/30 scrollbar-track-transparent">
                                <p className="text-xs text-purple-100/90 leading-relaxed whitespace-pre-wrap">
                                    {typeof data.value === 'string'
                                        ? (data.value.length > 200 ? data.value.slice(0, 200) + '...' : data.value)
                                        : JSON.stringify(data.value, null, 2)
                                    }
                                </p>
                            </div>
                        </div>
                    )}

                    {/* Status Indicator */}
                    {!data.apiKey && !data.error && (
                        <div className="flex items-center gap-2 text-xs text-purple-400/60 px-3 py-2 bg-purple-500/5 rounded-lg border border-purple-500/20">
                            <Sparkles className="w-3 h-3" />
                            <span>Add your API key to activate</span>
                        </div>
                    )}
                </CardContent>

                {/* Connection Handles */}
                <Handle
                    type="target"
                    position={Position.Left}
                    className="w-3 h-3 !bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-white/30 shadow-lg shadow-purple-500/50 transition-transform hover:scale-125"
                />
                <Handle
                    type="source"
                    position={Position.Right}
                    className="w-3 h-3 !bg-gradient-to-r from-purple-500 to-pink-500 border-2 border-white/30 shadow-lg shadow-purple-500/50 transition-transform hover:scale-125"
                />
            </Card>
        </div>
    );
});

AIAgentNode.displayName = 'AIAgentNode';
export default AIAgentNode;
