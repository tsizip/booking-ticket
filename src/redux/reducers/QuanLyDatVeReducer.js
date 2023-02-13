import { ACTIVE_TAB, DAT_VE_HOAN_TAT, PUSH_PHIM, THONG_TIN_DAT_VE, THONG_TIN_LICH_CHIEU } from "../constants/FilmManagementConst"

const initialState = {
     thongTinLichChieu: {},
     gheDangDat: [],

     thongTinDatVe: {},

     chuyenTrang: 1
}

const QuanLyDatVeReducer = (state = initialState, action) => {
     switch (action.type) {

          case THONG_TIN_LICH_CHIEU:

               return { ...state, thongTinLichChieu: action.data }
          case PUSH_PHIM:
               let dsGheCapNhat = [...state.gheDangDat]
               let index = dsGheCapNhat.findIndex(gheDD => gheDD.maGhe === action.data.maGhe)
               // console.log('index', index)
               if (index !== -1) {
                    dsGheCapNhat.splice(index, 1)
                    state.gheDangDat = dsGheCapNhat
               } else {
                    dsGheCapNhat.push(action.data)
                    state.gheDangDat = dsGheCapNhat
               }

               // console.log('index', index)
               return { ...state }

          // thong tin dat ve
          case THONG_TIN_DAT_VE:
               state.thongTinDatVe = action.data
               return { ...state }

          case DAT_VE_HOAN_TAT:
               state.gheDangDat =[]
              
               return { ...state }

          case ACTIVE_TAB:
               state.chuyenTrang = 2
               return {...state}


          case 'CHANGE_KEY':
               state.chuyenTrang = action.data
               return {...state}
          default:
               return { ...state }
     }
}

export default QuanLyDatVeReducer