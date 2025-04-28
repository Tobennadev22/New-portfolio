// import { cn } from "@/lib/utils";

const SkillBadge = ({ name, className, animationDelay }) => {
  return (
    <div
      className="skillbadge"
      style={animationDelay ? { animationDelay } : undefined}
    >
      {name}
    </div>
  );
};

export default SkillBadge;
