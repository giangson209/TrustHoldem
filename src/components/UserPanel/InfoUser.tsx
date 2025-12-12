import React, { useState } from 'react';

interface InfoUserProps {
    onBack: () => void;
}

const InfoUser: React.FC<InfoUserProps> = ({ onBack }) => {

    return (
        <div className="bg-[#0F0F0F] border-gradient p-4 rounded-32 relative h-full">
            <img src="/images/border-gradient.png" className="absolute top-0 left-0 w-full h-full pointer-events-none" alt=""/>
            <div className="blockPanel relative z-2 w-full">
                <div className="relative bg-[#1E1E1E] rounded-[32px_32px_0_0] px-5 py-5 border border-b-0 border-solid border-[#282828]">
                    <div className="text-22 text-white font-semibold">
                        홍길동 회원님 안녕하세요.
                    </div>
                    <div className="close absolute top-2 right-1 cursor-pointer" onClick={onBack}>
                        <img src="/images/close.png" alt=""/>
                    </div>
                </div>
                <div className="relative rounded-[0_0_32px_32px] border border-t-0 border-solid border-[#282828] overflow-hidden">
                    <div className="relative top-0 left-0 w-full h-full flex items-center px-6 py-6">
                        <img src="/images/bg-userPanel.png" className="w-full absolute top-0 left-0 object-cover" alt=""/>
                        <ul className="relative z-2">
                            <li className="flex items-center gap-4 font-bold mb-4 last:mb-0">
                                <span className="text-white">보유골드 </span>
                                <label className="text-yellow text-28">3,000,000,000G</label>
                            </li>
                            <li className="flex items-center gap-4 font-bold mb-4 last:mb-0">
                                <span className="text-white">보관중인 골드 </span>
                                <label className="text-yellow text-28">3,000,000,000G</label>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-4">
                    <div className="grid grid-cols-12 gap-6 px-5 mb-5 last:mb-0">
                        <div className="item col-span-3">
                            <span className="text-white font-bold flex items-center h-full">보관하기  </span>
                        </div>
                        <div className="item col-span-6">
                            <input type="text" placeholder="숫자만 입력" className="w-full h-12 px-4 border border-solid border-[#FFFFFF80] rounded-40 font-regular text-16"/>
                        </div>
                        <div className="item col-span-3">
                            <button className="text-yellow font-semibold text-center h-12 rounded-40 border border-[1.5] border-solid border-yellow w-full !itransition-all hover:text-black hover:bg-yellow">보관하기</button>
                        </div>
                    </div>
                    <div className="grid grid-cols-12 gap-6 px-5 mb-5 last:mb-0">
                        <div className="item col-span-3">
                            <span className="text-white font-bold flex items-center h-full">꺼내기  </span>
                        </div>
                        <div className="item col-span-6">
                            <input type="text" placeholder="숫자만 입력" className="w-full h-12 px-4 border border-solid border-[#FFFFFF80] rounded-40 font-regular text-16"/>
                        </div>
                        <div className="item col-span-3">
                            <button className="text-yellow font-semibold text-center h-12 rounded-40 border border-[1.5] border-solid border-yellow w-full !itransition-all hover:text-black hover:bg-yellow">꺼내기</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default InfoUser;