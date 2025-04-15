import { useState } from 'react'
import {Coffee,GrainN,topCup,ice,liquidCoffee,leaf,sun,mapleLeaf,Close,beans,Drink,Music,Sound,Room} from '../assets/image'
function About() {
  const [rooms, showRooms] = useState(false)
  function OpenRooms() {
    showRooms(true)
  }
  function CloseRooms() {
    showRooms(false)
  }


  const whyUs: string[] = [
    'Special rooms for only you and your family',
    'Unmatched speed in service delivery.',
    'Brewed to perfection with the finest coffee beans.',
    'Seasons is a place that feels like home',
    'exceptional care, like never before',
    'A relaxing and peaceful ambiance'
  ]



  return (
    <div className=' mb-20 sm:mb-0 my-4'>
      <article className='md:max-w-5xl mx-auto my-5  p-3 bg-[#c1905a]  shadow-[0px_0px_15px_0px_#492201] relative  rounded-2xl'>
        <div className='w-full md:max-w-2xl mx-auto '>
          <div className=' flex justify-center items-center gap-1 md:gap-3'>
          <img src={Coffee} alt="" className='w-6 sm:w-10 ' />
            <h1 className='text-base md:text-3xl text-[#492201] font-black text-center '>Welcome </h1>
            <img src={Coffee} alt="" className='w-6 sm:w-10' />
          </div>
          <p className='text-[10px] md:text-base font-bold text-justify text-align-last-center mt-2  capitalize text-[#241515]'>
            welcome to the  <strong className='text-[#f2e7df] font-black '>Seasons</strong> ,
            where every visit feels like a journey through the year. Our coffee shop is uniquely designed
            to immerse you in the essence of the four seasons, whether you're in the mood for comfortable
            winter warmth, booming spring freshness, sunny summer vibration, or autumn comfort. At Seasons,
            we pair season-inspired drinks with an atmosphere that changes according to your mood, offering
            you a dynamic and refreshing coffee experience like nature itself. Come explore and let the
            atmosphere of each season enhance your coffee experience.
          </p>
        </div>
        <img src={GrainN} className='absolute bottom-4 right-0 w-[200px]  opacity-25' alt="" />

      </article>

      <article className='md:max-w-5xl mx-auto my-5  p-3 bg-[#c1905a]  shadow-[0px_0px_15px_0px_#492201] relative  rounded-2xl'>
        <div className='w-full md:max-w-2xl mx-auto '>
          <div className=' flex justify-center items-center gap-1 md:gap-3'>
          <img src={Coffee} alt="" className='w-6 sm:w-10 ' />
            <h1 className='text-base md:text-3xl text-[#492201] font-black text-center '>What We Provide ? </h1>
            <img src={Coffee} alt="" className='w-6 sm:w-10' />
          </div>
          <p className='text-[10px] md:text-base font-bold text-justify text-align-last-center mt-2  capitalize text-[#241515]'>
            At  <strong className='text-[#f2e7df] font-black '>Seasons</strong> ,
            we bring the essence of the four seasons to life. Enjoy uniquely themed rooms with authentic seasonal
            weather—whether it's the warmth of summer, the cool breeze of autumn, the chill of winter, or the
            freshness of spring. Pair your experience with a variety of drinks, from hot and warm to cold, to
            match the mood. We've also added immersive effects like the sound of rain, chirping birds, autumn winds,
            and beach waves, so you can truly experience any season you miss.
          </p>
        </div>
        <img src={topCup} className='absolute top-1/2 -translate-y-1/2 -left-4  w-[180px]  opacity-35' alt="" />

      </article>

      <article className='md:max-w-5xl mx-auto my-5  p-3 bg-[#c1905a]  shadow-[0px_0px_15px_0px_#492201]   rounded-2xl'>
        <div className='w-full md:max-w-2xl mx-auto '>
          <div className=' flex justify-center items-center gap-1 md:gap-3'>
          <img src={Coffee} alt="" className='w-6 sm:w-10 ' />
            <h1 className='text-base md:text-3xl text-[#492201] font-black text-center '>How is That ?</h1>
            <img src={Coffee} alt="" className='w-6 sm:w-10' />
          </div>
          <p className='text-[10px] md:text-base font-bold text-justify text-align-last-center mt-2  capitalize text-[#241515]'>
            At  <strong className='text-[#f2e7df] font-black '>Seasons</strong>, each room is themed to represent a different season. Guests can choose a room based on their favorite
            season and enjoy an experience that reflects that time of year.
          </p>

        </div>
        <p className='text-base md:text-xl font-bold text-[#492201] text-center mt-3 capitalize'> click on the button for more details :</p>
        <div className='flex justify-center items-center mt-4'>
          <button
            onClick={OpenRooms}
            className='px-4 md:px-6 py-2 md:py-3  overflow-hidden rounded-xl bg-[#613c23ba] hover:scale-110 duration-300
       relative before:absolute before:content-[""] before:w-0 before:h-full before:bg-[#462713ba] hover:before:w-full before:duration-500 before:top-0 before:left-0
      text-white text-sm md:text-base font-bold before:-z-10'>Show Me the Rooms !</button>
        </div>


      </article>

      <article className='md:max-w-5xl mx-auto my-5 pb-6  p-3 bg-[#c1905a]  shadow-[0px_0px_15px_0px_#492201] relative  rounded-2xl'>
        <div className='w-full md:max-w-2xl mx-auto '>
          <div className=' flex justify-center items-center gap-1 md:gap-3'>
            <img src={Coffee} alt="" className='w-6 sm:w-10 ' />
            <h1 className='text-base md:text-3xl text-[#492201] font-black text-center '>Why Us?</h1>
            <img src={Coffee} alt="" className='w-6 sm:w-10' />
          </div>
        
        
          <ul className='flex mx-auto flex-col  gap-2 mt-4 text-[10px] font-semibold md:text-base text-[#241515]'>
            {whyUs.map((item, index) => (
              <li key={index} className='flex gap-3 items-center capitalize'>
                <img src={beans} className='w-4 sm:w-6 ' alt="" />
                {item}
              </li>
            ))}

          </ul>
        
        </div>
        <img src={liquidCoffee} className='absolute top-1/2 left-4 w-[200px]   opacity-15 md:opacity-25' alt="" />

      </article>

     
      {rooms &&
        <div className='fixed top-0 left-0 w-full h-full bg-black/85 flex justify-center items-center  '>
          <div className='w-[95%] md:w-4/5 bg-white p-2 md:p-10 rounded-xl md:rounded-2xl relative shadow-[0px_0px_10px_5px_#d2b48c8c]  '>
            <button className='absolute top-2 right-2 '
              onClick={CloseRooms}><img src={Close} className='w-7 md:w-10' alt="" /></button>
            <div className='grid grid-cols-4 gap-2 md:gap-6 mt-8 md:mt-6'>
              <div className='col-span-2  p-1  rounded-lg  bg-[#b0e0e6] relative border-2 md:border-4  hover:scale-105 md:hover:scale-110 duration-500'>
                <img src={ice} alt="" className='absolute  bottom-0 md:bottom-2 right-0 md:right-2 w-12 md:w-24 opacity-40 md:opacity-70' />
                <img src={ice} alt="" className='absolute top-1 left-2 w-6 md:w-10 opacity-40' />
                <h1 className='text-end text-sm md:text-xl font-black text-[#7fbcc4]'>Winter </h1>

                <ul className=' text-xs md:text-base font-semibold text-[#5d98a0] mt-4'>
                  <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Room} className='w-4 md:w-6 opacity-80' alt="" />Cold </li>
                  <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Sound} className='w-4 md:w-6 opacity-80' alt="" />Rain  </li>
                  <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Music} className='w-4 md:w-6 opacity-80' alt="" />calm </li>
                  <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Drink} className='w-4 md:w-6 opacity-80' alt="" />Warm</li>
                </ul>
              </div>

              <div className='col-span-2  p-1 rounded-lg  bg-[#98FF98] relative border-2 md:border-4  hover:scale-105 md:hover:scale-110 duration-500'>
                <img src={leaf} alt="" className='absolute bottom-1 md:bottom-2 right-0 md:right-2 w-12 md:w-24 opacity-40 md:opacity-70' />
                <img src={leaf} alt="" className='absolute top-1 left-2 w-6 md:w-10 opacity-40' />
                <h1 className='text-end text-sm md:text-xl font-black text-[#6ec76e]'>Spring</h1>
                <ul className=' text-xs md:text-base font-semibold text-[#55a955] mt-4'>
                  <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Room} className='w-4 md:w-6 opacity-80' alt="" />fresh </li>
                  <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Sound} className='w-4 md:w-6 opacity-80' alt="" />bird  </li>
                  <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Music} className='w-4 md:w-6 opacity-80' alt="" />Classical </li>
                  <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Drink} className='w-4 md:w-6 opacity-80' alt="" />Mixed </li>
                </ul>
              </div>

              <div className='col-span-2  p-1  rounded-lg  bg-[#FFDE4D] relative border-2 md:border-4  hover:scale-105 md:hover:scale-110 duration-500'>
                <img src={sun} alt="" className='absolute bottom-0 md:bottom-2 right-0 md:right-2 w-12 md:w-24 opacity-40 md:opacity-70' />
                <img src={sun} alt="" className='absolute top-1 left-2 w-6 md:w-10 opacity-40' />
                <h1 className='text-end  text-sm md:text-xl font-black text-[#FFB22C]'>Summer </h1>
                <ul className=' text-xs md:text-base font-semibold text-[#eba730] mt-4'>
                  <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Room} className='w-4 md:w-6 opacity-80' alt="" />Hot </li>
                  <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Sound} className='w-4 md:w-6 opacity-80' alt="" />beach </li>
                  <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Music} className='w-4 md:w-6 opacity-80' alt="" />Pop </li>
                  <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Drink} className='w-4 md:w-6 opacity-80' alt="" />Cold </li>
                </ul>
              </div>
              <div className='col-span-2  p-1 rounded-lg bg-[#FFAD60] relative border-2 md:border-4  hover:scale-105 md:hover:scale-110 duration-500'>
                <img src={mapleLeaf} alt="" className='absolute bottom-1 md:bottom-2 right-0 md:right-2 w-12 md:w-24 opacity-40 md:opacity-70' />
                <img src={mapleLeaf} alt="" className='absolute top-1 left-2 w-6 md:w-10 opacity-40' />
                <h1 className='text-end text-base md:text-xl font-black text-[#e48a36]'>Autumn </h1>
                <ul className=' text-xs md:text-base font-semibold text-[#e48a36] mt-4'>
                  <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Room} className='w-4 md:w-6 opacity-80' alt="" />Warm </li>
                  <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Sound} className='w-4 md:w-6 opacity-80' alt="" />Thunder </li>
                  <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Music} className='w-4 md:w-6 opacity-80' alt="" />Pop </li>
                  <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Drink} className='w-4 md:w-6 opacity-80' alt="" />Mixed </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  )
}

export default About