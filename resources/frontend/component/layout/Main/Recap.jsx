import React, { useEffect } from 'react'
import Image1 from '../../../../../public/Images/image1.jpg'
import Image2 from '../../../../../public/Images/image2.jpg'
import Image3 from '../../../../../public/Images/image3.jpg'
import Image4 from '../../../../../public/Images/image4.jpg'
import Image5 from '../../../../../public/Images/image5.jpg'
import { Images } from '../MainComponent/ImageImports';

const Recap = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []); 

  return (
    <>
      <section
        className="relative flex flex-col items-center h-screen justify-center text-center bg-cover bg-center py-[200px] px-4"
        style={{
          backgroundImage: `url('/Images/bgwhite3.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-col justify-center items-center p-[40px] rounded-md">
          <h2 className="text-[45px] font-bold mb-4 w-[400px] leading-[60px]">365 RECAP</h2>

        </div>
      </section>
      <div  style={{
          backgroundImage: `url('/Images/bgwhite1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} className='relative flex justify-center bg-gray-200 h-auto py-[60px] z-20'>
        <div className='flex gap-9 h-full w-full max-w-[1100px]'>
          <div className='w-1/2 flex flex-col'>
            <div>
              <p className='text-[80px] py-[20px] playball-medium'>November</p>
            </div>
            <div className='mt-[40px]'>
              <img src={Images.I11002} alt="image1" className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='w-1/2 flex flex-col items-center px-[24px] bg-white pt-[24px]'>
            <div className='mt-[40px]'>
              <img src={Images.I11001} alt="image1" className='w-full h-full object-cover' />
            </div>
            <div className='w-3/4 flex justify-center p-[20px] text-center'>
              <p>Visiting to my devoted birhen sa regla on my birthday.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{
          backgroundImage: `url('/Images/bgwhite1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} className='relative flex justify-center  h-auto py-[60px] z-20'>
        <div className='flex gap-9 h-full w-full max-w-[1100px]'>
          <div className='w-[85%] flex flex-col items-center px-[24px] bg-white pt-[24px]'>
            <div className='mt-[40px]'>
              <img src={Images.I12001} alt="image1" className='w-full h-full object-cover' />
            </div>
            <div className='mt-[40px]'>
              <img src={Images.I12003} alt="image1" className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='w-1/2 flex flex-col'>
            <div>
              <p className='ml-[20px] text-[80px] py-[20px] playball-medium'>December</p>
            </div>
              <div className='mt-[40px]'>
                <img src={Images.I12002} alt="image1" className='w-full h-full object-cover' />
              </div>
          </div>
        </div>
      </div>
      <div style={{
          backgroundImage: `url('/Images/bgwhite2.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} className='relative flex justify-center  h-screen py-[60px] z-20'>
        <div className='flex justify-between gap-9 h-full w-full max-w-[1100px]'>
            <div>
              <p className='ml-[20px] text-[80px] py-[20px] playball-medium'>January</p>
              <div className='mt-[40px]'>
                <img src={Images.I1005} alt="image1" className='w-full h-full object-cover' />
              </div>
            </div>
          <div className=' flex flex-col items-center px-[24px] bg-white pt-[24px]'>
            <div className='mt-[40px]'>
              <img src={Images.I1001} alt="image1" className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
      </div>
      <div style={{
          backgroundImage: `url('/Images/bgwhite2.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} className='relative flex justify-center bg-gray-100 h-screen py-[60px] z-20'>
        <div className='flex gap-9 h-full w-full max-w-[1100px]'>
          <div className='w-1/2 flex flex-col'>
            <div>
              <p className='text-[80px] py-[20px] playball-medium'>February</p>
            </div>
            <div className='mt-[40px]'>
              <img src={Images.I2005} alt="image1" className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='w-1/2 flex flex-col items-center px-[24px] bg-white pt-[24px]'>
            <div className='mt-[40px]'>
              <img src={Images.I2004} alt="image1" className='w-full h-full object-cover' />
            </div>
            <div className='w-1/2 flex justify-center p-[20px]'>
              <p>Our Trip to Bohol</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{
          backgroundImage: `url('/Images/bgwhite1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} className='relative flex justify-center  h-auto py-[60px] z-20'>
        <div className='flex gap-9 h-full w-full max-w-[1100px]'>
          <div className='w-[85%] flex flex-col items-center px-[24px] bg-white pt-[24px]'>
            <div className='mt-[40px]'>
              <img src={Images.I4004} alt="image1" className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='w-1/2 flex flex-col'>
            <div>
              <p className='ml-[20px] text-[90px] py-[20px] playball-medium'>March</p>
            </div>
            <div className='mt-[40px]'>
              <img src={Images.I4003} alt="image1" className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
      </div>
      <div style={{
          backgroundImage: `url('/Images/bgwhite1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} className='relative flex justify-center  h-screen py-[60px] z-20'>
        <div className='flex justify-between gap-9 h-full w-full max-w-[1100px]'>\
          <div>
              <p className='ml-[20px] text-[90px] py-[20px] playball-medium'>April</p>
            </div>
          <div className=' flex flex-col items-center px-[24px] bg-white pt-[24px]'>
            <div className='mt-[40px]'>
              <img src={Images.I5006} alt="image1" className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
      </div>
      <div style={{
          backgroundImage: `url('/Images/bgwhite2.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} className='relative flex justify-center bg-gray-100 h-screen py-[60px] z-20'>
        <div className='flex gap-9 h-full w-full max-w-[1100px]'>
          <div className='w-1/2 flex flex-col'>
            <div>
              <p className='text-[90px] py-[20px] playball-medium'>May</p>
            </div>
            <div className='mt-[40px]'>
              <img src={Images.I6001} alt="image1" className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='w-1/2 flex flex-col items-center px-[24px] bg-white pt-[24px]'>
            <div className='mt-[40px]'>
              <img src={Images.I6003} alt="image1" className='w-full h-full object-cover' />
            </div>
           
          </div>
        </div>
      </div>
      <div style={{
          backgroundImage: `url('/Images/bgwhite2.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} className='relative flex justify-center  h-auto py-[60px] z-20'>
        <div className='flex gap-9 h-full w-full max-w-[1100px]'>
          <div className='w-[85%] flex flex-col items-center px-[24px] bg-white pt-[24px]'>
            <div className='mt-[40px]'>
              <img src={Images.I7001} alt="image1" className='w-full h-full object-cover' />
            </div>
            <div className='mt-[40px]'>
              <img src={Images.I7005} alt="image1" className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='w-1/2 flex flex-col'>
            <div>
              <p className='ml-[20px] text-[80px] py-[20px] playball-medium'>June</p>
            </div>
            <div className='mt-[40px]'>
              <img src={Images.I7003} alt="image1" className='w-full h-full object-cover' />
            </div>
            <div className='mt-[40px]'>
              <img src={Images.I7004} alt="image1" className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
      </div>
      <div style={{
          backgroundImage: `url('/Images/bgwhite1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} className='relative flex justify-center  h-auto py-[60px] z-20'>
        <div className='flex flex-col items-center justify-between gap-9 h-full w-full max-w-[1100px]'>
          <div className='flex'>
            <div>
                <p className='ml-[20px] text-[90px] py-[20px] playball-medium mx-[24px]'>July</p>
              </div>
              <div className='mt-[40px]'>
                <img src={Images.I8001} alt="image1" className=' object-cover' />
              </div>
            <div className=' flex flex-col items-center px-[24px] bg-white pt-[24px]'>
              <div className='mt-[40px]'>
                  <img src={Images.I8003} alt="image1" className=' object-cover' />
                </div>
            </div>
          </div>
          <div className='mt-[40px]'>
                <img src={Images.I8002} alt="image1" className='h-[635px] object-cover' />
              </div>
        </div>
      </div>
      <div style={{
          backgroundImage: `url('/Images/bgwhite1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} className='relative flex justify-center bg-gray-100 h-auto py-[60px] z-20'>
        <div className='flex gap-9 h-full w-full max-w-[1100px]'>
          <div className='w-1/2 flex flex-col'>
            <div>
              <p className='text-[100px] py-[20px] playball-medium'>August</p>
            </div>
            <div className='mt-[40px]'>
              <img src={Images.I9001} alt="image1" className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='w-1/2 flex flex-col items-center px-[24px] bg-white pt-[24px]'>
            <div className='mt-[40px]'>
              <img src={Images.I9002} alt="image1" className='w-full h-full object-cover' />
            </div>
            <div className='w-3/4 flex justify-center text-center p-[20px]'>
              <p>Celebrating fiesta at calituban island.</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{
          backgroundImage: `url('/Images/bgwhite2.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} className='relative flex justify-center  h-auto py-[60px] z-20'>
        <div className='flex gap-9 h-full w-full max-w-[1100px]'>
          <div className='w-[85%] flex flex-col items-center px-[24px] bg-white pt-[24px]'>
            <div className='mt-[40px]'>
              <img src={Images.I10003} alt="image1" className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='w-1/2 flex flex-col'>
            <div>
              <p className='ml-[20px] text-[100px] py-[20px] playball-medium'>September</p>
            </div>
            <div className='mt-[40px]'>
              <img src={Images.I10004} alt="image1" className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
      </div>
      <div style={{
          backgroundImage: `url('/Images/bgwhite2.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }} className='relative flex justify-center  h-auto py-[60px] z-20'>
        <div className='flex justify-between gap-9 h-full w-full max-w-[1100px]'>\
            <div>
              <p className='ml-[20px] text-[100px] py-[20px] playball-medium'>October</p>
              <div className='mt-[40px]'>
                <img src={Images.I1104} alt="image1" className=' w-[500px] h-[540px] object-cover' />
              </div>
            </div>
            <div className='mt-[40px]'>
              <img src={Images.I1101} alt="image1" className='w-[500px] h-full object-cover' />
            </div>
          <div className='flex flex-col items-center px-[24px] bg-white pt-[24px] '>
            <div className='mt-[40px]'>
              <img src={Images.I1102} alt="image1" className='w-[500px] h-full object-cover' />
            </div>
            <div className='mt-[40px]'>
              <img src={Images.I1103} alt="image1" className='w-[500px] h-full object-cover' />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Recap