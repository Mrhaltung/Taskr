import React from "react";
import LogoSearch from "./LogoSearch";
import ProfileCard from "./ProfileCard";
import FollowerCard from "./FollowerCard";

export default function Profile() {
  return (
    <div className="profile">
      <LogoSearch />
      <ProfileCard profile={false}  />
      <FollowerCard />
    </div>
  );
}
