
import { useRouter } from 'next/router';
import React, { useCallback,FC } from 'react'
import { BiArrowBack } from 'react-icons/bi';
type Props = {
    label:string,
    showBackArrow?: boolean
}
const Header:FC<Props> = ({label,showBackArrow}) => {
    const router = useRouter();
    const handleBack = useCallback(()=>{
        router.back()
    },[router])
    return (
    <div className='border-b-[1px] border-neutral-800 p-5'>
        <div className="flex items-center gap-2">
            {
                showBackArrow && (<BiArrowBack color='white' size={28} onClick={handleBack} className='transition cursor-pointer hover:opacity-70' />)
            }
            <h1 className='text-xl font-semibold text-white'>{label}</h1>
        </div>
    </div>
  )
}

export default Header;