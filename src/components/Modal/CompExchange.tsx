import React from 'react';
import AutoScaleModal from '../AutoScaleModal';

interface RefillGoldProps {
    onClose: () => void;
}

const CompExchange: React.FC<RefillGoldProps> = ({ onClose }) => {
    return (
        <>
            <AutoScaleModal>
                <div className="wraper-main relative opacity-0 slide-up">
                    <div className="relative w-full max-w-175 m-auto rounded-32 border border-[#FFE085] py-8 px-10 bg-[#010101] text-white overflow-hidden">
                        <img src="/images/cart-top.png" alt="" className="absolute top-0 left-0 pointer-events-none max-h-full"/>
                        <img src="/images/cart-bot.png" alt="" className="absolute bottom-0 right-0 pointer-events-none max-h-full"/>

                        <div onClick={onClose} className="absolute top-3 right-3 close z-4">
                            <img src="/images/close.png" alt=""/>
                        </div>
                        <div className="pt-16 pb-12 text-center relative z-2">
                            <div className="text-24 !leading-[1.5] font-semibold">
                                <p>게임머니를 환전 하시겠습니까?</p>
                            </div>
                            <ul className="font-bold w-106 m-auto pt-10">
                                <li className="mb-6 last:mb-0 flex items-center gap-4">
                                    <span className="w-34 text-18 text-left">누적획득골드</span>
                                    <span className="text-gold text-28 relative w-[calc(100%-136px)]">+ 3,000,000,000 C</span>
                                </li>
                                <li className="mb-6 last:mb-0 flex items-center gap-4">
                                    <span className="w-34 text-18 text-left">누적획득골드</span>
                                    <span className="text-gold text-20 relative w-[calc(100%-136px)]">
                                        <select className="w-full bg-[#090702] border border-[rgb(255_255_255/50%)] font-normal text-white rounded-[48px] pl-5 pr-16 h-11.5 outline-0 hide-appearance">
                                            <option value="">10000 C</option>
                                            <option value="">20000 C</option>
                                            <option value="">30000 C</option>
                                            <option value="">40000 C</option>
                                            <option value="">50000 C</option>
                                        </select>
                                        <div className="absolute top-0 right-5 flex items-center h-full pointer-events-none">
                                            <img src="/images/icon-select.svg" alt=""/>
                                        </div>
                                    </span>
                                </li>
                            </ul>
                            <div className="mt-10 flex items-center justify-center gap-5">
                                <button onClick={onClose} className="min-w-50 font-semibold border border-yellow rounded-[48px] text-yellow h-15 transition-all hover:scale-[1.05] btn-login text-18">취소</button>
                                <button className="min-w-50 font-semibold bg-gradient border border-yellow rounded-[48px] text-black h-15 transition-all hover:scale-[1.05] btn-login text-18">확인</button>
                            </div>
                        </div>
                    </div>
                </div>
            </AutoScaleModal>
        </>
    );
};

export default CompExchange;