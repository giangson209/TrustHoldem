import React from 'react';

interface InfoModalProps {
    onClose: () => void;
}
const InfoModal: React.FC<InfoModalProps> = ({ onClose }) => {

    return (
        <section className="fixed left-0 top-0 w-full h-full z-3 flex items-center justify-center z-45">
            <div onClick={onClose} className="absolute bg-[#0006] top-0 left-0 w-full h-full"></div>
            <div className="relative max-w-120 w-full z-2">
                <img src="/images/cart-single.png" className="w-full max-w-120" alt=""/>
                <div className="absolute top-0 left-0 z-2 w-full">
                    <div className="p-8 font-bold text-24 text-white">
                        비밀번호를 입력하세요
                    </div>
                    <div
                        onClick={onClose}
                        className="close absolute top-5 right-5 cursor-pointer"
                    >
                        <img src="/images/close.png" alt=""/>
                    </div>
                    
                    <ul className="pt-4 px-8">
                        <li className="mb-8 last:mb-0">
                            <input type="text" placeholder="테이블 비밀번호" className="w-full border border-[rgb(255_255_255/50%)] placeholder:text-[rgb(255_255_255/50%)] font-normal text-white rounded-[48px] text-black px-5 h-12"/>
                        </li>
                        <li className="mb-8 last:mb-0">
                            <div className="max-w-88 m-auto w-full grid grid-cols-2 gap-6 font-bold">
                                <button className="w-full border border-yellow rounded-[48px] text-yellow h-12 transition-all hover:scale-[1.05] btn-register">취소</button>
                                <button className="w-full bg-gradient border border-yellow rounded-[48px] text-black h-12 transition-all hover:scale-[1.05] btn-login">확인</button>
                            </div>
                        </li>
                    </ul>
                </div>


            </div>
        </section>
    );
};

export default InfoModal;
