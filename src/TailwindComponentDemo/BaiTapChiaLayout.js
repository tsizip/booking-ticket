import React from 'react'

export default function BaiTapChiaLayout() {
     return (
          <div className='container mx-auto '>
               <p className='text-center text-4xl'>Bài tập chia layout</p>
               <div className='grid grid-cols-3 gap-4 mt-10'>
                    <div className='rounded-lg overflow-hidden'>
                         <div className='bg-slate-700 p-4 text-white text-center'>
                              <p>Heading</p>
                              <p>lorem ipsum</p>
                         </div>
                         <div className='grid grid-cols-2 bg-slate-400 p-4'>
                              <p>text</p>
                              <button type='button' className='btn bg-purple-700 p-2 rounded-lg text-white font-bold '>button</button>
                         </div>
                    </div>
                    <div className='rounded-lg overflow-hidden'>
                         <div className='bg-slate-700 p-4 text-white text-center'>
                              <p>Heading</p>
                              <p>lorem ipsum</p>
                         </div>
                         <div className='grid grid-cols-2 bg-slate-400 p-4'>
                              <p>text</p>
                              <button type='button' className='btn bg-purple-700 p-2 rounded-lg text-white font-bold '>button</button>
                         </div>
                    </div>
                    <div className='rounded-lg overflow-hidden'>
                         <div className='bg-slate-700 p-4 text-white text-center'>
                              <p>Heading</p>
                              <p>lorem ipsum</p>
                         </div>
                         <div className='grid grid-cols-2 bg-slate-400 p-4'>
                              <p>text</p>
                              <button type='button' className='btn bg-purple-700 p-2 rounded-lg text-white font-bold '>button</button>
                         </div>
                    </div>
               </div>
          </div>
     )
}
