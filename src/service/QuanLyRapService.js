import { DOMAIN } from "../util/config"

export const QuanLyRapService = {
     quanLyRapService: (id)=>{
          return {
               url: `${DOMAIN}/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${id}`,
               method: 'GET'
          }
     }
}