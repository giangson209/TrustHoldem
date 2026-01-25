import React, { useState, useRef } from 'react';

import AutoScaleModal from '../AutoScaleModal';

interface ModalProps {
    onClose: () => void;
}

const GameFaq: React.FC<ModalProps> = ({ onClose }) => {

    return (
        <>
            <AutoScaleModal>
                <div className="wraper-main relative opacity-0 slide-up">
                    <div className="relative w-[810px] m-auto rounded-32 border border-[#FFE085] py-8 px-10 bg-[#010101] text-white overflow-hidden">
                        <img src="/images/cart-top.png" alt="" className="absolute top-0 left-0 pointer-events-none max-h-full"/>
                        <img src="/images/cart-bot.png" alt="" className="absolute bottom-0 right-0 pointer-events-none max-h-full"/>

                        <div onClick={onClose} className="absolute top-3 right-3 close z-4">
                            <img src="/images/close.png" alt=""/>
                        </div>
                        <div className="textModal text-22 relative z-3 font-medium leading-[1.5]">
                            <h2 className="text-white font-bold text-28 mb-8 mt-[-16px]">토너먼트 정책</h2>

                            <div className="relative">
                                <div className="item mb-4 last:mb-0">
                                    <div className="px-8 py-2 bg-[#282828] font-semibold border border-[#5A5A5A] rounded-[5px] mb-3">1. 개최 시간</div>
                                    <div className="px-8 text-20">
                                        <p>- 매일 <strong>00시</strong> 정각 진행</p>
                                    </div>
                                </div>
                                <div className="item mb-4 last:mb-0">
                                    <div className="px-8 py-2 bg-[#282828] font-semibold border border-[#5A5A5A] rounded-[5px] mb-3">2. 참여 방법</div>
                                    <div className="px-8 text-20">
                                        <p><strong>- 신청:</strong> 시작 10분 전부터 입장 가능</p>
                                        <p><strong>- 인원:</strong> 테이블당 6명 배정 (2명 이하 시 해당 테이블 취소)</p>
                                        <p><strong>- 참가비:</strong> 참여 즉시 보유 골드에서 차감</p>
                                    </div>
                                </div>
                                <div className="item mb-4 last:mb-0">
                                    <div className="px-8 py-2 bg-[#282828] font-semibold border border-[#5A5A5A] rounded-[5px] mb-3">3. 진행 규칙</div>
                                    <div className="px-8 text-20">
                                        <p>- 예약 및 입장 순서대로 테이블에 착석</p>
                                        <p>- 보유 골드 소진 시 즉시 탈락 (프리즈아웃 룰 적용)</p>
                                        <p>- 마지막 남은 플레이어가 우승 (싯앤고 룰 적용)</p>
                                    </div>
                                </div>
                                <div className="item mb-4 last:mb-0">
                                    <div className="px-8 py-2 bg-[#282828] font-semibold border border-[#5A5A5A] rounded-[5px] mb-3">4. 우승 상금</div>
                                    <div className="px-8 text-20">
                                        <p>- 테이블에서 획득한 골드 전체 수여</p>
                                        <p>. 별도 우승 상금 수여</p>
                                        <p>. 우승자 뱃지 부여 (일주일간)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AutoScaleModal>
        </>
    );
};

export default GameFaq;