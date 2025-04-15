import {CoffeeAnimation} from '../assets/image'
function Loading() {
  return (
    <div className="mt-6 flex-col flex justify-center items-center">
        <h1 className="capitalize text-center md:text-4xl text-lg font-black text-[#492201]">
        Your coffee is being prepared ...
        </h1>
       <img src={CoffeeAnimation} className="w-[200px] mt-4" alt="" />
      </div>
  )
}

export default Loading