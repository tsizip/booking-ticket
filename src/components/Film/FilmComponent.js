import React from 'react'
import { PlayCircleOutlined } from '@ant-design/icons'
import { NavLink, useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function FilmComponent(props) {
     // console.log(props)
     // props film from RSlickComponent
     let { item } = props
     // console.log('item', item.maPhim)
     
     // lay thong tin id tren pathName
     // let {id} = useParams()
     return (
          <div style={{width:'235px'}} className="flip-card mt-2 mb-12">
               <div style={{ overflow:'hidden'}} className="flip-card-inner">
                    <div className="flip-card-front">

                         <img src={item.hinhAnh} alt="Avatar" style={{ width: '100%', height: '100%' }} onError={e => { e.target.onerror = null; e.target.src = 'https://picsum.photos/300/300'; }} />
                    </div>
                    <div className="flip-card-back" style={{ position: 'relative', backgroundColor: 'rgba(0,0,0,.9)' }}>
                         <div style={{ position: 'absolute', top: 0, left: 0 }} >
                              <img src={item.hinhAnh} alt="Avatar" style={{ width: '100%', height: '100%' }} onError={e => { e.target.onerror = null; e.target.src = 'https://picsum.photos/300/300'; }} />
                         </div>
                         <div className="w-full h-full" style={{ position: 'absolute', backgroundColor: 'rgba(0,0,0,.5)', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                              <div>
                                   <div className="rounded-full cursor-pointer"><PlayCircleOutlined style={{ fontSize: '50px' }} /></div>
                                   <div className="text-2xl mt-2 font-bold">{item.tenPhim}</div>
                              </div>
                         </div>

                    </div>
               </div>
               {/* token ? `/detail/${item.maPhim}` : '/login' */}
               <NavLink type='button' to={`/detail/${item.maPhim}`} className="w-full bg-orange-300 text-center cursor-pointer py-2 bg-indigo-300 my-2 text-success-50 font-bold" 
               onClick={()=>{
                    localStorage.setItem('idDatVe', `/detail/${item.maPhim}`)
               }}
               >ĐẶT VÉ</NavLink>
          </div>

     )
}
