import { Code2 } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string[];
  delay?: number;
}

const ProjectCard = ({ title, description, delay = 0 }: ProjectCardProps) => {
  return (
    <div
      className="card-portfolio animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          <Code2 className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-3 text-foreground">{title}</h3>
          <ul className="space-y-2">
            {description.map((point, index) => (
              <li key={index} className="text-muted-foreground text-sm flex items-start">
                <span className="text-primary mr-2">•</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
