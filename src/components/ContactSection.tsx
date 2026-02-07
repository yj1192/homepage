import { Mail, MessageCircle, BookOpen, Send, Video, PlayCircle, Copy } from "lucide-react";
import wechatQR from "@/assets/images/wechat-qr.jpg";
import xiaohongshuQR from "@/assets/images/xiaohongshu-qr.jpg";
import officialQR from "@/assets/images/official-qr.jpg";
import douyinQR from "@/assets/images/douyin-qr.jpg";
import videohaoQR from "@/assets/images/videohao-qr.jpg";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast({
        title: "复制成功",
        description: `${label}已复制到剪贴板：${text}`,
      });
    });
  };

  const contacts = [
    {
      icon: MessageCircle,
      title: "微信",
      qrCode: wechatQR,
      description: "扫码添加微信",
      info: "yj-1192",
      color: "text-secondary",
    },
    {
      icon: PlayCircle,
      title: "视频号",
      qrCode: videohaoQR,
      description: "扫码关注视频号",
      info: "AI小白杨1181",
      color: "text-primary",
    },
    {
      icon: Send,
      title: "公众号",
      qrCode: officialQR,
      description: "扫码关注公众号",
      info: "白杨学AI",
      color: "text-primary",
    },
    {
      icon: BookOpen,
      title: "小红书",
      qrCode: xiaohongshuQR,
      description: "扫码关注小红书",
      info: "49784497777",
      color: "text-accent",
    },
    {
      icon: Video,
      title: "抖音",
      qrCode: douyinQR,
      description: "扫码关注抖音",
      info: "84452169229",
      color: "text-secondary",
    },
  ];

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl xl:text-5xl font-bold mb-4">
            <span className="gradient-text">联系方式</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            扫描二维码，与我取得联系
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 mb-12">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 card-glow"
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className={`p-3 rounded-full bg-primary/10 ${contact.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold">{contact.title}</h3>
                  
                  {/* 二维码图片 */}
                  <div className="w-48 h-48 rounded-xl overflow-hidden border-2 border-primary/20 group-hover:border-primary/50 transition-colors">
                    <img 
                      src={contact.qrCode} 
                      alt={`${contact.title}二维码`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="text-center space-y-1">
                    <p className="text-sm text-muted-foreground">
                      {contact.description}
                    </p>
                    <p className="text-xs text-foreground/60 font-mono">
                      {contact.info}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* 邮箱联系方式 */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-4 px-8 py-5 rounded-2xl bg-card border border-border card-glow group hover:border-primary/50 transition-colors">
            <div className="p-3 rounded-full bg-primary/10 text-primary">
              <Mail className="w-6 h-6" />
            </div>
            <div className="flex flex-col items-start">
              <span className="text-sm text-muted-foreground font-medium">商务合作邮箱</span>
              <div className="flex items-center gap-2">
                <a 
                  href="mailto:3380548527@qq.com" 
                  className="text-xl font-bold hover:text-primary transition-colors"
                >
                  3380548527@qq.com
                </a>
                <button
                  onClick={() => copyToClipboard("3380548527@qq.com", "邮箱")}
                  className="p-1.5 rounded-md hover:bg-muted text-muted-foreground hover:text-foreground transition-colors ml-1"
                  title="复制邮箱"
                >
                  <Copy className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-muted-foreground pt-8 border-t border-border">
          <p>© 2026 AI小白杨. All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
