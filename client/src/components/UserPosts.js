import React, { useEffect } from "react";
import Post from "./Post";
import { useDispatch, useSelector } from "react-redux";
import { getTimelinePosts } from "../actions/AuthAction.js";
import { useParams } from "react-router-dom";

export default function UserPosts() {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts } = useSelector((state) => state.postReducer);
  const params = useParams();

  useEffect(() => {
    dispatch(getTimelinePosts(user._id));
  }, [dispatch, user._id]);
  if (!posts) 
  return "No Posts";
  if (params.id) posts = posts.filter((post) => post.userId === params.id);
  return (
    <div className="posts">
      {posts.map((post, id) => {
        return <Post data={post} key={id} />;
      })}
    </div>
  );
}
