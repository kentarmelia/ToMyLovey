import React from 'react'
import { Link } from 'react-router-dom'



const HeaderNav = () => {
  return (
    <div className='h-16 w-screen flex justify-between items-center bg-gray-100 shadow-md px-10'> 
        <div>
          <Link to={"/home"}>
            <h2 className='text-gray-800 text-[30px] cantata-one-medium '>My Palagi</h2> 
          </Link>
        </div>
        <div className='flex gap-10 pr-[100px] items-center h-full'>
          <Link to="/home">
            <p className='hover:font-semibold w-[50px]'>Home</p>
          </Link>
          <Link to="/howeverythingstarted">
            <p className='hover:font-semibold w-[173px]'>How Everything Started</p>
          </Link>
          <Link to="/lovelanguages">
            <p className='hover:font-semibold w-[183px]'>The Five Love Languages</p>
          </Link>
          <Link to="/recap">
            <p className='hover:font-semibold w-[90px]'>365 RECAP</p> 
          </Link>
        </div>
    </div>
  )
}

export default HeaderNav