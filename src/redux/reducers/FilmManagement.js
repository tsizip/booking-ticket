import { DP_FILM_DETAIL_TO_REDUCER, DP_LST_FILM_TO_REDUCER, SET_PHIM_DANG_CHIEU, SET_PHIM_DEFAULT, SET_PHIM_SAP_CHIEU } from "../constants/FilmManagementConst"

const initialState = {
     lstFilmApi: [
          {
               "maPhim": 10891,
               "tenPhim": "Lời Mời Đến Địa Ngục",
               "biDanh": "loi-moi-den-dia-nguc",
               "trailer": "",
               "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/loi-moi-den-dia-nguc_gp00.jpg",
               "moTa": "Sau khi mẹ qua đời, Evie không còn bất kỳ người thân nào trên đời. Cô quyết định làm xét nghiệm ADN và phát hiện ra mình còn một người em họ đã thất lạc từ lâu. Nhờ vậy mà Evie được gia đình người này mời đến dự một đám cưới xa hoa ở vùng nông thôn nước Anh. Ban đầu, cô có cảm tình với một chàng quý tộc điển trai nhưng nhanh chóng bị đẩy vào cơn ác mộng khi khám phá ra những bí mật đen tối trong lịch sử gia đình mình và âm mưu kinh hoàng đằng sau sự xa hoa của họ",
               "maNhom": "GP00",
               "ngayKhoiChieu": "2022-08-25T00:00:00",
               "danhGia": 0,
               "hot": false,
               "dangChieu": true,
               "sapChieu": false
          },
     ],
     lstFilmDefault: [],
     dangChieu: false,
     sapChieu: false,
     defaultList:true,

     filmDetail:'',
     // link:''
}

const FilmManagementReducer = (state = initialState, action) => {
     switch (action.type) {

          case DP_LST_FILM_TO_REDUCER:
               return { ...state, lstFilmApi: action.data.filter(film => film.dangChieu == true && film.sapChieu == false || film.dangChieu == false && film.sapChieu == true ), lstFilmDefault: action.data.filter(film => film.dangChieu == true && film.sapChieu == false || film.dangChieu == false && film.sapChieu == true ) }

          case SET_PHIM_DANG_CHIEU:

              
               state.lstFilmApi = state.lstFilmDefault.filter(film => film.dangChieu == true)
               return { ...state }
          case SET_PHIM_SAP_CHIEU:
               console.log(state.lstFilmApi)
               // state.sapChieu = (!state.sapChieu)
               state.lstFilmApi = state.lstFilmDefault.filter(film => film.sapChieu == true)
               return { ...state }
          case SET_PHIM_DEFAULT:
               console.log(state.lstFilmApi)
               // state.sapChieu = (!state.sapChieu)
               state.lstFilmApi = state.lstFilmDefault.filter(film => film.dangChieu == true && film.sapChieu == false || film.dangChieu == false && film.sapChieu == true )
               return { ...state }

          case DP_FILM_DETAIL_TO_REDUCER:
               state.filmDetail = action.data
               // console.log('reducer', state.filmDetail)
               return {...state}
          default:
               return { ...state }
     }
}

export default FilmManagementReducer
