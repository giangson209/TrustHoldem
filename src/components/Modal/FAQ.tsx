import React from 'react';
import AutoScaleModal from '../AutoScaleModal';

interface ModalProps {
    onClose: () => void;
}

const GameFaq: React.FC<ModalProps> = ({ onClose }) => {
    return (
        <>
            <AutoScaleModal>
                <div className="wraper-main relative opacity-0 slide-up">
                    <div className="relative w-full m-auto rounded-32 border border-[#FFE085] py-8 px-10 bg-[#010101] text-white overflow-hidden">
                        <img src="/images/cart-top.png" alt="" className="absolute top-0 left-0 pointer-events-none max-h-full"/>
                        <img src="/images/cart-bot.png" alt="" className="absolute bottom-0 right-0 pointer-events-none max-h-full"/>

                        <div onClick={onClose} className="absolute top-3 right-3 close z-4">
                            <img src="/images/close.png" alt=""/>
                        </div>
                        <div className="textModal text-23 relative z-3 font-medium leading-[1.5]">
                            <h2 className="text-white font-bold text-28 mb-8 mt-[-16px]">홀덤은 어떤 게임인가요?</h2>
                            <div className="relative">
                                <div className="item mb-5 last:mb-0">
                                    <div className="px-8 py-3 bg-[#282828] border border-[#5A5A5A] rounded-[5px] mb-3">𝐐. 게임머니 충전은 어디서 어떻게 하나요?</div>
                                    <div className="px-8 text-20">
                                        <p>🅰️</p>
                                        <p>{`담당 환전상에게 직접 요청하거나,  메인페이지 >  내정보 영역에서  ’충전하기’ 버튼을 통해 신청 가능합니다.`}</p>
                                        <p>신청 후 환전상이 회원님을 게임 테이블에 초대하여 게임 내에서 충전이 진행됩니다.</p>
                                    </div>
                                </div>
                                <div className="item mb-5 last:mb-0">
                                    <div className="px-8 py-3 bg-[#282828] border border-[#5A5A5A] rounded-[5px] mb-3">𝐐. 게임머니 환전은 어디서 어떻게 하나요?</div>
                                    <div className="px-8 text-20">
                                        <p>🅰️</p>
                                        <p>{`충전하기와 같이 담당 환전상에게 직접 요청하거나,  메인페이지 >  내정보 영역에서 ’환전하기’ 버튼을 통해 신청 가능합니다.`}</p>
                                        <p>신청 후 환전상이 회원님을 게임 테이블에 초대하여 게임 내에서 골드 전달 후 입금이 진행됩니다.</p>
                                    </div>
                                </div>
                                <div className="item mb-5 last:mb-0">
                                    <div className="px-8 py-3 bg-[#282828] border border-[#5A5A5A] rounded-[5px] mb-3">𝐐. 게임머니 충전은 어디서 어떻게 하나요?</div>
                                    <div className="px-8 text-20">
                                        <p>🅰️</p>
                                        <p>{`담당 환전상에게 직접 요청하거나,  메인페이지 >  내정보 영역에서 ’충전하기’ 버튼을 통해 신청 가능합니다.`}</p>
                                        <p>신청 후 환전상이 회원님을 게임 테이블에 초대하여 게임 내에서 충전이  진행됩니다.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="text-center mt-8">
                                <button onClick={onClose} className="min-w-50 font-semibold bg-gradient border border-yellow rounded-[48px] text-black h-15 transition-all hover:scale-[1.05] btn-login text-18">확인</button>
                            </div>
                        </div>
                    </div>
                </div>
            </AutoScaleModal>
        </>
    );
};

export default GameFaq;