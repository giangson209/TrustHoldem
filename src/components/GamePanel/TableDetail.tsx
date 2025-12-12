import React from 'react';

interface JoinGameProps {
    onBack: () => void;
}

const TableList: React.FC<JoinGameProps> = ({ onBack }) => {

    return (
        <section className="mt-3 font-medium">
            <div className="relative block overflow-hidden rounded-32">
                <img src="/images/bg-detail.png" className="absolute top-0 left-0 w-full h-full object-bottom" alt=""/>
                <div className="relative z-2">
                    <img src="/images/patten.png" className="absolute left-0 top-0 w-full h-full object-cover pointer-events-none" alt=""/>
                    <h2 className="text-28 font-bold text-white py-3 px-10 font-sans">테이블 만들기</h2>
                    <div
                        onClick={onBack}
                        className="close absolute top-0 right-4 cursor-pointer h-full flex items-center"
                    >
                        <img src="/images/close.png" alt=""/>
                    </div>
                </div>
                <div className="tableList text-center px-6 pb-3 pt-2 relative z-2">
                    <div className="max-w-225 w-full m-auto grid grid-cols-1 gap-5">
                        <div className="item flex items-center">
                            <div className="w-full flex-[0_0_152px] pr-2 font-bold text-white text-left">테이블 제목</div>
                            <div className="w-full flex-[0_0_calc(100%-152px)] relative">
                                <select
                                    name="" id=""
                                    className="w-full bg-[#090702] border border-[rgb(255_255_255/50%)] font-normal text-white rounded-[48px] pl-5 pr-16 h-11.5 outline-0 hide-appearance">
                                    <option value="">Let's have fun!</option>
                                </select>
                                <div className="absolute top-0 right-5 flex items-center h-full pointer-events-none">
                                    <img src="/images/icon-select.svg" alt=""/>
                                </div>
                            </div>
                        </div>
                        <div className="item flex items-center justify-between">
                            <div className="item flex items-center">
                                <div className="w-full flex-[0_0_152px] pr-2 font-bold text-white text-left">테이블 제목</div>
                                <div className="w-full flex-[0_0_180px] relative">
                                    <select
                                        name="" id=""
                                        className="w-full bg-[#090702] border border-[rgb(255_255_255/50%)] font-normal text-white rounded-[48px] pl-5 pr-16 h-11.5 outline-0 hide-appearance">
                                        <option value="">100 G</option>
                                        <option value="">200 G</option>
                                        <option value="">300 G</option>
                                        <option value="">400 G</option>
                                    </select>
                                    <div className="absolute top-0 right-5 flex items-center h-full pointer-events-none">
                                        <img src="/images/icon-select.svg" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="item flex items-center">
                                <div className="w-full flex-[0_0_152px] pr-2 font-bold text-white text-left">최소입장골드</div>
                                <div className="w-full flex-[0_0_180px] relative">
                                    <input
                                        type="text"
                                        className="w-full bg-[#090702] border border-[rgb(255_255_255/50%)] font-normal text-white rounded-[48px] pl-5 pr-16 h-11.5 outline-0 font-normal"
                                        placeholder="10,000 G"
                                        value="10,000 G"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="item flex items-center justify-between">
                            <div className="item flex items-center">
                                <div className="w-full flex-[0_0_152px] pr-2 font-bold text-white text-left">참가 인원</div>
                                <div className="w-full flex-[0_0_180px] relative">
                                    <select
                                        name="" id=""
                                        className="w-full bg-[#090702] border border-[rgb(255_255_255/50%)] font-normal text-white rounded-[48px] pl-5 pr-16 h-11.5 outline-0 hide-appearance">
                                        <option value="">9명</option>
                                        <option value="">10명</option>
                                        <option value="">11명</option>
                                        <option value="">12명</option>
                                    </select>
                                    <div className="absolute top-0 right-5 flex items-center h-full pointer-events-none">
                                        <img src="/images/icon-select.svg" alt=""/>
                                    </div>
                                </div>
                            </div>
                            <div className="item flex items-center">
                                <div className="w-full flex-[0_0_152px] pr-2 font-bold text-white text-left">비밀번호</div>
                                <div className="w-full flex-[0_0_180px] relative">
                                    <input
                                        type="text"
                                        className="w-full bg-[#090702] border border-[rgb(255_255_255/50%)] font-normal text-white rounded-[48px] pl-5 pr-16 h-11.5 outline-0 font-normal"
                                        placeholder="2자리 이상"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="item flex items-center justify-center gap-4 font-semibold pt-4 pb-2 border-t border-[#ffffff1a]">
                            <button className="w-full max-w-59 bg-gradient border border-yellow rounded-[48px] text-black h-11.5 transition-all hover:scale-[1.03] btn-login">로그인 하세요</button>
                            <button className="w-full max-w-59 border border-yellow rounded-[48px] text-yellow h-11.5 transition-all hover:scale-[1.03] btn-register">로그인 하세요</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TableList;
