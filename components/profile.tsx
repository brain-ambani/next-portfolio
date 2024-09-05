import Image from "next/image";

export const Profile = () => {
  return (
    <div>
      <Image
        src="/assets/profile.png"
        width={35}
        height={35}
        alt="profile"
        className="rounded-full  "
      />
    </div>
  );
};
