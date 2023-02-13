import React from 'react'

export default function DemoPaddingMargin() {
     return (
          // demo padding, margin
          // <div className='container'>
          //      <div className='bg-orange-800 w-auto inline-block p-48 border-r-2 rounded-full'>test</div>

          // </div>


          // demo flex
          <div className=' w-screen h-screen '>
               {/* gap-4 */}
               {/* flex-wrap để xuống dòng khi đã đủ 1 dòng, ko có thì nó ép cho cùng 1 dòng */}
               <div className='flex justify-around items-center  w-full h-full flex-wrap'>
                    <div className='rounded-lg w-1/2 h-48 shadow-2xl bg-red-800'></div>
                    <div className='rounded-lg w-1/2 h-48 shadow-2xl bg-yellow-600'></div>
                    <div className='rounded-lg w-1/2 h-48 shadow-2xl bg-emerald-500'></div>
               </div>
          </div>
     )
}
