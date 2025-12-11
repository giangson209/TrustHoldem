import React from 'react';

interface TableRoom {
    no: number;
    status: string;
    isPrivate: boolean;
    bb: number;
    minGold: string;
    title: string;
    players: string;
    canJoin: boolean;
}

const TableList: React.FC = () => {
    return (
        <section className="mt-3 font-medium slide-up opacity-0 slide-up-3">
            <div className="container">
                <div className="relative block rounded-24 2xl:rounded-32 pr-24 2xl:pr-32 3xl:pr-40">
                    <img src="/images/bg-table.png" className="absolute top-0 left-0 w-full h-full object-bottom" alt=""/>
                    <img src="/images/mem.png" className="absolute top-[-12px] right-0 max-h-full object-bottom" alt=""/>
                    <img src="/images/cart.png" className="absolute top-[36%] 3xl:top-[40%] right-[-24px] 3xl:right-[-40px] w-[60px] 3xl:w-[96px] 4xl:w-[118px] max-h-full object-bottom" alt=""/>
                    <div className="relative z-2">
                        <img src="/images/patten.png" className="absolute left-0 top-0 w-full h-full object-cover pointer-events-none" alt=""/>
                        <h2 className="text-32 2xl:text-36 3xl:text-40 4xl:text-44 font-bold text-white px-10 py-5 2xl:py-6 font-sans">JOIN GAME</h2>
                    </div>
                    <div className="grid grid-cols-3 gap-4 pb-8 pl-9">
                        <div className="item relative text-center transition-all hover:scale-[1.04]">
                            <img src="/images/game-1.png" className="w-full" alt=""/>
                            <div className="flex items-center justify-center w-full h-full absolute z-2 top-0 left-0 text-yellow font-bold text-20 2xl:text-24 3xl:text-26 4xl:text-32">
                                <p>빠른 입장</p>
                            </div>
                        </div>
                        <div className="item relative text-center transition-all hover:scale-[1.04]">
                            <img src="/images/game-2.png" className="w-full" alt=""/>
                            <div className="flex items-center justify-center w-full h-full absolute z-2 top-0 left-0 text-yellow font-bold text-20 2xl:text-24 3xl:text-26 4xl:text-32">
                                <p>관전하기</p>
                            </div>
                        </div>
                        <div className="item relative text-center transition-all hover:scale-[1.04]">
                            <img src="/images/game-3.png" className="w-full" alt=""/>
                            <div className="flex items-center justify-center w-full h-full absolute z-2 top-0 left-0 text-yellow font-bold text-20 2xl:text-24 3xl:text-26 4xl:text-32">
                                <p>
                                    친구 경기장
                                    <span className="block text-white mt-2 text-14 2xl:text-16 3xl:text-18 4xl:text-20 font-normal">현재 00테이블 게임중</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TableList;
