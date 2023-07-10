import React, { useEffect, useState } from "react";
import Post from "./Post";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getAllPost } from "../api/AuthRequest";

export default function Posts() {
  let { posts } = useSelector((state) => state.postReducer);
  const params = useParams();
  const [allPosts, setAllPosts]=useState([]);

  useEffect(() => {
    const fetchPosts =async() => {
      const { data } = await getAllPost();
      setAllPosts(data);
    }
    fetchPosts();
  }, []);
  if (!posts) return "No Posts";
  if (params.id) posts = posts.filter((post) => post.userId === params.id);
  return (
    <div className="posts">
      {allPosts.map((post, id) => {
        return <Post data={post} key={id} />;
      })}
    </div>
  );
}