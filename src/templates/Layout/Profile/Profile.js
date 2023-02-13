import _ from 'lodash'
import React from 'react'
import { Fragment } from 'react'
import { useSelector } from 'react-redux'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function Profile() {
  // ds cum rap duoc lay tu QuanLyRapReducer
  let danhSachCumRap = useSelector(state => state.QuanLyRapReducer.heThongRapChieu)
  // console.log('ds cum rap', danhSachCumRap)

  // logo rap dc lay ve va xu ly bang lodash
  let logoCumRap = _.map(danhSachCumRap, (cumRap) => {
    return _.pick(cumRap, ['logo'])
  })

  console.log(JSON.parse(localStorage.getItem('dataLogin')))
  return (
    <Fragment>
      <Header />

      <div>
        profile
      </div>



      <Footer logoCumRap={logoCumRap} />
    </Fragment>
  )
}
