import React from 'react';
import AutoScaleModal from '../AutoScaleModal';

interface ModalProps {
    onClose: () => void;
}

const WithdrawMembership: React.FC<ModalProps> = ({ onClose }) => {
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
                            <div className="text-24 !leading-[1.5]">
                                <p>회원 탈퇴 시 동일 추천인 코드로 재가입이 불가능합니다.</p>
                                <p>탈퇴 신청 후 24시간 내 탈퇴 및 정보가 삭제됩니다.</p>
                            </div>
                            <div className="mt-12 flex items-center justify-center gap-5">
                                <button onClick={onClose} className="min-w-50 font-semibold border border-yellow rounded-[48px] text-yellow h-15 transition-all hover:scale-[1.05] btn-login text-18">취소</button>
                                <button className="min-w-50 font-semibold bg-gradient border border-yellow rounded-[48px] text-black h-15 transition-all hover:scale-[1.05] btn-login text-18">탈퇴</button>
                            </div>
                        </div>
                    </div>
                </div>
            </AutoScaleModal>
        </>
    );
};

export default WithdrawMembership;