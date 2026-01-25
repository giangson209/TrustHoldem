import React, { useState } from 'react';
import TableListDetail from './TableList';
import TableDetail from './TableDetail';
import { useModal } from '../../contexts/ModalContext';

const TableList: React.FC = () => {
    const { openModal } = useModal();
    const [showTableListDetail, setShowTableListDetail] = useState(false);
    const [showTableInfo, setShowTableInfo] = useState(false);

    if (showTableListDetail) {
        return <TableListDetail onBack={() => setShowTableListDetail(false)} />;
    }
    if (showTableInfo) {
        return <TableDetail onBack={() => setShowTableInfo(false)} />;
    }

    return (
        <div className="relative">
            <div className="relative block rounded-32 pr-40">
                <img src="/images/bg-table.png" className="absolute top-0 left-0 w-full h-full object-bottom block" alt=""/>
                <img src="/images/mem.png" className="absolute top-[-12px] right-0 max-h-full object-bottom max-w-[auto]" alt=""/>
                <img src="/images/cart.png" className="absolute top-[40%] right-[-40px] w-[118px] max-h-full object-bottom scale-[1]" alt=""/>
                <div className="relative z-2">
                    <img src="/images/patten.png" className="absolute left-0 top-0 w-full h-full object-cover pointer-events-none" alt=""/>
                    <div className="flex items-center justify-between pl-10 py-2">
                        <h2 className="text-40 font-bold text-white font-sans">
                            JOIN GAME
                        </h2>
                        <div className="item relative">
                            <img src="/images/jackpot.png" alt=""/>
                            <span className="absolute top-[-6px] left-0 w-full h-full flex items-center justify-center font-bold text-38 pl-[30%] text-jackpot">99,999,999,999 G</span>
                        </div>
                        <button
                            onClick={() => setShowTableInfo(true)}
                            className="flex items-center justify-center text-black bg-gradient border border-yellow border-yellow px-17 py-[10px] rounded-full font-semibold transition-all hover:scale-[1.04]"
                        >
                            테이블 만들기
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-4 pb-8 pl-9">
                    <div className="item item-game relative text-center transition-all hover:scale-[1.04] overflow-hidden rounded-24 border border-yellow">
                        <img src="/images/game-1.png" className="w-full h-42 object-cover" alt=""/>
                        <div className="info flex items-center justify-center w-full h-full absolute z-2 top-0 left-0 text-yellow font-bold text-28">
                            <p>빠른 입장</p>
                        </div>
                    </div>
                    <div className="item item-game relative text-center transition-all hover:scale-[1.04] overflow-hidden rounded-24 border border-yellow">
                        <img src="/images/game-2.png" className="w-full h-42 object-cover" alt=""/>
                        <div className="info flex items-center justify-center w-full h-full absolute z-2 top-0 left-0 text-yellow font-bold text-28">
                            <p>관전하기</p>
                        </div>
                    </div>
                    <div
                        className="item item-game relative text-center transition-all hover:scale-[1.04] cursor-pointer overflow-hidden rounded-24 border border-yellow"
                        onClick={() => setShowTableListDetail(true)}
                    >
                        <img src="/images/game-3.png" className="w-full h-42 object-cover" alt=""/>
                        <div className="info flex items-center justify-center w-full h-full absolute z-2 top-0 left-0 text-yellow font-bold text-28">
                            <p>
                                친구 경기장
                                <span className="block text-white mt-2 text-18 font-normal">현재 00테이블 게임중</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative mt-2 cursor-pointer" onClick={() => openModal('tournament')}>
                <img src="/images/tournament.png" className='w-full h-full object-cover' alt="" />
                <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-24 font-bold">
                    시작 <span className='text-yellow px-2'>00:00</span> 전  -  현재 00명 예약중
                </div> 

                {/* 10 minutes before */}
                {/* <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-24 font-bold">
                    참여마감 <span className='text-yellow px-2'>00:00</span> 전  -  현재 00명 예약중
                </div>  */}

                {/* Tournament begun */}
                {/* <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-24 font-bold">
                    토너먼트 진행중  -  현재 00테이블 / 00명 게임중
                </div>  */}

                {/* Not planned */}
                {/* <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center text-white text-24 font-bold">
                    토너먼트 준비중입니다.
                </div>  */}
            </div>
        </div>
        
    );
};

export default TableList;