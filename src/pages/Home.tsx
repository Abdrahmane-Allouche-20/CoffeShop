import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FavoriteItem from '../components/FavoriteItem'
import gsap from "gsap";
import {twoCups,Shape,favOne,favThree,favTwo,coffeeGrain,cup,HomeBG} from '../assets/image'
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
    });

  

  return (
    <div>
    <section id='landingPage' className='max-w-6xl flex flex-col justify-between sm:h-screen h-[55vh] mx-auto my-3 md:my-10 '>
      <div className="flex  mx-auto w-[95%] md:w-full justify-between shadow-[0px_0px_15px_0px_#492201] rounded-2xl  bg-[#c18f5aa1] p-3 md:p-10">
      <div className='md:basis-1/2 '>
      <h1 id='title' className='text-[#e7d7c1] font-black text-base md:text-5xl'><span className='text-[#492201]'>Seasons:</span> Where Every Sip Tells a Story</h1> 
      <p id='description' className=' text-[#764c2c] font-bold text-[10px]  md:text-base mt-2 md:mt-5 w-[90%] md:w-[80%] leading-5 md:leading-7'>
      At <strong className='text-[#492201]'>Seasons</strong> , we bring the beauty of all four seasons to your coffee experience. Enjoy drinks and 
      an atmosphere inspired by winter's warmth, spring's freshness, summer's vibrance, and fall's 
      coziness—all year round. Sip, relax, and let the changing seasons enhance every visit.
      </p>
      <button id='WhoWeAre' className='bg-[#492201] hover:scale-105 duration-200 transform text-[#c1905a] p-1.5 rounded-lg text-sm sm:text-xl font-bold mt-4  '>
  Who We Are?
</button>
      </div>

      <div className='flex-1 flex justify-center items-center relative'>
        <img id='cup' src={cup} className='hidden md:block w-1/2 z-20' alt="" />

        <div className='  hidden md:block absolute w-[400px] h-[400px]  top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2'>

        <img id='cupShape' src={HomeBG} className='rounded-full ' alt="" />
        </div>
        <div className='absolute w-[150px] z-30 h-[150px]  bottom-0 right-0 opacity-30'>
        <img id='grain' src={coffeeGrain} className='rounded-full  ' alt="" /></div>
      </div>
      </div>
      </section>

      <section className='max-w-5xl mx-auto rounded-lg md:rounded-3xl relative mb-20 md:mb-0 h-[105px] md:h-[220px] bg-[#c1905a] shadow-[0px_0px_15px_0px_#492201]'>
        <img src={Shape} alt="Decor shape" className='absolute md:block hidden -bottom-20 -right-[70px] z-20 w-[100px] md:w-[250px]' />
        <img src={twoCups} alt="Two cups" className='absolute md:block hidden -bottom-20 -right-14 z-20 w-[200px]' />

        <div className="flex justify-between gap-3 mx-auto w-full md:w-[70%] relative z-20">
          {/* Favorite 1 */}
          <FavoriteItem
            image={favOne}
            title="Espresso"
            top="-top-6 md:-top-8"
            side="left-2"
            size="w-[60px] h-[60px] md:w-[150px] md:h-[150px]"
            imgSize="w-[40px] md:w-[90px]"
          />

          {/* Favorite 2 */}
          <FavoriteItem
            image={favTwo}
            title="Cappuccino"
            top="-top-10 md:-top-14"
            side="left-1/2 -translate-x-1/2"
            size="w-[70px] h-[70px] md:w-[190px] md:h-[190px]"
            imgSize="w-[60px] md:w-[140px]"
          />

          {/* Favorite 3 */}
          <FavoriteItem
            image={favThree}
            title="Latte"
            top="-top-6 md:-top-8"
            side="right-2"
            size="w-[60px] h-[60px] md:w-[150px] md:h-[150px]"
            imgSize="w-[48px] md:w-[100px]"
          />
        </div>

        <h1 className='text-[60px] md:text-[200px] text-[#e0c3a55b] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
          FAVORITES
        </h1>
      </section>
    </div>
  
  )
}

export default Home