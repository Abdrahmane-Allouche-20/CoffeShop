import {Coffee} from '../assets/image'
function Contact() {
  const inputStyle =
    "peer placeholder:text-[#926c45] outline-none text-sm md:text-lg font-bold text-[#c1905a] bg-[#f2e7df] pl-1.5 py-2 duration-500 rounded-lg border-2 border-[#c2a28c] relative placeholder:duration-500 placeholder:absolute focus:placeholder:pt-10";

  return (
    <div className="pb-6 sm:pb-0"> 
      <section className="w-[95%] md:max-w-3xl mx-auto mt-4 mb-10 p-2 md:p-6 bg-[#c1905a] relative rounded-xl">
        <div className="w-full">
          <h1 className="flex relative items-center gap-2 md:gap-3 text-xl md:text-3xl font-black text-[#F5F5DC]">
            <img
              src={Coffee}
              className="w-7 md:w-10"
              alt="Coffe cup"
              loading="lazy"
            />{" "}
            Contact
          </h1>

          <form action="" className="mt-3 md:mt-4">
            <div className="flex flex-col-reverse">
              <input
                placeholder="First Name"
                className={inputStyle}
                type="text"
                required
              />
              <span className="text-sm md:text-lg text-[#f2e7df] font-bold pl-1.5 md:pl-2 duration-500 opacity-0 peer-focus:opacity-100 -translate-y-5 peer-focus:-translate-y-0.5 md:peer-focus:-translate-y-1.5">
                First Name
              </span>
            </div>

            <div className="flex flex-col-reverse mt-1.5 md:mt-2">
              <input
                placeholder="Last Name"
                className={inputStyle}
                type="text"
                required
              />
              <span className="text-sm md:text-lg text-[#f2e7df] font-bold pl-1.5 md:pl-2 duration-500 opacity-0 peer-focus:opacity-100 -translate-y-5 peer-focus:-translate-y-0.5 md:peer-focus:-translate-y-1.5">
                Last Name
              </span>
            </div>

            <div className="flex flex-col-reverse mt-1.5 md:mt-2">
              <input
                placeholder="Your Email"
                className={inputStyle}
                type="email"
                required
              />
              <span className="text-sm md:text-lg text-[#f2e7df] font-bold pl-1.5 md:pl-2 duration-500 opacity-0 peer-focus:opacity-100 -translate-y-5 peer-focus:-translate-y-0.5 md:peer-focus:-translate-y-1.5">
                Your Email
              </span>
            </div>

            <div className="flex flex-col-reverse mt-1.5 md:mt-2">
              <input
                className={inputStyle}
                type="tel"
                placeholder="123-456-7890"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                required
              />
              <span className="text-sm md:text-lg text-[#f2e7df] font-bold pl-1.5 md:pl-2 duration-500 opacity-0 peer-focus:opacity-100 -translate-y-5 peer-focus:-translate-y-0.5 md:peer-focus:-translate-y-1.5">
                Phone Number
              </span>
            </div>

            <div className="flex flex-col-reverse mt-1.5 md:mt-2">
              <textarea
                className={`${inputStyle} resize-none h-[100px] md:h-[150px]`}
                placeholder="Your Message"
                required
              />
              <span className="text-sm md:text-lg text-[#f2e7df] font-bold pl-1.5 md:pl-2 duration-500 opacity-0 peer-focus:opacity-100 -translate-y-5 peer-focus:-translate-y-0.5 md:peer-focus:-translate-y-1.5">
                Your Message
              </span>
            </div>

            <div id="submit" className="text-end relative">
              <button className="px-4 py-1 bg-[#f2e7df] text-[#c1905a] text-base md:text-xl font-bold rounded-lg mt-3 duration-500 hover:scale-105 transform">
                Send
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Contact;
