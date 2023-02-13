import React, { useMemo, useState, memo, Suspense, Fragment } from 'react'
import { useSelector } from 'react-redux'
import { Link, NavLink } from 'react-router-dom'
import { TOKEN } from '../../../util/config'
import { Select, Space } from 'antd';
import { useTranslation } from 'react-i18next';
import Profile from '../Profile/Profile';

export default memo(function Header() {
     const { t, i18n } = useTranslation();
     let activeStyle = {
          borderBottom: '1px solid white',
          // cursor:'no-drop'

     }
     let noActiveStyle = {
          // borderBottom: '1px solid white',
          cursor:'no-drop'

     }
     const handleChange = (value) => {
          i18n.changeLanguage(value)
          // console.log('value', value)
     };

     let dataLogin = JSON.parse(localStorage.getItem('dataLogin'))
     console.log('data', dataLogin)
     return (
          <Suspense fallback='loading'>
               <div>
                    <header className="p-4 z-50 dark:bg-gray-800 dark:text-gray-100 bg-opacity-25 bg-black text-white fixed top-0 left-0 right-0">
                         <div className="container flex justify-between h-16 mx-auto">
                              <a rel="noopener noreferrer" href="#" aria-label="Back to homepage" className="flex items-center p-2">
                                   <img width={110} src='https://topungdung.online/wp-content/uploads/2020/02/huy-ve-xem-phim.jpg' alt='123' className='' />

                              </a>
                              <ul className="items-stretch hidden space-x-3 lg:flex">
                                   <li className="flex transition-all duration-200 font-bold">
                                        <NavLink style={({ isActive }) => isActive ? activeStyle : undefined} to='/' rel="noopener noreferrer" href="#" className=" flex items-center px-4 -mb-1 border-b-0 dark:border-transparent hover:border-b-2 dark:text-violet-400 dark:border-violet-400 border-b-blue-700">
                                             Home
                                        </NavLink>
                                   </li>
                                   <li className="flex transition-all duration-200 font-bold">
                                        <NavLink style={({ isActive }) => isActive ? activeStyle : noActiveStyle  } to='/new' rel="noopener noreferrer" href="#" className=" flex items-center px-4 -mb-1 border-b-0 dark:border-transparent hover:border-b-2 dark:text-violet-400 dark:border-violet-400  border-b-blue-700">
                                             News
                                        </NavLink>
                                   </li>
                                   <li className="flex transition-all duration-200 font-bold">
                                        <NavLink style={({ isActive }) => isActive ? activeStyle : noActiveStyle  } to='/contact' rel="noopener noreferrer" href="#" className=" flex items-center px-4 -mb-1 border-b-0 dark:border-transparent hover:border-b-2  border-b-blue-700">
                                             Contact
                                        </NavLink>
                                   </li>
                              </ul>
                              <div className="items-center flex-shrink-0 hidden lg:flex">
                                   {!dataLogin ? <Fragment>
                                        <Link to='/login' className="self-center px-8 py-3 rounded">{t('signin')}</Link>
                                        {/* <Link to='/register' className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">{t('signup')}</Link> */}
                                   </Fragment> :  <Link to='/profile' className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Hello ! {dataLogin.taiKhoan}</Link> }

                                   <span className="cursor-pointer self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900" onClick={() => {
                                        localStorage.removeItem(TOKEN)
                                        localStorage.removeItem('idDatVe')
                                        localStorage.removeItem('dataLogin')
                                        window.location.reload()
                                   }} >Đăng xuất</span>
                                   <Space wrap>
                                        <Select
                                             defaultValue={'en'}
                                             style={{
                                                  width: 120,
                                             }}
                                             onChange={handleChange}
                                             options={[
                                                  {
                                                       value: 'vi',
                                                       label: 'vi',
                                                  },
                                                  {
                                                       value: 'en',
                                                       label: 'en',
                                                  },
                                                  {
                                                       value: 'chi',
                                                       label: 'chi',
                                                  },
                                                  // {
                                                  //      value: 'disabled',
                                                  //      label: 'Disabled',
                                                  //      disabled: true,
                                                  // },
                                             ]}
                                        />
                                   </Space>
                              </div>
                              <button className="p-4 lg:hidden">
                                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                                   </svg>
                              </button>
                         </div>
                    </header>
               </div>
          </Suspense>
     )
})
