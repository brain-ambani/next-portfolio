import Image from "next/image";
import profilePic from "../assets/profile.png";

export const Profile = () => {
  return (
    <div>
      <Image
        src={profilePic}
        width={120}
        height={120}
        alt="profile"
        className="rounded-full  "
      />
    </div>
  );
};
