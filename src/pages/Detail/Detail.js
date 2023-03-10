import { Tabs, Progress, Space } from 'antd'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useParams } from 'react-router-dom'
import Footer from '../../templates/Layout/Footer/Footer'
import Header from '../../templates/Layout/Header/Header'
import styleGls from './Detail.module.css'
import Axios from 'axios'
import { DOMAIN } from '../../util/config'
import { DP_FILM_DETAIL_TO_REDUCER } from '../../redux/constants/FilmManagementConst'
import moment from 'moment'
import '../../index.css'
import TabPane from 'antd/es/tabs/TabPane'
import { RapManagementAction } from '../../redux/actions/RapManagementAction/RapManagementAction'
// import {} from 'reactjs-percentage-circle';

export default function Detail(props) {
     let dispatch = useDispatch()

     let { logoCumRap } = props

     let { id } = useParams();
     // console.log('id params', id)

     let filmDetail = useSelector(state => state.FilmManagementReducer.filmDetail)
     console.log('detail', filmDetail)



     // const getData = () => {
     //      let promise = Axios({
     //           url: `${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
     //           method: 'GET'
     //      })

     //      promise.then(response => {
     //           // console.log('data fetch', response.data.content)
     //           dispatch({
     //                type: DP_FILM_DETAIL_TO_REDUCER,
     //                data: response.data.content
     //           })
     //      })
     // }
     // let token = useSelector(state => state.QuanLyUserReducer.token)
     // console.log('TOKEmN', token)
     useEffect(() => {
          dispatch(RapManagementAction(id))

          // getData()
     }, [])

     return (
          <div className='overflow-hidden' >
               <Header />
               {/* <div className={styleGls['gls1']}></div> */}
               <div  className=' w-full' style={{ backgroundImage: `url(${filmDetail.hinhAnh})`, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat', filter: 'blur(8px)', position: 'absolute', height:'155vh' }}>
               </div>

               <div style={{
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    zIndex: 10,
                  
               }} className='relative'>
                    <div className=' flex justify-evenly' style={{marginTop:'100px' }}>
                         <div className='flex'>
                              <img alt='123' style={{ maxWidth: '40%', width: 300 }} src={`${filmDetail.hinhAnh}`} />
                              <div className='ml-5  text-white flex-initial w-80 flex justify-center items-left  flex-col'>
                                   <p className='font-bold text-2xl'>{filmDetail.tenPhim}</p>
                                   <p>{filmDetail.moTa}</p>
                                   <p>Ng??y kh???i chi???u: {moment(filmDetail.ngayKhoiChieu).format('DD.MM.YYYY')}</p>
                              </div>
                         </div>
                         <div className='flex'>
                              <Space wrap>
                                   <Progress type="circle"
                                        percent={filmDetail.danhGia * 10}
                                        format={(percent) => <span className='text-white'>{percent}%</span>}
                                        width={300} className='text-white' />

                              </Space>
                         </div>
                    </div>

                    {/* tab */}
                    {/* <div> */}
                    <Tabs
                         tabPosition={'top'}
                         centered
                         tabBarStyle={{
                              color: 'white',
                              // fontSize:'40px'
                         }}
                         size='large'
                    >
                         <TabPane tab='L???ch chi???u' key='1'>
                              <div style={{  }} className='mt-5 grid grid-cols-8 mx-auto'>
                                   <div className='col-span-6 col-start-2 text-white p-10 mx-auto bg-white container'>
                                        <Tabs tabPosition={'left'} >
                                             {filmDetail.heThongRapChieu?.map((htr, index) => {
                                                  return <TabPane
                                                       tab={<div className="flex flex-row items-center justify-center">
                                                            <img src={htr.logo} className="rounded-full w-full" style={{ width: 50 }} alt="..." />
                                                            <div className="text-center ml-2">
                                                                 {htr.tenHeThongRap}
                                                            </div>
                                                       </div>}
                                                       key={index}>
                                                       {htr.cumRapChieu?.map((cumRap, index) => {
                                                            return <div className="mt-5" key={index}>
                                                                 <div className="flex flex-row">
                                                                      <img style={{ width: 60, height: 60 }} src={cumRap.hinhAnh} alt="..." />
                                                                      <div className="ml-2">
                                                                           <p style={{ fontSize: 20, fontWeight: 'bold', lineHeight: 1 }} >{cumRap.tenCumRap}</p>
                                                                           <p className="text-gray-400" style={{ marginTop: 0 }}>{cumRap.diaChi}</p>
                                                                      </div>
                                                                 </div>
                                                                 <div className="thong-tin-lich-chieu grid grid-cols-4">
                                                                      {cumRap.lichChieuPhim?.slice(0, 12).map((lichChieu, index) => {
                                                                           return <NavLink to={`/checkout/${lichChieu.maLichChieu}`} key={index} className="col-span-1 text-green-800 font-bold">
                                                                                {moment(lichChieu.ngayChieuGioChieu).format('hh:mm A')}
                                                                           </NavLink>
                                                                      })}
                                                                 </div>
                                                            </div>
                                                       })}



                                                  </TabPane>
                                             })}


                                        </Tabs>
                                   </div>

                              </div>
                         </TabPane>
                         <TabPane tab='Th??ng tin' key='2'>
                              <div className='mt-5 grid grid-cols-8 mx-auto'>
                                   <div className='col-span-6 col-start-2 text-white p-10 mx-auto bg-white container'>
                                        {/* <Tabs
                                             tabPosition={'left'}
                                             items={new Array(5).fill(null).map((_, i) => {
                                                  const id = String(i + 1);
                                                  return {
                                                       label: `Tab ${id}`,
                                                       key: id,
                                                       children: `Content of Tab ${id}`,
                                                  };
                                             })}
                                        /> */}
                                        th??ng tin
                                   </div>

                              </div>
                         </TabPane>
                         <TabPane tab='????nh gi??' key='3'> <div className='mt-5 grid grid-cols-8 mx-auto'>
                              <div className='col-span-6 col-start-2 text-white p-10 mx-auto bg-white container'>
                                   {/* <Tabs
                                   tabPosition={'left'}
                                   items={new Array(5).fill(null).map((_, i) => {
                                        const id = String(i + 1);
                                        return {
                                             label: `Tab ${id}`,
                                             key: id,
                                             children: `Content of Tab ${id}`,
                                        };
                                   })}
                              /> */}
                                   ??n??h gi??
                              </div>

                         </div></TabPane>
                    </Tabs>
                    {/* </div> */}

               </div>

               <Footer logoCumRap={logoCumRap} />
          </div>
     )
}
