import React, { useState } from 'react';
import InfoUser from './InfoUser';

const UserPanel: React.FC = () => {
    const [showInfoUser, setShowInfoUser] = useState(false);

    if (showInfoUser) {
        return <InfoUser onBack={() => setShowInfoUser(false)} />;
    }

    return (
        <div className="bg-[#0F0F0F] p-4 rounded-32 relative h-full opacity-0 slide-up slide-up-2 border-0">
            <img src="/images/border-gradient.png" className="absolute top-0 left-0 w-full h-full pointer-events-none block" alt=""/>
            <div className="blockPanel relative z-2 w-full">
                <div className="relative bg-[#1E1E1E] rounded-[32px_32px_0_0] px-5 py-5 border border-b-0 border-solid border-[#282828]">
                    <div className="text-22 text-white font-semibold">
                        홍길동 회원님 안녕하세요.
                    </div>
                </div>
                <div className="relative rounded-[0_0_32px_32px] border border-t-0 border-solid border-[#282828] overflow-hidden">
                    <div className="relative top-0 left-0 w-full h-full flex items-center px-6 py-6">
                        <img src="/images/bg-userPanel.png" className="w-full h-full absolute top-0 left-0 object-cover" alt=""/>
                        <ul className="relative z-2">
                            <li className="flex items-center gap-4 font-bold :mb-0">
                                <span className="text-white">보유골드 </span>
                                <label className="text-yellow text-28">3,000,000,000G</label>
                            </li>
                            <li className="flex items-center gap-4 font-bold mb-0">
                                <div className="flex flex-wrap text-yellow gap-3 mt-4">
                                    <button className="border border-2 border-yellow px-9 py-3 text-black rounded-full font-semibold min-w-41 transition-all hover:scale-[1.04] bg-[linear-gradient(180deg,#EBBD38_0%,#AE760D_100%)]">골드충전</button>
                                    <button className="border border-2 border-yellow px-9 py-3 text-yellow rounded-full font-semibold min-w-41 transition-all hover:scale-[1.04]">골드환전</button>
                                    <button
                                        onClick={() => setShowInfoUser(true)}
                                        className="border border-2 border-yellow px-9 py-3 text-yellow rounded-full font-semibold min-w-41 transition-all hover:scale-[1.04]"
                                    >
                                        금고 : 000,000,000 G
                                    </button>
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
                    <div className="flex items-center justify-between px-10 font-medium relative z-2 text-left">
                        <div className="flex items-center justify-start gap-5">
                            <span className="">Today</span>
                            <p>10승 2패 <span className="text-yellow">(+ 1,200 G)</span></p>
                        </div>
                        <div className="mt-0">
                            <button className="border border-1.5 border-yellow px-4 py-2 text-yellow rounded-full font-semibold transition-all hover:scale-[1.04] ">콤프환전 12,345C</button>
                        </div>
                    </div>
                </div>
                <div className="pt-2 px-6 flex items-center gap-2 font-semibold">
                    <button className="relative text-yellow transition-all hover:scale-[1.04] ">
                        <img src="/images/btn-main.png" className="" alt=""/>
                        <span className="absolute top-0 left-0 w-full h-full z-2 flex items-center justify-center">게임다시보기</span>
                    </button>
                    <button className="relative border border-1 border-[#3E3E3E] bg-[#000000] text-white rounded-full  transition-all hover:scale-[1.04] ">
                        <img src="/images/btn-main.png" className=" opacity-0" alt=""/>
                        <span className="absolute top-0 left-0 w-full h-full z-2 flex items-center justify-center rounded-20">내점보</span>
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