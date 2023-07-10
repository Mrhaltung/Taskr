import React from 'react';
import './_pages.css';
import Profile from '../components/Profile';
import PostSide from '../components/PostSide';
import RightSide from '../components/RightSide';

export default function Home() {
  return (
    <div className='home'>
      <Profile />
      <PostSide />
      <RightSide />
    </div>
  )
}
