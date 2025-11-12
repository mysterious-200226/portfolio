interface SkillBadgeProps {
  skill: string;
  delay?: number;
}

const SkillBadge = ({ skill, delay = 0 }: SkillBadgeProps) => {
  return (
    <span
      className="badge-skill animate-fade-in-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      {skill}
    </span>
  );
};

export default SkillBadge;
