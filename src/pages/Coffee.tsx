import { useContext, useState } from "react";
import { CoffeeContext } from "../context/context";
import {ice,fire,Sugar} from '../assets/image'
import Loading from "../components/Loading";
import Card from "../components/Card";
function Coffee() {
  const [Coffee, setCoffee] = useState(true);
  
 
  
  
 
  const { loading, hotCoffee, icedCoffee } = useContext(CoffeeContext) || {
    loading: true,
    hotCoffee: [],
    icedCoffee: []
  };

  return (
    <div className=' pb-[60px] md:pb-[0px]'>
    <section className="w-[95%]  md:max-w-6xl mx-auto my-4 md:my-10 ">
      <div className="  rounded-xl bg-[#c1905a] p-2 md:p-6">
      <h1  className="text-xl md:text-3xl text-[#492201] font-black flex items-center gap-1 md:gap-2">
        <img  src={Sugar} className="w-10 " alt="" /> Our Coffee
      </h1>
      {loading?
      <Loading/>
      :
      <div>
      <div className="flex justify-center gap-2 md:gap-3 items-center my-4">
        <button onClick={() =>{  setCoffee(true)}}
          className={`
          ${Coffee ? "bg-white" : "bg-[#492201] "} relative  px-3  py-2 rounded-lg   `}
        >
          <img
            src={fire}
            className={`${Coffee? 'absolute w-8 md:w-10 bottom-0 right-0 opacity-30' :'hidden'}`}
            alt=""
          />
          <h1 className={` ${Coffee? "text-orange-500 ": "duration-500  text-white"}  text-sm md:text-lg font-semibold   `}
          >
            Hot Coffee
          </h1>
        </button>

        <button
          onClick={() =>{    setCoffee(false)}
         
          
          }
          className={`${Coffee? "bg-[#492201] ": "bg-white"} relative  px-3  py-2 rounded-lg`} >
          <img
            src={ice}
            className={`${Coffee? 'hidden': 'absolute w-8 md:w-10 bottom-0 right-0 opacity-30'}`}
            alt="ice"
          />
          <h1
          
            className={`${Coffee? " text-[#F5F5DC] " :" text-sky-400"}
          text-sm md:text-lg font-semibold z-20`}
          >
            Iced Coffee
          </h1>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6">
        {Coffee
          ? hotCoffee && hotCoffee.length > 0
            ? hotCoffee.map((hot) => (
                <Card coffee={hot} key={hot.id}/>
              ))
            : null
          : icedCoffee && icedCoffee.length > 0
          ? icedCoffee.map((ice) => (
            <Card coffee={ice} key={ice.id}/>
            ))
          : null}
      </div>
      </div>
      }
      
    </div>
     
    </section>
    </div>
  );
}

export default Coffee;
