import { AiTool } from "@/data/ai-tools";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ToolCardProps {
  tool: AiTool;
}

const ToolCard = ({ tool }: ToolCardProps) => {
  return (
    <Card className="h-full hover:shadow-lg transition-shadow bg-card border-border group">
      <CardHeader className="flex flex-row items-center gap-4 pb-2">
        <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex items-center justify-center border border-border">
          <img 
            src={tool.icon} 
            alt={tool.name} 
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.src = "https://placehold.co/48x48?text=AI";
            }}
          />
        </div>
        <div className="flex-1 min-w-0">
          <CardTitle className="text-lg font-bold truncate flex items-center gap-2">
            {tool.name}
            <a 
              href={tool.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </CardTitle>
          <Badge variant="secondary" className="mt-1 text-xs">
            {tool.category}
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground line-clamp-2 mb-4 h-10">
          {tool.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {tool.tags.map((tag) => (
            <span 
              key={tag} 
              className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary"
            >
              #{tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ToolCard;
