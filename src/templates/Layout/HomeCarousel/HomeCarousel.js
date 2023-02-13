import React, { useEffect, memo, useState } from 'react'
import { Carousel } from 'antd';
import { useSelector, useDispatch } from 'react-redux'
import { getImgCarouselAction } from '../../../redux/actions/CarouselAction/CarouselAction';

const contentStyle = {
     height: '720px',
     color: '#fff',
     lineHeight: '160px',
     textAlign: 'center',
     // background: '#364d79',
};

export default memo(function HomeCarousel() {
     // console.log('carousel')
     let [state,setState] = useState(0)
     let dispatch = useDispatch()
     // LayDanhSachBanner tu reducer
     let carouselImg = useSelector(state => state.CarouselReducer.carouselImg)
     // console.log(carouselImg)
     const renderImgCarousel = () => {
          return carouselImg.map((item, value) => {
               return <div key={value}>
                    <div style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})`, backgroundSize: '100%', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                         <img src={item.hinhAnh} className='w-full opacity-0' alt='123' />
                    </div>
               </div>
          })
     }
     useEffect(() => {
          // LayDanhSachBanner
          dispatch(getImgCarouselAction())
     }, [state])
     return (
          <div>
               <Carousel effect="fade">
                    {renderImgCarousel()}

               </Carousel>
          </div>
     )
})
