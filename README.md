# 🚀 Premium Workflow Builder

A beautiful, modern workflow builder powered by React Flow and Google's Gemini AI. Create powerful automation workflows with an intuitive drag-and-drop interface.

![Workflow Builder](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38B2AC?style=for-the-badge&logo=tailwind-css)

## ✨ Features

- 🎨 **Premium UI** - Beautiful gradient themes with smooth animations and glassmorphism effects
- 🤖 **AI Integration** - Powered by Google's Gemini AI (free tier available)
- 🔗 **Visual Workflow Builder** - Drag-and-drop nodes to create complex workflows
- 📊 **Multiple Node Types** - Input, API, AI Agent, and Output nodes
- 💾 **Local Storage** - Save and load workflows directly in your browser
- 🎯 **Real-time Execution** - Watch your workflows execute in real-time
- 📋 **JSON Support** - Automatic JSON formatting with syntax highlighting
- ⌨️ **Keyboard Shortcuts** - Efficient workflow management with keyboard controls

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager (comes with Node.js)
- A modern web browser (Chrome, Firefox, Safari, or Edge)

## 🔑 Getting a Free Gemini API Key

The AI Agent node requires a Google Gemini API key. Here's how to get one for **FREE**:

### Step 1: Go to Google AI Studio
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account

### Step 2: Create an API Key
1. Click on **"Get API Key"** or **"Create API Key"**
2. Select **"Create API key in new project"** (or choose an existing project)
3. Your API key will be generated instantly

### Step 3: Copy Your API Key
1. Click the **copy icon** next to your API key
2. Store it somewhere safe (you'll need it later)

### Important Notes:
- ✅ The API key is **completely FREE** to use
- ✅ Free tier includes **60 requests per minute**
- ✅ No credit card required
- ⚠️ **Never share your API key publicly**
- 📍 Each API key is tied to your Google account

## 🚀 Installation

### 1. Clone or Download the Project

```bash
# If you have the project as a zip, extract it
# Or if using git:
git clone <repository-url>
cd aceada2
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

### 4. Open in Browser

Open [http://localhost:3000](http://localhost:3000) in your browser. You should see the workflow builder interface.

## 📖 How to Use

### Creating Your First Workflow

1. **Add Nodes to Canvas**
   - Drag any node from the left sidebar onto the canvas
   - Available nodes: Input, API, AI Agent, Output

2. **Connect Nodes**
   - Click and drag from the **right circle** (output) of one node
   - Connect to the **left circle** (input) of another node
   - Data flows from left to right

3. **Configure Nodes**
   - Click on a node to configure its settings
   - Each node type has different configuration options

4. **Run Workflow**
   - Click the **"Run Workflow"** button in the top bar
   - Watch as data flows through your workflow in real-time

### Node Types

#### 🔵 Input Node (Blue)
- **Purpose**: Provide initial data to your workflow
- **Configuration**: Enter text or JSON data
- **Use Case**: Starting point for any workflow

#### 🟢 API Node (Green)
- **Purpose**: Fetch data from external APIs
- **Configuration**: Enter the API endpoint URL
- **Example URL**: `https://catfact.ninja/fact`
- **Use Case**: Get data from REST APIs

#### 🟣 AI Agent Node (Purple/Pink)
- **Purpose**: Process data using Google's Gemini AI
- **Configuration**:
  - **API Key**: Paste your Gemini API key
  - **Model**: Choose between:
    - `gemini-2.5-flash` (Recommended - Stable)
    - `gemini-flash-latest` (Latest features)
- **Use Case**: Natural language processing, text generation, data analysis

#### 🟠 Output Node (Orange)
- **Purpose**: Display workflow results
- **Features**:
  - **View Modes**: Toggle between Text and JSON view
  - **Copy**: Copy output to clipboard
  - **Download**: Save output as .txt or .json file
  - **Syntax Highlighting**: Color-coded JSON with line numbers
- **Use Case**: View and export final results

### Example Workflows

#### 1. Simple API Data Display
```
Input → API → Output
```
1. Input: Leave empty (API doesn't need input)
2. API: `https://catfact.ninja/fact`
3. Output: Shows the cat fact

#### 2. AI-Powered Text Processing
```
Input → AI Agent → Output
```
1. Input: "Explain quantum computing in simple terms"
2. AI Agent: Enter your API key, select model
3. Output: AI-generated explanation

#### 3. API Data + AI Analysis
```
API → AI Agent → Output
```
1. API: Fetch data from an API
2. AI Agent: "Summarize this data in 3 bullet points"
3. Output: AI-processed summary

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|----------|--------|
| `Delete` | Remove selected nodes or connections |
| `Shift` + Click | Multi-select nodes |
| `Drag` | Connect nodes or move canvas |
| `Scroll` | Zoom in/out on canvas |

## 💾 Save & Load Workflows

### Saving Workflows
1. Click the **Save** button (💾 icon) in the sidebar
2. Workflow is saved to your browser's local storage
3. A success notification will appear

### Loading Workflows
1. Click the **Load** button (📤 icon) in the sidebar
2. Your previously saved workflow will be restored
3. All nodes and connections will reappear

### Clear Canvas
1. Click the **Clear** button (🗑️ icon) in the sidebar
2. Confirm the action
3. All nodes will be removed

**Note**: Workflows are saved locally in your browser. Clearing browser data will delete saved workflows.

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (React 18)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Workflow Engine**: ReactFlow
- **State Management**: Zustand
- **AI**: Google Generative AI (@google/generative-ai)
- **Notifications**: Sonner
- **Icons**: Lucide React

## 🎨 UI Features

- **Gradient Themes**: Each node type has a unique gradient color scheme
- **Glassmorphism**: Frosted glass effects throughout the UI
- **Animations**: Smooth transitions and hover effects
- **Dark Mode**: Premium dark theme optimized for long sessions
- **Responsive**: Works on desktop browsers

## 🐛 Troubleshooting

### "No saved workflow found" Error
- **Cause**: No workflow has been saved yet
- **Solution**: Create a workflow and click Save before trying to Load

### AI Agent Not Working
- **Cause**: Invalid or missing API key
- **Solutions**:
  1. Verify your API key is correct
  2. Check API key hasn't expired
  3. Ensure you copied the entire key
  4. Try generating a new API key

### "Workflow failed" Error
- **Causes**:
  - AI Agent: Invalid API key or rate limit exceeded
  - API Node: Invalid URL or API is down
  - Network issues
- **Solutions**:
  1. Check your internet connection
  2. Verify all node configurations
  3. Check browser console for detailed errors

### Nodes Won't Connect
- **Cause**: Trying to connect incompatible directions
- **Solution**: Always drag from RIGHT circle to LEFT circle

### Output Not Showing
- **Cause**: Workflow hasn't been executed
- **Solution**: Click the "Run Workflow" button

### Scrolling Issues in Output
- **Cause**: Browser compatibility
- **Solution**: Use latest version of Chrome, Firefox, or Edge

## 📝 Development

### Build for Production

```bash
npm run build
npm run start
```

### Lint Code

```bash
npm run lint
```

## 🤝 Contributing

This is a personal project, but suggestions and feedback are welcome!

## 📄 License

This project is open source and available for personal and educational use.

## 🙏 Acknowledgments

- **Google Gemini AI** - For providing free AI capabilities
- **ReactFlow** - For the excellent workflow visualization library
- **shadcn/ui** - For beautiful UI components
- **Vercel** - For Next.js framework

---

**Built with ❤️ using Next.js and Gemini AI**

For questions or issues, please check the troubleshooting section above.
