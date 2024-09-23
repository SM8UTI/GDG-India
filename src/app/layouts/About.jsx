import { Link } from "react-router-dom";
import Wrapper from "../../components/Wrapper";

const About = () => {
  return (
    <div className="py-8 mt-2">
      <Wrapper>
        <div>
          <div className="w-1/2 hidden xl:flex border-2 border-black h-[100px] border-b-0 lg:shadow-[-14px_0px_0px_0px_#000000] rounded-t-[32px] bg-white"></div>
          <div className="hidden xl:block w-[calc(50%_-_1.9rem)] -mt-6 ml-auto mr-8 border border-black h-[1px] rounded-full"></div>
          <div className="w-full border-2 border-black xl:border-t-0 h-full  shadow-[-14px_14px_0px_0px_#000000] rounded-b-[48px] rounded-tr-[48px] -mt-0 bg-white p-6">
            <div className="px-0 sm:px-4 xl:px-6 mt-8 xl:-mt-16 xl:pr-12">
              <div className="font-primary text-sm sm:text-base w-full lg:w-[48%] h-[60px] mb-8 lg:-mb-14 xl:-mb-16 border-2 font-bold border-black text-text rounded-full shadow-[-10px_10px_0px_0px_#000000] flex flex-row items-center justify-center gap-2 bg-white">
                <img
                  src="/assets/logo.svg"
                  alt="Google Developers Group India"
                  className="size-[25px] object-contain"
                />
                <span>Google Developers Group India</span>
              </div>
            </div>
            <div className="pb-12 mt-16 lg:mt-24 xl:mt-[7rem] px-0 sm:px-4">
              <div className="w-full grid grid-cols-1 2xl:grid-cols-3 gap-y-12 2xl:gap-y-8">
                <div className="flex flex-col gap-12 w-full">
                  <h2 className="text-4xl leading-[1.4] md:text-[48px] text-text font-primary font-normal">
                    Fastest Growing Google Developers Ecosystem Around The World
                  </h2>
                </div>
                <div className="col-span-2 row-span-2">
                  <div className="grid grid-cols-1 gap-8">
                    <div className="flex flex-wrap sm:flex-nowrap flex-row items-center gap-8 justify-center 2xl:justify-end w-full">
                      <div className="flex font-primary flex-col items-center justify-center p-4 px-6 md:py-[30px] md:px-[40px] w-full md:max-w-[235px] h-auto md:h-[164px] border-2 border-black shadow-[8px_8px_0px_0px_#000000] rounded-[155px]">
                        <h3 className="font-primary font-bold text-4xl md:text-5xl text-center">
                          220+
                        </h3>
                        <span className="text-text text-base">Communities</span>
                      </div>
                      <div className="flex font-primary flex-col items-center justify-center p-4 px-6 md:py-[30px] md:px-[40px] w-full md:max-w-[160px] h-auto md:h-[160px]  border-2 border-black shadow-[8px_8px_0px_0px_#000000] rounded-[30px] text-center">
                        <h3 className="font-primary font-bold text-4xl  md:text-5xl text-center">
                          300+
                        </h3>
                        <span className="text-text text-base">
                          Events per year
                        </span>
                      </div>
                      <div className="flex font-primary flex-col items-center justify-center p-4 px-6 md:py-[30px] md:px-[40px] w-full md:max-w-[235px] h-auto md:h-[164px] border-2 border-black shadow-[8px_8px_0px_0px_#000000] rounded-[155px]">
                        <h3 className="font-primary font-bold text-4xl md:text-5xl text-center">
                          400+
                        </h3>
                        <span className="text-text text-base">Organisers</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap sm:flex-nowrap w-full flex-row items-center gap-8 justify-center 2xl:justify-end">
                      <div className="flex font-primary flex-col items-center justify-center  p-4 px-6 md:py-[30px] md:px-[40px] w-full md:max-w-[235px] md:h-[164px] border-2 border-black shadow-[8px_8px_0px_0px_#000000] rounded-[30px] text-center">
                        <h3 className="font-primary font-bold text-4xl md:text-5xl text-center">
                          556K+
                        </h3>
                        <span className="text-text text-base">
                          Total Members
                        </span>
                      </div>
                      <div className="flex font-primary flex-col items-center justify-center p-4 px-6  md:py-[30px] md:px-[40px] w-full md:max-w-[235px] md:h-[164px] border-2 border-black shadow-[8px_8px_0px_0px_#000000] rounded-[155px] text-center">
                        <h3 className="font-primary font-bold text-4xl md:text-5xl text-center">
                          100+
                        </h3>
                        <span className="text-text text-base">
                          Startups accelerated
                        </span>
                      </div>
                      <div className="flex font-primary flex-col items-center justify-center p-4 px-6 md:py-[30px] md:px-[40px] w-full md:max-w-[160px] h-auto md:h-[160px]  border-2 border-black shadow-[8px_8px_0px_0px_#000000] rounded-[30px] text-center">
                        <h3 className="font-primary font-bold text-4xl md:text-5xl text-center">
                          80+
                        </h3>
                        <span className="text-text text-base">
                          Google Experts
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  to={"#"}
                  className="bg-[#006FFF] text-base sm:text-lg p-[24px] border border-black shadow-[-8px_8px_0px_0px_#000000] rounded-full hover:shadow-none transition-all ease-in-out duration-300 text-center text-white items-center justify-center flex mt-8 2xl:mt-0"
                >
                  Become a member today, It’s free!
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default About;
