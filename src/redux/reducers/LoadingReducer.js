import {CLOSE_LOADING, OPEN_LOADING} from '../constants/LoadingConst'

const initialState = {
     loadingStatus: false
}

const LoadingReducer = (state = initialState, action) => {
     switch (action.type) {

          case OPEN_LOADING:
               console.log('lodaingf')
               return { ...state, loadingStatus:true }
          case CLOSE_LOADING:
               return {...state, loadingStatus:false}
          default:
               return { ...state }
     }
}

export default LoadingReducer