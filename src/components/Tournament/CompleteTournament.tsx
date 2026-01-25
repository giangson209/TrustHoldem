import React from 'react';
import AutoScaleModal from '../AutoScaleModal';

interface CompleteTournamentProps {
    onClose: () => void;
}

const CompleteTournament: React.FC<CompleteTournamentProps> = ({ onClose }) => {
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
                                <p>토너먼트 예약이 완료 되었습니다.</p>
                                <p>시작 10분전부터 입장이 가능합니다.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </AutoScaleModal>
        </>
    );
};

export default CompleteTournament;