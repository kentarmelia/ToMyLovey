import React, { useEffect, useState } from 'react'
import '../css/Style.css'
import Image1 from '../../../../../public/Images/image1.jpg'
import Image2 from '../../../../../public/Images/image2.jpg'
import Image3 from '../../../../../public/Images/image3.jpg'
import Image4 from '../../../../../public/Images/image4.jpg'
import Image5 from '../../../../../public/Images/image5.jpg'
import C1 from '../../../../../public/Images/c1.jpg'
import { Images } from '../MainComponent/ImageImports';


import { Link } from 'react-router-dom'

const MainPage = () => {
  /* useEffect(() => {
    window.scrollTo(0, 0); 
  }, []); */ 


  const columns = [
    [
      { src: Images.I10, hoverText: "The day you said yes to being mine and the woman I want to spend forever with." },
      { src: Images.I12, hoverText: "Cosplaying at CLI Event" },
      { src: Image3, hoverText: "First meet-up, with tears while learning to commute alone" },
      { src: Images.I15, hoverText: "The day I had your first kiss" },
      { src: Images.I35, hoverText: "Not 3rd wheeling anymore" },
      { src: Images.I68, hoverText: "Away bata" },
      { src: Images.I163, hoverText: "City Lights with my " },
      { src: Images.I5003, hoverText: "We always pray to god to be a successful and healthy and happy relationship" },
      { src: Images.I12006, hoverText: "CLI Christmas Party" },
      { src: Images.I1, hoverText: "Busog always" },
      { src: Images.I19, hoverText: "Short hair demo pics" },
      { src: Images.I26, hoverText: "Loboc River Cruise" },
      { src: Images.I36, hoverText: "At st. nino church" },
      { src: Images.I43, hoverText: "The day I met your brothers" },
      { src: Images.I57, hoverText: "The straight face" },
      { src: Images.I70, hoverText: "Busog always" },
      { src: Images.I135, hoverText: "Model sa Samsung" },
      { src: Images.I79, hoverText: "elle gamay" },
    ],
    [
      { src: Image5, hoverText: "2nd day at mama peewee's house" },
      { src: Image1, hoverText: "Our every first date" },
      { src: Image2, hoverText: "From my model, who will soon be my wife" },
      { src: Images.I11, hoverText: "Cheesy Photo Booth" },
      { src: Images.I64, hoverText: "My precious women in my life" },
      { src: Images.I74, hoverText: "Quarterly Bonus Treat" },
      { src: Images.I12003, hoverText: "Sessions" },
      { src: Images.I187, hoverText: "Morning commute" },
      { src: Images.I7004, hoverText: "Meet up with my friend" },
      { src: Images.I12011, hoverText: "Swiming2" },
      { src: Images.I8, hoverText: "Bowling at SM Seaside" },
      { src: Images.I20, hoverText: "Watching the boy and the heiron" },
      { src: Images.I31, hoverText: "Panglao" },
      { src: Images.I39, hoverText: "JOLLIBEE Date" },
      { src: Images.I58, hoverText: "Chinese foods" },
      { src: Images.I63, hoverText: "Mrs. and Mr. Armelia" },
      { src: Images.I155, hoverText: "The boss" },
      { src: Images.I213, hoverText: "Na sirad an sa gawas boarding house" },
    ],
    [
      { src: Images.I22, hoverText: "Sinulog" },
      { src: Images.I28, hoverText: "Your dream of visiting the Chocolate Hills has been fulfilled" },
      { src: Images.I30, hoverText: "Nice and cozy place to stay" },
      { src: Images.I32, hoverText: "Valentines day surprise" },
      { src: Images.I67, hoverText: "Being aggresive with desserts" },
      { src: Images.I78, hoverText: "Practicing to say Till Death Do Us Part" },
      { src: Images.I193, hoverText: "Waiting while you are in OT" },
      { src: Images.I12004, hoverText: "Experiencing your favorate gelato" },
      { src: Images.I12008, hoverText: "Winning at Claw Machine" },
      { src: Images.I7, hoverText: "Everytime you have nice picture and I makes funny face" },
      { src: Images.I23, hoverText: "My favorite outdoor food -- SISIG" },
      { src: Images.I29, hoverText: "The gwapo and the gwapa" },
      { src: Images.I37, hoverText: "Cat meme" },
      { src: Images.I41, hoverText: "THE MALDITA" },
      { src: Images.I61, hoverText: "wackkyyy" },
      { src: Images.I105, hoverText: "Cosplaying Yor Forger" },
      { src: Images.I1104, hoverText: "Mirror shots" },
    ],
  ];

  const images = [Images.I202, Images.I196, Images.I86, Images.I92, Images.I98, Images.I113, Images.I122, Images.I125,
     Images.I131, Images.I137, Images.I139, Images.I160, Images.I162, Images.I207, Images.I216,Images.I116]; 
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);


  return (
    <>
      <div>
        <div className="parallax-container relative ">
          <div className="absolute inset-0 bg-white opacity-80 z-[-1] pointer-events-none"></div>
          <div className="content h-full w-full max-w-[1100px]">
            <div className='relative w-[85%] h-1 bg-white rotate-[145deg] top-1/2 -translate-y-1/2 left-[55%] -translate-x-1/2'></div>
            <div className='h-full w-full flex flex-col justify-evenly gap-[10px] items-center px-[30px] py-[70px] '>
              <div className='w-full h-[250px] py-[30px] flex justify-between'>
                <div className='flex flex-col items-start cormorant-garamond-bold'>
                  <p className='text-[100px]'>They Say,</p>
                  <div className='flex flex-col pl-[50px] items-start leading-6'>
                    <p className='text-[25px]'>no matter how long it takes,</p>
                    <p className='text-[25px]'>true love is always worth the wait.</p>
                  </div>
                </div>
                <div className='flex items-center'>
                  <div className='h-[190px] w-[230px] z-10 '>
                    <div className='bg-white h-full w-full rounded-r-[80px] rounded-l-[80px]'>
                      <Link to="/howeverythingstarted">
                        <img
                          className='h-full w-full object-cover rounded-r-[80px] rounded-l-[80px] border-[10px] border-white hover:opacity-80 hover:cursor-pointer'
                          src={Image1}
                          alt="image1"
                        />
                      </Link>
                    </div>
                    <p className='flex justify-end text-[30px] w-[370px] text-white cormorant-garamond-bold z-10'>
                      How Everything Started
                    </p>
                  </div>
                </div>
              </div>
              <div className='relative w-full h-[270px] py-[30px] flex flex-col items-center'>
                <div className='h-[200px] w-[230px] z-10 overflow-hidden'>
                  <div className='bg-white h-full w-full rounded-r-[80px] rounded-l-[80px]'>
                    <Link to="/lovelanguages">
                      <img
                        className='h-full w-full object-cover rounded-r-[80px] rounded-l-[80px] border-[10px] border-white hover:opacity-80 hover:cursor-pointer'
                        src={Images.I4}
                        alt="image1"
                      />
                    </Link>
                  </div>
                </div>
                {/* Move the text outside of the overflow-hidden div */}
                <p className='absolute text-[30px] text-white cormorant-garamond-bold right-[150px] bottom-0'>
                  The Five Love Languages
                </p>
              </div>
              <div className=' relative w-full h-[310px] py-[30px] flex flex-col items-start'>
                <div className='h-[200px] w-[230px] z-10 overflow-hidden'>
                  <div className='bg-white h-full w-full rounded-r-[80px] rounded-l-[80px]'>
                    <Link to="/recap">
                      <img
                        className='h-full w-full object-cover rounded-r-[80px] rounded-l-[80px] border-[10px] border-white hover:opacity-80 hover:cursor-pointer'
                        src={Images.I28}
                        alt="image1"
                      />
                    </Link>
                  </div>
                </div>
                <p className='absolute text-[30px] text-white cormorant-garamond-bold left-[210px] bottom-0'>
                  365 RECAP
                </p>

              </div>
            </div>
          </div>
        </div>
        <div className='relative flex justify-center bg-white h-screen mt-[50px] z-20'>
          <div className='flex items-center h-full w-full max-w-[1100px]'>
          <div className="relative w-[500px] h-[660px] rounded-t-[999px] rounded-b-[999px] overflow-hidden">
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index}`}
                className={`w-full h-full object-cover rounded-t-[999px] rounded-b-[999px] absolute top-0 left-0 transition-opacity duration-1000 ${
                  currentIndex === index ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
            <div className='flex justify-center'>
              <div className='w-[580px]'>
                <div className='flex w-full h-full items-center pl-[40px] justify-center'>
                  <div className='flex items-center w-full h-full'>
                    <div className='flex gap-3 flex-col text-[19px]'>
                      <p className='text-[40px] cantata-one-medium'>KENT'S POV:</p>
                      <p>It's been 365 days since you said yes to being mine and the woman I want to spend forever with. You're smiling at me across the table, just like you did on our first date, and I'm trying to figure out how I got so lucky.</p>
                      <p>I can’t help but feel grateful. Grateful for your love, your patience, and the way you light up my world in ways I never imagined.</p>
                      <p>Here’s to us — to the memories we’ve made and the ones we’ve yet to create. I love you more with every passing day, and I can’t wait to see where the next chapter of our story takes us.</p>
                      <p>Happy 1-year anniversary, MY PALAGI. ❤️</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative flex justify-center bg-gray-100 h-screen py-[60px] z-20'>
          <div className='flex flex-col w-full max-w-[1100px]'>
            <div className=''>
              <p className='text-[50px] cormorant-garamond-bold'>OUR THINGS</p>
            </div>
            <div className='w-full gap-[30px] flex mt-9'>
              <div className='relative w-[410px] h-[590px] flex flex-col rounded-t-[999px] overflow-hidden'>
                <img src={Images.I200} alt="image1" className='w-full h-full object-cover rounded-t-[999px]' />
                <img src={C1} alt="hover image1" className='hover-image w-full h-full object-cover rounded-t-[999px]' />
              </div>
              <div className='relative w-[410px] h-[590px] flex flex-col rounded-t-[999px] overflow-hidden'>
                <img src={Images.I191} alt="image2" className='w-full h-full object-cover rounded-t-[999px]' />
                <img src={Images.I127} alt="hover image2" className='hover-image w-full h-full object-cover rounded-t-[999px]' />
              </div>
              <div className='relative w-[410px] h-[590px] flex flex-col rounded-t-[999px] overflow-hidden'>
                <img src={Images.I66} alt="image3" className='w-full h-full object-cover rounded-t-[999px]' />
                <img src={Images.I21} alt="hover image3" className='hover-image w-full h-full object-cover rounded-t-[999px]' />
              </div>
            </div>
            <div className='flex justify-between gap-[40px] mt-[20px]'>
              <div className='flex flex-col items-center gap-[20px] w-[400px]'>
                <p className='text-[30px] font-semibold'>Sleep-calls</p>
                <p className='text-center text-gray-500 px-[4px]'>Video calls is the key when you missed me 45 minutes ago HAHAHAHA</p>
              </div>
              <div className='flex flex-col items-center gap-[20px] w-[400px]'>
                <p className='text-[30px] font-semibold'>Foods</p>
                <p className='text-center text-gray-500 px-[4px]'>Our motto in our relationship is "Happy me, Happy tummy"</p>
              </div>
              <div className='flex flex-col items-center gap-[20px] w-[400px]'>
                <p className='text-[30px] font-semibold'>Craziness</p>
                <p className='text-center text-gray-500 px-[4px]'>Endless laugh and away-bati that make our relationship stronger</p>
              </div>
            </div>
          </div>
        </div>
        <div className='relative flex justify-center bg-white mt-[90px] h-auto z-20 '>
          <div className='flex flex-col h-full w-full max-w-[1100px]'>
            <div className='flex justify-center'>
              <p className='text-[60px] cormorant-garamond-bold'>HIGHTLIGHTS</p>
            </div>
            <div className='flex justify-between mt-[100px] h-auto mb-[90px] gap-[40px]'>
              {columns.map((column, colIndex) => (
                <div key={colIndex} className='flex flex-col gap-[30px] w-[400px] h-auto'>
                  {column.map((image, index) => (
                    <div key={index} className="relative image-container">
                      <img src={image.src} alt={`image${index + 1}`} className='w-full h-auto' />
                      <div className="absolute inset-0 overlay text-center">
                        {image.hoverText}
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className=' h-[40px]'>

        </div>
      </div>
    </>

  )
}

export default MainPage