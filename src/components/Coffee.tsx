import { useContext, useState ,useRef} from "react";
import CoffeeCupTitle from "../assets/CoffeTitle.png";
import { CoffeeContext } from "../context/context";
import Sugar from "../assets/coffee-bag.png";
import "./Contact.css";
import Sizes from "../assets/coffee.png";
import fire from "../assets/fire.png";
import ice from "../assets/ice-cube.png";
import CoffeeAnimation from '../assets/coffeeAnimation.gif'

import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
function Coffee() {
  const [Coffee, setCoffee] = useState(true);
  
  gsap.registerPlugin(useGSAP,ScrollTrigger)
  const hotCoffees=useRef<HTMLDivElement[]>([])
  const IcedCoffees=useRef<HTMLDivElement[]>([])
  function handleAnimation() {
    const coffeeItems = Coffee ? hotCoffees.current : IcedCoffees.current;
    
    coffeeItems.forEach((coffee) => {
      gsap.fromTo(
        coffee,
        {
          x: 100,
          opacity: 0,
          scale: 0,
        },
        {
      
          x: 0,
          opacity: 1,
          scale: 1,
          duration: 1.5,
        }
      );
    });
    
  }
  
  useGSAP(()=>{
  
    
    gsap.from('#title',{
      x:-100,
      duration:0.5,
      opacity:1
  })
  handleAnimation()
  },[])
  const { loading, hotCoffee, icedCoffee } = useContext(CoffeeContext) || {
    loading: true,
    hotCoffee: [],
    icedCoffee: []
  };

  return (
    <section className="w-[95%] mb-[80px] md:mb-[0px] md:max-w-6xl mx-auto my-4 md:my-10 ">
      
      
      <div className=" shadow-[0px_0px_15px_0px_#492201] rounded-xl md:rounded-2xl  bg-[#c1905a] p-2 md:p-10">
      <h1 id="title" className="text-2xl md:text-4xl text-[#492201] font-black flex items-center gap-1 md:gap-2">
        <img  src={CoffeeCupTitle} className="w-10 md:w-14 mb-1 md:mb-2" alt="" /> Our Coffee
      </h1>
      {loading?
      <div className="mt-6 flex-col flex justify-center items-center">
        <h1 className="capitalize text-center md:text-4xl text-lg font-black text-[#492201]">
        Your coffee is being prepared ...
        </h1>
       <img src={CoffeeAnimation} className="w-[200px] mt-4" alt="" />
      </div>
      :
      <div>
      <div className="flex justify-center gap-2 md:gap-3 items-center my-3 md:my-4">
        <button
         
          onClick={() =>{    setCoffee(true)
            handleAnimation()}
         
          
          }
          className={`
          ${Coffee ? "bg-white" : "bg-[#492201] hover:before:bg-[#F5F5DC]"}
              relative overflow-hidden z-10 px-3 md:px-5 py-1 md:py-2 rounded-lg md:rounded-xl 
                before:content-[""] before:w-full  hover:before:h-full before:h-0 before:absolute 
                before:top-0 before:left-0 before:duration-500 before:-z-10 before:transition-all
                                                                                    `}
        >
          <img
            src={fire}
            className={`${Coffee? 'absolute w-8 md:w-10 bottom-0 right-0 opacity-30 z-20' :'hidden'}`}
            alt=""
          />
          <h1
 
            className={` ${Coffee? " bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 bg-clip-text text-transparent"
                          : "duration-500 hover:text-[#492201] text-white"} 
            text-base md:text-xl font-semibold z-30 relative `}
          >
            Hot Coffee
          </h1>
        </button>

        <button
          onClick={() =>{    setCoffee(false)
            handleAnimation()}
         
          
          }
          className={`${Coffee? "bg-[#492201] hover:before:bg-[#F5F5DC] before:h-0 hover:before:h-full"
                    : "bg-white"}
          relative before:content-[''] before:w-full  hover:before:h-full before:h-0 before:absolute 
          before:top-0 before:left-0 overflow-hidden z-10 px-3 md:px-5 py-1 md:py-2 rounded-lg md:rounded-xl 
          before:duration-500 before:-z-10`} >
          <img
            src={ice}
            className={`${Coffee? 'hidden': 'absolute w-8 md:w-10 bottom-0 right-0 opacity-30 z-20'}`}
            alt="ice"
          />
          <h1
          
            className={`${Coffee? "hover:text-[#492201] text-[#F5F5DC] duration-500"
                      : "bg-gradient-to-r from-[#8fd6ea] via-[#5dcfc7] to-[#1a91a0] bg-clip-text text-transparent"}
          text-base md:text-xl font-semibold z-30 relative`}
          >
            Iced Coffee
          </h1>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
        {Coffee
          ? hotCoffee && hotCoffee.length > 0
            ? hotCoffee.map((hot,index) => (
                <div
                ref={el=>hotCoffees.current[index]=el!}
                  key={hot.id}
                  
                  className="col-span-1 p-2 md:p-3  shadow-[0px_0px_15px_0px_#492201] border-2 md:border-4 border-[#492201] rounded-xl md:rounded-2xl overflow-hidden bg-[#D2B48C]"
                >
                  <div className="border-2 md:border-4  shadow-[0px_0px_15px_0px_#492201] border-[#492201] rounded-xl md:rounded-2xl overflow-hidden h-[150px] md:h-[200px]">
                    <img
                      src={hot.image}
                      alt=""
                      className="bg-cover object-center h-full w-full bg-top hover:scale-125 duration-300"
                    />
                  </div>
                  <h1 className="mt-3 text-xl  md:text-2xl font-black text-center text-[#492201]">
                    {hot.title}
                  </h1>
                  <ul className="flex flex-col mx-2 md:mx-4 gap-1 md:gap-3 mt-3 md:mt-4 ">
                    {hot.ingredients
                      ? hot.ingredients
                          .slice(0, 1)
                          .map((ingredient, index) => (
                            <li
                              key={index}
                              className="flex items-center gap-2 text-base md:text-lg font-bold text-[#492201]"
                            >
                              <img src={Sugar} className="w-8" alt="" />{" "}
                              {ingredient}
                            </li>
                          ))
                      : null}
                  </ul>
                  <div className="flex justify-center items-center my-3">
                    <button className="px-4  font-bold rounded-lg md:rounded-xl py-1.5 bg-[#F5F5DC] border-2 border-[#49210189] text-sm md:text-base text-[#492201]">
                      Sizes
                    </button>
                  </div>
                  <ul className="flex justify-between items-top gap-2 md:gap-3 w-4/5 md:w-3/5 mx-auto">
                    <li className="flex flex-col items-center text-2xl font-black text-[#492201] text-Stroke h-[90px] md:h-24">
                      S<div className="flex-grow"></div>
                      <img src={Sizes} className="w-8" alt="" />
                    </li>
                    <li className="flex flex-col items-center  text-2xl font-black text-[#492201] text-Stroke h-[90px] md:h-24">
                      M<div className="flex-grow"></div>
                      <img src={Sizes} className="w-10" alt="" />
                    </li>
                    <li className="flex flex-col  items-center text-2xl font-black text-[#492201] text-Stroke h-[90px] md:h-24">
                      L<div className="flex-grow"></div>
                      <img src={Sizes} className="w-12" alt="" />
                    </li>
                  </ul>
                </div>
              ))
            : null
          : icedCoffee && icedCoffee.length > 0
          ? icedCoffee.map((ice,index) => (
              <div
              ref={el=>IcedCoffees.current[index]=el!}
                key={ice.id}
                className="col-span-1 p-2 md:p-3  shadow-[0px_0px_15px_0px_#492201] border-2 md:border-4 border-[#492201] rounded-xl md:rounded-2xl overflow-hidden bg-[#D2B48C]"
              >
                <div className="border-2 md:border-4  shadow-[0px_0px_15px_0px_#492201] border-[#492201] rounded-xl md:rounded-2xl overflow-hidden h-[150px] md:h-[200px]">
                  <img
                    src={ice.image}
                    alt=""
                    className="bg-cover object-center h-full w-full bg-top hover:scale-125 duration-300"
                  />
                </div>
                <h1 className="mt-3 text-xl  md:text-2xl font-black text-center text-[#492201]">
                  {ice.title}
                </h1>
                <ul className="flex flex-col mx-2 md:mx-4 gap-1 md:gap-3 mt-3 md:mt-4">
                  {ice.ingredients
                    ? ice.ingredients.slice(0, 1).map((ingredient, index:number) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 text-base md:text-lg font-bold text-[#492201]"
                        >
                          <img src={Sugar} className="w-8" alt="" />{" "}
                          {ingredient}
                        </li>
                      ))
                    : null}
                </ul>
                <div className="flex justify-center items-center my-3">
                  <button className="px-4  font-bold rounded-lg md:rounded-xl py-1.5 bg-[#F5F5DC] border-2 border-[#49210189] text-sm md:text-base text-[#492201]">
                    Sizes
                  </button>
                </div>
                <ul className="flex justify-between items-top gap-2 md:gap-3 w-4/5 md:w-3/5 mx-auto">
                  <li className="flex flex-col items-center text-2xl font-black text-[#492201] text-Stroke h-[90px] md:h-24">
                    S<div className="flex-grow"></div>
                    <img src={Sizes} className="w-8" alt="" />
                  </li>
                  <li className="flex flex-col items-center text-2xl font-black text-[#492201] text-Stroke h-[90px] md:h-24">
                    M<div className="flex-grow"></div>
                    <img src={Sizes} className="w-10" alt="" />
                  </li>
                  <li className="flex flex-col items-center text-2xl font-black text-[#492201] text-Stroke h-[90px] md:h-24">
                    L<div className="flex-grow"></div>
                    <img src={Sizes} className="w-12" alt="" />
                  </li>
                </ul>
              </div>
            ))
          : null}
      </div>
      </div>
      }
      
    </div>
     
    </section>
  );
}

export default Coffee;
