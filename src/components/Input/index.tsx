import React,{FC} from 'react'
import {AiFillEye,AiFillEyeInvisible} from 'react-icons/ai'
type Props = {
    disabled?:boolean,
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void,
    placeHolder?:string,
    type?:string,
    value?:string,
    eye?:boolean,
    showPassword?:boolean,
    setShowPassword?:(val:boolean)=>void
}
export const Input:FC<Props> = ({disabled,eye,onChange,placeHolder,setShowPassword,showPassword,type,value}) => {
  return (
    <div className='flex justify-between w-full px-2 bg-black border-2 rounded-md outline-none border-neutral-800 focus:border-sky-500 focus:border-2 disabled:bg-neutral-900 disabled:opacity-70'>
    <input disabled={disabled} onChange={onChange} placeholder={placeHolder} type={type} value={value} className='p-4 text-lg text-white transition bg-black outline-none disabled:cursor-not-allowed'/>
    {
      !eye ? <></> :
     <button className='text-right ' onClick={()=>{
      setShowPassword && setShowPassword(!showPassword)
     }}>
      {
        showPassword ? 
        <AiFillEyeInvisible size= {20} color='white' />
     :
     <AiFillEye size= {20} color='white' />

      }
    </button>
    }
    </div>
  )
}
