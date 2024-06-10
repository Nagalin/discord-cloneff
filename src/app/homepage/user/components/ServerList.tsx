import React from 'react'
import { Avatar, AvatarImage } from '@/components/ui/avatar'

const ServerList = () => {
    return (
        <div 
            className='flex flex-col gap-1 w-16 mt-2 h-screen '
        >
            <Avatar className="cursor-pointer h-14 w-14">
                <AvatarImage src='https://cdn.discordapp.com/avatars/590723435534090251/2e8b9445d501240fea03737ca266051a.png' />


            </Avatar>

            <Avatar className="cursor-pointer h-14 w-14">
                <AvatarImage src='https://cdn.discordapp.com/avatars/590723435534090251/2e8b9445d501240fea03737ca266051a.png' />


            </Avatar>

            <Avatar className="cursor-pointer h-14 w-14">
                <AvatarImage src='https://cdn.discordapp.com/avatars/590723435534090251/2e8b9445d501240fea03737ca266051a.png' />


            </Avatar>

            <Avatar className="cursor-pointer  h-14 w-14">
                <AvatarImage src='https://cdn.discordapp.com/avatars/590723435534090251/2e8b9445d501240fea03737ca266051a.png' />


            </Avatar>

            <Avatar className="cursor-pointer h-14 w-14">
                <AvatarImage src='https://cdn.discordapp.com/avatars/590723435534090251/2e8b9445d501240fea03737ca266051a.png' />


            </Avatar>
        </div >

    )
}

export default ServerList