import React from 'react'
import Recap from '../layout/Main/Recap'
import HeaderNav from '../layout/MainComponent/HeaderNav'

const RecapView = () => {
  return (
    <div className=''>
    <div className='fixed top-0 w-full z-50'>
      <HeaderNav/>
    </div>
    <div>
      <Recap />
    </div>
  </div>
  )
}

export default RecapView