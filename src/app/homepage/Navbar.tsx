"use client"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import ServerList from "./user/components/ServerList"
import { Button } from "@/components/ui/button"



const Navbar = () => {
    return (
        <div className=" flex justify-center items-center h-12 w-screen bg-discord-navbar border-b-2 border-black">

            <NavigationMenu >
                <NavigationMenuList className="flex gap-4">
                    <NavigationMenuItem>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuLink  >
                                My friends
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuLink className="focus:bg-blue-600" >
                                All
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/homepage/pending" legacyBehavior passHref>
                            <NavigationMenuLink className="focus:bg-blue-600" >
                                Pending
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuLink className="focus:bg-blue-600" >
                                <Button className="h-1/2 p-2">
                                    Add friend
                                </Button>

                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>


        </div>

    )
}

export default Navbar

