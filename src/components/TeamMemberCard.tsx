import { TeamMemberCardProps } from "../types/teamMemberCard";

const TeamMemberCard = ({
  name,
  role,
  imageSrc,
  altText,
}: TeamMemberCardProps) => {
  return (
    <div className="p-2 bg-white flex flex-col gap-2 items-center rounded-md">
      <img src={imageSrc} alt={altText} className="w-full h-60 rounded-md" />
      <h1 className="self-start text-3xl">{name}</h1>
      <p className="self-start text-xl">{role}</p>
    </div>
  );
};

export default TeamMemberCard;
