import _ from 'lodash'
import React, { useState } from 'react'
import Modal from './Modal'

const data = [
     {
          maMonAn: 'MA01',
          tenMonAn: 'Cơm chiên dương châu',
          gia: 200,
          hinhAnh: 'http://casestudy.cyberlearn.vn/img/MA01.jpeg',
          maDanhMuc: 'MC',
          tenDanhMuc: 'Món chiên'
     },
     {
          maMonAn: 'MA02',
          tenMonAn: 'Cơm chiên cá mặn',
          gia: 300,
          hinhAnh: 'http://casestudy.cyberlearn.vn/img/MA02.jpeg',
          maDanhMuc: 'MC',
          tenDanhMuc: 'Món chiên'
     },
     {
          maMonAn: 'MA03',
          tenMonAn: 'Gà nướng muối ớt',
          gia: 500,
          hinhAnh: 'http://casestudy.cyberlearn.vn/img/MA03.jpeg',
          maDanhMuc: 'MN',
          tenDanhMuc: 'Món nướng'
     },
     {
          maMonAn: 'MA04',
          tenMonAn: 'Gà nướng muối tiêu chanh',
          gia: 600,
          hinhAnh: 'http://casestudy.cyberlearn.vn/img/MA04.jpeg',
          maDanhMuc: 'MN',
          tenDanhMuc: 'Món nướng'


     },
     {
          maMonAn: 'MA05',
          tenMonAn: 'Trà đào cam sả',
          gia: 50,
          hinhAnh: 'http://casestudy.cyberlearn.vn/img/MA05.jpeg',
          maDanhMuc: 'GK',
          tenDanhMuc: 'Giải khát',
     },
     {
          maMonAn: 'MA06',
          tenMonAn: 'Bia heniken',
          gia: 50,
          hinhAnh: 'http://casestudy.cyberlearn.vn/img/MA06.jpeg',
          maDanhMuc: 'GK',
          tenDanhMuc: 'Giải khát',
     },
]


export default function BaiTapOnTap() {

     let [mangDanhMuc, setMangDanhMuc] = useState(data[0].tenDanhMuc)

     let [modal, setModal] = useState(true)
     return (
          <div>
               <Modal statusModal={modal} setStatusModal={setModal} />
               <div className='grid grid-cols-6'>
                    <div className="h-full p-3 space-y-2 col-span-1 dark:bg-gray-900 dark:text-gray-100">
                         <div className="flex items-center p-2 space-x-4">
                              <img src="https://source.unsplash.com/100x100/?portrait" alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
                              <div>
                                   <h2 className="text-lg font-semibold">Tri Nguyen</h2>
                                   <span className="flex items-center space-x-1">
                                        <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-400">cybersoft</a>
                                   </span>
                              </div>
                         </div>
                         <div className="divide-y divide-gray-700">
                              <p className='font-bold'>Danh mục sản phẩm</p>
                              <ul className="pt-2 pb-4 space-y-1 text-sm">
                                   {_.uniqBy(data, 'tenDanhMuc').map((value, index) => {
                                        console.log(value)
                                        return <li key={index} className="dark:bg-gray-800 dark:text-gray-50" onClick={() => {
                                             setMangDanhMuc(value.tenDanhMuc)
                                             // console.log('index', index)
                                        }} >
                                             <a rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">

                                                  <span>{value.tenDanhMuc}</span>
                                             </a>
                                        </li>
                                   })}


                              </ul>
                             
                         </div>
                    </div>

                    <section className="text-gray-600 col-span-5 body-font">
                         <h3 className='text-purple-700 text-center text-4xl mt-3'>Menu</h3>
                         <div className="container px-5 py-5 mx-auto">
                              <div className="flex flex-wrap -m-4">
                                   {_.filter(data, value => value.tenDanhMuc === mangDanhMuc).map((value, index) => {
                                        return <div key={index} className="p-4 lg:w-1/3">
                                             <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                                                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{value.maMonAn}</h2>
                                                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">{value.tenMonAn}</h1>
                                                  <img src={value.hinhAnh} alt='ok' className='w-full h-3/4' />
                                                  <p className="leading-relaxed mb-3">{value.tenDanhMuc}</p>
                                                  <a className="text-indigo-500 inline-flex items-center cursor-pointer"  onClick={()=>{
                                                       setModal(true)
                                                  }}>Read More
                                                       <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path d="M5 12h14" />
                                                            <path d="M12 5l7 7-7 7" />
                                                       </svg>
                                                  </a>
                                                  <div className="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
                                                       <span className="text-gray-400 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 ">
                                                            Giá: {value.gia}
                                                       </span>

                                                  </div>
                                             </div>
                                        </div>
                                   })}


                              </div>
                         </div>
                    </section>

               </div>
          </div>
     )
}
