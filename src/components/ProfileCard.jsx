import React from "react";

const ProfileCard = () => {
  return (
    <div className="flex w-full h-24 p-4 justify-between items-center rounded-lg shadow-lg mt-6">
      <div className="flex gap-x-4">
        <img src="./avatar.jpg" alt="profile" className="rounded-full w-16" />
        <div className="flex flex-col justify-center">
          <h2 className="font-semibold">Rahmat Hidayat</h2>
          <h3 className="font-extralight text-gray-300">example@gmail.com</h3>
        </div>
      </div>
      <h1 className="text-red-600">Logout</h1>
    </div>
  );
};

export default ProfileCard;
