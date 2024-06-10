import React from 'react'
import UserList from '@/components/UserList'
import UserStatus from '@/components/ui/UserStatus'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

const FriendList = () => {
    return (
        <div
         className='flex items-center w-3/5 flex-col bg-discord-friend-list'
        >
            <Searchbar/>

            <div className='flex  flex-col mt-3 gap-3 ms-2 w-3/4'>

                <div className='self-start relative'>
                    <UserList />
                    <div className='absolute pl-8 top-8 '>

                        <UserStatus />
                    </div>
                </div>

                <div className='self-start relative'>
                    <UserList />
                    <div className='absolute pl-8 top-8 '>

                        <UserStatus />
                    </div>
                </div>
                <div className='self-start relative'>
                    <UserList />
                    <div className='absolute pl-8 top-8 '>

                        <UserStatus />
                    </div>
                </div>
                <div className='self-start relative'>
                    <UserList />
                    <div className='absolute pl-8 top-8 '>

                        <UserStatus />
                    </div>
                </div>
            </div>
        </div>
    )
}

const Searchbar = () => {
  return (
    <div className='flex mt-3 justify-center items-center gap-5 w-full'>
        <Input 
            className=' w-3/5' 
            placeholder='search for your friend'
        />
        <Button> 
            Add friend
        </Button>
    </div>
  )
}

export default FriendList