import React from 'react'
import { Link } from 'react-router-dom'
import "../css/inital.css"
const InitialPage = () => {
  return (
    <div className='h-screen w-screen flex flex-col gap-[100px] justify-center items-center bg-black'>
        <h1>To My Palagi</h1>
        <Link to={"/home"}>
            <button id="btn">click here to start</button>
        </Link>
        
    </div>
  )
}

export default InitialPage