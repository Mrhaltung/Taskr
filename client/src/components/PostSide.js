import React from 'react'
import PostShared from './PostShared'
import Posts from './Posts'

export default function PostSide() {
  return (
    <div className='postSide'>
      <PostShared />
      <Posts />
    </div>
  )
}
