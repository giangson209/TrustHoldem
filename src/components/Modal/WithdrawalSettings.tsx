import React from 'react';
import AutoScaleModal from '../AutoScaleModal';

interface RefillGoldProps {
    onClose: () => void;
}

const RefillGold: React.FC<RefillGoldProps> = ({ onClose }) => {
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
                                <p>금고에 보관 또는 꺼낼 때의 <br/>
                                    한도를 설정하시겠습니까?
                                </p>
                            </div>
                            <div className="text-center relative z-2 w-102 m-auto pt-8">
                                <div className="text-18">
                                    <ul>
                                        <li className="mb-10 last:mb-0">
                                            <input
                                                type="text"
                                                placeholder="숫자만 입력"
                                                className="w-full border border-[rgb(255_255_255/50%)] placeholder:text-[rgb(255_255_255/50%)] font-normal text-center text-white rounded-[48px] text-black px-5 h-12"
                                            />
                                        </li>
                                        <li className="mb-10 last:mb-0 grid grid-cols-2 gap-5">
                                            <button
                                                onClick={onClose}
                                                className="w-full font-semibold border border-yellow rounded-[48px] text-yellow h-15 transition-all hover:scale-[1.05] btn-login text-18"
                                            >
                                                취소
                                            </button>
                                            <button
                                                className="w-full font-semibold bg-gradient border border-yellow rounded-[48px] text-black h-15 transition-all hover:scale-[1.05] btn-login text-18"
                                            >
                                                설정
                                            </button>

                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AutoScaleModal>
        </>
    );
};

export default RefillGold;