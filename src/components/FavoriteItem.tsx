import { Link } from "react-router-dom";
import {arrowRight} from '../assets/image'
type FavoriteItemProps = {
    image: string;
    title: string;
    top: string;
    side: string;
    size: string;
    imgSize: string;
  };
  
 export default function FavoriteItem({ image, title, top, side, size, imgSize }: FavoriteItemProps) {
    return (
      <div className={`text-center absolute ${top} ${side}`}>
        <div className={`mx-auto flex justify-center items-center rounded-full ${size} shadow-[0px_0px_15px_0px_#3B2F2F] bg-[#e3ca9c]`}>
          <img src={image} alt={title} className={imgSize} />
        </div>
        <div className='mt-4'>
          <h1 className='text-sm md:text-2xl text-[#59260B] font-bold'>{title}</h1>
          <Link to="/coffee" className="flex justify-center gap-1 md:gap-3 items-center cursor-pointer">
            <h1 className='text-xs md:text-xl font-semibold text-[#F5F5DC]'>see more</h1>
            <img src={arrowRight} alt="Arrow right" className='w-5 md:w-7 mt-0.5 md:mt-1.5' />
          </Link>
        </div>
      </div>
    );
  }
