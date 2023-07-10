import React from 'react'
import UserPostShared from './UserPostShared'
import UserPosts from './UserPosts'

export default function UserPostSide() {
  return (
    <div className='postSide'>
      <UserPostShared />
      <UserPosts />
    </div>
  )
}
