# AI小白杨个人主页项目

这是一个基于 React + Vite + TypeScript + Tailwind CSS 开发的现代化个人主页项目。项目展示了“AI小白杨”的个人形象、专业技能、项目作品及联系方式，采用了全响应式设计。

## 核心模块

- **个人简介**: 核心愿景与职业背景展示。
- **关于我**: 详细的项目经验与专业证书。
- **专业技能**: 计算机视觉、深度学习及 AIGC 工具的熟练度展示。
- **项目作品**: 工地安防监控、工程质量检测等实战项目。
- **联系方式**: 集成微信、公众号、视频号等多种社交渠道。

## 目录结构

```
├── README.md           # 项目说明文档
├── package.json        # 依赖管理与脚本配置
├── vite.config.ts      # Vite 构建配置
├── tailwind.config.js  # Tailwind CSS 样式配置
├── src/
│   ├── App.tsx         # 应用主入口
│   ├── components/     # 核心 UI 组件
│   │   ├── common/     # 公共组件（Header, Footer）
│   │   └── ui/         # 基础 UI 库（shadcn/ui）
│   ├── pages/          # 页面视图（Index.tsx）
│   ├── assets/         # 静态资源（图片、二维码）
│   └── index.css       # 全局样式
└── public/             # 静态公共资源
```

## 技术栈

- **框架**: React 18
- **构建**: Vite 5
- **语言**: TypeScript
- **样式**: Tailwind CSS
- **图标**: Lucide React
- **UI 组件**: shadcn/ui

## 本地运行指南

### 环境要求

- **Node.js**: ≥ 18.0.0
- **包管理器**: npm 或 pnpm

### 启动步骤

1. **安装依赖**:
   ```bash
   npm install
   # 或者使用 pnpm
   pnpm install
   ```

2. **启动开发服务器**:
   ```bash
   npm run dev
   ```

3. **访问项目**:
   启动成功后，在浏览器打开终端输出的地址（通常为 `http://localhost:5173`）。

## 开发规范

项目使用 **Biome** 进行代码格式化和 lint 检查。建议在 IDE 中安装 Biome 插件以获得最佳开发体验。

---
© 2026 AI小白杨. 保留所有权利。
