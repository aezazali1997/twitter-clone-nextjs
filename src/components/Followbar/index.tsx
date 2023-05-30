import React from 'react'
import {AppDispatch,RootState} from '../../GlobalState'
import {useSelector,useDispatch} from 'react-redux'


export const FollowBar = () => {

  return (
    <div className='hidden px-6 py-6 lg:block'><div className='p-4 bg-neutral-800 rounded-xl'><h2 className='text-xl font-semibold text-white'>who to follow</h2></div>
    <div className='flex flex-col gap-6 mt-6'></div>
    </div>
  )
}
