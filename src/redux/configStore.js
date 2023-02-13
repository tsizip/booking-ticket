
import { applyMiddleware, combineReducers, legacy_createStore as createStore, legacy_createStore} from 'redux'
import thunk from 'redux-thunk'
import CarouselReducer from './reducers/CarouselReducer'
import FilmManagementReducer from './reducers/FilmManagement'
import LoadingReducer from './reducers/LoadingReducer'
import QuanLyDatVeReducer from './reducers/QuanLyDatVeReducer'
import QuanLyRapReducer from './reducers/QuanLyRapReducer'
import QuanLyUserReducer from './reducers/QuanLyUserReducer'

const rootReducer = combineReducers({
     // noi khai bao cac reducer
     CarouselReducer,FilmManagementReducer, 
     QuanLyRapReducer, QuanLyUserReducer, QuanLyDatVeReducer, LoadingReducer
})

const store = legacy_createStore(rootReducer, applyMiddleware(thunk))

export default store
