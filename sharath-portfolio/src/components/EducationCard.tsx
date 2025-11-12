import { GraduationCap } from "lucide-react";

interface EducationCardProps {
  degree: string;
  institution: string;
  year: string;
  score: string;
  delay?: number;
}

const EducationCard = ({
  degree,
  institution,
  year,
  score,
  delay = 0,
}: EducationCardProps) => {
  return (
    <div
      className="card-portfolio animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-primary/10 rounded-lg">
          <GraduationCap className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground">{degree}</h3>
          <p className="text-muted-foreground">{institution}</p>
          <div className="flex justify-between items-center mt-2">
            <span className="text-sm text-muted-foreground">{year}</span>
            <span className="text-sm font-medium text-primary">{score}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
