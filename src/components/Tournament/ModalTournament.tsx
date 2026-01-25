import React, { useState } from 'react';
import AutoScaleModal from '../AutoScaleModal';
import { useModal } from '../../contexts/ModalContext';
import Countdown from '../GamePanel/Countdown';

interface ModalTournamentProps {
    onClose: () => void;
}
    
const ModalTournament: React.FC<ModalTournamentProps> = ({ onClose }) => {
    const { openModal } = useModal();

    // Set target time to 24 hours from now for demonstration
    const [targetTime] = useState(() => {
        const date = new Date();
        date.setHours(date.getHours() + 24);
        return date;
    });

    return (
        <>
            <AutoScaleModal>
                <div className="wraper-main relative opacity-0 slide-up">
                    <div className="relative max-w-[1274px] w-full m-auto text-white overflow-hidden">
                        <img src="/images/modal-tour.png" alt=""/>
                        <div className="close absolute top-5 right-5 cursor-pointer z-3" onClick={onClose}>
                            <img src="/images/close.png" alt=""/>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full z-2 p-4">
                            <div className="text-center pt-4 pb-10">
                                <div className="icon">
                                    <img src="/images/title-tour.png" className="inline" alt=""/>
                                </div>
                            </div>
                            <div className="grid grid-cols-3 gap-2 text-center">
                                <div className="items relative overflow-hidden rounded-24 border border-yellow p-6">
                                    <img src="/images/tour-1.png" className='w-full h-full object-cover absolute top-0 left-0' alt="" />
                                    <div className="h-full relative z-2">
                                        <div className="text-24 font-bold mb-4">일반 토너먼트</div> 
                                        <div className="relative h-full">
                                            <p className='text-16 font-medium mb-6'>토너먼트 시작 : 00월 00일(요일) 00:00</p>
                                            <div className="countdown relative mb-3 text-18 font-bold text-gradient-coundown flex items-center justify-center gap-2">
                                                Countdown : 
                                                <Countdown targetTime={targetTime} />
                                            </div>
                                            <p className='text-16 font-medium'>참가비 000,000 G</p>
                                            <div className="text-gradient-yellow text-24 font-bold mt-2 mb-6">
                                                우승상금 000,000 G
                                            </div>
                                            <ul>
                                                <li className='mb-2 last:mb-0'>
                                                    <button
                                                        onClick={() => openModal('completetournament')}
                                                        className="flex items-center justify-center text-black bg-gradient w-full border border-yellow border-yellow px-17 py-[10px] rounded-full font-semibold transition-all hover:scale-[1.04]"
                                                    >
                                                        예약하기
                                                    </button>

                                                    {/* Change to ‘참여하기' button when the games starts before 10 minutes (need 2 button) */}

                                                    {/* <button
                                                        onClick={() => openModal('completetournament')}
                                                        className="flex items-center justify-center text-black bg-gradient w-full border border-yellow border-yellow px-17 py-[10px] rounded-full font-semibold transition-all hover:scale-[1.04]"
                                                    >
                                                        참여하기
                                                    </button> */}

                                                    {/* Game money not enough popup */}
                                                    
                                                    {/* <button
                                                        onClick={() => openModal('notmoneytournament')}
                                                        className="flex items-center justify-center text-black bg-gradient w-full border border-yellow border-yellow px-17 py-[10px] rounded-full font-semibold transition-all hover:scale-[1.04]"
                                                    >
                                                        예약하기
                                                    </button> */}
                                                </li>
                                                <li className='mb-2 last:mb-0'>
                                                    <button
                                                        onClick={() => openModal('canceltournament')}
                                                        className="flex items-center justify-center text-yellow w-full border border-yellow border-yellow px-17 py-[10px] rounded-full font-semibold transition-all hover:scale-[1.04]"
                                                    >
                                                        예약취소
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="items relative overflow-hidden rounded-24 border border-yellow p-6">
                                    <img src="/images/tour-2.png" className='w-full h-full object-cover absolute top-0 left-0' alt="" />
                                    <div className="h-full relative z-2">
                                        <div className="text-24 font-bold mb-4">로열 토너먼트</div> 
                                        <div className="relative h-full">
                                            <p className='text-16 font-medium mb-6'>토너먼트 시작 : 00월 00일(요일) 00:00</p>
                                            <div className="countdown relative mb-3 text-18 font-bold text-gradient-coundown flex items-center justify-center gap-2">
                                                Countdown : 
                                                <Countdown targetTime={targetTime} />
                                            </div>
                                            <p className='text-16 font-medium'>참가비 000,000 G</p>
                                            <div className="text-gradient-yellow text-24 font-bold mt-2 mb-6">
                                                우승상금 000,000 G
                                            </div>
                                            <ul>
                                                <li className='mb-2 last:mb-0'>
                                                    <button
                                                        onClick={() => openModal('completetournament')}
                                                        className="flex items-center justify-center text-black bg-gradient w-full border border-yellow border-yellow px-17 py-[10px] rounded-full font-semibold transition-all hover:scale-[1.04]"
                                                    >
                                                        예약하기
                                                    </button>

                                                    {/* Game money not enough popup */}
                                                    
                                                    {/* <button
                                                        onClick={() => openModal('notmoneytournament')}
                                                        className="flex items-center justify-center text-black bg-gradient w-full border border-yellow border-yellow px-17 py-[10px] rounded-full font-semibold transition-all hover:scale-[1.04]"
                                                    >
                                                        예약하기
                                                    </button> */}
                                                </li>
                                                <li className='mb-2 last:mb-0'>
                                                    <button
                                                        onClick={() => openModal('canceltournament')}
                                                        className="flex items-center justify-center text-yellow w-full border border-yellow border-yellow px-17 py-[10px] rounded-full font-semibold transition-all hover:scale-[1.04]"
                                                    >
                                                        예약취소
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>

                                        {/* If the Royal Tournament not planned yet */}

                                        {/* <div className="relative h-full flex items-center justify-center pb-16">
                                            <div className="text-gradient-yellow text-24 font-bold">
                                                준비중입니다
                                            </div>
                                        </div> */}
                                    </div>
                                </div>
                                <div className="items relative overflow-hidden p-6">
                                    <div className="h-full relative z-2 pb-6 flex items-end justify-center">
                                        <ul className='w-full'>
                                            <li className='mb-2 last:mb-0'>
                                                <button
                                                    onClick={() => openModal('ruletournament')}
                                                    className="flex items-center justify-center text-black bg-gradient w-full border border-yellow border-yellow px-17 py-[10px] rounded-full font-semibold transition-all hover:scale-[1.04]"
                                                >
                                                    토너먼트 정책 보기
                                                </button>
                                            </li>
                                        </ul>
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

export default ModalTournament;