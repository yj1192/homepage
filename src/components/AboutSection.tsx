import { Card, CardContent } from "@/components/ui/card";
import { Award, Briefcase } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl xl:text-5xl font-bold mb-4">
            <span className="gradient-text">关于我</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
          {/* 项目经验 */}
          <Card className="bg-card border-border card-glow">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg gradient-secondary-bg glow-cyan">
                  <Briefcase className="w-6 h-6 text-background" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-secondary">项目经验</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    开发并上线多个工地安防监控、工程质量检测类计算机视觉应用服务，具有丰富的实战经验和项目落地能力
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 荣誉认证 */}
          <Card className="bg-card border-border card-glow">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg gradient-accent-bg glow-pink">
                  <Award className="w-6 h-6 text-background" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4 text-accent">荣誉认证</h3>
                  <ul className="space-y-2 text-foreground/80">
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      深度学习架构师中级证书
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-accent" />
                      深度学习开发工程师中级证书
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
