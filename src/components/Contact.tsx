import  { useEffect, useRef } from "react";
import "./Contact.css";
import Coffee from "../assets/coffee-cup.png";
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
function Contact() {
  const ref = useRef<HTMLInputElement>(null);
  const inputs = useRef<(HTMLDivElement | HTMLTextAreaElement)[]>([]);
  function handleFocus() {
    ref.current?.focus()
  }
  useEffect(()=>{
    handleFocus()
  },[])
  gsap.registerPlugin(useGSAP);
  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { duration: 0.5 } });
    
    tl.from('#contact', {
      opacity: 0,
      x: -500,
      ease: 'bounce'
    });

    inputs.current.forEach(input => {
      tl.from(input, {
        opacity: 0,
        x: 100,
      });
    });

    tl.from('#submit', {
      y: 50,
      opacity: 0
    });
  }, []);
  return (
    <section id="contact" className=" overflow-hidden mb-[80px] md:mb-[0px] w-[95%] md:max-w-3xl before:absolute before:top-0 before:left-0 before:w-full before:h-full before:bg-black/40  mx-auto  my-4 md:my-10 p-2 md:p-6 bg-[#c1905a]  shadow-[0px_0px_15px_0px_#492201] relative rounded-lg md:rounded-3xl">
      
      <div className="w-full md:max-w-2xl mx-auto ">
        <h1 className="flex relative items-center gap-2 md:gap-3 text-2xl md:text-4xl font-black text-[#F5F5DC]">
          <img src={Coffee} className="w-10 md:w-12 mb-3" alt="" /> Contact{" "}
        </h1>
        <form action="" className="mt-3 md:mt-4">
          <div ref={el=>inputs.current[0]=el!} className="flex flex-col-reverse">
            <input
            ref={ref}
            
              placeholder="First Name"
              className="peer placeholder:text-[#926c45] outline-none text-base md:text-xl font-bold text-[#c1905a] bg-[#f2e7df] pl-1.5  md:pl-2 py-1.5 md:py-2 duration-500 rounded-lg md:rounded-xl border-2 border-[#c2a28c]  focus:border-none focus:shadow-[0px_0px_15px_0px_#492201]  relative placeholder:duration-500 placeholder:absolute focus:placeholder:pt-10 focus:rounded-md"
              type="text"
              required
              
            />
            <span className=" text-sm md:text-xl text-[#f2e7df] font-bold pl-1.5 md:pl-2 duration-500 opacity-0 peer-focus:opacity-100 -translate-y-5 peer-focus:-translate-y-0.5 md:peer-focus:-translate-y-1.5">
            First Name
            </span>
          </div>
          <div ref={el=>inputs.current[1]=el!} className="flex flex-col-reverse mt-1.5 md:mt-2">
            <input
              placeholder="Last Name"
              className="peer placeholder:text-[#926c45] outline-none text-base md:text-xl font-bold text-[#c1905a] bg-[#f2e7df] pl-1.5  md:pl-2 py-1.5 md:py-2 duration-500 rounded-lg md:rounded-xl border-2 border-[#c2a28c]  focus:border-none focus:shadow-[0px_0px_15px_0px_#492201]  relative placeholder:duration-500 placeholder:absolute focus:placeholder:pt-10 focus:rounded-md"
              type="text"
              required
            />
            <span className="text-sm md:text-xl text-[#f2e7df] font-bold pl-1.5 md:pl-2 duration-500 opacity-0 peer-focus:opacity-100 -translate-y-5 peer-focus:-translate-y-0.5 md:peer-focus:-translate-y-1.5">
            Last Name
            </span>
          </div>
          <div ref={el=>inputs.current[2]=el!} className="flex flex-col-reverse mt-1.5 md:mt-2">
            <input
              placeholder="Your Email"
              className="peer placeholder:text-[#926c45] outline-none text-base md:text-xl font-bold text-[#c1905a] bg-[#f2e7df] pl-1.5  md:pl-2 py-1.5 md:py-2 duration-500 rounded-lg md:rounded-xl border-2 border-[#c2a28c]  focus:border-none focus:shadow-[0px_0px_15px_0px_#492201]  relative placeholder:duration-500 placeholder:absolute focus:placeholder:pt-10 focus:rounded-md"
              type="email"
              required
            />
            <span className="text-sm md:text-xl text-[#f2e7df] font-bold pl-1.5 md:pl-2 duration-500 opacity-0 peer-focus:opacity-100 -translate-y-5 peer-focus:-translate-y-0.5 md:peer-focus:-translate-y-1.5">
            Your Email
            </span>
          </div>
          <div ref={el=>inputs.current[3]=el!} className="flex flex-col-reverse mt-1.5 md:mt-2">
            <input
              
              className="peer placeholder:text-[#926c45] outline-none text-base md:text-xl font-bold text-[#c1905a] bg-[#f2e7df] pl-1.5  md:pl-2 py-1.5 md:py-2 duration-500 rounded-lg md:rounded-xl border-2 border-[#c2a28c]  focus:border-none focus:shadow-[0px_0px_10px_0px_#c1905a]  relative placeholder:duration-500 placeholder:absolute focus:placeholder:pt-10 focus:rounded-md"
              type="tel"
              placeholder="123-456-7890" 
         pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required/>
           
            <span className="text-sm md:text-xl text-[#f2e7df] font-bold pl-1.5 md:pl-2 duration-500 opacity-0 peer-focus:opacity-100 -translate-y-5 peer-focus:-translate-y-0.5 md:peer-focus:-translate-y-1.5">
            Phone Number
            </span>
          </div>

          <div ref={el=>inputs.current[4]=el!} className="flex flex-col-reverse mt-1.5 md:mt-2">
            <textarea
              
              className="peer placeholder:text-[#926c45] outline-none text-base md:text-xl font-bold text-[#c1905a] resize-none h-[100px] md:h-[150px] bg-[#f2e7df] pl-1.5  md:pl-2 py-1.5 md:py-2 duration-500 rounded-lg md:rounded-xl border-2 border-[#c2a28c]  focus:border-none focus:shadow-[0px_0px_10px_0px_#c1905a]  relative placeholder:duration-500 placeholder:absolute focus:placeholder:pt-10 focus:rounded-md"
              
              placeholder="Your Message" 
          required/>
           
            <span className="text-sm md:text-xl text-[#f2e7df] font-bold pl-1.5 md:pl-2 duration-500 opacity-0 peer-focus:opacity-100 -translate-y-5 peer-focus:-translate-y-0.5 md:peer-focus:-translate-y-1.5">
            Your Message
            </span>
          </div>
          <div id="submit" className="text-end relative ">
          <button className="relative px-3 md:px-4 py-1 md:py-2 bg-[#f2e7df] text-[#c1905a] text-lg md:text-xl font-bold z-30 rounded-xl md:rounded-2xl mt-3 duration-500 
          before:absolute before:content-[''] overflow-hidden before:h-full before:-z-10 before:top-0 before:left-0 before:bg-[#c1905a] 
          before:w-0 before:duration-500 hover:before:w-full hover:text-[#f2e7df] hover:scale-110">
          Send
          </button>         
          </div>
        </form>
      </div>
      
    </section>
  );
}

export default Contact;
