import React, { useEffect, useState } from 'react'
import _, { isNumber, result } from 'lodash'
export default function BaiTapResponsive() {
     let [size, setSize] = useState({
          width: window.innerWidth,
          height: window.innerHeight
     })


     useEffect(() => {
          window.onresize = () => {
               setSize({
                    width: Math.round(window.innerWidth),
                    height: Math.round(window.innerHeight)
               })
          }
     }, [])

     // let arr = ['1','2','3','4']
     // let result = _.fill(arr, 'tri')
     // console.log(result)

     // let arr = [1,2,[4,5,[7]],3]

     // let result = arr.flat(Infinity)

     // console.log(result)
     


     return (
          <div className='container p-0 mx-auto'>
               <div className='flex flex-col-reverse sm:flex-row  justify-between mt-16 '>
                    <div className='flex flex-col justify-end text container-fluid '>
                         <div className='up'>
                              <p>Entire house</p>
                              <p>Beach House in CollingWood</p>
                              <p >start 4.94(128)</p>
                              <div></div>
                         </div>

                         <div className='down'>
                              <p><img src='' alt='ok' /> hoster by Kevin Francis</p>
                              <p>Check availablity</p>
                         </div>

                    </div>
                    <div className='img container-fluid w-full sm:w-7/12 '>
                         <div className='flex  w-full justify-around h-full'>
                              <div className='rounded-md w-full sm:w-4/6 h-full bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(https://picsum.photos/${size.width}/${size.height})` }}>
                                   <div className='h-96 w-full items-end flex  '>
                                        <div className='text-black bg-slate-300 w-full p-2 block sm:hidden' >Beach House in CollingWood</div>
                                   </div>
                              </div>
                              <div className='justify-between hidden sm:block w-1/4 sm:flex flex-col h-full'>
                                   {/* 2 hinh */}
                                   <div className='rounded-md  h-46 xl:h-44 w-full bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(https://picsum.photos/${size.width + 1}/${size.height + 2})` }}>
                                   </div>
                                   <div className='rounded-md  h-46 xl:h-44 w-full bg-cover bg-no-repeat bg-center' style={{ backgroundImage: `url(https://picsum.photos/${size.width + 3}/${size.height + 4})` }}>
                                   </div>
                              </div>


                         </div>
                    </div>
               </div>
          </div>
     )
}
