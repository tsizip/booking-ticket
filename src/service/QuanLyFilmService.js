
import { DOMAIN, NHOM } from "../util/config"


export const QuanLyPhimService = {
     quanLyFilmService: (id)=>{
          return {
               url:`${DOMAIN}/api/QuanLyPhim/LayDanhSachPhim?maNhom=${NHOM}`,
               method:"GET"
          }
     }
}