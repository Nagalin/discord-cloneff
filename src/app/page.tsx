import DiscordSIgnInButton from '@/components/DiscordSIgnInButton'
import GoogleSignInButton from '@/components/GoogleSignInButton'
import React from 'react'

const page = () => {
  return (
    <div 
      className="flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-100"
    >
      <GoogleSignInButton />
      <DiscordSIgnInButton />
      
    </div>
  )
}

export default page