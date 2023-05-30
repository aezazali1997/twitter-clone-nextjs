import React from 'react'
import { SidebarLogo } from '../SidebarLogo'
import { BsHouseFill, BsBellFill } from 'react-icons/bs'
import { FaUser } from 'react-icons/fa'
import { SidebarItem } from '../SIdebarItem'
import {BiLogOut} from 'react-icons/bi'
import SidebarTweetButton from '../SIdebarTweetButton'
export const Sidebar = () => {
    const items = [
        {
            label: "Home",
            href: '/',
            icon: BsHouseFill
        },
        {
            label: "Notifications",
            href: '/notifications',
            icon: BsBellFill
        },
        {
            label: "Profile",
            href: '/users/1234',
            icon: FaUser
        }
    ]
    return (
        <div className='h-full col-span-1 pr-4 md:pr-6'>
            <div className="flex flex-col items-end">
                <div className="space-y-2 lg:w-[230px]">
                    <SidebarLogo />
                    {
                        items.map((item)=> <SidebarItem key={item.href} href={item.href} icon= {item.icon} label={item.label} />
                    )
                    }
                <SidebarItem onClick={()=>{}} icon={BiLogOut} label='logout' />
                <SidebarTweetButton />
                </div>

            </div>
        </div>
    )
}
