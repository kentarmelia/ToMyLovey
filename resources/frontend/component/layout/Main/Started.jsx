import React, { useEffect } from 'react'
import Image1 from '../../../../../public/Images/image1.jpg'
import Image2 from '../../../../../public/Images/image2.jpg'
import Image3 from '../../../../../public/Images/image3.jpg'
import Image4 from '../../../../../public/Images/image4.jpg'
import Image5 from '../../../../../public/Images/image5.jpg'
import { Images } from '../MainComponent/ImageImports';

const Started = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 

  return (
    <>
      <section
        className="relative flex flex-col items-center justify-center h-screen text-center bg-cover bg-center py-[200px] px-4"
        style={{
          backgroundImage: `url('/Images/whitebg.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      >
        <div className="flex flex-col justify-center items-center p-[40px] rounded-md">
          <h2 className="text-[45px] font-bold mb-4 w-[400px] leading-[60px]">How Everything Started</h2>
          <p className="text-lg w-[700px] leading-9">
            Back then, we weren’t complete strangers and we worked at the same company and were connected through department and a mutual friend.
          </p>
        </div>
      </section>
      <div  style={{
          backgroundImage: `url('/Images/startedbg1.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
        className='relative flex justify-center h-auto bg-gray-200 py-[60px] z-20'>
        <div className='flex gap-9 h-full w-full max-w-[1100px]'>
          <div className='w-1/2 flex flex-col'>
            <div>
              <p className='text-[50px] py-[24px] cormorant-garamond-semibold'>NOT GONNA LIE,</p>
              <p>I had a feeling we wouldn't make it in the beginning.</p>
            </div>
            <div className='mt-[40px]'>
              <img src={Images.I218} alt="image1" className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='w-1/2 flex flex-col items-center px-[24px] bg-white pt-[24px]'>
            <div className="relative w-full h-full overflow-hidden rounded-md">
              <img src={Images.I217} alt="image1" className="w-full h-full object-cover transition-opacity duration-300 opacity-100 hover:opacity-0" />
              <img src={Image3} alt="hover image" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 hover:opacity-100" />
            </div>
            <div className='w-3/4 flex justify-center py-[20px] text-center'>
              <p>Kuyawan kung mo chat nang taga IT NYAHAHAHAHAHAHA</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{
          backgroundImage: `url('/Images/startedbg2.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
         className='relative flex justify-center h-screen py-[60px] z-20'>
        <div className='flex gap-9 h-full w-full max-w-[1100px]'>
          <div className='w-1/2 flex flex-col items-center px-[24px] bg-white pt-[24px]'>
            <div className="relative w-full h-full overflow-hidden rounded-md">
              <img src={Image1} alt="image1" className="w-full h-full object-cover transition-opacity duration-300 opacity-100 hover:opacity-0" />
              <img src={Image2} alt="hover image" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 hover:opacity-100" />
            </div>
            <div className='w-3/4 flex justify-center py-[20px] text-center'>
              <p>Our ever first date and bilib pa kaayo ka sa akong the way taking photos of you. Then after gipa ila-ila tika dayon ni sa akong family and friends. We are so happy to have you in our lives.</p>
            </div>
          </div>
          <div className='w-1/2 flex flex-col'>
            <div>
              <p className='text-[50px] py-[20px] cormorant-garamond-semibold'>BUT APPARENTLY, </p>
              <p>everything feels so smooth as if we were meant to be together.</p>
            </div>
            <div className='mt-[40px]'>
              <img src={Image5} alt="image1" className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
      </div>
      <div style={{
          backgroundImage: `url('/Images/startedbg3.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
         className='relative flex justify-center bg-gray-100 h-screen py-[60px] z-20'>
        <div className='flex gap-9 h-full w-full max-w-[1100px]'>
          <div className='w-1/2 flex flex-col'>
            <div>
              <p className='text-[50px] py-[20px] cormorant-garamond-semibold'>WE LITERALLY</p>
              <p> spent the week together, even though it was the first time we met.</p>
            </div>
            <div className='mt-[40px]'>
              <img src={Images.I3} alt="image1" className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='w-1/2 flex flex-col items-center px-[24px] bg-white pt-[24px]'>
            <div className="relative w-full h-full overflow-hidden rounded-md">
              <img src={Images.I6} alt="image1" className="w-full h-full object-cover transition-opacity duration-300 opacity-100 hover:opacity-0" />
              <img src={Images.I5} alt="hover image" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 hover:opacity-100" />
            </div>
            <div className='w-3/4 flex justify-center py-[20px] text-center'> 
              <p>Standby at the park after work and enjoying our time together before we separate for the day.</p>
            </div>
          </div>
        </div>
      </div>
    </>

  )
}

export default Started