import React from 'react'
import LogoSearch from './LogoSearch'
import FollowerCard from './FollowerCard'
import InfoCard from './InfoCard'

export default function ProfileLeft() {
  return (
    <div className='profile'>
      <LogoSearch />
      <InfoCard />
      <FollowerCard />
    </div>
  )
}
