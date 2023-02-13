import Axios from "axios"
import { DOMAIN, TOKEN } from "../util/config"

export const QuanLyDatVeService = {
     quanLyDatVe: (id) => {
          return {
               url: `${DOMAIN}/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${id}`,
               method: 'GET'
          }
     },

     datVeService: (dataDatVe) => {
          // console.log('test', 'Bearer ' + localStorage.getItem(TOKEN))
          return {
               url: `${DOMAIN}/api/QuanLyDatVe/DatVe`,
               method: 'POST',
               data: dataDatVe,
               // headers: { 'Authorization': 'Bearer 
               headers: {'Authorization' : `Bearer ${JSON.parse(localStorage.getItem(TOKEN))}`}
          }
     },

     layThongTinDatVeService: ()=>{
          return Axios({
               url:`${DOMAIN}/api/QuanLyNguoiDung/ThongTinTaiKhoan`,
               method:'POST',
               headers: {'Authorization' : `Bearer ${JSON.parse(localStorage.getItem(TOKEN))}`}
          })
     }
}