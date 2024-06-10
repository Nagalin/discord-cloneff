"use client"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"



const Navbar = () => {
    return (
        <div className=" flex justify-center items-center h-10 bg-discord-navbar border-b-2 border-black">

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
                            Add friend
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
        </div>

    )
}

export default Navbar

