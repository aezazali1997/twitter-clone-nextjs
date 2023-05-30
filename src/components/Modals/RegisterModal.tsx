import React, { useCallback, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {AppDispatch,RootState} from '../../GlobalState'
import {Input} from '../Input'
import { Modal } from '../Modal'


export const RegisterModal = () => {

    const isRegisterOpen = useSelector((state:RootState)=>state.isRegisterOpen)
    const isLoginOpen = useSelector((state:RootState)=>state.isLoginOpen);
    const dispatch = useDispatch<AppDispatch>();
    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('');
    const [name,setName]=useState(''); 
    const [username,setUserName]=useState('');

    const [isLoading,setIsLoading]= useState(false);
  
    const onSubmit = useCallback(()=>{
        try {
            setIsLoading(true);
            //ADD TODO
             dispatch({type:'RegisterClose'})
        } catch (error) {
            console.log(error);
        }
        finally{
            setIsLoading(false);
        }
    },[isRegisterOpen])
  const onToggle = useCallback(()=>{
    if(isLoading) return
    dispatch({
        type:"LoginOpen"
    })
    dispatch({
        type:"RegisterClose"
    })
  },[isRegisterOpen,isLoginOpen,isLoading])
//   bodyCOntent
const bodyContent  = (
    <div className='flex flex-col gap-4'>
        <Input placeHolder='Email' onChange={(e)=>{
            setEmail(e.currentTarget.value)
        }}
        value={email}
        disabled={isLoading}
        />
        <Input placeHolder='Name'  onChange={(e)=>{
            setName(e.currentTarget.value)
        }}
        value={name}
        disabled={isLoading}
        />
        <Input placeHolder='Username' onChange={(e)=>{
            setUserName(e.currentTarget.value)
        }}
        value={username}
        disabled={isLoading}
        />
        <Input type='password' placeHolder='Password' onChange={(e)=>setPassword(e.currentTarget.value)} disabled={isLoading} value={password} />
    </div>
)
// footer content
const footerContent =( 
    <div className='mt-4 text-center text-neutral-400'>
        <p>Already have an account ?
            <span className='text-white cursor-pointer hover:underline' onClick={onToggle}> Sign in</span>
        </p>
    </div>
    )

    return (
    <Modal disabled={isLoading} isOpen={isRegisterOpen} title='Register' actionLabel='Sign Up' onClose={()=>dispatch({type:"RegisterClose"})} onSubmit={onSubmit} body={bodyContent} footer={footerContent} />
  )
}
