import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import avatarImage from "@/assets/images/avatar.jpg";

const HeroSection = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* 头像 */}
        <div className="relative inline-block">
          <div className="w-40 h-40 rounded-full gradient-bg p-1 animate-pulse-glow">
            <img 
              src={avatarImage} 
              alt="AI小白杨头像" 
              className="w-full h-full rounded-full object-cover"
            />
          </div>
        </div>

        {/* 姓名和职位 */}
        <div className="space-y-4">
          <h1 className="text-5xl xl:text-7xl font-bold tracking-tight">
            <span className="gradient-text">AI小白杨</span>
          </h1>
          <p className="text-xl xl:text-2xl text-muted-foreground">
            计算机视觉应用工程师
          </p>
          <p className="text-lg text-muted-foreground flex items-center justify-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-secondary animate-pulse" />
            广州
          </p>
        </div>

        {/* 简介 */}
        <div className="text-base xl:text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed space-y-2">
          <p>工地安防监控、工程质量检测类计算机视觉应用工程师，</p>
          <p>WaytoAGI第二期Coze智能体训练营优秀学员，</p>
          <p>WaytoAGI第三期AI短剧训练营结业学员，</p>
          <p>WaytoAGI第四期Vibe Coding训练营结业预备，</p>
          <p>热爱AIGC，希望能为工作、学习和生活提效赋能</p>
        </div>

        {/* 愿景 */}
        <div className="max-w-3xl mx-auto mt-8">
          <div className="relative p-6 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 border border-primary/20 backdrop-blur-sm">
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-transparent opacity-50" />
            <div className="relative space-y-3">
              <h3 className="text-xl xl:text-2xl font-bold gradient-text flex items-center justify-center gap-2">
                <span className="text-2xl">✨</span>
                愿景
                <span className="text-2xl">✨</span>
              </h3>
              <div className="text-base xl:text-lg text-foreground/90 leading-relaxed text-center space-y-1">
                <p>希望能深度参与WaytoAGI的各项活动，尤其是WaytoAGI教育版块的AI火种车项目，</p>
                <p>照亮更多像曾经的我一样的山村孩子前行的路，让她们不再迷茫</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA按钮 */}
        <div className="flex flex-col xl:flex-row gap-4 justify-center items-center pt-8">
          <Button
            size="lg"
            className="gradient-bg hover:opacity-90 transition-opacity text-lg px-8 py-6 rounded-full glow-effect"
            onClick={() => scrollToSection("contact")}
          >
            联系我
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary hover:bg-primary/10 text-lg px-8 py-6 rounded-full text-[#f9f9f9]"
            onClick={() => scrollToSection("projects")}
          >
            查看作品
          </Button>
        </div>

        {/* 滚动提示 */}
        <div className="pt-12 animate-bounce">
          <ArrowDown className="w-8 h-8 mx-auto text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
