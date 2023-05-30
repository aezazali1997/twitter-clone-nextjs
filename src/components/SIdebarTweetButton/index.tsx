import React, { useCallback } from 'react'
import {useRouter} from 'next/router'
import { FaFeather } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/GlobalState';

export default function SidebarTweetButton() {
  const isLoginOpen = useSelector((state:RootState)=>state.isLoginOpen)
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const onTweet = useCallback(()=>{
    dispatch({
      type:'LoginOpen'
    })
  },[isLoginOpen])
    return (
    <div onClick={onTweet}>
        <div className='flex items-center justify-center p-4 mt-6 transition rounded-full cursor-pointer lg:hidden h-14 w-14 bg-sky-500 hover:bg-opacity-80'>
            <FaFeather size={24} color='white' /> 
        </div>
        <div className='hidden px-4 py-2 mt-6 transition rounded-full cursor-pointer lg:block bg-sky-500 hover:bg-opacity-90'>
            <p className='text-white text-[20px] text-center lg:block hidden'>Tweet</p>
        </div>
    </div>
  )
}