import React, { useCallback, useEffect, useMemo, useState } from 'react'
import HomeTabs from './HomeTabs/HomeTabs'
import { FilmManagementAction } from '../../redux/actions/FilmManagementAction.js/FilmManagementAction'
import { useDispatch, useSelector } from 'react-redux'
import FilmComponent from '../../components/Film/FilmComponent'
import RSlickComponent from '../../components/ReactSlick/RSlickComponent'
import _, { get } from 'lodash'
import Header from '../../templates/Layout/Header/Header'
import HomeCarousel from '../../templates/Layout/HomeCarousel/HomeCarousel'
import Footer from '../../templates/Layout/Footer/Footer'
import Axios from 'axios'
import { DOMAIN, NHOM, TOKEN } from '../../util/config'

export default function Home() {
     let dispatch = useDispatch()
     let { token } = useSelector(state => state.QuanLyUserReducer)
     // console.log('login token', JSON.parse(localStorage.getItem(TOKEN)))
     // ds film lay tu FilmManagement reducer
     let lstFilmFromReducer = useSelector(state => state.FilmManagementReducer.lstFilmApi)

     // ds cum rap duoc lay tu QuanLyRapReducer
     let danhSachCumRap = useSelector(state => state.QuanLyRapReducer.heThongRapChieu)
     // console.log('ds cum rap', danhSachCumRap)

     // logo rap dc lay ve va xu ly bang lodash
     let logoCumRap = _.map(danhSachCumRap, (cumRap) => {
          return _.pick(cumRap, ['logo'])
     })

     // LayThongTinLichChieuHeThongRap
     let getData = () => {
          let result = Axios({
               url: `${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${NHOM}`,
               method: "GET"
          })


          result.then((res) => {

               dispatch({
                    type: 'HTR',
                    data: res.data.content
               })
          })
     }
     // getData()
     // localStorage.setItem('test', 'home')
     useEffect(() => {
          dispatch(FilmManagementAction())

          localStorage.setItem('key','1')
          // dispatch({
          //      type:'HTR',
          //      data: getData()
          // })
          getData()
          // console.log('data ?', state)
     }, [])



     return (
          <div>
               <Header />
               <HomeCarousel />
               {/* noi dung Home */}
               <div className='container mx-auto'>
                    <section className="text-gray-600 body-font">
                         <div className="container px-5 py-24 mx-auto">
                              {/* <div className="flex flex-wrap -m-4">
                              {renderListFilm()}
                              
                              
                         </div> */}
                              <RSlickComponent arrFilm={lstFilmFromReducer} />
                         </div>
                    </section>



                    <HomeTabs />
               </div>
               <Footer logoCumRap={logoCumRap} />

          </div>
     )
}
