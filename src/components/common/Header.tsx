import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems = [
    { name: "关于我", id: "about", type: "anchor" },
    { name: "AI 工具栈", id: "skills", type: "anchor" },
    { name: "项目作品", id: "projects", type: "anchor" },
    { name: "AI 导航", id: "/tools", type: "link" }, // 新增
    { name: "联系我", id: "contact", type: "anchor" },
  ];

  const handleNavClick = (item: { name: string, id: string, type: string }) => {
    if (item.type === "link") {
      window.location.href = item.id;
    } else {
      // 如果当前不是首页，先跳转到首页
      if (window.location.pathname !== "/") {
        window.location.href = `/#${item.id}`;
      } else {
        scrollToSection(item.id);
      }
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-3" : "bg-transparent py-5"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-full gradient-bg p-0.5 group-hover:animate-pulse-glow">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center font-bold text-primary">
                  杨
                </div>
              </div>
              <span className="text-xl font-bold gradient-text">AI小白杨</span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className="text-foreground/80 hover:text-primary transition-colors font-medium cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>

          {/* 移动端菜单按钮可以在此处添加 */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
