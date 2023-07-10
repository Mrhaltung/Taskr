import React, { useEffect, useState } from "react";
import { getUser } from "../api/AuthRequest";
import Profile from "../img/defaultProfile.png";
import "../pages/_pages.css";

export default function Conversation({ data, currentUserId, ind }) {
  const [userData, setUserData] = useState([]);
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;
  const userId = data?.members?.find((id) => id !== currentUserId);

  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await getUser(userId);
        setUserData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getUserData();
  }, [userId]);

  return (
    <>
      <div className="follower conversation" key={ind}>
        <div>
          {userData.profilePicture ? (
            <img
              src={serverPublic + userData.profilePicture}
              alt="Cover"
              className="followerImage"
              style={{ width: "50px", height: "50px" }}
            />
          ) : (
            <img
              src={Profile}
              alt="Cover"
              className="followerImage"
              style={{ width: "50px", height: "50px" }}
            />
          )}
          <div className="name" style={{ fontSize: "0.8rem" }}>
            <span>
              {userData.firstname}
              {userData.lastname}
            </span>
            <div style={{ display: "flex", gap: "0.2rem" }}>
              <div className="online-dot"></div>
              <span>Online</span>
            </div>
          </div>
        </div>
      </div>
      <hr style={{ width: "85%", border: "0.1px solid #ececec" }} />
    </>
  );
}
