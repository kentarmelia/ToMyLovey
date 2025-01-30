import React from 'react'

import HeaderNav from '../layout/MainComponent/HeaderNav'
import MainPage from '../layout/Main/MainPage'
const MainPageView = () => {
  return (
    <div className=''>
      <div className='fixed top-0 w-full z-50'>
        <HeaderNav/>
      </div>
      <div>
        <MainPage />
      </div>
    </div>
  )
}

export default MainPageView