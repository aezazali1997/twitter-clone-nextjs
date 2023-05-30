'use client';
import {configureStore,combineReducers} from '@reduxjs/toolkit'


export type LoginActionType = 'LoginOpen' | 'LoginClose'
export type RegisterActionType = 'RegisterOpen' | 'RegisterClose'
export type LoginAction ={
    type : LoginActionType}  
export type RegisterAction ={
        type : RegisterActionType}  
export const isLoginOpenReducer = (state:boolean=false,  action:LoginAction)=>{
    switch(action.type){
        case 'LoginOpen':{
            return true;
        }
        case 'LoginClose':{
            return false;
        }
        default: return state;
    }
}
export const isRegisterOpenReducer = (state:boolean=false,  action:RegisterAction)=>{
    switch(action.type){
        case 'RegisterOpen':{
            return true;
        }
        case 'RegisterClose':{
            return false;
        }
        default: return state;
    }
}

export const rootReducer = combineReducers({
    isLoginOpen:isLoginOpenReducer,
    isRegisterOpen:isRegisterOpenReducer

}) 
export const store = configureStore({
    reducer:rootReducer
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch