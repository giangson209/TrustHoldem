import React, { useState } from 'react';
import TableListDetail from './TableList';
import TableDetail from './TableDetail';

const TableList: React.FC = () => {
    const [showTableListDetail, setShowTableListDetail] = useState(false);
    const [showTableInfo, setShowTableInfo] = useState(false);

    if (showTableListDetail) {
        return <TableListDetail onBack={() => setShowTableListDetail(false)} />;
    }
    if (showTableInfo) {
        return <TableDetail onBack={() => setShowTableInfo(false)} />;
    }

    return (
        <div className="relative block rounded-32 pr-40">
            <img src="/images/bg-table.png" className="absolute top-0 left-0 w-full h-full object-bottom block" alt=""/>
            <img src="/images/mem.png" className="absolute top-[-12px] right-0 max-h-full object-bottom max-w-[auto]" alt=""/>
            <img src="/images/cart.png" className="absolute top-[40%] right-[-40px] w-[118px] max-h-full object-bottom scale-[1]" alt=""/>
            <div className="relative z-2">
                <img src="/images/patten.png" className="absolute left-0 top-0 w-full h-full object-cover pointer-events-none" alt=""/>
                <div className="flex items-center justify-between pl-10 py-6">
                    <h2 className="text-44 font-bold text-white font-sans">
                        JOIN GAME
                    </h2>
                    <button
                        onClick={() => setShowTableInfo(true)}
                        className="flex items-center justify-center text-black bg-gradient border border-yellow border-yellow px-17 py-[10px] rounded-full font-semibold transition-all hover:scale-[1.04]"
                    >
                        테이블 만들기
                    </button>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 pb-8 pl-9">
                <div className="item relative text-center transition-all hover:scale-[1.04]">
                    <img src="/images/game-1.png" className="w-full" alt=""/>
                    <div className="flex items-center justify-center w-full h-full absolute z-2 top-0 left-0 text-yellow font-bold text-32">
                        <p>빠른 입장</p>
                    </div>
                </div>
                <div className="item relative text-center transition-all hover:scale-[1.04]">
                    <img src="/images/game-2.png" className="w-full" alt=""/>
                    <div className="flex items-center justify-center w-full h-full absolute z-2 top-0 left-0 text-yellow font-bold text-32">
                        <p>관전하기</p>
                    </div>
                </div>
                <div
                    className="item relative text-center transition-all hover:scale-[1.04] cursor-pointer"
                    onClick={() => setShowTableListDetail(true)}
                >
                    <img src="/images/game-3.png" className="w-full" alt=""/>
                    <div className="flex items-center justify-center w-full h-full absolute z-2 top-0 left-0 text-yellow font-bold text-32">
                        <p>
                            친구 경기장
                            <span className="block text-white mt-2 text-20 font-normal">현재 00테이블 게임중</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TableList;