import React from 'react';
import AutoScaleModal from '../AutoScaleModal';

interface RefillGoldProps {
    onClose: () => void;
}

const Login: React.FC<RefillGoldProps> = ({ onClose }) => {
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
                                <p>로그인하시면 보실 수 있어요.</p>
                            </div>
                            <div className="mt-12 flex items-center justify-center gap-5">
                                <button onClick={onClose} className="min-w-50 font-semibold bg-gradient border border-yellow rounded-[48px] text-black h-15 transition-all hover:scale-[1.05] btn-login text-18">확인</button>
                            </div>
                        </div>
                    </div>
                </div>
            </AutoScaleModal>
        </>
    );
};

export default Login;