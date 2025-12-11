import React, { useState } from 'react';

const UserPanel: React.FC = () => {

  return (
    <div className="bg-[#0F0F0F] border-gradient p-4 rounded-32 relative h-full opacity-0 slide-up slide-up-2">
      <img src="/images/border-gradient.png" className="absolute top-0 left-0 w-full h-full pointer-events-none" alt=""/>
      <div className="blockPanel relative z-2 w-full">
        <div className="relative bg-[#1E1E1E] rounded-[24px_24px_0_0] 2xl:rounded-[32px_32px_0_0] px-5 py-3 2xl:py-4 3xl:py-5 border border-b-0 border-solid border-[#282828]">
          <div className="text-15 2xl:text-20 4xl:text-22 text-white font-semibold">
            홍길동 회원님 안녕하세요.
          </div>
        </div>
        <div className="relative rounded-[0_0_24px_24px] 2xl:rounded-[0_0_32px_32px] border border-t-0 border-solid border-[#282828] overflow-hidden">
          <div className="relative top-0 left-0 w-full h-full flex items-center px-4 2xl:px-6 py-3 2xl:py-4 4xl:py-6">
            <img src="/images/bg-userPanel.png" className="w-full h-full absolute top-0 left-0 object-cover" alt=""/>
            <ul className="relative z-2">
              <li className="flex items-center gap-4 font-bold mb-2 2xl:mb-4 4xl:mb-5 last:mb-0">
                <span className="text-white">보유골드 </span>
                <label className="text-yellow text-18 xl:text-20 2xl:text-22 3xl:text-24 4xl:text-28">3,000,000,000G</label>
              </li>
              <li className="flex items-center gap-4 font-bold mb-2 2xl:mb-4 4xl:mb-5 last:mb-0">
                <div className="flex text-yellow gap-3 text-13 2xl:text-15 3xl:text-16 4xl:text-18">
                  <button className="border border-2 border-yellow px-4 2xl:px-5 3xl:px-7 4xl:px-9 py-1 2xl:py-2 4xl:py-3 text-black rounded-full font-semibold minw-w-[unset] 2xl:min-w-[110px] 4xl:min-w-41 transition-all hover:scale-[1.04] bg-[linear-gradient(180deg,#EBBD38_0%,#AE760D_100%)]">골드충전</button>
                  <button className="border border-2 border-yellow px-4 2xl:px-5 3xl:px-7 4xl:px-9 py-1 2xl:py-2 4xl:py-3 text-yellow rounded-full font-semibold minw-w-[unset] 2xl:min-w-[110px] 4xl:min-w-41 transition-all hover:scale-[1.04]">골드환전</button>
                  <button className="border border-2 border-yellow px-4 2xl:px-5 3xl:px-7 4xl:px-9 py-1 2xl:py-2 4xl:py-3 text-yellow rounded-full font-semibold minw-w-[unset] 2xl:min-w-[110px] 4xl:min-w-41 transition-all hover:scale-[1.04]">금고 : 000,000,000 G</button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="py-3 px-4 w-[calc(100%+32px)] relative left-[-16px] border-b border-solid border-[#282828]">
          <div className="icon-abs flex items-center absolute top-0 right-0 h-full w-full text-right pointer-events-none">
            <svg className="w-[auto] h-full inline ml-auto" viewBox="0 0 315 73" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M47.4138 0L314.805 4.80126e-06V73H0L47.4138 0Z" fill="url(#paint0_linear_11580_5559)"/>
              <defs>
                <linearGradient id="paint0_linear_11580_5559" x1="250.852" y1="-6.73941e-07" x2="250.852" y2="73" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#D7A62B" stop-opacity="0"/>
                  <stop offset="1" stop-color="#D7A62B" stop-opacity="0.2"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="flex items-center justify-between px-4 2xl:px-10 font-medium relative z-2">
            <div className=" flex items-center gap-3 2xl:gap-5">
              <span className="">Today</span>
              <p>10승 2패 <span className="text-yellow">(+ 1,200 G)</span></p>
            </div>
            <div className="">
              <button className="border border-1.5 border-yellow px-7 2xl:px-4 py-1 2xl:py-[6px] 3xl:py-2 text-yellow rounded-full font-semibold transition-all hover:scale-[1.04] ">콤프환전 12,345C</button>
            </div>
          </div>
        </div>
        <div className="pt-2 px-6 flex items-center  gap-2 font-semibold">
          <button className="relative text-yellow transition-all hover:scale-[1.04] ">
            <img src="/images/btn-main.png" className="h-8 2xl:h-9 3xl:h-11" alt=""/>
            <span className="absolute top-0 left-0 w-full h-full z-2 flex items-center justify-center">게임다시보기</span>
          </button>
          <button className="relative border border-1 border-[#3E3E3E] h-9 3xl:h-11 text-white rounded-full  transition-all hover:scale-[1.04] ">
            <img src="/images/btn-main.png" className="h-8 2xl:h-9 3xl:h-11 opacity-0" alt=""/>
            <span className="absolute top-0 left-0 w-full h-full z-2 flex items-center justify-center bg-[#000000] rounded-20">내점보</span>
            <span className="absolute bottom-[-1px] left-0 w-full z-3 flex items-center justify-center">
              <img src="/images/line.svg" alt=""/>
            </span>
          </button>
        </div>
      </div>

    </div>
  );
};

export default UserPanel;
