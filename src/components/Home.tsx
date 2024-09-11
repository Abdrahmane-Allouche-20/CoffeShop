import React from 'react'
import './home.css'
import HomeBG from '../assets/homeBG.svg'
import cup from '../assets/cup-of-coffee.png'
import coffeeGrain from '../assets/grain-coffee.png'
import favOne from '../assets/favone.png'
import favTwo from '../assets/favtwo.png'
import favThree from '../assets/favthree.png'
import Shape from '../assets/makeshape.svg'
import twoCups from '../assets/illustration-concept-tasse-cafe.png'
import arrowRight from '../assets/arrow-right.png'
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from "gsap";
function Home() {
  gsap.registerPlugin(useGSAP,ScrollTrigger);
  useGSAP(()=>{
    const tl = gsap.timeline({ defaults: { opacity: 0, duration: 0.4 } });

    tl.from('#landingPage', { x: -400 })
      .from('#title', { x: -100 })
      .from('#description', { y: 100 })
      .to('#WhoWeAre', { opacity: 1 })
      .from('#cupShape', { x: 100, scale: 0 })
      .from('#cup', { scale: 0 })
      .to('#grain', { scale: 1, opacity: 1 });

    const tl2 = gsap.timeline({
      scrollTrigger: {
        
        trigger: '#landingPage',
        start: 'bottom center',
        endTrigger: '#drinks',
        end: 'top center',
        
      }
    });

    tl2.from('#drinks', { x: -100 })
      .from('#twoCups', { x: 1000 })
      .from('#fav', { scale: 0 })
      .from('#favText', { y: 100 })
      .from('#favorites', { x: -500 });

 
  },[])
  return (
    <div>
    <section id='landingPage' className='max-w-6xl mx-auto my-3 md:my-10 '>
      <div className="flex  mx-auto w-[95%] md:w-full justify-between shadow-[0px_0px_15px_0px_#492201] rounded-2xl  bg-[#c1905a] p-3 md:p-10">
      <div className='md:basis-1/2 '>
      <h1 id='title' className='text-[#e7d7c1] font-black text-[23px] md:text-5xl'><span className='text-[#492201]'>Seasons:</span> Where Every Sip Tells a Story</h1> 
      <p id='description' className='opacity-55 text-[#784f2f] font-bold text-[10px]  md:text-base mt-2 md:mt-5 w-[90%] md:w-[80%] leading-5 md:leading-7'>
      At <strong className='text-[#492201]'>Seasons</strong> , we bring the beauty of all four seasons to your coffee experience. Enjoy drinks and 
      an atmosphere inspired by winter's warmth, spring's freshness, summer's vibrance, and fall's 
      coziness—all year round. Sip, relax, and let the changing seasons enhance every visit.
      </p>
      <button id='WhoWeAre' className='bg-[#492201] text-[#c1905a] px-3 md:px-4 py-1.5 md:py-2.5 rounded-xl overflow-hidden text-base md:text-2xl lg:text-xl font-bold mt-4 relative 
     before:absolute before:top-1/2 before:-translate-y-1/2 before:-translate-x-1/2 before:left-1/2 before:rounded-xl before:bg-white before:w-0 before:h-0 before:content-[""] before:duration-500
transition-all duration-100 hover:before:h-full hover:before:w-full z-20 before:-z-10 hover:text-[#492201]
 hover:scale-105 hover:rotate-6 opacity-0 '>
  Who We Are?
</button>
      </div>
      <div className='flex-1 flex justify-center items-center relative'>
        <img id='cup' src={cup} className='hidden md:block w-1/2 z-20' alt="" />
        <div className='  hidden md:block absolute w-[400px] h-[400px]  top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>
        <img id='cupShape' src={HomeBG} className='rounded-full ' alt="" />
        </div>
        <div className='absolute w-[150px] z-30 h-[150px]  bottom-0 right-0 opacity-30'>
        <img id='grain' src={coffeeGrain} className='rounded-full  scale-0' alt="" /></div>
      </div>
      </div>
      </section>

      <section id='drinks' className='max-w-5xl mx-auto rounded-lg md:rounded-3xl relative mb-[80px] md:mb-[0px] mt-[120px] md:mt-[150px] h-[105px] md:h-[220px] bg-[#c1905a]  shadow-[0px_0px_15px_0px_#492201] '>
        <div className='md:w-full w-[95%]'></div>
      <img src={Shape} alt="" className='absolute  md:block hidden -bottom-20 -right-[70px] z-20 w-[100px] md:w-[250px]' />
      <img id='twoCups' src={twoCups} alt="" className='absolute md:block hidden -bottom-20 -right-14 z-20 w-[200px]' />

      <div className="flex justify-between gap-3 mx-auto w-full  md:w-[70%] relative  z-20 ">
      
      <div className='text-center absolute -top-6 md:-top-8 left-2'>
          <div id='fav'  className='mx-auto flex justify-center items-center rounded-full w-[60px] h-[60px] md:h-[150px] md:w-[150px] shadow-[0px_0px_15px_0px_#3B2F2F] bg-[#e3ca9c]'>
             <img src={favOne} alt="" className='w-[40px] md:w-[90px]'/>
          </div>
          <div id='favText' className='mt-4'>
          <h1 className='text-sm md:text-2xl text-[#59260B] font-bold'>Espresso</h1>
         <div className="flex justify-center gap-1 md:gap-3 items-center cursor-pointer">
           <h1 className='text-xs md:text-xl font-semibold text-[#F5F5DC]'>see more</h1>
           <img src={arrowRight} alt="" className='w-5 md:w-7 mt-0.5 md:mt-1.5' />
           </div>
          </div>
        </div>

        <div  className='text-center absolute -top-10 md:-top-14 left-1/2 -translate-x-1/2'>
          <div id='fav' className=' flex justify-center items-center rounded-full w-[70px] h-[70px] md:h-[190px] md:w-[190px] shadow-[0px_0px_15px_0px_#3b2f2f]  bg-[#e3ca9c]'>
             <img src={favTwo} alt="" className='w-[60px] md:w-[140px] '/>
          </div>
         <div id='favText' className='mt-4'>
          <h1 className='text-sm md:text-2xl text-[#59260B] font-bold'>Cappuccino</h1>
         <div className="flex justify-center gap-1 md:gap-3 items-center cursor-pointer">
           <h1 className='text-xs md:text-xl font-semibold text-[#F5F5DC]'>see more</h1>
           <img src={arrowRight} alt="" className='w-5 md:w-7 mt-0.5 md:mt-1.5' />
           </div>
          </div>
        </div>
        <div  className='text-center absolute -top-6 md:-top-8 right-2'>
          <div id='fav' className='mx-auto flex justify-center items-center rounded-full w-[60px] h-[60px] md:h-[150px] md:w-[150px] shadow-[0px_0px_15px_0px_#3B2F2F] bg-[#e3ca9c]'>
             <img src={favThree} alt="" className='w-[48px] md:w-[100px]'/>
          </div>
          <div id='favText' className='mt-4'>
          <h1 className='text-sm md:text-2xl text-[#59260B] font-bold'>Latte</h1>
         <div className="flex justify-center gap-1 md:gap-3 items-center cursor-pointer">
           <h1 className='text-xs md:text-xl font-semibold text-[#F5F5DC]'>see more</h1>
           <img src={arrowRight} alt="" className='w-5 md:w-7 mt-0.5 md:mt-1.5' />
           </div>
          </div>
        </div>
        
      </div>
      <h1 id='favorites' className='favorite text-[60px] md:text-[200px] text-[#e0c3a5cf] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 '>FAVORITES</h1>
      
      </section>
    </div>
  
  )
}

export default Home