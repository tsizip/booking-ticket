import Axios from 'axios'
import { HomeService } from '../../../service/HomeService'
import { DOMAIN } from '../../../util/config'
import { DP_IMG_CRS } from '../../constants/HomeConst'

// LayDanhSachBanner
export const getImgCarouselAction = () => {
     return async (dispatch) => {
          try {
               let result = await Axios(HomeService.getImgCarouselService())
               // console.log('ở', result)
               dispatch({
                    type:DP_IMG_CRS,
                    data: result.data.content
               })
          } catch (err) {
               console.log('err', err)
          }


          
     }

}