import React,{FC} from 'react'
type Props= {
    label:string,
    onClick:()=>void,
    disabled?:boolean,
    outline?:boolean,
    large?:boolean,
    fullWidth?:boolean,
    secondary?:boolean
}
export const Button:FC<Props> = ({label,onClick,disabled,fullWidth,large,outline,secondary}) => {
  return (
    <button
    disabled={disabled}
    onClick={onClick}
    className={`
    disabled:opacity-70
    disabled:cursor-not-allowed
    rounded-full
    font-semibold
    hover:opacity-80
    transition
    border-2
    ${fullWidth ? 'w-full' : 'w-fit'}
    ${secondary ? 'bg-white' : 'bg-blue-500'}
    ${secondary ? 'text-black' : 'text-white'}
    ${secondary ? 'border-black' : 'border-sky-500'}
    ${large ? 'text-xl' : 'text-sm'}
    ${large ? 'px-5' : 'px-4'}
    ${large ? 'py-3' : 'py-2'}
    ${outline ? 'bg-transparent' : ''}
    ${outline ? 'border-white' : ''}
    ${outline ? 'text-white' : ''}


    `}
    >{label}</button>
  )
}
