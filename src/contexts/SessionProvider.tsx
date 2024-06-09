import { SessionProvider } from 'next-auth/react'
import React, { ReactNode } from 'react'

type AuthProviderPropsType = {
    children: ReactNode
}

const AuthProvider = ({children}: AuthProviderPropsType) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default AuthProvider