'use client'
import { useSession } from "next-auth/react";
import { ReactNode } from "react";
import { redirect } from "next/navigation";
import ServerList from "./components/ServerList";
type LayoutPropsType = {
    children: ReactNode

}
export default function layout({children}: LayoutPropsType) {
    const {data: session, status} = useSession()

    if(status === 'loading') return <div className="text-white text-2xl">Loading ... </div>
    if(!session) redirect('/')

    return (
        <div className="flex">
           <ServerList/>
            {children}
        </div>
    
  )
}
