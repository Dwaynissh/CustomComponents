import img from "../assets/pexels-tima-miroshnichenko-4963060.jpg";
import img2 from "../assets/pexels-cottonbro-studio-5083407.jpg";
import { useState } from "react";
import Globalinput from "../Components/AllProps/Globalinput";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  const [hover, setHover] = useState<boolean>(false);

  const handleHover = () => {
    setHover(!hover);
  };

  return (
    <section className="h-full w-full flex justify-center items-center">
      <div className="h-full w-[85%] flex justify-between items-center ">
        <div className="w-[37%] h-full pt-[50px]">
          <div className="text-[60px] font-bold text-[#69be14] mb-5">
            Build your next idea even faster.
          </div>
          <div className="text-[35px] font-[500] text-[#273e11] mb-3">
            A free repository for community components using Tailwind CSS
          </div>
          <div className="text-[18px] text-[#273e11] mb-5">
            Beautifully designed, expertly crafted components and templates,
            built. The perfect starting point for your next project.
          </div>
          <Globalinput placeholder="Search Here" icon={<AiOutlineSearch />} />
        </div>

        <div className="w-[60%] h-full  flex justify-between pt-[50px]">
          <div
            className={`h-[90%] rounded-[15px] cursor-pointer ${
              hover ? "w-[35%]" : "w-[62%]"
            }
                `}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <img src={img} alt="" className="w-full h-full rounded-[15px]" />
          </div>

          <div
            className={`h-[90%] rounded-[15px] cursor-pointer bg-white transition-all duration-300 ${
              hover ? "w-[62%]" : "w-[35%]"
            }`}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            <img src={img2} alt="" className="w-full h-full rounded-[15px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
