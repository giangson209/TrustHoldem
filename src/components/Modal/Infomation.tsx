import React from 'react';
import { useModal } from '../../contexts/ModalContext';
import AutoScaleModal from '../AutoScaleModal';

interface ModalProps {
    onClose: () => void;
}

const Infomation: React.FC<ModalProps> = ({ onClose }) => {
    const { openModal } = useModal();
    return (
        <>
            <AutoScaleModal>
                <div className="wraper-main relative opacity-0 slide-up">
                    <div className="relative w-full max-w-178 m-auto rounded-32 border border-[#FFE085] pt-16 pb-12  px-10 bg-[#010101] text-white overflow-hidden">
                        <img src="/images/cart-top.png" alt="" className="absolute top-0 left-0 pointer-events-none max-h-full"/>
                        <img src="/images/cart-bot.png" alt="" className="absolute bottom-0 right-0 pointer-events-none max-h-full"/>

                        <div onClick={onClose} className="absolute top-3 right-3 close z-4">
                            <img src="/images/close.png" alt=""/>
                        </div>
                        <div className="text-center relative z-2">
                            <div className="text-24 !leading-[1.5] font-bold pl-28">
                                <ul>
                                    <li className="mb-6 last:mb-0 flex items-center gap-4">
                                        <span className="w-30 text-18 text-left">보유골드 </span>
                                        <span className="text-gold text-28">3,000,000,000 G</span>
                                    </li>
                                    <li className="mb-6 last:mb-0 flex items-center gap-4">
                                        <span className="w-30 text-18 text-left">총  전적</span>
                                        <span className="text-gold text-28 ">000승 / 000패  승률 : 00.00%</span>
                                    </li>
                                    <li className="mb-6 last:mb-0 flex items-center gap-4">
                                        <span className="w-30 text-18 text-left">누적획득골드</span>
                                        <span className="text-gold text-28">+ 3,000,000,000 G</span>
                                    </li>
                                    <li className="mb-6 last:mb-0 flex items-center gap-4">
                                        <span className="w-30 text-18 text-left">토너먼트기록</span>
                                        <span className="text-gold text-28">00회 참가 / 00회 우승</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-6">
                                <div className="item mb-6 last:mb-0">
                                    <button
                                        onClick={() => openModal('changepass')}
                                        className="min-w-102 font-semibold bg-gradient border border-yellow rounded-[48px] text-black h-15 transition-all hover:scale-[1.05] btn-login text-18"
                                    >
                                        비밀번호 수정
                                    </button>
                                </div>
                                <div className="item mb-6 last:mb-0">
                                    <button
                                        onClick={() => openModal('withdrawmembership')}
                                        className="min-w-102 font-semibold border border-yellow rounded-[48px] text-yellow h-15 transition-all hover:scale-[1.05] btn-login text-18"
                                    >
                                        회원 탈퇴
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AutoScaleModal>
        </>
    );
};

export default Infomation;