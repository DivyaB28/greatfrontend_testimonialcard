import React from "react";
import userAvatar from "../../img/profile-thumbnail.png";

const UserAvatarInfo = () => {
  return (
    <picture className="w-12 h-12">
      <source type="image/avif" srcSet="../../img/profile-thumbnail.avif" />
      <img
        src={userAvatar}
        role="img"
        aria-label="user"
        className="w-12 h-12 object-cover"
      />
    </picture>
  );
};

const RenderUserName = ({ name = "", userId = "" }) => {
  return (
    <div className="flex flex-col">
      <span className="font-semibold text-lg text-black leading-7">{name}</span>
      <span className="text-sm font-normal leading-5">{userId}</span>
    </div>
  );
};

const UserCardHeader = () => {
  return (
    <section className="flex gap-4 items-start self-stretch">
      <UserAvatarInfo />
      <RenderUserName name="Sarah Dole" userId="@sarahdole" />
    </section>
  );
};

export default UserCardHeader;
