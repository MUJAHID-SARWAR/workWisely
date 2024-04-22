import React, { useState, useEffect } from "react";
import "./index.css";
import Marquee from "react-fast-marquee";

export default function Main() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);


  const toggleOpen = () => setIsOpen(!isOpen);
  const toggleOpen2 = () => setIsOpen2(!isOpen2);
  const toggleOpen3 = () => setIsOpen3(!isOpen3);

  


  return (
    <div className="main-container grid w-[1440px] h-[3644px] bg-[#fff] relative md:overflow-hidden md:box-border mx-auto my-0 mq1225:w-full mq1050:w-full mq750:w-full mq450:w-full">
      <div className="navbar  w-[1290px] self-stretch  overflow-hidden h-[50px] grid md:overflow-hidden md:box-border cursor-pointer  relative z-[185] mt-[28px] mr-0 mb-0 ml-[75px]">
        <div className="w-[187px] hover:text-green-600 h-[50px] bg-[#e7af38] rounded-[8px] absolute top-0 left-[1103px] z-[74]">
          <a className="flex h-[30px] justify-start items-start font-['Poppins'] text-[20px] font-semibold leading-[30px] text-[#fff] hover:uppercase absolute top-[10px] left-[48px] text-left whitespace-nowrap z-[75]">
            Join now
          </a>
        </div>
        <span className="flex h-[36px] justify-start items-start font-['Poppins'] text-[24px] font-semibold leading-[36px] text-[#241e1e] hover:uppercase  absolute top-[7px] left-0 text-left whitespace-nowrap z-[26]">
          WorkWisely
        </span>
        <div className="flex w-[386px] h-[30px] gap-[30px] items-start flex-nowrap absolute top-[10px] left-1/2 translate-x-[-49.87%] translate-y-0 z-[27]">
          <button className="w-[61px] h-[30px] shrink-0 font-['Poppins'] text-[20px] font-bold leading-[30px] text-[#241e1e] border-none relative whitespace-nowrap z-[28] pointer" />
          <div className="flex-1 underline hover:uppercase flex flex-col items-start justify-start text-2xl py-0 pr-[5.5px] pl-0">
            <b className="relative hover:uppercase capitalize inline-block min-w-[61px] home">
              <a>Home</a>
            </b>
          </div>
          <a
            id="contact"
            className="h-[30px] shrink-0 basis-auto hover:uppercase hover:text-[#e7af38] font-['Poppins'] text-[20px] font-light leading-[30px] text-[#241e1e] relative text-left capitalize whitespace-nowrap z-[29]"
          >
            Contact
          </a>
          <a
            id="about"
            className="h-[30px] shrink-0 hover:uppercase hover:text-[#e7af38] basis-auto font-['Poppins'] text-[20px] font-light leading-[30px] text-[#241e1e] relative text-left capitalize whitespace-nowrap z-30"
          >
            About Us
          </a>
          <a
            id="signIn"
            className="h-[30px] shrink-0 basis-auto hover:uppercase hover:text-[#e7af38]  font-['Poppins'] text-[20px] font-light leading-[30px] text-[#241e1e] relative text-left capitalize whitespace-nowrap z-[31]"
          >
            Sign In
          </a>
        </div>
        <div className="w-[72px] h-[3px] bg-[url(../assets/images/dbd17d50-b2a8-415c-bc5b-2ee692859aff.png)] bg-cover bg-no-repeat absolute top-[43px] left-[36px] z-[184]" />
      </div>

      <div className="content-section w-[1290px] h-[511px] relative z-[77] mt-[76px] mr-0 mb-0 ml-[75px]">
        <div className="w-[167px] h-[56.987px] bg-[#7c7c7c] rounded-[10px] absolute top-0 left-[932px] z-[62]">
          <span className="flex h-[19.996px] justify-start items-start font-['Inter'] text-[15px] font-semibold leading-[19.996px] text-[#fff] tracking-[0.07px] absolute top-[18.996px] left-[46px] text-left whitespace-nowrap z-[63]">
            Unlimited jobs
          </span>
          <div className="w-[20px] h-[17.996px] bg-[url(../assets/images/504c520b-5e77-4690-bc53-4d374f18c553.png)] bg-cover bg-no-repeat absolute top-[19.996px] left-[16px] z-[64]" />
        </div>
        <div className="w-[728px] h-[126px] font-['Poppins'] text-[42px] font-bold leading-[63px] absolute top-[25px] left-0 text-left z-[32]">
          <span className="font-['Poppins'] text-[42px] font-bold leading-[63px] text-[#241e1e] relative text-left">
            Crafting Your Path to
          </span>
          <span className="font-['Poppins'] text-[42px] font-bold leading-[63px] text-[#e7af38] relative text-left">
            Professional Success
          </span>
          <span className="font-['Poppins'] text-[42px] font-bold leading-[63px] text-[#241e1e] relative text-left">
            .
          </span>
        </div>
        <div className="w-[489px] h-[467.01px] bg-[url(../assets/images/661c3495-177c-4345-a7c1-7ca8d25a3fd1.png)] bg-cover bg-no-repeat absolute top-[43.99px] left-[801px] z-[60]">
          <div className="w-[166px] h-[87.981px] text-[0px] bg-[#cdc9c9] rounded-[10px] relative shadow-[0_4px_25px_0_rgba(0,0,0,0.1)] z-[66] mt-[363.92px] mr-0 mb-0 ml-[286px]">
            <span className="flex w-[126px] h-[19.996px] justify-center items-start font-['Inter'] text-[15px] font-semibold leading-[19.996px] text-[#1c1919] tracking-[0.07px] relative text-center whitespace-nowrap z-[72] mt-[14.997px] mr-0 mb-0 ml-[20px]">
              People are joined
            </span>
            <Marquee>
              <div className="w-[121px] h-[37.992px] relative z-[71] mt-[6.998px] mr-0 mb-0 ml-[21px]">
                <div className="w-[37px] h-[37.992px] bg-[url(../assets/images/9bf85657768890adce0bc6ec7465d29b46d08d7d.png)] bg-cover bg-no-repeat rounded-[200px] absolute top-0 left-0 z-[67]" />
                <div className="w-[38px] h-[37.992px] bg-[url(../assets/images/ad0230e51cf72c468f60f22a06ee0b26b40e974f.png)] bg-cover bg-no-repeat rounded-[200px] absolute top-0 left-[21px] z-[68]" />
                <div className="w-[37px] h-[37.992px] bg-[url(../assets/images/3ef290bc29275437b13e4e702a43b9c3e4b5bafe.png)] bg-cover bg-no-repeat rounded-[200px] absolute top-0 left-[42px] z-[69]" />
                <div className="w-[38px] h-[37.992px] bg-[url(../assets/images/fe1b75d322ccec05c072759497ec90f5105b559b.png)] bg-cover bg-no-repeat rounded-[200px] absolute top-0 left-[62px] z-[70]" />
                <div className="w-[37px] h-[37.992px] bg-[url(../assets/images/4f5f4fc24d4fb323844cbdd0f8c3864a98b89c8b.png)] bg-cover bg-no-repeat rounded-[200px] absolute top-0 left-[84px] z-[71]" />
              </div>
            </Marquee>
          </div>
        </div>
        <span className="flex  w-[728px] h-[138px] justify-start items-start font-['Poppins'] text-[15px] font-normal leading-[22.5px] text-[#241e1e] absolute top-[168px] left-0 text-left z-[58]">
          Crafting Your Path to Professional Success.Introducing CareerCrafters,
          an innovative job platform designed to seamlessly connect talent with
          opportunities. With a user-friendly interface and advanced matching
          algorithms, we strive to simplify your job search and empower you to
          craft your professional journey. Explore diverse career paths, connect
          with leading employers, and embark on a fulfilling career with
          CareerCrafters. Your next opportunity awaits – join us on the path to
          success!
        </span>
        <div className="w-[633px] h-[64px] cursor-pointer rounded-[9px] border-solid border border-[rgba(153,153,153,0.6)] absolute top-[333px] left-0 z-[25]">
          <div className="flex w-[56px] h-[56px] cursor-pointer hover: pt-[16px] pr-[16px] pb-[16px] pl-[16px] gap-[10px] items-start flex-nowrap bg-[#e7af38] rounded-[8px] absolute top-[3px] left-[572px] z-[23]">
            <div className="w-[24px] h-[24px] shrink-0 bg-[url(../assets/images/083b8264-4a39-40bc-a398-6358cae7e239.png)] bg-cover bg-no-repeat relative overflow-hidden z-[24]" />
          </div>

          <div className="relative ">
            <div
              onClick={toggleOpen}
              className=" w-[14px] h-[8px] bg-[url(../assets/images/bbf3ecfd-b724-4e50-a338-19193a1c91c9.png)] bg-cover bg-no-repeat absolute top-[14.382px] left-[87px] z-[13]"
            />
            <div
              className={`dropdown-content absolute top-[30px] left-[80px] bg-white rounded-md shadow-lg p-3 ${
                isOpen ? "show" : ""
              }`}
              >
              <a
                href="https://www.prolaxies.com/"
                class="dropdown-item block py-2 hover:text-blue-400"
              >
                Prolaxies
              </a>
              <a
                href="https://brandcurb.com/"
                class="dropdown-item block py-2 hover:text-blue-400"
              >
                Brandcurb
              </a>
              <a
                href="https://themeforest.net/search/software%20company"
                class="dropdown-item block py-2 hover:text-blue-400"
                >
                ThemeSoft
              </a>
            </div>
          </div>

          <div className="relative"> 
    <div onClick={toggleOpen2} className="trigger-button w-[14px] h-[8px] bg-[url(../assets/images/b640447f-eb9c-4c5a-9da4-4c7581d262aa.png)] bg-cover bg-no-repeat absolute top-[14.382px] left-[348px] z-[17]"> 
    </div> 
    <div className={`dropdown-content absolute top-[30px] left-[328px] bg-white rounded-md shadow-lg p-3 ${isOpen2 ? 'show' : ''}`}>  {/* Adjust 'left' position  */}
      {/* The same links as before */}
      <a
                href="https://stackoverflow.com/"
                class="dropdown-item block py-2 hover:text-blue-400"
              >
                Stack Overflow
              </a>
              <a
                href="https://github.com/"
                class="dropdown-item block py-2 hover:text-blue-400"
              >
                GitHub
              </a>
              <a
                href="https://developer.mozilla.org/"
                class="dropdown-item block hover:text-blue-400 py-2 hover:bg-gray-100"
                >
                MDN Web Docs
              </a>
    </div>
  </div>

          {/* <div  className="w-[14px] h-[8px] bg-[url(../assets/images/b640447f-eb9c-4c5a-9da4-4c7581d262aa.png)] bg-cover bg-no-repeat absolute top-[14.382px] left-[348px] z-[17]"/> */}
         {/* <div  className="w-[14px] h-[8px] bg-[url(../assets/images/601c3f37-e0aa-4bf6-884d-874ce735db8a.png)] bg-cover bg-no-repeat absolute top-[14.382px] left-[509px] z-[21]" /> */}

         <div className="relative"> 
    <div onClick={toggleOpen3} className="trigger-button w-[14px] h-[8px] bg-[url(../assets/images/601c3f37-e0aa-4bf6-884d-874ce735db8a.png)] bg-cover bg-no-repeat absolute top-[14.382px] left-[509px] z-[21]"> 
    </div> 
    <div className={`dropdown-content absolute top-[30px] left-[489px] bg-white  rounded-md shadow-lg p-3 ${isOpen3 ? 'show' : ''}`}>  {/* Adjust 'left' position  */}
      <a href="https://www.w3schools.com/" className="dropdown-item block py-2 hover:text-blue-400">W3Schools</a>
      <a href= "https://codepen.io/" className="dropdown-item block py-2 hover:text-blue-400">Codepen</a>
      <a href="https://dev.to/" className="dropdown-item block py-2 hover:text-blue-400">Dev.to</a>
    </div>
  </div>




          <span className="flex h-[24px] justify-start items-start font-['Poppins'] text-[16px] font-medium leading-[24px] text-[#231e1e] absolute top-[6px] left-[197px] text-left whitespace-nowrap z-[16]">
            Resume package
          </span>
          <span className="flex h-[24px] justify-start items-start font-['Poppins'] text-[16px] font-medium leading-[24px] text-[#231e1e] absolute top-[6px] left-[431px] text-left whitespace-nowrap z-20">
            Location
          </span>
          <span className="flex h-[24px] justify-start items-start font-['Poppins'] text-[16px] font-medium leading-[24px] text-[#231e1e] absolute top-[6px] left-[13px] text-left whitespace-nowrap z-[12]">
            Job title
          </span>

          <span className="flex h-[24px] justify-start items-start font-['Poppins'] text-[16px] font-medium leading-[24px] text-[#999999] absolute top-[32px] left-[13px] text-left whitespace-nowrap z-[14]">
            UI/UX designer
          </span>

          <span className="flex h-[24px] justify-start items-start font-['Poppins'] text-[16px] font-medium leading-[24px] text-[#999999] absolute top-[32px] left-[197px] text-left whitespace-nowrap z-[18]">
            Free
          </span>
          <span className="flex h-[24px] justify-start items-start font-['Poppins'] text-[16px] font-medium leading-[24px] text-[#999999] absolute top-[32px] left-[431px] text-left whitespace-nowrap z-[22]">
            US
          </span>
        </div>
        <div className="w-[237px]  h-[50px] hover:bg-yellow-900 cursor-pointer  bg-[#e7af38] rounded-[8px] absolute top-[436px]  z-[77]">
          <span className="flex h-[30px] justify-start items-start font-['Poppins'] text-[20px] font-semibold leading-[30px] text-[#fff] absolute top-[10px] left-[14px] text-left whitespace-nowrap z-[78]">
            Create CV now
          </span>
          <div className="w-[47px] h-[11.547px] bg-[url(../assets/images/4bcdeb43-417c-4e35-9e49-b3beb57adf63.png)] bg-cover bg-no-repeat absolute top-[19.226px] left-[176px] z-[79]" />
        </div>
      </div>
      <div className="w-[1302.96px] h-[70.96px] relative z-[187] mt-[75px] mr-0 mb-0 ml-[72px]">
        <span className="flex w-[415px] h-[60px] justify-center items-start font-['Poppins'] text-[40px] font-bold leading-[60px] text-[#241e1e] absolute top-0 left-[calc(50%-651.48px)] text-center whitespace-nowrap z-[34]">
          Incollaboration with
        </span>
        <div className="w-[3.6%] h-[66.18%] bg-[url(../assets/images/b2eb780b-55df-4a37-b949-649c9911c333.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[36.64%] left-[96.55%] z-[187]" />
        <div className="w-[72px] h-[3px] bg-[url(../assets/images/c1d7da96-dac3-4f84-aeff-414c512b0e1b.png)] bg-cover bg-no-repeat absolute top-[60px] left-[172px] z-[183]" />
      </div>
      <div className="w-[21.18px] h-[21.18px] bg-[url(../assets/images/9ac11ef3-8afd-4fe4-9194-a0b88d6a62a0.png)] bg-[length:100%_100%] bg-no-repeat relative z-[188] mt-[2.04px] mr-0 mb-0 ml-[1373px]" />
      <Marquee>
        <div className="flex w-[1175px] h-[84px] justify-between items-center relative z-[90] mt-[-4.18px] mr-0 mb-0 ml-[133px]">
          <div className="w-[150px] h-[32.813px] shrink-0 bg-[url(../assets/images/483e2a7b7a9770bdbe39ccf258d8d0fd6968c601.png)] bg-cover bg-no-repeat relative z-[85]" />
          <div className="w-[200px] h-[73.315px] shrink-0 bg-[url(../assets/images/9b2b2b0f0904f753621fb047383b70ab75fdb26a.png)] bg-cover bg-no-repeat relative z-[86]" />
          <div className="w-[150px] h-[50.518px] shrink-0 bg-[url(../assets/images/deb622a80c3dfaca6963d00c919b1ad2e50639de.png)] bg-cover bg-no-repeat relative z-[87]" />
          <div className="w-[150px] h-[42.959px] shrink-0 bg-[url(../assets/images/bff0dfb58214856e054bd7b725bda51d4c4a0b53.png)] bg-cover bg-no-repeat relative z-[88]" />
          <div className="w-[150px] h-[46.642px] shrink-0 bg-[url(../assets/images/843290703f28caa8a406d7f7bbbdc498f8270f15.png)] bg-cover bg-no-repeat relative z-[89]" />
          <div className="w-[150px] h-[84px] shrink-0 bg-[url(../assets/images/79e272057db5181ba1d03d1894ce5ea3fd88c231.png)] bg-cover bg-no-repeat relative z-[90]" />
        </div>
      </Marquee>
      <div className="w-[150.055px] h-[25.009px] relative z-[125] mt-[25px] mr-0 mb-0 ml-[59.001px]">
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/d80424a1-cda3-4f21-b20e-732f666eda8c.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-0 left-[125.045px] z-[125]" />
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/37ea469e-29f7-40c5-9e1e-f4fd3a44b567.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-0 left-0 z-[119]" />
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/ccfa5bbc-bca4-411a-8213-e3c364fe0552.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-0 left-[62.522px] z-[122]" />
      </div>
      <div className="w-[789px] h-[72.477px] relative z-[124] mt-[37.514px] mr-0 mb-0 ml-[59px]">
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/f4a33cce-877c-4c8b-bcaf-bbcafb1fd0bc.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-0 left-0 z-[118]" />
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/243b3e3b-af93-404b-8007-6f22a9a40bdc.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-0 left-[125.047px] z-[124]" />
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/1b282149-7ae9-4df0-8aa3-adf5292fb94c.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-0 left-[62.523px] z-[121]" />
        <span className="flex w-[256px] h-[60px] justify-center items-start font-['Poppins'] text-[40px] font-bold leading-[60px] text-[#241e1e] absolute top-[12.477px] left-[calc(50%--138.5px)] text-center whitespace-nowrap z-[33]">
          Popular jobs
        </span>
      </div>
      <div className="w-[697px] h-[25.01px] relative z-[182] mt-[-9.954px] mr-0 mb-0 ml-[59px]">
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/085ada39-9129-4717-aa6e-c7db506517d7.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-0 left-[125.046px] z-[123]" />
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/7c4785ee-f943-40ff-aaba-38b8aa2af0a8.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-0 left-[62.523px] z-[120]" />
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/b0cc95e4-0d18-4d74-955c-742949f2c56a.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-0 left-0 z-[117]" />
        <div className="w-[72px] h-[3px] bg-[url(../assets/images/ebf2ada4-5152-4f48-a5e7-9b34729781eb.png)] bg-cover bg-no-repeat absolute top-[9.954px] left-[625px] z-[182]" />
      </div>
      <div className="w-[1199.055px] h-[275px] relative z-[135] mt-[54.944px] mr-0 mb-0 ml-[218px]">
        <div className="w-[275px] h-[275px] bg-[#fff] rounded-[18px] absolute top-0 left-0 shadow-[0_0_8px_0_rgba(0,0,0,0.3)] z-[97]">
          <div className="w-[82px] h-[82px] bg-[url(../assets/images/be5a56af-8ba8-4a60-b2f4-ef287dba9765.png)] bg-cover bg-no-repeat relative z-[98] mt-[52px] mr-0 mb-0 ml-[97px]" />
          <span className="flex w-[211px] h-[64px] justify-center items-start font-['Poppins'] text-[21px] font-normal leading-[31.5px] text-[#181616] relative text-center z-[99] mt-[25px] mr-0 mb-0 ml-[32px]">
            Finance accounting 100 job vacancy
          </span>
        </div>
        <div className="w-[275px] h-[275px] bg-[#fff] rounded-[18px] absolute top-0 left-[365px] shadow-[0_0_19.6px_0_rgba(0,0,0,0.25)] z-[92]">
          <div className="w-[82px] h-[82px] bg-[url(../assets/images/24a0a8c2-1003-40e6-a14e-eee31ddd5700.png)] bg-cover bg-no-repeat relative z-[94] mt-[52px] mr-0 mb-0 ml-[97px]" />
          <span className="flex w-[211px] h-[64px] justify-center items-start font-['Poppins'] text-[21px] font-normal leading-[31.5px] text-[#181616] relative text-center z-[95] mt-[25px] mr-0 mb-0 ml-[32px]">
            software engineer 100 job vacancy
          </span>
          <div className="w-[275px] h-[21px] bg-[#e7af38] rounded-tl-none rounded-tr-none rounded-br-[18px] rounded-bl-[18px] relative z-[93] mt-[31px] mr-0 mb-0 ml-0" />
        </div>
        <div className="w-[275px] h-[275px] bg-[#fff] rounded-[18px] absolute top-0 left-[730px] shadow-[0_0_8px_0_rgba(0,0,0,0.3)] z-[101]">
          <div className="w-[82px] h-[82px] bg-[url(../assets/images/68614edd-8b58-467b-808f-0d71b9348779.png)] bg-cover bg-no-repeat relative z-[102] mt-[52px] mr-0 mb-0 ml-[97px]" />
          <span className="flex w-[211px] h-[64px] justify-center items-start font-['Poppins'] text-[21px] font-normal leading-[31.5px] text-[#181616] relative text-center z-[103] mt-[25px] mr-0 mb-0 ml-[32px]">
            Registered Nurse 100 job vacancy
          </span>
        </div>
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/b839a366-bf78-405a-b538-47bc7c8a9a4c.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-[223px] left-[1174.046px] z-[135]" />
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/e3843d94-084d-4e1a-b7d8-d9f683821f98.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-[223px] left-[1049.001px] z-[129]" />
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/a9564e97-eb53-4eba-85cf-157b3838cb4d.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-[223px] left-[1111.523px] z-[132]" />
      </div>
      <div className="w-[150.056px] h-[25.009px] relative z-[134] mt-[10.523px] mr-0 mb-0 ml-[1267px]">
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/3225cdf5-babc-43a6-a146-0f8e81244728.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-0 left-0 z-[128]" />
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/c15f118b-2014-4ac1-850b-9cfb90d7805b.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-0 left-[125.047px] z-[134]" />
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/3be2e2a3-aa34-4304-be7c-cdbfceac2959.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-0 left-[62.523px] z-[131]" />
      </div>
      <div className="w-[1358.056px] h-[275px] relative z-[191] mt-[34.467px] mr-0 mb-0 ml-[59px]">
        <div className="w-[3.46%] h-[17.08%] bg-[url(../assets/images/13df8b6c-88bd-400a-98e3-b4f783e97609.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[-0.73%] left-[-0.15%] z-[190]" />
        <div className="w-[275px] h-[275px] bg-[#fff] rounded-[18px] absolute top-0 left-[159px] shadow-[0_0_8px_0_rgba(0,0,0,0.3)] z-[109]">
          <div className="w-[82px] h-[82px] bg-[url(../assets/images/069fd0cb-21b6-418d-8328-6642d6091729.png)] bg-cover bg-no-repeat relative z-[110] mt-[52px] mr-0 mb-0 ml-[97px]" />
          <span className="flex w-[211px] h-[64px] justify-center items-start font-['Poppins'] text-[21px] font-normal leading-[31.5px] text-[#181616] relative text-center z-[111] mt-[25px] mr-0 mb-0 ml-[32px]">
            Marketing Manager 100 job vacancy
          </span>
        </div>
        <div className="w-[275px] h-[275px] bg-[#fff] rounded-[18px] absolute top-0 left-[524px] shadow-[0_4px_8px_0_rgba(0,0,0,0.3)] z-[105]">
          <div className="w-[82px] h-[82px] bg-[url(../assets/images/bf0b1e24-ecaa-42b1-aa0a-84fc6fb2734b.png)] bg-cover bg-no-repeat relative z-[106] mt-[52px] mr-0 mb-0 ml-[97px]" />
          <span className="flex w-[211px] h-[64px] justify-center items-start font-['Poppins'] text-[21px] font-normal leading-[31.5px] text-[#181616] relative text-center z-[107] mt-[25px] mr-0 mb-0 ml-[32px]">
            Financial Analyst 100 job vacancy
          </span>
        </div>
        <div className="w-[275px] h-[275px] bg-[#fff] rounded-[18px] absolute top-0 left-[889px] shadow-[0_0_8px_0_rgba(0,0,0,0.3)] z-[113]">
          <div className="w-[82px] h-[82px] bg-[url(../assets/images/c92aaeb7-c8e2-4af4-9ad0-1234cd77e784.png)] bg-cover bg-no-repeat relative z-[114] mt-[52px] mr-0 mb-0 ml-[97px]" />
          <span className="flex w-[211px] h-[64px] justify-center items-start font-['Poppins'] text-[21px] font-normal leading-[31.5px] text-[#181616] relative text-center z-[115] mt-[25px] mr-0 mb-0 ml-[32px]">
            Customer Service 100 job vacancy
          </span>
        </div>
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/c197e221-6e9d-4206-8285-9a766643af50.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-[3.046px] left-[1333.047px] z-[133]" />
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/92b6d631-8f2a-4766-aee0-3527596c3bb1.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-[3.046px] left-[1270.523px] z-[130]" />
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/408f5feb-25b0-438f-8aca-8e200fa17d19.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-[3.046px] left-[1208px] z-[127]" />
        <div className="w-[1.56%] h-[7.7%] bg-[url(../assets/images/af6feef4-48bc-4f2f-b7da-c447cb496661.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[16.36%] left-[3.02%] z-[191]" />
      </div>
      <div
        id="about"
        className="w-[218px] cursor-pointer hover:bg-yellow-900 h-[50px] bg-[#e7af38] rounded-[8px] relative z-[81] mt-[70px] mr-0 mb-0 ml-[611px]"
      >
        <span className="flex h-[30px] justify-start items-start font-['Poppins'] text-[20px] font-semibold leading-[30px] text-[#fff] absolute top-[10px] left-[14px] text-left whitespace-nowrap z-[82]">
          Explore more
        </span>
        <div className="w-[47px] h-[11.547px] bg-[url(../assets/images/c356b9b9-6f34-4c03-8bd6-d12d64330fb0.png)] bg-cover bg-no-repeat absolute top-[19.226px] left-[157px] z-[83]" />
      </div>
      <span className="flex w-[259px] h-[60px] justify-center items-start font-['Poppins'] text-[40px] font-bold leading-[60px] text-[#241e1e] relative text-center whitespace-nowrap z-[35] mt-[100px] mr-0 mb-0 ml-[591px]">
        How its work
      </span>
      <div className="w-[1348.959px] h-[42.96px] relative z-[193] mt-0 mr-0 mb-0 ml-[14.001px]">
        <div className="w-[3.48%] h-[109.31%] bg-[url(../assets/images/5c13fa80-eb0e-49b9-a403-18ecb3ce16da.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[-4.66%] left-[96.67%] z-[193]" />
        <div className="w-[72px] h-[3px] bg-[url(../assets/images/18fe425e-8045-4ec7-b96d-86f4a028ce56.png)] bg-cover bg-no-repeat absolute top-0 left-[669.999px] z-[181]" />
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/e67a9798-8fac-4914-bc26-a1eb702ffba8.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-[10px] left-[125.045px] z-[46]" />
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/ec8e52c1-4d83-43d3-9051-d3e928364ad8.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-[10px] left-0 z-40" />
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/97d0e025-9fba-45d3-a495-cb5a7bad6efc.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-[10px] left-[62.522px] z-[43]" />
      </div>
      <div className="w-[21.18px] h-[21.18px] bg-[url(../assets/images/6c7f40ba-21d5-41a1-8503-fd2892b72830.png)] bg-[length:100%_100%] bg-no-repeat relative z-[194] mt-[2.04px] mr-0 mb-0 ml-[1361px]" />
      <div className="w-[1323px] h-[495px] relative z-[180] mt-[3.82px] mr-0 mb-0 ml-[14px]">
        <div className="w-[598px] h-[495px] bg-[url(../assets/images/08180453-7b05-4a6c-be8b-9be8760cd610.png)] bg-cover bg-no-repeat rounded-tl-[10px] rounded-tr-[60px] rounded-br-[10px] rounded-bl-[60px] absolute top-0 left-[61px] z-[57]">
          <div className="flex w-[87.532px] h-[25.009px] justify-between items-center relative z-[45] mt-[2.523px] mr-0 mb-0 ml-[1.523px]">
            <div className="w-[25.009px] h-[25.009px] shrink-0 bg-[url(../assets/images/665795a9-9483-4392-864f-e462a359b1e0.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[42]" />
            <div className="w-[25.009px] h-[25.009px] shrink-0 bg-[url(../assets/images/8d5218e6-5944-4193-9d35-526256e2e3f9.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[45]" />
          </div>
          <div className="flex w-[87.532px] h-[25.009px] justify-between items-center relative z-[44] mt-[37.513px] mr-0 mb-0 ml-[1.523px]">
            <div className="w-[25.009px] h-[25.009px] shrink-0 bg-[url(../assets/images/71d59e9d-6256-4ca3-8f3b-6ad8dc6ae93e.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[41]" />
            <div className="w-[25.009px] h-[25.009px] shrink-0 bg-[url(../assets/images/c80bf52e-57b4-431f-acf8-3de7eb47a136.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[44]" />
          </div>
          <div className="flex w-[87.531px] h-[25.009px] justify-between items-center relative z-[53] mt-[315.945px] mr-0 mb-0 ml-[508.001px]">
            <div className="w-[25.009px] h-[25.009px] shrink-0 bg-[url(../assets/images/a07189b1-9d5b-47f3-ad62-a652fb6a3a40.png)] bg-cover bg-no-repeat rounded-[50%] relative z-50" />
            <div className="w-[25.009px] h-[25.009px] shrink-0 bg-[url(../assets/images/9e64e5d5-e5df-475c-86ca-14cfb29ddf21.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[53]" />
          </div>
          <div className="flex w-[87.533px] h-[25.009px] justify-between items-center relative z-[52] mt-[37.514px] mr-0 mb-0 ml-[508px]">
            <div className="w-[25.009px] h-[25.009px] shrink-0 bg-[url(../assets/images/b1c8d37a-aa01-4873-979f-bc59a455deab.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[49]" />
            <div className="w-[25.009px] h-[25.009px] shrink-0 bg-[url(../assets/images/36e8fdaa-ea10-4384-98e6-bfcc45cf605e.png)] bg-cover bg-no-repeat rounded-[50%] relative z-[52]" />
          </div>
        </div>
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/e4fe47b8-c6ca-4f9d-b5c7-ba63db019ff7.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-[2.523px] left-0 z-[39]" />
        <span className="flex h-[45px] justify-start items-start font-['Poppins'] text-[30px] font-semibold leading-[45px] text-[#241e1e] absolute top-[19px] left-[calc(50%--103.5px)] text-left whitespace-nowrap z-[170]">
          First create account
        </span>
        <div className="w-[308px] h-[3px] bg-[url(../assets/images/3e5598f6-ee93-4dff-b27c-e3f5cbbeacac.png)] bg-cover bg-no-repeat absolute top-[62.5px] left-[763.5px] z-[172]" />
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/944721b1-d8f3-4d25-8ebf-7b5a9e67e72e.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-[65.046px] left-0 z-[38]" />
        <span className="flex w-[558px] h-[78px] justify-start items-start font-['Poppins'] text-[17px] font-normal leading-[25.5px] text-[#484848] absolute top-[82px] left-[calc(50%--103.5px)] text-left z-[171]">
          Create your account today to access a world of opportunities. With a
          seamless registration process, personalized job recommendations, and
          user-friendly interface
        </span>
        <button className="w-[190px] h-[45px] font-['Poppins'] text-[30px] font-semibold leading-[45px] text-[#241e1e] border-none absolute top-[178px] left-1/2 translate-x-[54.47%] translate-y-0 whitespace-nowrap z-[179] pointer" />
        {/* <div className="w-[193px] h-[3px] bg-[url(../assets/images/75f44da1-ecbe-4dc3-ae9f-c78a3c8adf81.png)] bg-cover bg-no-repeat absolute top-[221.5px] left-[763.5px] z-[180]" /> */}
        <span className="flex w-[558px] h-[8opx] justify-start items-start font-['Poppins'] text-[17px] font-normal  text-[#484848] absolute top-[180px] left-[calc(50%--103.5px)] text-left z-[178]">
          Browse through diverse listings from top employers, filter by
          industry, location, and expertise, and find the perfect match for your
          career goals.personalized job recommendations, and user-friendly
          interface.
        </span>
        <span className="flex h-[45px] justify-start items-start font-['Poppins'] text-[30px] font-semibold leading-[45px] text-[#241e1e] absolute top-[337px] left-[calc(50%--103.5px)] text-left whitespace-nowrap z-[175]">
          Apply a job you need
        </span>
        <div className="w-[323px] h-[3px] bg-[url(../assets/images/3fdd662d-9386-4c9e-9b63-c43fc0a83c76.png)] bg-cover bg-no-repeat absolute top-[380.5px] left-[763.5px] z-[176]" />
        <span className="flex w-[558px] h-[78px] justify-start items-start font-['Poppins'] text-[17px] font-normal leading-[25.5px] text-[#484848] absolute top-[400px] left-[calc(50%--103.5px)] text-left z-[174]">
          Apply for your dream job at workwisly with just a click! Elevate your
          career by submitting your application today and let your skills shine
          in the perfect professional setting.
        </span>
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/bdceb2a6-eb42-425e-aeee-0e470c8d24b6.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-[406px] left-[694.046px] z-[56]" />
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/fcc8529a-bf0e-4e26-abc7-8b7b40bd0307.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-[468.523px] left-[694.047px] z-[55]" />
      </div>
      <div className="w-[829.055px] h-[25.056px] relative z-[54] mt-[36px] mr-0 mb-0 ml-[583px]">
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/f5379857-5334-4545-a453-dd1326b32893.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-0 left-[804.046px] z-[9]" />
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/76b8348b-9939-459f-b63f-46ea18477f57.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-0 left-[679px] z-[3]" />
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/0a72ec18-664c-4a5d-95d2-5d0010861f11.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-0 left-[741.522px] z-[6]" />
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/20537d22-7619-4447-82e8-012ebc607574.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-[0.05px] left-[125.046px] z-[54]" />
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/2665e558-1ced-4c67-a59c-f39f28391ceb.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-[0.05px] left-[62.523px] z-[51]" />
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/ddaaf898-f610-45ce-a5ec-5450533ea7a6.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-[0.05px] left-0 z-[48]" />
      </div>
      <div className="w-[150.056px] h-[25.009px] relative z-[8] mt-[37.468px] mr-0 mb-0 ml-[1262px]">
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/4f41986f-fded-4119-9bd3-7dcfc6f8672c.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-0 left-0 z-[2]" />
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/8e8aa41d-14e7-402d-853d-f3a84ee20083.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-0 left-[125.047px] z-[8]" />
        <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/1e04798d-14a1-43bd-99b4-59f849dff3e3.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-0 left-[62.523px] z-[5]" />
      </div>
      <div className="w-[1440px] h-[333.96px] relative z-[196] mt-[6.467px] mr-0 mb-0 ml-0">
        <div className="w-[1440px] h-[323px] bg-[rgba(231,175,56,0.3)] absolute top-0 left-0 z-[136]">
          <div className="w-[150.055px] h-[25.01px] relative z-[7] mt-[31.046px] mr-0 mb-0 ml-[1262px]">
            <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/54df7fa7-ac7e-4bfc-93b0-753554852e8d.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-0 left-[125.046px] z-[7]" />
            <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/b7597414-71da-420f-b0cb-2d20f168ab16.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-0 left-[62.523px] z-[4]" />
            <div className="w-[25.009px] h-[25.009px] bg-[url(../assets/images/a51ef58b-73cd-46a9-8266-226a7b3f3432.png)] bg-cover bg-no-repeat rounded-[50%] absolute top-0 left-0 z-[1]" />
          </div>
          <span className="block h-[60px] font-['Poppins'] text-[40px] font-bold leading-[60px] text-[#262121] relative text-left whitespace-nowrap z-[137] mt-[-6.056px] mr-0 mb-0 ml-[502px]">
            Subscribe Newsletter
          </span>
          <span className="block h-[45px] font-['Poppins'] text-[30px] font-light leading-[45px] text-[#545454] relative text-left whitespace-nowrap z-[138] mt-[21px] mr-0 mb-0 ml-[400px]">
            For every job vacancies and recent update
          </span>
          <div className="w-[627px] h-[57px] bg-[#fff] rounded-[10px] relative z-[140] mt-[40px] mr-0 mb-0 ml-[407px]">
            <input
              className="w-[640px] h-[57px] bg-transparent border-none absolute top-0 left-4 z-[145]"
              type="text"
              placeholder="Enter email address"
            />
          </div>
        </div>
        <div className="w-[3.26%] h-[14.06%] bg-[url(../assets/images/1155ccca-ab1c-48ed-b844-a216e919ba7c.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[86.54%] left-[3.54%] z-[196]" />
      </div>

      <div className="w-[21.18px] h-[21.18px] bg-[url(../assets/images/705e46a3-fa10-4d8c-b13f-84db7036c588.png)] bg-[length:100%_100%] bg-no-repeat relative z-[197] mt-[2.04px] mr-0 mb-0 ml-[94px]" />
      <div className="w-[1440px] cursor-pointer h-[490px] text-[0px] bg-[#4c3400]  z-[147] mt-[65px] mr-0 mb-0 ml-0">
        <span className="h-[36px] fonts font-['Poppins'] text-[24px] top-10 relative font-semibold  text-[#fff]  text-left py-8 mr-0 mb-8 ml-[75px] ">
          WorkWisely
        </span>

        <div className="flex w-[365px] h-[39px] justify-between items-center relative z-[155] mt-[10px] mr-0 mb-0 ml-[874px]">
          <span className="h-[39px] shrink-0 font-['Outfit'] text-[29px] font-medium leading-[39px] text-[#fff] tracking-[0.14px] relative text-left whitespace-nowrap z-[155]">
            About
          </span>
          <span className="h-[39px] shrink-0 font-['Outfit'] text-[29px] font-medium leading-[39px] text-[#fff] tracking-[0.14px] relative text-left whitespace-nowrap z-[152]">
            Product
          </span>
        </div>
        <div className="flex w-[224.977px] h-[27.138px] justify-between items-center relative z-[160] mt-[19.863px] mr-0 mb-0 ml-[113.023px]">
          <div className="w-[22.452px] h-[27.138px] shrink-0 bg-[url(../assets/images/4be8f23c-aa8f-4eeb-92e3-b2021e891919.png)] bg-cover bg-no-repeat relative z-[159]" />
          <span className="h-[27px] shrink-0 font-['Inter'] text-[20px] font-medium leading-[27px] text-[#fff] tracking-[0.1px] relative text-left capitalize whitespace-nowrap z-[160]">
            (+1) 299 699 7842
          </span>
        </div>
        <div className="w-[1167px] h-[224px]  relative pb-14 z-[167] mt-[10px] mr-0 mb-0 ml-[113px] ">
          <span className="flex w-[238px]  h-[224px] justify-start items-start font-['Outfit'] text-[24px] font-normal  mb-20 text-[#fff] relative  top-0 left-[761px] text-left z-[154] ">
            Company
            <br />
            <br />
            Contact Us
            <br />
            <br />
            Terms and Service
            <br />
            <br />
            Privacy Policy
          </span>
          <span className=" w-[144px] h-[160px] justify-start  items-start font-['Outfit'] text-[24px] font-normal text-[#fff]  absolute top-[2px] left-[1023px] text-left z-[151] space-y-8">
            Categories
            <br />
            <br />
            Pricing
            <br />
            <br />
            Testimonials
          </span>
          <span className="flex h-[27px] justify-start items-start font-['Inter'] text-[20px] font-medium leading-[27px] text-[#fff] tracking-[0.1px] absolute top-[25px] left-[44px] text-left capitalize whitespace-nowrap z-[162]">
            creativehub@gmail.com
          </span>
          <div className="w-[22px] h-[22px] bg-[url(../assets/images/3608f3e3-001e-4dbe-a041-46e6ed0cc3d7.png)] bg-[length:100%_100%] bg-no-repeat absolute top-[28px] left-0 z-[164]" />
          <span className="flex w-[382px] h-[54px] justify-start items-start font-['Inter'] text-[20px] font-medium leading-[27px] text-[#fff] tracking-[0.1px] absolute top-[82px] left-[42px] text-left capitalize z-[166]">
            200 BN tower, william S BSVD 3432, USA
          </span>
          <div className="w-[18px] h-[26px] bg-[url(../assets/images/905ca695-ae5f-4af6-8c88-08f0f4c404f8.png)] bg-cover bg-no-repeat absolute top-[96px] left-0 z-[167]" />
        </div>
      </div>
    </div>
  );
}
