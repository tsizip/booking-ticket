import React from 'react'
import { useSelector } from 'react-redux'

export default function Loading() {
     let status = useSelector(state=>state.LoadingReducer.loadingStatus)
     // console.log('status', status)
     if(status == true){
          return (
               //  {status ? }
               <div style={{
                    position:'fixed',
                    top:0,
                    bottom:0,
                    left:0,
                    right:0,
                    width:'100%',
                    height:'100%',
                    backgroundColor: '#0000008f',
                    // display:`${status == true ? none : block}`
                    // display:'block'
                    
               }}
               className=' flex justify-center items-center z-20 font-bold text-4xl'
               ><div>Loading...</div></div>
          )
     } else {
          return (
               //  {status ? }
               <div style={{
                    position:'fixed',
                    top:0,
                    bottom:0,
                    left:0,
                    right:0,
                    width:'100%',
                    height:'100%',
                    backgroundColor: '#0000008f',
                    // display:`${status == true ? none : block}`
                    display:'none'
                    
               }}
               className=' flex justify-center items-center z-20 font-bold text-4xl'
               ><div>Loading...</div></div>
          )
     }
     
}
