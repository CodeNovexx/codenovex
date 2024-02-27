import { TeamMemberCardProps } from "../types/teamMemberCard";
import Circle from "./Circle";

const TeamMemberCard = ({
  name,
  role,
  imageSrc,
  altText,
  position,
}: TeamMemberCardProps) => {
  return (
    <div className="p-2 bg-white flex flex-col gap-2 items-center rounded-md">
      <img src={imageSrc} alt={altText} className="w-full h-60 rounded-md" />
      <h1 className="self-start text-3xl">{name}</h1>
      <div className="flex items-center gap-2 w-full justify-start text-xl">
        <p>{role}</p>
        <Circle />
        <p>{position}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
