import React, { Fragment, useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, NavLink, redirect, useParams } from 'react-router-dom'
import { datVeAction, QuanLyDatVeAction, thongTinDatVeAction } from '../../redux/actions/QuanLyDatVeAction/QuanLyDatVeAction'
import './CheckOut.css'
import { CloseOutlined, UserOutlined } from '@ant-design/icons'
import { PUSH_PHIM } from '../../redux/constants/FilmManagementConst'
import _ from 'lodash'
import { Button, Tabs } from 'antd';
import { TOKEN } from '../../util/config'
import moment from 'moment/moment'
import { CLOSE_LOADING, OPEN_LOADING } from '../../redux/constants/LoadingConst'
import Home from '../Home/Home'

export function CheckOut(props) {
     let dispatch = useDispatch()
     // let [datGhe, setDatGhe] = useState(false)
     let thongTinLichChieu = useSelector(state => state.QuanLyDatVeReducer.thongTinLichChieu)
     let dsgheDangDat = useSelector(state => state.QuanLyDatVeReducer.gheDangDat)
     // console.log('ds ghe dang dat', dsgheDangDat)

     // console.log('thong tin lich chieu', thongTinLichChieu)
     let { id } = useParams()
     // console.log('id', id)
     // console.log('render')
     useEffect(() => {
          dispatch(QuanLyDatVeAction(id))
          // console.log('ghe dang dat', gheDangDat)
     }, [])
     // console.log(JSON.parse(localStorage.getItem('dataLogin')).taiKhoan)

     // console.log('asdklasj',gheVuaDat)
     // let arrGheDangDat = []
     // let gheVuaDat = thongTinLichChieu?.danhSachGhe?.findIndex(gheVD=>gheVD.taiKhoanNguoiDat === JSON.parse(localStorage.getItem('dataLogin')).taiKhoan)
     // if(gheVuaDat != -1){
     //      arrGheDangDat.push(gheVuaDat)
     // }
     // console.log('ghe dang dat', arrGheDangDat)
     const renderHangGhe = () => {
          return thongTinLichChieu?.danhSachGhe?.map((ghe, index) => {
               // console.log('ghe', ghe)
               let gheDaDat = ghe.daDat ? 'gheDaDat' : ''
               let gheVip = ghe.loaiGhe === 'Vip' ? 'gheVip' : ''
               let clsgheDangDat = ''
               let clsGheVuaDat = ghe.daDat == true && ghe.taiKhoanNguoiDat == JSON.parse(localStorage.getItem('dataLogin')).taiKhoan ? 'gheVuaDat' : ''


               let indexGheDangDat = dsgheDangDat.findIndex(gheDD => gheDD.maGhe === ghe.maGhe)
               // console.log('index',indexGheDangDat)
               if (indexGheDangDat != -1) {
                    clsgheDangDat = 'gheDangDat'
               } else {
                    clsgheDangDat = `${gheDaDat} ${gheVip}`
                    // clsgheDangDat = 'xoaGhe'
               }
               return <Fragment key={index}>
                    <button disabled={ghe.daDat} type='button' className={`ghe ${gheDaDat} ${gheVip} ${clsgheDangDat} ${clsGheVuaDat}`}
                         onClick={() => {
                              // console.log('ghe click', index+1)
                              dispatch({
                                   type: PUSH_PHIM,
                                   data: ghe
                              })
                              // setDatGhe(!datGhe)
                         }}
                    >
                         {ghe.daDat ? clsGheVuaDat != '' ? <UserOutlined /> : <CloseOutlined /> : `${ghe.tenGhe}`}
                    </button>
                    {(index + 1) % 16 === 0 ? <br /> : ''}
               </Fragment>
          })
     }
     // let test = _.sortBy(dsgheDangDat, ['stt'])
     // console.log('test', test)
     return (
          // <div>CheckOut {id}</div>
          <div className='container p-0 mx-auto grid grid-cols-4'>
               <div className='col-span-3' >
                    <p>màn hình</p>
                    <hr />
                    <p>Hàng ghế</p>
                    {renderHangGhe()}
               </div>
               <div className='col-span-1' >
                    <p>thông tin</p>
                    <hr />
                    {/* <p>giá vé: </p> */}
                    <p>{thongTinLichChieu?.thongTinPhim?.tenPhim}</p>
                    <p>Giờ chiếu: {thongTinLichChieu?.thongTinPhim?.gioChieu}</p>
                    <p>Ghế:  {

                         _.sortBy(dsgheDangDat, ['stt']).map((gheDD, index) => {
                              return <span key={index} className='text-green-800 font-bold'>
                                   {gheDD.tenGhe + ' '}

                              </span>
                         })
                    }</p>
                    <p>Giá:
                         {/* cach 1  */}
                         {/* {(dsgheDangDat.map((ghe, index) => {
                              return ghe.giaVe
                         })).reduce((sum, num) => {
                              return (sum += num)
                         }, 0).toLocaleString()} */}


                         {/* cach 2 */}
                         {dsgheDangDat.reduce((total, ghe, index) => {
                              return total += ghe.giaVe
                         }, 0).toLocaleString()}
                    </p>
                    <p>Địa chỉ: {thongTinLichChieu?.thongTinPhim?.diaChi}</p>
                    <p>Ngày chiếu: {thongTinLichChieu?.thongTinPhim?.ngayChieu}</p>
                    <p>Tên rạp: {thongTinLichChieu?.thongTinPhim?.tenRap}</p>
                    <button className='btn' onClick={() => {
                         let thongTinDatVe = {

                              "maLichChieu": id,
                              "danhSachVe": dsgheDangDat.map(value => {
                                   // console.log('type', typeof(value))
                                   return {
                                        "maGhe": value.maGhe,
                                        "giaVe": value.giaVe
                                   }
                              })
                         }

                         dispatch(datVeAction(thongTinDatVe))

                         //  dispatch(QuanLyDatVeAction(id))
                         // await dispatch({
                         //      type: CLOSE_LOADING
                         // })
                    }
                    } >Đặt vé</button>
               </div>
          </div>
     )
}

