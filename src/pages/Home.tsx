import ManagerCard from "../components/ManagerCard";
import Navbar from "../components/Navbar";
import { Logo } from "../svgs/Logo";

function Home() {
  return (
    <div className="w-full h-full bg-white z-30">
      <div className="w-full h-[615px] bg-sky-950">
        <Navbar />

        <div className="w-full flex justify-center align-middle items-center mx-[auto] mb-20 top-[170px] relative">
          <div className="w-full lg:w-[888px] h-[183px] flex-col justify-center items-center gap-3 inline-flex">
            <div className="text-zinc-100 text-xl font-normal font-['Open Sans'] leading-loose">
              About
            </div>
            <div className="w-full lg:w-[842px] text-center text-white text-[64px] font-normal leading-[84px]">
              We love to make great things, things that matter.
            </div>
            <div className="text-center px-20 text-zinc-100 text-base font-normal font-['Open Sans'] leading-7">
              Funding handshake buyer business-to-business metrics iPad
              partnership. First mover advantage innovator success deployment
              non-disclosure.
            </div>
          </div>
        </div>

        <div className="w-full lg:w-[80%] h-[650px] m-auto top-[190px] relative">
          <div className=" w-full h-full flex items-center justify-evenly flex-wrap lg:flex-nowrap box-border">
            <div className="flex-col">
              <img
                className="w-[300px] h-[285px] mb-14 rounded-3xl"
                src="/assets/images/img1.png"
                alt=""
              />
              <img
                className="w-[302px] h-[287px] rounded-3xl"
                src="/assets/images/img3.png"
                alt=""
              />
            </div>
            <div>
              <img
                className="w-[400px] h-[632px] rounded-3xl"
                src="/assets/images/imgtall.png"
                alt=""
              />
            </div>
            <div className="flex-col">
              <img
                className="w-[300px] h-[285px] mb-14 rounded-3xl"
                src="/assets/images/img2.png"
                alt=""
              />
              <img
                className="w-[302px] h-[287px] rounded-3xl"
                src="/assets/images/img4.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/*    Our story */}

      <div className="w-full lg:w-[800px] flex-col mx-auto mt-[42%]">
        <div className="w-full lg:w-[800px] h-[184px] left-0 top-0  flex-col justify-center items-start gap-3 inline-flex">
          <div className="text-neutral-500 text-xl font-normal font-['Open Sans'] leading-loose">
            Our story
          </div>
          <div className="w-full lg:w-[842px] text-black text-5xl font-normal leading-[72px]">
            Handshake infographic mass market crowdfunding iteration.
          </div>
        </div>
        <div className="w-full lg:w-[799px] h-[168px] lg:left-[1px] lg:top-[216px] text-neutral-500 text-xl font-normal font-['Open Sans'] leading-loose">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus. Sales
          user experience branding growth hacking holy grail monetization
          conversion prototype stock network effects. Learning curve network
          effects return on investment bootstrapping business-to-consumer.{" "}
        </div>
      </div>

      {/*    Our numbers */}

      <div className="w-full py-20 flex mx-auto mt-20 bg-sky-950 items-center justify-center">
        <div className="w-full h-full flex-col">
          <div className="text-zinc-100 text-center text-xl font-normal font-['Open Sans'] leading-loose">
            Our numbers
          </div>
          <div className="h-[184px] flex justify-center items-center gap-3">
            <div className="w-full lg:w-[842px] text-center text-white text-5xl font-normal leading-[72px]">
              Handshake infographic mass market crowdfunding iteration.
            </div>
          </div>
          <div className="w-full h-[124px] mx-auto justify-center items-start gap-24 inline-flex">
            <div className="flex-col justify-start items-start gap-8 inline-flex">
              <div className="text-emerald-300 text-8xl font-normal leading-[56px]">
                120m
              </div>
              <div className="text-zinc-100 text-2xl font-normal font-['Open Sans'] leading-9">
                Cool feature title
              </div>
            </div>
            <div className="flex-col justify-center items-start gap-8 inline-flex">
              <div className="text-emerald-300 text-8xl font-normal leading-[56px]">
                10.000
              </div>
              <div className="text-zinc-100 justify-center text-2xl font-normal font-['Open Sans'] leading-9">
                Cool feature title
              </div>
            </div>
            <div className="flex-col justify-center items-start gap-8 inline-flex">
              <div className="text-emerald-300 text-8xl font-normal leading-[56px]">
                240
              </div>
              <div className="text-zinc-100 text-2xl font-normal font-['Open Sans'] leading-9">
                Cool feature title
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto relative m-16">
        <div className="w-full flex justify-center relative mt-16">
          <div className="w-full lg:w-[800px] h-full top-0 relative flex-col justify-end items-start gap-1 inline-flex mx-auto">
            <div className="text-neutral-500 text-xl font-normal font-['Open Sans'] leading-loose">
              Our team
            </div>
            <div className="text-black text-5xl font-normal leading-[72px]">
              The leadership team
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[799px] h-[110px] flex justify-center items-center relative mx-auto text-neutral-500 text-xl font-normal font-['Open Sans'] leading-loose text-left my-8">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.{" "}
        </div>
        <div className="w-full lg:w-[90%] flex flex-wrap lg:flex-nowrap items-center justify-center mx-auto relative gap-x-10 mt-10">
          <ManagerCard
            imageUrl="/assets/images/mscott.png"
            name="Michael Scott"
          />
          <ManagerCard
            imageUrl="/assets/images/dwigths.png"
            name="Dwight Schrute"
          />
          <ManagerCard imageUrl="/assets/images/pamb.png" name="Pam Beetsley" />
        </div>
      </div>

      <div className="w-full h-auto relative bg-sky-950 pb-20">
        <div className="w-full lg:w-[800px] flex-col justify-center  relative mx-auto gap-3 flex pt-8">
          <div className="text-white text-xl font-normal font-['Open Sans'] leading-loose">
            Our values
          </div>
          <div className="text-white text-5xl font-normal leading-[72px]">
            Things in we believe
          </div>
        </div>
        <div className="w-full lg:w-[799px] flex justify-center items-center relative mx-auto text-zinc-100 text-xl font-normal font-['Open Sans'] leading-loose mb-16">
          Conversion angel investor entrepreneur first mover advantage.
          Handshake infographic mass market crowdfunding iteration. Traction
          stock user experience deployment beta innovator incubator focus.{" "}
        </div>
        <div className="w-full lg:w-[800px] h-[151px] flex justify-center items-center relative mx-auto">
          <img
            className="w-[150px] h-[151px] left-0 top-0 absolute rounded-3xl"
            src="/assets/images/commited.png"
            alt=""
          />
          <div className="w-full lg:w-[600px] h-[126px] lg:left-[200px] top-0 absolute flex-col justify-start items-start gap-4 inline-flex">
            <div className="w-full lg:w-[842px] h-[39px] text-white text-[28px] font-normal leading-[48px]">
              We are commited.
            </div>
            <div className="w-full lg:w-[602px] h-[71px] text-zinc-100 text-xl font-normal font-['Open Sans'] leading-loose">
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.{" "}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[802px] h-[151px] flex justify-center items-center relative mx-auto my-8">
          <img
            className="w-[150px] h-[151px] left-0 top-0 absolute rounded-3xl"
            src="/assets/images/responsible.png"
            alt=""
          />
          <div className="w-full lg:w-[679.83px] h-[154px] left-[200px] top-0 absolute flex-col justify-start items-start gap-4 inline-flex">
            <div className="w-full lg:w-[842px] h-[39px] text-white text-[28px] font-normal leading-[48px]">
              We are responsible.
            </div>
            <div className="w-full lg:w-[680px] h-[99px] text-zinc-100 text-xl font-normal font-['Open Sans'] leading-loose">
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.{" "}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-[802px] h-[154px] flex justify-center items-center relative mx-auto">
          <img
            className="w-[150px] h-[151px] left-0 top-0 absolute rounded-3xl"
            src="/assets/images/aimprogress.png"
            alt=""
          />
          <div className="w-full lg:w-[602px] h-[154px] left-[200px] top-0 absolute flex-col justify-start items-start gap-4 inline-flex">
            <div className="w-full lg:w-[842px] h-[39px] text-white text-[28px] font-normal leading-[48px]">
              We aim for progress.
            </div>
            <div className="w-full lg:w-[601px] h-[99px] text-zinc-100 text-xl font-normal font-['Open Sans'] leading-loose">
              Conversion angel investor entrepreneur first mover advantage.
              Handshake infographic mass market crowdfunding iteration.{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full relative bg-white">
        <div className="w-full h-auto flex-col justify-center items-center top-[100px] relative gap-[84px] inline-flex bg-white box-border">
          <div className="w-full lg:w-[1200px] h-[391px] bg-sky-950 relative flex-col justify-start items-start flex rounded-[12px]">
            <div className="w-full flex justify-end relative">
              <img
                className=" rounded-3xl"
                src="/assets/images/ellipse.png"
                alt=""
              />
            </div>

            <div className="w-full lg:w-[716px] flex justify-center items-start mx-auto relative">
              <div className="w-full px-4 h-auto flex justify-center items-start  text-white text-5xl font-normal absolute bottom-10">
                An enterprise template to ramp up your company website
              </div>
            </div>
            <div className="w-full flex justify-center items-center">
              <div className="w-[370px] h-14  bg-white rounded-[240px] shadow border-2 border-white">
                <input
                  placeholder="Your email address"
                  className="w-full h-full text-left pl-6 text-black text-xl font-normal font-['Open Sans'] leading-loose rounded-[240px] w-[370px] h-14  bg-white outline-none"
                />
              </div>
              <div className="w-[210px] h-[60px] px-14 py-4 mx-4 bg-emerald-300 rounded-[56px] border-2 border-emerald-300 justify-center items-center gap-2 inline-flex">
                <div className="text-sky-950 text-xl font-bold font-['Open Sans'] leading-7">
                  Start now
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[1200px] flex justify-start items-baseline my-8">
            <div className="w-[20%] h-auto mr-20">
              <div className="w-[156px] h-[41px] justify-center items-center gap-[10.83px] inline-flex mb-8">
                <Logo color="black" />
                <div className="w-[120.25px] h-[41px] text-sky-950 text-[43.25px] font-bold leading-[33.64px]">
                  Boldo
                </div>
              </div>
              <div className="w-[300px] text-neutral-500 text-base font-normal font-['Open Sans'] leading-7">
                Social media validation business model canvas graphical user
                interface launch party creative facebook iPad twitter.
              </div>
              <div className="w-[250px] text-neutral-500 text-base font-normal font-['Open Sans'] leading-7 mt-16">
                All rights reserved.
              </div>
            </div>
            <div className="w-full lg:w-[60%] h-auto flex items-center justify-center ml-20 gap-20">
              <div className="mx-auto">
                <div className=" text-black text-xl font-bold font-['Open Sans'] leading-loose">
                  Landings
                </div>
                <div className="py-5 text-neutral-500 text-xl font-normal font-['Open Sans'] leading-loose">
                  Home
                </div>
                <div className="text-neutral-500 text-xl font-normal font-['Open Sans'] leading-loose">
                  Products
                </div>
                <div className="py-5 text-neutral-500 text-xl font-normal font-['Open Sans'] leading-loose">
                  Services
                </div>
              </div>
              <div className="mx-auto">
                <div className="text-black text-xl font-bold font-['Open Sans'] leading-loose">
                  Company
                </div>
                <div className="py-5 text-neutral-500 text-xl font-normal font-['Open Sans'] leading-loose">
                  Home
                </div>
                <div className="text-neutral-500 text-xl font-normal font-['Open Sans'] leading-loose">
                  Careers{" "}
                  <span className="px-3.5 py-px bg-emerald-300 rounded-[120px] justify-start items-start gap-2.5 inline-flex">
                    <div className="text-sky-950 text-[13px] font-bold font-['Open Sans'] leading-7">
                      Hiring!
                    </div>
                  </span>
                </div>
                <div className="py-5 text-neutral-500 text-xl font-normal font-['Open Sans'] leading-loose">
                  Services
                </div>
              </div>
              <div className="mx-auto">
                <div className="text-black text-xl font-bold font-['Open Sans'] leading-loose">
                  Resourses
                </div>
                <div className="py-5 text-neutral-500 text-xl font-normal font-['Open Sans'] leading-loose">
                  Blog
                </div>
                <div className="text-neutral-500 text-xl font-normal font-['Open Sans'] leading-loose">
                  Products
                </div>
                <div className="py-5 text-neutral-500 text-xl font-normal font-['Open Sans'] leading-loose">
                  Services
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
