import React, { useCallback, useState } from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {AppDispatch,RootState} from '../../GlobalState'
import {Input} from '../Input'
import { Modal } from '../Modal'


export const LoginModal = () => {

    const isLoginOpen = useSelector((state:RootState)=>state.isLoginOpen)
    const isRegisterOpen= useSelector((state:RootState)=>state.isRegisterOpen)
    const dispatch = useDispatch<AppDispatch>();
    const [email,setEmail] = useState('');
    const [password,setPassword]=useState('');
    const [showPassword,setShowPassword]=useState(false);
    const [isLoading,setIsLoading]= useState(false);
  
    const onSubmit = useCallback(()=>{
        try {
            setIsLoading(true);
            //ADD TODO
             dispatch({type:'LoginClose'})
        } catch (error) {
            console.log(error);
        }
        finally{
            setIsLoading(false);
        }
    },[isLoginOpen])
    const setShowPasswordState = (showPasswordState:boolean)=>{
        setShowPassword(showPasswordState);
    }
    const onToggle = useCallback(()=>{
        if(isLoading) return
        dispatch({
            type:"LoginClose"
        })
        dispatch({
            type:"RegisterOpen"
        })
      },[isRegisterOpen,isLoginOpen,isLoading])
//    footer content
      const footerContent =( 
          <div className='mt-4 text-center text-neutral-400'>
              <p>First time using twitter ?
                  <span className='text-white cursor-pointer hover:underline' onClick={onToggle}> Create an account</span>
              </p>
          </div>
          )
//   bodyCOntent
const bodyContent  = (
    <div className='flex flex-col gap-4'>
        <Input placeHolder='Email' onChange={(e)=>{
            setEmail(e.currentTarget.value)
        }}
        value={email}
        disabled={isLoading}
        />
        <Input type={showPassword ? 'text' : 'password'} placeHolder='Password' onChange={(e)=>setPassword(e.currentTarget.value)} disabled={isLoading} value={password} eye showPassword={showPassword} setShowPassword={setShowPasswordState} />
    </div>
)
    return (
    <Modal disabled={isLoading} isOpen={isLoginOpen} title='Login' actionLabel='Sign In' onClose={()=>dispatch({type:"LoginClose"})} onSubmit={onSubmit} body={bodyContent} footer={footerContent} />
  )
}
