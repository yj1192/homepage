import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Eye, Shield, CheckCircle2 } from "lucide-react";
import xiaohongshuQr from "@/assets/images/xiaohongshu-qr.jpg";

const ProjectsSection = () => {
  const projects = [
    {
      title: "工地安防监控系统",
      description: "基于计算机视觉的智能安防监控解决方案，实时检测工地安全隐患，提供预警和报警功能",
      icon: Shield,
      tags: ["Python", "PyTorch", "实时检测"],
      color: "primary",
    },
    {
      title: "工程质量检测应用",
      description: "利用深度学习技术对工程质量进行自动化检测和评估，提高检测效率和准确性",
      icon: Eye,
      tags: ["计算机视觉", "质量检测", "AI"],
      color: "secondary",
    },
    {
      title: "Coze智能体项目",
      description: "在WaytoAGI训练营学习并开发的Coze工作流智能体，探索AIGC在实际场景中的应用",
      icon: CheckCircle2,
      tags: ["Coze", "工作流", "智能体"],
      color: "accent",
      links: [
        { label: "工作报编写智能体", url: "https://www.coze.cn/store/agent/7570254104052695103?from=store_search_suggestion&bid=6j1qhq6vo001e" },
        { label: "我的第二大脑", url: "https://www.coze.cn/store/agent/7573224788114735144?from=store_search_suggestion&bid=6j1qlsns44g12" },
        { label: "广州旅游小助手", url: "https://www.coze.cn/store/agent/7575764336371826723?from=store_search_suggestion&bid=6j1qlvgug1g06" },
      ],
    },
    {
      title: "AI视频：AI漫剧、AI真人剧、AI短片",
      description: "面向短视频场景的多类型 AI 影像创作与实践展示",
      icon: CheckCircle2,
      tags: ["AI视频", "漫剧", "真人剧", "短片"],
      color: "primary",
      links: [
        { label: "详见小红书主页视频", url: "https://www.xiaohongshu.com/user/profile/68f4acb000000000300306e0" },
      ],
    },
    {
      title: "Vibe Coding",
      description: "Vibe Coding 帮助解决工作、学习、生活中的痛点与问题",
      icon: CheckCircle2,
      tags: ["Vibe", "Coding", "效率"],
      color: "secondary",
      links: [
        { label: "工作报编辑助手", url: "https://db1ff1d95dd448e19967061b5df3273f.prod.enter.pro/" },
      ],
    },
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl xl:text-5xl font-bold mb-4">
            <span className="gradient-text">项目作品</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card key={index} className="bg-card border-border card-glow group">
                <CardHeader>
                  <div className={`w-16 h-16 rounded-lg ${project.color === 'primary' ? 'gradient-bg glow-effect' : project.color === 'secondary' ? 'gradient-secondary-bg glow-cyan' : 'gradient-accent-bg glow-pink'} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className="w-8 h-8 text-background" />
                  </div>
                  <CardTitle className="text-2xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-sm rounded-full bg-muted text-foreground border border-border"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {Array.isArray((project as any).links) && (project as any).links.length > 0 ? (
                    <div className="grid grid-cols-1 gap-2">
                      {(project as any).links.map((link: { label: string; url: string }, i: number) => (
                        <a key={i} href={link.url} target="_blank" rel="noreferrer">
                          <Button
                            variant="outline"
                            className="w-full border-primary text-white hover:bg-primary/10 group-hover:border-primary"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            {link.label}
                          </Button>
                        </a>
                      ))}
                    </div>
                  ) : (
                    <Button
                      variant="outline"
                      className="w-full border-primary text-white hover:bg-primary/10 group-hover:border-primary"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      查看详情
                    </Button>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
