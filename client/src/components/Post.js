import React, { useState } from "react";
import Comment from "../img/comment.png";
import Share from "../img/share.png";
import Heart from "../img/like.png";
import NotLike from "../img/notlike.png";
import { useSelector } from "react-redux";
import { likePost } from "../api/AuthRequest";

export default function Post({ data, id }) {
  const { user } = useSelector((state) => state.authReducer.authData);
  const [liked, setLiked] = useState(data.likes.includes(user._id));
  const [likes, setLikes] = useState(data.likes.length);

  const handleLike = () => {
    likePost(data._id, user._id);
    setLiked((prev) => !prev);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };

  return (
    <div className="post" key={id}>
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />

      <div className="postReact">
        <img src={liked ? Heart : NotLike} alt="" onClick={()=>handleLike()} />
        <img src={Comment} alt="" />
        <img src={Share} alt="" />
      </div>

      <span style={{ color: "var(--gray)", fontSize: "12px" }}>
        {likes} likes
      </span>
      <div className="detail">
        <span>{data.desc}</span>
      </div>
    </div>
  );
}