export function InfoCheckOut(props) {
     let dispatch = useDispatch()
     let thongTinDatVe = useSelector(state => state.QuanLyDatVeReducer.thongTinDatVe)
     console.log('thong tin dat ve', thongTinDatVe)
     let thongTinLichChieu = useSelector(state => state.QuanLyDatVeReducer.thongTinLichChieu)
     // console.log('ok', thongTinLichChieu)
     const renderDS = () => {
          return thongTinDatVe?.thongTinDatVe?.map((ve, index) => {
               return <div key={index} className="p-2 lg:w-1/3 md:w-1/2 w-full">
                    <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                         <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src={ve.hinhAnh} />
                         <div className="flex-grow">
                              <h2 className="text-gray-900 title-font font-bold">{ve.tenPhim}</h2>
                              <p className="text-gray-500">Giờ đặt: {moment(ve.ngayDat).format('hh:mm A')} - Ngày đặt: {moment(ve.ngayDat).format('DD/MM/YYYY')}</p>
                              <p className="text-gray-500">Địa điểm: {ve.danhSachGhe.slice(0, 1).map((ghe, index) => {
                                   return ghe.tenHeThongRap
                              })}</p>
                              <p className="text-gray-500">Tên rạp: {ve.danhSachGhe.slice(0, 1).map((ghe, index) => {
                                   return ghe.tenCumRap
                              })} </p>
                              <p>Ghế: {ve.danhSachGhe.map((ghe, index) => {
                                   // console.log('length', ve.danhSachGhe.length)
                                   return (index + 1) % 11 == 0 ? <br /> : <span key={index} className={`px-1 text-lg text-green-800 font-bold ${index}`}>{ghe.tenGhe}</span>
                              })}</p>
                         </div>
                    </div>
               </div>
          })
     }

     return <div className=' mx-auto'>
          <section className="text-gray-600 body-font">
               <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-20">
                         <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Thông tin đặt vé</h1>
                         <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Rất hân hạnh được phục vụ quý vị!</p>
                    </div>
                    <div className="flex flex-wrap -m-2">

                         {renderDS()}

                    </div>
               </div>
          </section>
     </div>

}

// const onChange = (key) => {
//      console.log(key);
// };
export default function TabPanes(props) {
     let dispatch = useDispatch()
     let num = useSelector(state => state.QuanLyDatVeReducer.chuyenTrang)
     // console.log('num', num)
     useEffect(() => {
          dispatch(thongTinDatVeAction())
     }, [])
     const operations = <NavLink to='/' >Home</NavLink>;
     return <div className='container mx-auto'>
          <Tabs tabBarExtraContent={operations} defaultActiveKey='1' activeKey={num.toString()} onChange={(key) => {
               // console.log('key', key)
               dispatch({
                    type: 'CHANGE_KEY',
                    data: key
               })
          }} >
               <TabPanes key='1' tab='01 Đặt Vé' ><CheckOut /></TabPanes>
               <TabPanes key='2' tab='02 Thông Tin Đặt Vé' ><InfoCheckOut /></TabPanes>
          </Tabs>
     </div>
}
