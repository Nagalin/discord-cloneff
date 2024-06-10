import UserList from '@/components/UserList'
import UserStatus from '@/components/ui/UserStatus'
import React from 'react'

const DirectMessageList = () => {
  return (
    <div
      className='flex flex-col items-center  bg-discord-direct-message-list h-screen w-60'
    >
      <div
        className='flex text-2xl text-white mt-3 mb-3'
      >
        Direct message
      </div>

      <div className='flex flex-col gap-3'>

      <div className='relative flex flex-col gap-2 w-full self-center'>
          <UserList />
          <div className='absolute right-24 left-8  top-8 '>
            <UserStatus />
          </div>
        </div>

        <div className='relative flex flex-col gap-2 w-full self-center'>
          <UserList />
          <div className='absolute right-24 left-8  top-8 '>
            <UserStatus />
          </div>
        </div>

        <div className='relative flex flex-col gap-2 w-full self-center'>
          <UserList />
          <div className='absolute right-24 left-8  top-8 '>
            <UserStatus />
          </div>
        </div>

        <div className='relative flex flex-col gap-2 w-full self-center'>
          <UserList />
          <div className='absolute right-24 left-8  top-8 '>
            <UserStatus />
          </div>
        </div>

        </div>

      </div>
  )
}

export default DirectMessageList