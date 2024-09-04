import Image from "next/image";
import profilePic from "../assets/profile.png";

export const Profile = () => {
  return (
    <div>
      <Image
        src={profilePic}
        width={35}
        height={35}
        alt="profile"
        className="rounded-full  "
      />
    </div>
  );
};
