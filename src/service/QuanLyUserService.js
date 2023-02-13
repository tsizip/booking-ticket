import {DOMAIN} from '../util/config'

export const QuanLyUserService = {
     quanLyUserService: (dataLogin)=>{
          return {
               url: `${DOMAIN}/api/QuanLyNguoiDung/DangNhap`,
               method: 'POST',
               data: dataLogin
          }
     }
}