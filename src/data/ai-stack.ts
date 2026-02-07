import { 
  Code2, 
  Image, 
  Video, 
  Film, 
  Mic, 
  Bot, 
  Layout 
} from "lucide-react";

export interface AiStackCategory {
  category: string;
  icon: any;
  tools: string[];
  description: string;
}

export const aiStackData: AiStackCategory[] = [
  {
    category: "编程辅助",
    icon: Code2,
    tools: ["Trae", "Cursor", "Claude Code", "Codex"],
    description: "智能代码补全与辅助开发工具"
  },
  {
    category: "图像生成",
    icon: Image,
    tools: ["Jimeng", "Doubao"],
    description: "AI 绘画与图像创意生成"
  },
  {
    category: "视频生成",
    icon: Video,
    tools: ["Seko", "OiiOii", "Wan", "Mulan"],
    description: "文本/图片生成高质量视频"
  },
  {
    category: "视频剪辑",
    icon: Film,
    tools: ["Jianying"],
    description: "智能视频剪辑与后期处理"
  },
  {
    category: "音色",
    icon: Mic,
    tools: ["Minimax", "LibLib"],
    description: "语音合成与音色克隆"
  },
  {
    category: "大模型APP",
    icon: Bot,
    tools: ["Doubao", "Yuanbao", "Lingguang"],
    description: "全能型 AI 助手与对话模型"
  },
  {
    category: "无代码平台",
    icon: Layout,
    tools: ["Miaoda", "Doubao"],
    description: "无需编程即可构建应用的平台"
  }
];
