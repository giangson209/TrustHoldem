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
                    <div className="relative w-full max-w-178 m-auto rounded-32 border border-[#FFE085] py-8  px-10 bg-[#010101] text-white overflow-hidden">
                        <img src="/images/cart-top.png" alt="" className="absolute top-0 left-0 pointer-events-none max-h-full"/>
                        <img src="/images/cart-bot.png" alt="" className="absolute bottom-0 right-0 pointer-events-none max-h-full"/>

                        <div onClick={onClose} className="absolute top-3 right-3 close z-4">
                            <img src="/images/close.png" alt=""/>
                        </div>
                        <div className="text-center relative z-2 w-102 m-auto">
                            <div className="text-18">
                                <ul>
                                    <li className="mb-6 last:mb-0">
                                        <input
                                            type="text"
                                            placeholder="기존 패스워드"
                                            className="w-full border border-[rgb(255_255_255/50%)] placeholder:text-[rgb(255_255_255/50%)] font-normal text-white rounded-[48px] text-black px-5 h-12"
                                        />
                                    </li>
                                    <li className="mb-6 last:mb-0">
                                        <input
                                            type="text"
                                            placeholder="변경 패스워드"
                                            className="w-full border border-[rgb(255_255_255/50%)] placeholder:text-[rgb(255_255_255/50%)] font-normal text-white rounded-[48px] text-black px-5 h-12"
                                        />
                                    </li>
                                    <li className="mb-6 last:mb-0">
                                        <input
                                            type="text"
                                            placeholder="변경 패스워드 확인"
                                            className="w-full border border-[rgb(255_255_255/50%)] placeholder:text-[rgb(255_255_255/50%)] font-normal text-white rounded-[48px] text-black px-5 h-12"
                                        />
                                    </li>
                                    <li className="mb-6 last:mb-0">
                                        <div className="text-24 font-bold text-left">
                                            비밀번호를 변경하시겠습니까?
                                        </div>
                                    </li>
                                    <li className="mb-6 last:mb-0 grid grid-cols-2 gap-5">
                                        <button
                                            onClick={onClose}
                                            className="w-full font-semibold border border-yellow rounded-[48px] text-yellow h-15 transition-all hover:scale-[1.05] btn-login text-18"
                                        >
                                            취소
                                        </button>
                                        <button
                                            className="w-full font-semibold bg-gradient border border-yellow rounded-[48px] text-black h-15 transition-all hover:scale-[1.05] btn-login text-18"
                                        >
                                            저장
                                        </button>

                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </AutoScaleModal>
        </>
    );
};

export default Infomation;