import { aiStackData } from "@/data/ai-stack";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 px-4 relative overflow-hidden">
       {/* 背景装饰 */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl xl:text-5xl font-bold mb-4">
            <span className="gradient-text">AI 工具栈</span>
          </h2>
          <div className="w-20 h-1 gradient-bg mx-auto rounded-full" />
          <p className="mt-4 text-muted-foreground text-lg max-w-2xl mx-auto">
            熟练运用各类前沿 AI 工具，赋能创作与开发全流程
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {aiStackData.map((item, index) => {
            const Icon = item.icon;
            return (
              <Card key={index} className="bg-card border-border hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 h-full">
                <CardHeader className="flex flex-row items-center gap-4 pb-2">
                  <div className="p-2.5 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="flex flex-col">
                    <CardTitle className="text-xl">{item.category}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4 text-sm min-h-[40px]">
                    {item.description}
                  </CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {item.tools.map((tool) => (
                      <Badge 
                        key={tool} 
                        variant="secondary" 
                        className="px-2.5 py-1 text-sm font-normal bg-secondary/50 hover:bg-secondary transition-colors"
                      >
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
