import React from "react";
import userAvatar from "../../img/profile-thumbnail.png";

const UserCard = () => {
  return (
    <main className="w-[21.21rem] flex flex-col gap-6 rounded-lg bg-white p-6">
      <section className="flex gap-4 items-start self-stretch">
        <picture className="w-12 h-12">
          <source type="image/avif" srcSet="../../img/profile-thumbnail.avif" />
          <img
            src={userAvatar}
            role="img"
            aria-label="user"
            className="w-12 h-12 object-cover"
          />
        </picture>
        <div className="flex flex-col">
          <span className="font-semibold text-lg text-black leading-7">
            Sarah Dole
          </span>
          <span className="text-sm font-normal leading-5">@sarahdole</span>
        </div>
      </section>
      <article>
        <p className="leading-6">
          I've been searching for high-quality abstract images for my design
          projects, and I'm thrilled to have found this platform. The variety
          and depth of creativity are astounding!
        </p>
      </article>
    </main>
  );
};

export default UserCard;
