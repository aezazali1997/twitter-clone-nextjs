import { NextApiRequest } from "next";
import {getSession} from 'next-auth/react'
import prisma from './prismadb';


const serverAuth = async (req:NextApiRequest)=>{
    const session = await getSession({req})

    if(!session?.user?.email){
          throw new Error('Not Signed in');
    }
    const userAuth = await prisma.user.findUnique({
        where:{
            email:session.user.email
        }
    })
    
    if(!userAuth){
        throw new Error('Not Signed in')
    }
    return {
        userAuth
    }


}
export default serverAuth;