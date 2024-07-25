import React from "react";
import UserCardHeader from "./UserCardHeader";

const UserCardDescription = () => {
  return (
    <article>
      <p className="leading-6">
        I've been searching for high-quality abstract images for my design
        projects, and I'm thrilled to have found this platform. The variety and
        depth of creativity are astounding!
      </p>
    </article>
  );
};

const UserCard = () => {
  return (
    <main className="w-[21.21rem] flex flex-col gap-6 rounded-lg bg-white p-6">
      <UserCardHeader />
      <UserCardDescription />
    </main>
  );
};

export default UserCard;
