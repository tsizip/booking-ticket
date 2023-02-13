import logo from './logo.svg';
import './App.css';
import DemoGrid from './TailwindComponentDemo/DemoGrid';
import DemoPaddingMargin from './TailwindComponentDemo/DemoPaddingMargin';
import CustomCss from './TailwindComponentDemo/CustomCss';
import BaiTapChiaLayout from './TailwindComponentDemo/BaiTapChiaLayout';
import BaiTapResponsive from './TailwindComponentDemo/BaiTapResponsive';
import BaiTapOnTap from './BaiTapOnTap/BaiTapOnTap';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import Home from './pages/Home/Home';
// import { HomeTemplate } from './templates/HomeTemplate';
import { Fragment, useEffect } from 'react';
import Header from './templates/Layout/Header/Header';
import Footer from './templates/Layout/Footer/Footer';
import HomeCarousel from './templates/Layout/HomeCarousel/HomeCarousel';
import 'antd/dist/reset.css';
import New from './templates/Layout/News/New';
import Contact from './templates/Layout/Contact/Contact';
import Login from './templates/Layout/Login/Login';
import Register from './templates/Layout/Register/Register';
import HomeTabs from './pages/Home/HomeTabs/HomeTabs';
import Detail from './pages/Detail/Detail';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import CheckOut from './pages/CheckOut/CheckOut';
import { TOKEN } from './util/config';
import Loading from './components/Loading/Loading';
import { useState } from 'react';
import Profile from './templates/Layout/Profile/Profile';
import Admin from './pages/Admin/Admin';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAllio-bwtN1jiMze-xs5mh-ZVcF9AEkmY",
  authDomain: "ticket-d9ca4.firebaseapp.com",
  projectId: "ticket-d9ca4",
  storageBucket: "ticket-d9ca4.appspot.com",
  messagingSenderId: "543923575100",
  appId: "1:543923575100:web:678f8b6ce8efd62db12639"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


function App() {
  let dispatch = useDispatch()
  let danhSachCumRap = useSelector(state => state.QuanLyRapReducer.heThongRapChieu)
  // console.log('ds cum rap', danhSachCumRap)

  // logo rap dc lay ve va xu ly bang lodash
  let logoCumRap = _.map(danhSachCumRap, (cumRap) => {
    return _.pick(cumRap, ['logo'])
  })

  // let tokenLogin = useSelector(state=>state.QuanLyUserReducer.token)
  // QuanLyUserReducer
  let history = useNavigate()



  // let loadingStatus = useSelector(state=>state.LoadingReducer.loadingStatus)
  // console.log('laoding', loadingStatus)
  // let [loading, setLoading] = useState(false)

  useEffect(() => {
    // dispatch({
    //   type: 'NAVIGATE',
    //   data: history
    // })
    // setLoading(loadingStatus)
    localStorage.removeItem('i18nextLng')
  }, [])
  return (
    <div className="App">
      <Loading />
      <Fragment>
        <Routes>
          {/* trang checkout */}
          {/* <Route path='/checkout/:id' element={tokenLogin ? <CheckOut/> : <Navigate to='/login' replace />} /> */}
          <Route path='/checkout/:id' element={<CheckOut />} />

          {/* trang detail */}
          <Route path='/detail/:id' element={
            localStorage.getItem(TOKEN) ? <Detail logoCumRap={logoCumRap} /> : <Navigate to='/login' replace />
          } />

          {/* trang chu */}
          <Route path='/' element={<div>

            <Home />
            {/* <HomeTabs/> */}

          </div>} />

          {/* trang admin */}
          <Route path='/admin' element={<Admin/>} />

          {/* trang profile */}
          <Route path='/profile' element={
            <div>
              {/* <Header/> */}
              <Profile />
              {/* <Footer/> */}
            </div>
          } />

          {/* trang news */}
          <Route path='/new' element={<div>
            <Header />
            <HomeCarousel />
            <New />
            <Footer />
          </div>} />

          {/* trang contact */}
          <Route path='/contact' element={<div>
            <Header />
            <HomeCarousel />
            <Contact />
            <Footer />
          </div>} />

          {/* trang login */}
          {/* <Route path='/login' element={!tokenLogin ? <Login /> : <Navigate to='/' replace />} /> */}
          <Route path='/login' element={!localStorage.getItem(TOKEN) ? <Login /> : <Navigate to='/' replace />} />

          {/* trang register */}
          <Route path='/register' element={<div>
            <Header />
            <HomeCarousel />
            <Register />
            <Footer />
          </div>} />

        </Routes>
      </Fragment>

    </div>
  );
}

export default App;
