import { Award, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";

interface CertificationCardProps {
  title: string;
  provider: string;
  credentialUrl?: string;
  delay?: number;
}

const CertificationCard = ({
  title,
  provider,
  credentialUrl,
  delay = 0,
}: CertificationCardProps) => {
  return (
    <div
      className="card-portfolio animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="flex items-start gap-3 mb-4">
        <div className="p-2 bg-primary/10 rounded-lg">
          <Award className="w-5 h-5 text-primary" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{provider}</p>
        </div>
      </div>
      {credentialUrl && (
        <Button
          variant="outline"
          size="sm"
          className="w-full"
          onClick={() => window.open(credentialUrl, "_blank")}
        >
          View Credential
          <ExternalLink className="w-4 h-4 ml-2" />
        </Button>
      )}
    </div>
  );
};

export default CertificationCard;
