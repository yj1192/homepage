export interface AiTool {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
  category: string;
  tags: string[];
}

export const aiTools: AiTool[] = [
  {
    id: "chatgpt",
    name: "ChatGPT",
    description: "OpenAI 开发的领先对话式 AI 模型，支持自然语言处理、代码编写等多种任务。",
    url: "https://chat.openai.com",
    icon: "https://unavatar.io/openai.com",
    category: "文本写作",
    tags: ["Chatbot", "LLM", "OpenAI"]
  },
  {
    id: "claude",
    name: "Claude",
    description: "Anthropic 开发的 AI 助手，擅长长文本分析和安全交互。",
    url: "https://claude.ai",
    icon: "https://unavatar.io/claude.ai",
    category: "文本写作",
    tags: ["Chatbot", "LLM", "Anthropic"]
  },
  {
    id: "midjourney",
    name: "Midjourney",
    description: "强大的 AI 绘画工具，通过 Discord 生成高质量的艺术图像。",
    url: "https://www.midjourney.com",
    icon: "https://unavatar.io/midjourney.com",
    category: "图像生成",
    tags: ["Image", "Art", "Discord"]
  },
  {
    id: "stable-diffusion",
    name: "Stable Diffusion",
    description: "开源的图像生成模型，支持本地部署和高度定制化。",
    url: "https://stability.ai",
    icon: "https://unavatar.io/stability.ai",
    category: "图像生成",
    tags: ["OpenSource", "Image", "Local"]
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    description: "GitHub 推出的 AI 编程助手，提供实时代码补全和建议。",
    url: "https://github.com/features/copilot",
    icon: "https://unavatar.io/github.com",
    category: "编程辅助",
    tags: ["Coding", "GitHub", "VSCode"]
  },
  {
    id: "trae",
    name: "Trae",
    description: "新一代 AI IDE，提供智能代码补全、生成和重构功能。",
    url: "https://www.trae.ai",
    icon: "https://lf-cdn.trae.ai/obj/trae-ai-cn/trae-logo.png",
    category: "编程辅助",
    tags: ["IDE", "Coding", "AI"]
  },
  {
    id: "notion-ai",
    name: "Notion AI",
    description: "集成在 Notion 中的 AI 助手，辅助写作、总结和翻译。",
    url: "https://www.notion.so/product/ai",
    icon: "https://unavatar.io/notion.so",
    category: "效率工具",
    tags: ["Writing", "Productivity", "Notion"]
  },
  {
    id: "gamma",
    name: "Gamma",
    description: "AI 驱动的 PPT 生成工具，快速创建美观的演示文稿。",
    url: "https://gamma.app",
    icon: "https://unavatar.io/gamma.app",
    category: "效率工具",
    tags: ["PPT", "Presentation", "Design"]
  },
  {
    id: "runway",
    name: "Runway",
    description: "专业的 AI 视频生成和编辑工具，支持文字生成视频。",
    url: "https://runwayml.com",
    icon: "https://unavatar.io/runwayml.com",
    category: "视频制作",
    tags: ["Video", "Gen-2", "Creative"]
  },
  {
    id: "sora",
    name: "Sora",
    description: "OpenAI 的视频生成模型，能够生成长达一分钟的高质量视频。",
    url: "https://openai.com/sora",
    icon: "https://unavatar.io/openai.com",
    category: "视频制作",
    tags: ["Video", "OpenAI", "Coming Soon"]
  }
];

export const categories = [
  "全部",
  "文本写作",
  "图像生成",
  "编程辅助",
  "效率工具",
  "视频制作"
];
