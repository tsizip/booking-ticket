import Axios from "axios"
import { QuanLyPhimService } from "../../../service/QuanLyFilmService"
import { DP_LST_FILM_TO_REDUCER } from "../../constants/FilmManagementConst"

// lay ds film tu Api
export const FilmManagementAction = ()=>{
     return async (dispatch) =>{
          try {
               let result = await Axios(QuanLyPhimService.quanLyFilmService())
               // console.log('film', typeof(result.data.content))

               dispatch({
                    type:DP_LST_FILM_TO_REDUCER,
                    data:result.data.content
               })

          } catch(err){
               console.log('err', err)
          }
     }
}