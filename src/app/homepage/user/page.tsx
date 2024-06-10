'use client'
import { useSession } from 'next-auth/react'
import React from 'react'
import DirectMessageList from './components/DirectMessageList'
import FriendList from './components/FriendList'


const page = () => {
  const {data: session}  = useSession()
  console.log(session)
  return (
    <div className='flex w-screen'>
      <DirectMessageList/>
      <FriendList/>
    </div>
  )
}

export default page