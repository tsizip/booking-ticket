import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styleSlick from './RSlick.module.css'
import FilmComponent from '../Film/FilmComponent';
import { useDispatch, useSelector } from 'react-redux';
import { SET_PHIM_DANG_CHIEU, SET_PHIM_DEFAULT, SET_PHIM_SAP_CHIEU } from '../../redux/constants/FilmManagementConst';
import _ from 'lodash';



// multipleRows
export default function RSlickComponent(props) {

    
     // let dangChieuActive
     const dispatch = useDispatch()
     let arrFilm = props.arrFilm
     // console.log('arrr', )
     function SampleNextArrow(props) {
          const { className, style, onClick } = props;
          return (
               <div
                    className={`${className} ${styleSlick['slick-next']}`}
                    style={{ ...style, display: "block", borderRadius: '50%' }}
                    onClick={onClick}
               />
          );
     }

     function SamplePrevArrow(props) {
          const { className, style, onClick } = props;
          return (
               <div
                    className={`${className} ${styleSlick['slick-prev']}`}
                    style={{ ...style, display: "block", borderRadius: '50%' }}
                    onClick={onClick}
               />
          );
     }
     const settings = {
          className: "center",
          centerMode: true,
          infinite: true,
          // centerPadding: "60px",
          slidesToShow: 4,
          speed: 500,
          rows: 1,
          slidesPerRow: 2,
          nextArrow: <SampleNextArrow />,
          prevArrow: <SamplePrevArrow />
     };
     return (
          <div>

               <div>
                    <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className={`inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out `}
                         onClick={() => {
                              dispatch({
                                   type: SET_PHIM_DANG_CHIEU
                              })
                         }}
                    >Phim Đang Chiếu</button>
                    <button type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className={`inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out ml-3  `}
                         onClick={() => {
                              dispatch({
                                   type: SET_PHIM_SAP_CHIEU
                              })
                         }}
                    >Phim Sắp Chiếu</button>
                    <button  type="button" data-mdb-ripple="true" data-mdb-ripple-color="light" className={`inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-black focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black active:shadow-lg transition duration-150 ease-in-out ml-3 `}
                         onClick={() => {
                              dispatch({
                                   type: SET_PHIM_DEFAULT
                              })
                         }}
                    >Default</button>
               </div>

               <Slider {...settings}>
                    {arrFilm.map((item, index) => {
                         return <FilmComponent key={index} item={item} />
                    })}
                   
               </Slider>
          </div>
     )
}
