import { RiArrowRightUpLine } from "react-icons/ri";
import Wrapper from "../../components/Wrapper";
import Folder1 from "../components/Folder1";
import Folder2 from "../components/Folder2";

const Hero = () => {
  return (
    <div className="py-8">
      <Wrapper>
        <div className="w-full relative">
          <div className="font-primary text-base w-full lg:w-[48%] h-[60px] mb-8 lg:-mb-14 xl:-mb-16 border-2 font-bold border-black text-text rounded-full shadow-[-10px_10px_0px_0px_#000000] flex flex-row items-center justify-center gap-2 bg-white">
            <img
              src="/assets/logo.svg"
              alt="Google Developers Group India"
              className="size-[25px] object-contain"
            />
            <span>Google Developers Group India</span>
          </div>
        </div>
        <div className="mt-8 lg:-mt-12">
          <div className="w-1/2 hidden lg:flex  bg-white border-t-2 border-black border-l-2 border-r-2 h-[100px] ml-auto rounded-ss-[32px] rounded-se-[32px] shadow-[-10px_0px_0px_0px_#000000]"></div>
          <div className="w-[calc(50%_-_2.5rem)]  ml-10 hidden lg:flex  bg-black h-[1px] rounded-full  "></div>
          <div className=" bg-white lg:border-2 lg:shadow-[-14px_14px_0px_0px_#000000] lg:border-black w-full h-full lg:border-t-0 rounded-ss-[48px] rounded-es-[48px] rounded-ee-[48px]">
            <div className="p-2 sm:p-4 lg:p-12 grid grid-cols-1 lg:grid-cols-2">
              <div className="flex flex-col gap-12">
                <div className="w-full lg:hidden">
                  <img src="/assets/heroImg1.svg" alt="heroImg" className="w-full object-contain" />
                </div>
                <div className="flex flex-col gap-3 text-text">
                  <span className="text-2xl">Google Communities</span>
                  <h2 className="font-bold font-primary text-6xl">
                    In India, For India
                  </h2>
                </div>
                <div>
                  <Folder1 />
                </div>
              </div>
              <div className="mt-12 lg:ml-12 lg:-mt-24 flex flex-col gap-12">
                <div className="hidden lg:flex">
                  <img src="/assets/heroImg1.svg" alt="heroImg" />
                </div>
                <Folder2 />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6">
                  <div className="MainGr2 border-2 border-black  shadow-[-10px_10px_0px_0px_#000000] p-6 md:p-4 flex flex-col h-full justify-between items-end gap-10 rounded-[28px]">
                    <div className="size-[50px]   bg-black text-[#E6F6E7] rounded-full text-2xl grid place-content-center shrink-0">
                      <RiArrowRightUpLine />
                    </div>
                    <h3 className="text-4xl md:text-2xl 2xl:text-[28px] font-primary font-normal w-full">
                      Google Cloud Community Day 2024
                    </h3>
                  </div>
                  <div className="MainGr3  border-2 border-black shadow-[10px_10px_0px_0px_#000000] p-6 md:p-4 flex flex-col h-full justify-between items-start gap-10 rounded-[28px]">
                    <div className="size-[50px]   bg-black text-[#E6F6E7] rounded-full text-2xl grid place-content-center shrink-0">
                      <RiArrowRightUpLine />
                    </div>
                    <h3 className="text-4xl md:text-2xl 2xl:text-[28px] text-right font-primary font-normal w-full">
                      Get Google Certified
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Hero;
