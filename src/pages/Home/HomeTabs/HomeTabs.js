import React, { Fragment, useEffect } from 'react'
import { Tabs } from 'antd'
import TabPane from 'antd/es/tabs/TabPane'
import moment from 'moment'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import _ from 'lodash'

export default function HomeTabs(props) {
     // let danhSachCumRap = props.danhSachCumRap
     // console.log('props', danhSachCumRap)

     const danhSachCumRap = useSelector(state => state.QuanLyRapReducer.heThongRapChieu)
     // console.log('data rap', typeof(danhSachCumRap))
     let tabPosition = 'left'

     // cách 1: render từ items
     // let items =danhSachCumRap.map((item,index) => {
     //      return {
     //           key: index,
     //           label: <img src={item.logo} width={30} className='rounded-full' alt='123' />,
     //           children: item.tenHeThongRap,
     //      }
     // })

     // cách 2: render từ TabPane

     const renderHeThongRap = () => {
          return _.map(danhSachCumRap, (heThongRap, index) => {
               return <TabPane tab={<img src={heThongRap.logo} width={30} className='rounded-full' alt='123' />} key={index} >
                    {/* {heThongRap.tenHeThongRap} */}
                    <Tabs tabPosition={tabPosition} key={index}>
                         {heThongRap.lstCumRap.map((cumRap, index) => {
                              // console.log(cumRap)
                              return <TabPane tab={
                                   <div className='flex'>
                                        <img src={cumRap.hinhAnh} width={60} className='rounded-lg mr-1' alt='123' />
                                        <div>
                                             <p className='text-green-500 font-bold'>{cumRap.tenCumRap.length > 25 ? <span>{cumRap.tenCumRap.slice(0, 25) + '...'}</span> : <span>{cumRap.tenCumRap}</span>}</p>
                                             <p className='text-xs text-left'>{cumRap.diaChi.length > 25 ? <span>{cumRap.diaChi.slice(0, 25) + '...'} </span> : <span>{cumRap.diaChi}</span>}</p>
                                        </div>

                                   </div>
                              } key={index} >
                                   {cumRap.danhSachPhim.slice(0, 7).map((phim, index) => {
                                        return <Fragment key={index}>
                                             <div className='flex'>
                                                  <div style={{
                                                       backgroundImage: `url(${phim.hinhAnh}), url(https://picsum.photos/100/200)`,
                                                       backgroundRepeat: 'no-repeat',
                                                       backgroundSize: 'cover',
                                                       backgroundPosition: 'center',
                                                       width: '70px',
                                                       height: '70px',
                                                  }} className='my-2' >

                                                  </div>
                                                  <div className='ml-2 flex items-center'>
                                                       <div>
                                                            <p className='font-bold m-0 text-lg'>{phim.tenPhim}</p>
                                                            <span>{cumRap.diaChi}</span>
                                                            <div className='grid grid-cols-6 gap-12'>
                                                                 {phim.lstLichChieuTheoPhim?.slice(0, 6).map((item, index) => {
                                                                      return <NavLink style={{whiteSpace:'nowrap'}} key={index} to={'/'} onClick={()=>{alert('đây là lịch chiếu demo, để thực hiện đặt vé và xem thông tin, vui lòng đăng nhập và click vào "đặt vé" dưới mỗi bộ phim!')}} className='text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-green-200 text-green-700 rounded-full'>{moment(item.ngayChieuGioChieu).format('hh:mm A')}</NavLink>
                                                                 })}
                                                            </div>
                                                       </div>
                                                  </div>

                                             </div>
                                             <hr />
                                        </Fragment>
                                   })}
                              </TabPane>
                         })}
                    </Tabs>
               </TabPane>
          })

     }


     return (
          <Tabs
               tabPosition={tabPosition}
          // cách 1
          // items={items}
          >
               {/* cách 2 */}
               {renderHeThongRap()}
               {/* <TabPane tab='tabbs 1' key='1' />
               <TabPane tab='tabbs 2' key='2' />
               <TabPane tab='tabbs 3' key='3' /> */}
          </Tabs>
          // <div>
          //      {/* {danhSachCumRap.map((item,index)=>{
          //           return <img alt='123' src={item.logo} key={index}/>
          //      })} */}
          //      {}
          // </div>
     )
}
