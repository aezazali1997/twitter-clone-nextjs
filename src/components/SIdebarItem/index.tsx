import React,{FC} from 'react'
import {IconType} from 'react-icons'
type Props = {
    icon:IconType,
    label:string,
    href?:string,
    onClick?:()=>void
}
export const SidebarItem:FC<Props> = ({icon:Icon,label,onClick,href}) => {
  return (
    <div className='flex flex-row items-center'>
        <div className='relative flex items-center justify-center p-4 rounded-full cursor-pointer h-14 w-14 hover:bg-slate-300 hover:bg-opacity-10 lg:hidden'>
          <Icon size={28} color='white' />
        </div>
        <div className='relative items-center hidden gap-4 p-4 rounded-full cursor-pointer lg:flex hover:bg-slate-300 hover:opacity-10 '>
          <Icon size={24} color="white" />
          <p className='hidden text-xl text-white lg:block'>{label}</p>
        </div>
    </div>
  )
}
