import { act } from "react-dom/test-utils";
import { TOKEN } from "../../util/config"
import { SET_TOKEN } from "../constants/FilmManagementConst"

// let user =''
// if(localStorage.getItem(TOKEN)){
//      user = JSON.parse(localStorage.getItem(TOKEN));
// }

const initialState = {
     
     // history: {}
}

const QuanLyUserReducer =  (state = initialState, action) =>  {
     switch  (action.type) {

         
          // case 'NAVIGATE': 
          //      state.history = action.data
          //      // console.log('his', state.history)
          //      return {...state}
          default:
               return { ...state }
     }
}

export default QuanLyUserReducer