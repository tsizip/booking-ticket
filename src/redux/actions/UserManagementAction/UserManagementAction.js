import Axios from 'axios'
import { useSelector } from 'react-redux'
import { QuanLyUserService } from '../../../service/QuanLyUserService'
import { TOKEN } from '../../../util/config'
import { SET_TOKEN } from '../../constants/FilmManagementConst'

export const UserManagementAction = (userLogin) => {
     // let link = useSelector(state=>state.FilmManagementReducer.link)
     // let history = useSelector(state=>state.QuanLyUserReducer.history)
     return async (dispatch) => {
          try {
               let { data, status } = await Axios(QuanLyUserService.quanLyUserService(userLogin))
               // console.log('data', data.content)

               if (status === 200) {
                  
                    // console.log('cc j z')
                  
                   
                    // console.log('data axios', data)
                    localStorage.setItem(TOKEN, JSON.stringify(data.content.accessToken));
                    localStorage.setItem('dataLogin', JSON.stringify(data.content))
                    // if(localStorage.getItem('idDatVe')){
                    //      history(`${link}`)
                    // } else {
                    //      history('/')
                    // }
                    // history('/')
                    // console.log('action')

               }
               else {
                    console.log('that bai')
               }
          } catch (er) {
               console.log('errr', er)
          }
     }
}