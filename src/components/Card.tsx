import {Sizes} from '../assets/image'
type Props = {
    coffee: {
      id: number;
      image: string;
      title: string;
     
    };
  };
  
  function Card({ coffee }: Props) {
    return (
      <div
        key={coffee.id}
        className="col-span-1 p-2   border-2 md:border-4 border-[#492201] rounded-xl  overflow-hidden bg-[#D2B48C]"
      >
        <div className="border-2 md:border-4  border-[#492201] rounded-xl  overflow-hidden h-[150px] md:h-[200px]">
          <img
            src={coffee.image}
            alt=""
            className="bg-cover object-center h-full w-full bg-top hover:scale-125 duration-300"
          />
        </div>
        <h1 className="mt-3 text-base md:text-xl font-black text-center text-[#492201]">
          {coffee.title}
        </h1>
      
        <div className="flex justify-center items-center my-3">
          <button className="px-4 font-bold rounded-lg md:rounded-xl py-1.5 bg-[#F5F5DC] border-2 border-[#49210189] text-sm md:text-base text-[#492201]">
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
    );
  }
  
  export default Card;
  