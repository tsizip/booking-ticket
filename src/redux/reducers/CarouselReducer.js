import { DP_IMG_CRS } from "../constants/HomeConst"

const initialState = {
     carouselImg: [
          // {
          //      "maBanner": 1,
          //      "maPhim": 1282,
          //      "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png"
          // },
     ]
}

const CarouselReducer = (state = initialState, action) => {
     switch (action.type) {
          
          case DP_IMG_CRS:
               return { ...state, carouselImg: action.data }

          default:
               return { ...state }
     }
}

export default CarouselReducer
