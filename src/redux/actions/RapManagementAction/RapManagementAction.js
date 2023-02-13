import Axios from "axios"
import { QuanLyRapService } from "../../../service/QuanLyRapService"
import { DP_FILM_DETAIL_TO_REDUCER } from "../../constants/FilmManagementConst"

export const RapManagementAction = (id) =>{
     return async (dispatch) =>{
          let { data} = await Axios(QuanLyRapService.quanLyRapService(id))

          // console.log('data action', data)
          dispatch({
               type: DP_FILM_DETAIL_TO_REDUCER,
               data:data.content
          })
     }
}