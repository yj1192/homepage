import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import ToolsSection from "@/components/tools/ToolsSection";

const ToolsPage = () => {
  return (
    <div className="min-h-screen bg-background relative">
       {/* 背景装饰效果 - 复用 Index 页面的样式 */}
       <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-[120px] animate-pulse-glow" />
      </div>

      <Header />
      
      <main className="relative z-10 pt-24 px-4 min-h-[calc(100vh-80px)]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">AI 工具导航</h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              精选全球热门 AI 工具，助你提升工作与创作效率
            </p>
          </div>
          
          <ToolsSection />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ToolsPage;
