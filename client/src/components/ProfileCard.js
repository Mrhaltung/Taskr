import React from "react";
import Cover from "../img/cover.jpg";
import Profile from "../img/defaultProfile.png";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function ProfileCard({profile}) {
  const { user } = useSelector((state) => state.authReducer.authData);
  const posts = useSelector((state)=>state.postReducer.posts)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="profileCard">
      <div className="profileImages">
        {user.coverPicture ? (
          <img src={serverPublic + user.coverPicture} alt="Cover" />
        ) : (
          <img src={Cover} alt="Cover" />
        )}
        {user.profilePicture ? (
          <img src={serverPublic + user.profilePicture} alt="Cover" />
        ) : (
          <img src={Profile} alt="Cover" />
        )}
      </div>
      <div className="profileName">
        <span>{user.username}</span>
        <span>{user.worksAt ? user.worksAt : "Write about yourself"}</span>
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Followings</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Follower</span>
          </div>

          {profile && (
            <>
              <div className="vl" />
              <div className="follow">
                <span>
                  {posts.filter((post) => post.userId === user._id).length}
                </span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {profile ? (
        " "
      ) : (
        <span>
          <Link
            to={`/user/${user._id}`}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            My Profile
          </Link>
        </span>
      )}
    </div>
  );
}
