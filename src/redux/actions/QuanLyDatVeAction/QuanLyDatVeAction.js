import Axios from "axios"
import { stubArray } from "lodash"
import { QuanLyDatVeService } from "../../../service/QuanLyDatVeService"
import { ACTIVE_TAB, DAT_VE_HOAN_TAT, THONG_TIN_DAT_VE, THONG_TIN_LICH_CHIEU } from "../../constants/FilmManagementConst"
import { CLOSE_LOADING, OPEN_LOADING } from "../../constants/LoadingConst"

export const QuanLyDatVeAction = (id) => {
     return async (dispatch) => {
        
          try {
               

               let { data, status } = await Axios(QuanLyDatVeService.quanLyDatVe(id))
               // console.log('daat', data)

               if (status === 200) {
                     dispatch({
                         type: THONG_TIN_LICH_CHIEU,
                         data: data.content
                    })
               }


          } catch (err) {
               console.log('err', err.responsive.data)
          }


          
     }
}

export const datVeAction = (action) => {
     // console.log('act')
     return async dispatch => {
          dispatch({
               type:OPEN_LOADING
          })
          try {
               let { data, status } = await Axios(QuanLyDatVeService.datVeService(action))

               if (status === 200) {
                    // console.log('data axios', data)
                    await dispatch(QuanLyDatVeAction(action.maLichChieu))

                    dispatch({
                         type:DAT_VE_HOAN_TAT
                    })

                    // dispatch({})
               }
          } catch (err) {
               console.log('err', err)
          }

          await dispatch({type:CLOSE_LOADING})
          dispatch({type:ACTIVE_TAB})
     }

}

export const thongTinDatVeAction = () => {
     return async dispatch => {
          try {
               let { data, status } = await QuanLyDatVeService.layThongTinDatVeService()

               if (status === 200) {
                    // console.log('data axios', data)
                    dispatch({
                         type: THONG_TIN_DAT_VE,
                         data: data.content
                    })
               }
          } catch (err) {
               console.log('err', err.response.data)
          }
     }
}