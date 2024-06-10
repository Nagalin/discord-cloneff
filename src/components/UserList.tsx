import React from 'react'
import { Avatar, AvatarImage } from './ui/avatar'

const UserList = () => {
  return (
    <div 
        className='flex items-center gap-4 justify-evenly w-full'
    >
        <Avatar className='h-12 w-12'>
            <AvatarImage src='https://cdn.discordapp.com/avatars/590723435534090251/2e8b9445d501240fea03737ca266051a.png'/>
        </Avatar>
    
      

        <div className='text-white'>John doe</div>

    </div>
  )
}

export default UserList