import React from 'react'
import Languages from '../layout/Main/Languages'
import HeaderNav from '../layout/MainComponent/HeaderNav'

const LanguagesView = () => {
  return (
    <div className=''>
    <div className='fixed top-0 w-full z-50'>
      <HeaderNav/>
    </div>
    <div>
      <Languages/>
    </div>
  </div>
  )
}

export default LanguagesView