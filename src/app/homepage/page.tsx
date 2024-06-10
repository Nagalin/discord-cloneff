'use client'
import { useSession } from 'next-auth/react'
import React from 'react'
import DirectMessageList from './user/components/DirectMessageList'
import FriendList from './user/components/FriendList'


const page = () => {
  const {data: session}  = useSession()
  console.log(session)
  return (
    <div className='flex w-3/4'>
      <DirectMessageList/>
      <FriendList/>
    </div>
  )
}

export default page