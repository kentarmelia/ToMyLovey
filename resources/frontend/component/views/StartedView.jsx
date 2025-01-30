import React from 'react'
import Started from '../layout/Main/Started'
import HeaderNav from '../layout/MainComponent/HeaderNav'

const StartedView = () => {
  return (
    <div className=''>
      <div className='fixed top-0 w-full z-50'>
        <HeaderNav/>
      </div>
      <div>
        <Started />
      </div>
    </div>
  )
}

export default StartedView