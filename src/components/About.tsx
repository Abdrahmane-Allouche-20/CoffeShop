import { useState ,useRef} from 'react'
import './about.css'
import cup from '../assets/coffee-cup.png'
import Grain from '../assets/cafe-ai-genere.png'
import GrainN from '../assets/grains-cafe-levitent-fond-blanc.png'
import Drinks from '../assets/drinks.png'
import topCup from '../assets/TOPcup.png'
import late from '../assets/latte-art.png'
import ice from "../assets/snowflake.png"
import liquidCoffee from '../assets/liquideCoffe.png' 
import leaf from "../assets/leaf.png"
import sun from "../assets/sun.png"
import mapleLeaf from "../assets/maple-leaf.png"
import Room from '../assets/living-room.png'
import Sound from '../assets/wave-sound.png'
import Music from '../assets/music.png'
import Drink from '../assets/soda.png'
import beans from '../assets/coffee-beans.png'
import espresso from '../assets/expresso.png'
import Close from '../assets/icons8-close.svg'
import cappuccino from  '../assets/capuccino.png'
import CoffeeWitGrain from '../assets/coffeewithgrains.png'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap";

function About() {
  const [rooms,showRooms]=useState(false)
  function OpenRooms(){
    showRooms(true)
  }
  function CloseRooms(){
    showRooms(false)
  }
  const title=useRef<HTMLElement[]>([])
const sections = useRef<HTMLElement[]>([]);
const leftCups=useRef<HTMLElement[]>([])
const RightCups = useRef<HTMLElement[]>([]);
const descriptions=useRef<HTMLElement[]>([]);
gsap.registerPlugin(useGSAP,ScrollTrigger);


useGSAP(() => {
  sections.current.forEach((section, index) => {
    // Animate section
    gsap.fromTo(
      section,
      { opacity: 0, scale: 0.9 },
      {
        opacity: 1,
        scale: 1,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate title
    gsap.fromTo(
      title.current[index],
      { opacity: 0, scale: 0.9, y: -100 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate left cups
    gsap.fromTo(
      leftCups.current[index],
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate right cups
    gsap.fromTo(
      RightCups.current[index],
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate descriptions
    gsap.fromTo(
      descriptions.current[index],
      { opacity: 0, y: -100 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: 'top 75%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Animate each list item inside the list
    
  });
}, []);


// Animate the button on hover



  return (
    <div>
    <section ref={el =>sections.current[0]=el!} className='overflow-hidden w-[95%] md:max-w-6xl mx-auto my-5 md:my-10 p-3 md:p-6 bg-[#c1905a]  shadow-[0px_0px_15px_0px_#492201] relative  rounded-3xl'>
      <div className='w-full md:max-w-2xl mx-auto z-40'>
      <div className=' flex justify-center items-center gap-1 md:gap-3'>
        <img ref={el=>leftCups.current[0]=el!} src={cup} alt="" className='w-10 md:w-14 mb-2 md:mb-3'/>
      <h1 ref={el=>title.current[0]=el!} className='text-2xl md:text-5xl text-[#492201] font-black text-center '>Welcome </h1>
      <img  ref={el=>RightCups.current[0]=el!} src={cup} alt="" className='w-10 md:w-14 mb-2 md:mb-3'/>
      </div>
      <p  ref={el=>descriptions.current[0]=el!} className='text-[10px] md:text-lg font-bold text-justify text-align-last-center mt-2 md:mt-4 capitalize text-[#241515]'>
      welcome to the  <strong className='text-[#f2e7df] font-black text-xs md:text-xl'>Seasons</strong> , 
      where every visit feels like a journey through the year. Our coffee shop is uniquely designed 
      to immerse you in the essence of the four seasons, whether you're in the mood for comfortable
       winter warmth, booming spring freshness, sunny summer vibration, or autumn comfort. At Seasons,
        we pair season-inspired drinks with an atmosphere that changes according to your mood, offering
         you a dynamic and refreshing coffee experience like nature itself. Come explore and let the 
         atmosphere of each season enhance your coffee experience.
      </p>
      </div>
      <img src={GrainN} className='absolute bottom-0 right-0 w-[150px] md:w-2/5 opacity-25' alt="" />
      <img src={Grain} className='absolute top-1/2 -translate-y-1/2 left-0 w-[120px] md:w-1/5 opacity-15 md:opacity-35' alt="" />
    </section>
    <section  ref={el =>sections.current[1]=el!} className='overflow-hidden  w-[95%] md:max-w-6xl mx-auto my-5 md:my-10 p-3 md:p-6 bg-[#ba9e79]  shadow-[0px_0px_15px_0px_#492201] relative  rounded-3xl'>
      <div className='w-full md:max-w-2xl mx-auto z-40'>
      <div className=' flex flex-wrap justify-center items-center gap-0 md:gap-3'>
        <img ref={el=>leftCups.current[1]=el!} src={late} alt="" className='w-8 md:w-14 mb-1 md:mb-2'/>
      <h1 ref={el=>title.current[1]=el!} className='text-base  md:text-5xl text-[#492201] font-black text-center '>What We Provide ?</h1>
      <img ref={el=>RightCups.current[1]=el!} src={late} alt="" className='w-8 md:w-14  mb-1 md:mb-2'/>
      </div>
      <p ref={el=>descriptions.current[1]=el!} className='text-[10px] md:text-lg font-bold text-justify text-align-last-center mt-2 md:mt-4 capitalize text-[#241515]'>
      At <strong className='text-[#f2e7df] font-black text-xs md:text-xl'>Seasons</strong>, 
      we bring the essence of the four seasons to life. Enjoy uniquely themed rooms with authentic seasonal
       weather—whether it's the warmth of summer, the cool breeze of autumn, the chill of winter, or the 
       freshness of spring. Pair your experience with a variety of drinks, from hot and warm to cold, to 
       match the mood. We've also added immersive effects like the sound of rain, chirping birds, autumn winds,
        and beach waves, so you can truly experience any season you miss.
      </p>
      </div>
      <img src={Drinks} className='absolute bottom-0 md:-bottom-10 right-0 w-[150px] opacity-25' alt="" />
      <img src={topCup} className='absolute top-1/2 -translate-y-1/2 -left-4 md:-left-8 w-[130px] md:w-[30%] opacity-25 md:opacity-35' alt="" />
    </section>
    <section  ref={el =>sections.current[2]=el!} className='overflow-hidden w-[95%] md:max-w-6xl mx-auto my-5 md:my-10 p-3 md:p-6 bg-[#f3ddc1]  shadow-[0px_0px_15px_0px_#492201] relative  rounded-3xl'>
      <div className='w-full md:max-w-2xl mx-auto z-40'>
      <div className=' flex justify-center items-center gap-1 md:gap-3'>
        <img ref={el=>leftCups.current[2]=el!} src={cappuccino} alt="" className='w-8 md:w-14 mb-1 md:mb-2'/>
      <h1 ref={el=>title.current[2]=el!} className='text-xl  md:text-5xl text-[#492201] font-black text-center '>How is That ?</h1>
      
      <img ref={el=>leftCups.current[2]=el!} src={cappuccino} alt="" className='w-8 md:w-14 mb-1 md:mb-2'/>
      </div>
      <p ref={el=>descriptions.current[2]=el!} className='text-[10px] md:text-lg font-bold text-justify text-align-last-center   mt-4 capitalize text-[#241515]'>
      at <strong className='text-[#492201] font-black text-xs md:text-xl'>Seasons</strong>, each room is themed to represent a different season. Guests can choose a room based on their favorite
       season and enjoy an experience that reflects that time of year.
        </p>
       <p className='text-base md:text-2xl font-bold text-[#492201] text-center mt-3 capitalize'> click on the button for more details</p>
       <div className='flex justify-center items-center mt-4'> 
        <button 
        onClick={OpenRooms}
      className='px-4 md:px-6 py-2 md:py-3  overflow-hidden rounded-xl bg-[#734222] hover:scale-110 duration-300
       relative before:absolute before:content-[""] before:w-0 before:h-full before:bg-[#462713ba] hover:before:w-full before:duration-500 before:top-0 before:left-0
      text-white text-sm md:text-lg font-bold before:-z-10'>Show Me the Rooms !</button>
       </div>
      </div>
    
    </section>
    <section  ref={el =>sections.current[3]=el!} className='overflow-hidden w-[95%]  mb-[80px] md:mb-[0px]  md:max-w-6xl mx-auto my-5 md:my-10 p-3 md:p-6 bg-[#F5F5DC]  shadow-[0px_0px_15px_0px_#492201] relative  rounded-3xl'>
      <div className='w-full md:max-w-3xl mx-auto z-40'>
      <div className=' flex flex-wrap justify-center items-center gap-2 md:gap-3'>
        <img ref={el=>leftCups.current[3]=el!} src={espresso} alt="" className='w-8 md:w-14 mb-1 md:mb-2'/>
      <h1 ref={el=>title.current[3]=el!} className='text-lg  md:text-5xl text-[#492201] font-black text-center '>Why Us?</h1>
      <img  ref={el=>RightCups.current[3]=el!} src={espresso} alt="" className='w-8 md:w-14 mb-1 md:mb-2'/>
      </div>
      <p  ref={el=>descriptions.current[3]=el!} className='text-[10px] md:text-lg font-bold text-justify text-align-last-center mt-2 md:mt-4 capitalize text-[#7B3F00]'>
      At <strong className='text-[#241515] font-black text-xs md:text-xl'>Seasons</strong>, we’re dedicated to offering our cherished clients a one of a kind experience you won’t find 
      anywhere else. We go the extra mile to provide those special touches that make your time with us truly 
      memorable. From unique seasonal room themes to thoughtful, personalized details, we ensure every aspect
      of your visit is exceptional. It’s all about those little things that make a big difference and create
      a lasting impression.
      </p>
      <ul className='flex mx-auto flex-col w-[95%] md:w-4/5 gap-2 mt-4 text-[10px] md:text-lg font-bold text-[#5C4033]'>
        <li  className='flex gap-1.5 md:gap-3  items-center capitalize'><img src={beans} className='w-5 md:w-7 mb-2' alt="" /> Special rooms for only you and your family </li>
        <li  className='flex gap-3 items-center capitalize'><img src={beans} className='w-4 md:w-7 mb-1 md:mb-2' alt="" />Unmatched speed in service delivery.</li>
        <li  className='flex gap-3 items-center capitalize'><img src={beans} className='w-4 md:w-7 mb-1 md:mb-2' alt="" />Brewed to perfection with the finest coffee beans.</li>
        <li  className='flex gap-3 items-center capitalize'><img src={beans} className='w-4 md:w-7 mb-1 md:mb-2' alt="" />Seasons is a place that feels like home</li>
        <li  className='flex gap-3 items-center capitalize'><img src={beans} className='w-4 md:w-7 mb-1 md:mb-2' alt="" />exceptional care, like never before</li>
        <li  className='flex gap-3 items-center capitalize'><img src={beans} className='w-4 md:w-7 mb-1 md:mb-2' alt="" />A relaxing and peaceful ambiance</li>
      </ul>
      </div>
      <img src={liquidCoffee} className='absolute top-5 md:top-0 -right-1 md:right-0 w-[200px]  md:w-2/5 opacity-15 md:opacity-25' alt="" />
      <img src={CoffeeWitGrain} className='absolute bottom-0 -left-0 w-[200px] md:w-1/2 opacity-25 md:opacity-35' alt="" />
    </section>
    {rooms && 
    <div className='fixed top-0 left-0 w-full h-full bg-black/85 flex justify-center items-center  '>
    <div className='w-[95%] md:w-4/5 bg-white p-2 md:p-10 rounded-xl md:rounded-2xl relative shadow-[0px_0px_10px_5px_#d2b48c8c]  '>
    <button className='absolute top-2 right-2 '
    onClick={CloseRooms}><img src={Close} className='w-7 md:w-10' alt="" /></button>
    <h1 className='absolute text-[78px]   md:text-[290px] text-[#d2b48c8c] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>ROOMS</h1>
    <h1 id='rooms' className='absolute text-[78px]   md:text-[290px] top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>ROOMS</h1>
    <div className='grid grid-cols-4 gap-2 md:gap-6 mt-8 md:mt-6'>
        <div className='col-span-2  p-1 md:p-2 rounded-lg md:rounded-2xl bg-[#b0e0e6] relative border-2 md:border-4 border-[#83b6bd] shadow-[0px_0px_13px_3px_#83b6bd] hover:scale-105 md:hover:scale-110 duration-500'>
         <img src={ice} alt=""  className='absolute  bottom-0 md:bottom-2 right-0 md:right-2 w-12 md:w-24 opacity-40 md:opacity-70'/>
         <img src={ice} alt=""  className='absolute top-2 left-2 w-6 md:w-10 opacity-40'/>
         <h1 className='text-end text-base md:text-2xl font-black text-[#7fbcc4]'>Winter </h1>
         <ul className=' text-xs md:text-lg font-semibold text-[#5d98a0] mt-4'>
         <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Room} className='w-4 md:w-6 opacity-80' alt="" />Cold Room</li> 
         <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Sound} className='w-4 md:w-6 opacity-80' alt="" />Rain Tweeting </li>
         <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Music} className='w-4 md:w-6 opacity-80' alt="" />calm Music</li>  
         <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Drink} className='w-4 md:w-6 opacity-80' alt="" />Hot Drinks</li>  
         </ul>
        </div>
        <div className='col-span-2  p-1 md:p-2 rounded-lg md:rounded-2xl bg-[#98FF98] relative border-2 md:border-4 border-[#76d576] shadow-[0px_0px_13px_3px_#76d576] hover:scale-105 md:hover:scale-110 duration-500'>
        <img src={leaf} alt=""  className='absolute bottom-1 md:bottom-2 right-0 md:right-2 w-12 md:w-24 opacity-40 md:opacity-70'/>
        <img src={leaf} alt=""  className='absolute top-2 left-2 w-6 md:w-10 opacity-40'/>
         <h1 className='text-end text-base md:text-2xl font-black text-[#6ec76e]'>Spring</h1>
         <ul className=' text-xs md:text-lg font-semibold text-[#55a955] mt-4'>
         <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Room} className='w-4 md:w-6 opacity-80' alt="" />fresh Room</li> 
         <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Sound} className='w-4 md:w-6 opacity-80' alt="" />bird Tweeting </li>
         <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Music} className='w-4 md:w-6 opacity-80' alt="" />Classical Music</li>  
         <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Drink} className='w-4 md:w-6 opacity-80' alt="" />Mixed Drinks</li>  
         </ul>
        </div>
        <div className='col-span-2  p-1 md:p-2 rounded-lg md:rounded-2xl bg-[#FFDE4D] relative border-2 md:border-4 border-[#eacd3d] shadow-[0px_0px_13px_3px_#eacd3d] hover:scale-105 md:hover:scale-110 duration-500'>
        <img src={sun} alt=""  className='absolute bottom-0 md:bottom-2 right-0 md:right-2 w-12 md:w-24 opacity-40 md:opacity-70'/>
        <img src={sun} alt=""  className='absolute top-2 left-2 w-6 md:w-10 opacity-40'/>
         <h1 className='text-end  text-base md:text-2xl font-black text-[#FFB22C]'>Summer </h1>
         <ul className=' text-xs md:text-lg font-semibold text-[#eba730] mt-4'>
         <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Room} className='w-4 md:w-6 opacity-80' alt="" />Hot Room</li> 
         <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Sound} className='w-4 md:w-6 opacity-80' alt="" />beach Sounds</li>
         <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Music} className='w-4 md:w-6 opacity-80' alt="" />Pop Music</li>  
         <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Drink} className='w-4 md:w-6 opacity-80' alt="" />Cold Drinks</li>  
         </ul>
        </div>
        <div className='col-span-2  p-1 md:p-2 rounded-lg md:rounded-2xl bg-[#FFAD60] relative border-2 md:border-4 border-[#f59e4c] shadow-[0px_0px_13px_3px_#f59e4c] hover:scale-105 md:hover:scale-110 duration-500'>
        <img src={mapleLeaf} alt=""  className='absolute bottom-1 md:bottom-2 right-0 md:right-2 w-12 md:w-24 opacity-40 md:opacity-70'/>
        <img src={mapleLeaf} alt=""  className='absolute top-2 left-2 w-6 md:w-10 opacity-40'/>
         <h1 className='text-end text-base md:text-2xl font-black text-[#e48a36]'>Autumn </h1>
         <ul className=' text-xs md:text-lg font-semibold text-[#e48a36] mt-4'>
         <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Room} className='w-4 md:w-6 opacity-80' alt="" />Warm Room</li> 
         <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Sound} className='w-4 md:w-6 opacity-80' alt="" />Thunder Sounds</li>
         <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Music} className='w-4 md:w-6 opacity-80' alt="" />Pop Music</li>  
         <li className='flex items-center gap-1 md:gap-4 mt-2'><img src={Drink} className='w-4 md:w-6 opacity-80' alt="" />Mixed Drinks</li>
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