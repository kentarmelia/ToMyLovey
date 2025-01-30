import React, { useEffect } from 'react'
import Image1 from '../../../../../public/Images/image1.jpg'
import Image2 from '../../../../../public/Images/image2.jpg'
import Image3 from '../../../../../public/Images/image3.jpg'
import Image4 from '../../../../../public/Images/image4.jpg'
import Image5 from '../../../../../public/Images/image5.jpg'

import { Images } from '../MainComponent/ImageImports';

const Languages = () => {

  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []); 

  return (
    <>
      <section
        className="relative flex flex-col items-center h-screen justify-center text-center bg-cover bg-center py-[200px] px-4"
        style={{
          backgroundImage: `url('/Images/language1.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      >
        <div className="flex flex-col justify-center items-center bg-white bg-opacity-50 p-[40px] rounded-md">
          <h2 className="text-[45px] font-bold mb-4 w-[600px] leading-[60px]">THE FIVE LOVE LANGUAGES</h2>
          <p className="text-lg w-[740px] leading-9">
            I had a bit of a hard time classifying these love languages because you can show more than one love language at the same time.
            Regardless, thank you for showing your love for me!
            <br />
            <br />
            I’m neither a maniac nor an expert in classifying love languages. However, since this is so much talked about among other couples, I also wanted to include this on this website.
            <br />
            <br />
            This page is based on the literal meanings of each love language. So, if there is something wrong with the message kay forgive me my love nyahahaha.
          </p>
        </div>
      </section>
      <div className='relative flex justify-center bg-gray-100 h-auto py-[60px] z-20'>
        <div className='flex gap-9 h-full w-full max-w-[1100px] relative'>
          <div className='absolute h-[550px] bg-black w-[4000px] right-[570px] -z-30 top-0'></div>
          <div className='w-1/2 flex flex-col'>
            <div className='text-white mt-[100px]'>
              <p className='text-gray-300 text-[20px] font-medium'>LOVE LANGUAGE 01</p>
              <p className='text-[60px] py-[20px] w-[250px]'>QUALITY TIME</p>
              <p className='pr-[40px]'>Based on my observation, this is your most important love language. 
                You’ve always hated any word that suggests being separated from our togetherness, even for a day—how cute is that!
                <br/>
                </p>
            </div>
            <div className='mt-[200px]'>
              <img src={Images.I7} alt="image1" className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='w-1/2 flex flex-col items-center px-[24px pt-[24px]'>
            <div className="relative w-full h-[650px] overflow-hidden rounded-md">
              <img src={Images.I11} alt="image1" className="w-full h-full object-cover transition-opacity duration-300 opacity-100 hover:opacity-0" />
              <img src={Images.I2} alt="hover image" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 hover:opacity-100" />
            </div>
            <div className='w-3/4 flex justify-center p-[20px]'>
              <p>Having cute faces at photophoto booth.</p>
            </div>
            <div className='flex w-full gap-4 justify-start'>
              <div className='w-[220px] h-[400px] bg-pink-600'></div>
              <div className="relative w-full h-full overflow-hidden rounded-md">
                <img src={Images.I15} alt="image1" className="w-full h-full object-cover transition-opacity duration-300 opacity-100 hover:opacity-0" />
                <img src={Images.I23} alt="hover image" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 hover:opacity-100" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{
            backgroundImage: `url('/Images/lang1.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }} className='relative flex justify-center bg-gray-500 h-screen py-[60px] z-20'>
        <div className='flex gap-9 h-full w-full max-w-[1100px]'>
          <div className='w-1/2 flex flex-col items-center'>
            <div className="relative w-full h-full overflow-hidden rounded-md">
              <img src={Images.I103} alt="image1" className="w-full h-full object-cover transition-opacity duration-300 opacity-100 hover:opacity-0" />
              <img src={Images.I111} alt="hover image" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 hover:opacity-100" />
            </div>
            <div className='w-1/2 flex justify-center p-[20px]'>
              <p>Trip to Bohol</p>
            </div>
          </div>
          <div  className='w-1/2 flex flex-col'>
            <div>
              <div className='text-black mt-[100px]'>
                <p className='text-gray-500 text-[20px] font-medium'>LOVE LANGUAGE 02</p>
                <p className='text-[60px] py-[20px] w-[250px]'>PHYSICAL TOUCH</p>
                <p>I love when you put your hand inside my tshirt/polo arm hole while walking down the street and getting a thousand kisses from you.</p>
              </div>
            </div>
            <div className='mt-[40px]'>
              <img src={Images.I181} alt="image1" className='w-full h-full object-cover' />
            </div>
          </div>
        </div>
      </div>
      <div 
      style={{
            backgroundImage: `url('/Images/startedbg1.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }} 
           className='relative flex justify-center bg-gray-100 h-auto py-[60px] z-20'>
        <div className='flex gap-9 h-full w-full max-w-[1100px] relative'>
          <div className='absolute h-[550px] bg-black w-[4000px] right-[570px] -z-30 top-0'></div>
          <div className='w-1/2 flex flex-col'>
            <div className='text-white mt-[100px] pr-[60px]'>
              <p className='text-gray-300 text-[20px] font-medium'>LOVE LANGUAGE 03</p>
              <p className='text-[60px] py-[20px] w-[450px]'>ACT OF SERVICE</p>
              <p className='mt-[70px]'>Thank you for having patience, care, support, and act like a mother to me. You've carried me through my life and 
                I'm always be grateful for that my lovey.</p> 
            </div>
            <div className='mt-[200px]'>
              <img src={Images.I166} alt="image1" className='w-full h-full object-cover' />
            </div>
          </div>
          <div className='w-1/2 flex flex-col items-center px-[24px pt-[24px]'>
            <div className="relative w-full h-[650px] overflow-hidden rounded-md">
              <img src={Images.I92} alt="image1" className="w-full h-full object-cover transition-opacity duration-300 opacity-100 hover:opacity-0" />
              <img src={Images.I208} alt="hover image" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 hover:opacity-100" />
            </div>
            <div className='w-3/4 flex justify-center p-[20px]'>
              <p>Teaching me how to do it.</p>
            </div>
            <div className='flex w-full gap-4 justify-start'>
              <div className='w-[520px] h-[140px] bg-green-200'></div>
              
            </div>
            <div className='justify-start w-full mt-[140px]'>
                <p className='text-[18px]'>Drinks after lunch</p>
              </div>
              <div className='w-[120px] h-[190px] bg-yellow-200'></div>
          </div>
        </div>
      </div>
      <div 
      
      style={{
            backgroundImage: `url('/Images/lang2.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }} 
          className='relative flex justify-center bg-blue-50 h-screen py-[60px] z-20'>
        <div className='flex gap-9 h-full w-full max-w-[1100px]'>
          <div className='w-1/2 flex flex-col items-center bg-white'>
            <div className="relative w-full h-full overflow-hidden rounded-md">
              <img src={Images.I104} alt="image1" className="w-full h-full object-cover transition-opacity duration-300 opacity-100 hover:opacity-0" />
              <img src={Images.I17} alt="hover image" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 hover:opacity-100" />
            </div>
            <div className='w-full text-center flex justify-center p-[20px]'>
              <p>Buying me an expensive treat and giving me my dream watch and a redragon keyboard. Thank you so much my loveyyy.</p>
            </div>
          </div>
          <div className='relative w-1/2 flex flex-col'>
            <div>
             <div className='text-black mt-[140px]'>
                <p className='text-gray-500 text-[20px] font-medium'>LOVE LANGUAGE 04</p>
                <p className='text-[60px] py-[20px] w-[250px]'>RECEIVING GIFTS</p>
                <p>When you give me a gift, it’s not about the item itself but the thought and love behind it. 
                  <br />
                  <br />
                  P.S. You are the gift that I've been waiting to recieve for a very long time. I love you.</p>
              </div>
            </div>
            <div className='flex mt-[40px]'>
              <img src={Images.I79} alt="image1" className='w-1/2 h-full object-cover' />
              <img src={Images.I80} alt="image1" className='w-1/2 h-full object-cover' />
            </div>
           <div className='absolute bottom-10 -right-[200px]'>
                <p>Pariha tag nawng my love</p>
           </div>
          </div>
        </div>
      </div>
      <div
      style={{
        backgroundImage: `url('/Images/lang3.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
      }} 
      className='relative flex justify-center bg-gray-100 h-auto py-[60px] z-20'>
        <div className='flex gap-9 h-full w-full max-w-[1100px] relative'>
          <div className='absolute h-[550px] bg-black w-[4000px] right-[570px] -z-30 top-0'></div>
          <div className='w-1/2 flex flex-col'>
            <div className='text-white mt-[100px] pr-[100px]'>
              <p className='text-gray-300 text-[20px] font-medium'>LOVE LANGUAGE 05</p>
              <p className='text-[60px] py-[20px] w-[320px]'>WORDS OF AFFIRMATION</p>
              <p>Your words mean the world to me because they remind me that I’m seen, valued, and deeply loved. Even the smallest affirmation 
                from you stays with me, giving me strength and filling my heart with happiness.</p>
            </div>
          </div>
          <div className='w-1/2 flex flex-col items-center px-[24px pt-[24px]'>
            <div className="relative w-full h-[650px] overflow-hidden rounded-md">
              <img src={Images.I6} alt="image1" className="w-full h-full object-cover transition-opacity duration-300 opacity-100 hover:opacity-0" />
              <img src={Images.I60} alt="hover image" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 opacity-0 hover:opacity-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Languages