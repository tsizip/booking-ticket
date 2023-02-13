import { DOMAIN } from "../util/config"

export const HomeService = {
     // api LayDanhSachBanner
     getImgCarouselService:()=>{
          return {
               url: `${DOMAIN}/api/QuanLyPhim/LayDanhSachBanner`,
               method: 'GET'
          }
     }
}