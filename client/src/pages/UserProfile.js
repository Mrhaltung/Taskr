import React from "react";
import ProfileLeft from "../components/ProfileLeft";
import ProfileCard from "../components/ProfileCard";
import RightSide from "../components/RightSide";
import "./_pages.css";
import UserPostSide from "../components/UserPostSide";

export default function UserProfile() {
  return (
    <div className="userProfile">
      <ProfileLeft />
      <div className="Profile-center">
        <ProfileCard profile={true} />
        <UserPostSide />
      </div>
      <RightSide />
    </div>
  );
}
