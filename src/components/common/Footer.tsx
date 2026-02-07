import React from "react";
import { Heart } from "lucide-react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-border py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full gradient-bg p-0.5">
            <div className="w-full h-full rounded-full bg-background flex items-center justify-center font-bold text-xs text-primary">
              杨
            </div>
          </div>
          <span className="text-xl font-bold gradient-text">AI小白杨</span>
        </div>
        
        <p className="text-muted-foreground text-center max-w-md">
          致力于通过计算机视觉与 AIGC 技术为工作、学习和生活提效赋能。
        </p>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>Made with</span>
          <Heart className="w-4 h-4 text-red-500 fill-red-500" />
          <span>by AI小白杨 © {currentYear}</span>
        </div>

        <div className="text-xs text-muted-foreground/60">
          基于 React + Tailwind CSS 构建
        </div>
      </div>
    </footer>
  );
};

export default Footer;
