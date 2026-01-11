import React from 'react';
import AutoScaleModal from '../AutoScaleModal';

interface CheckIndProps {
    onClose: () => void;
}

const CheckIn: React.FC<CheckIndProps> = ({ onClose }) => {
    return (
        <>
            <AutoScaleModal>
                <div className="wraper-main relative opacity-0 slide-up">
                    <div className="relative max-w-[1110px] w-full m-auto text-white overflow-hidden">
                        <img src="/images/banner-modal.png" alt=""/>
                        <div className="close absolute top-5 right-5 cursor-pointer z-3" onClick={onClose}>
                            <img src="/images/close.png" alt=""/>
                        </div>
                        <div className="absolute top-0 left-0 w-full h-full z-2 pt-15 pl-[17%]">
                            <div className="text-center mb-20">
                                <div className="icon mb-4">
                                    <img src="/images/title-checkin.png" className="inline" alt=""/>
                                </div>
                                <p className="text-24 font-bold">
                                    1월 첫째 주 (01.01~01.07)
                                </p>
                            </div>
                            <ul className="flex items-center justify-center gap-2">
                                <li className=" relative cursor-pointer">
                                    <div className="tick absolute right-[-10px] top-[-28px] z-4">
                                        <img src="images/check-login.gif" className="max-h-14" alt=""/>
                                    </div>
                                    <div className="relative text-white h-42 overflow-hidden min-w-27 border border-yellow rounded-12 py-2 px-3">
                                        <img src="/images/bg-checkin.png" className="w-full h-full object-cover absolute top-0 left-0" alt=""/>
                                        <div className="relative z-2 h-full">
                                            <div className="icon mb-1">
                                                <img src="/images/heart-slide.png" className="max-w-6" alt=""/>
                                            </div>
                                            <p className="text-16 mb-0.5 font-medium">1일차</p>
                                            <p className="font-bold text-20">10,000G</p>
                                        </div>
                                        <div className="absolute bottom-2 right-1 pointer-events-none">
                                            <img src="/images/coin-checkin.png" alt=""/>
                                        </div>
                                    </div>
                                </li>
                                <li className=" relative cursor-pointer">
                                    <div className="tick absolute right-[-10px] top-[-28px] z-4">
                                        <img src="/images/done-check.gif" className="max-h-14" alt=""/>
                                    </div>
                                    <div className="relative text-white h-42 overflow-hidden min-w-27 border border-yellow rounded-12 py-2 px-3">
                                        <img src="/images/bg-checkin.png" className="w-full h-full object-cover absolute top-0 left-0" alt=""/>
                                        <div className="relative z-2 h-full">
                                            <div className="icon mb-1">
                                                <img src="/images/heart-slide.png" className="max-w-6" alt=""/>
                                            </div>
                                            <p className="text-16 mb-0.5 font-medium">2일차</p>
                                            <p className="font-bold text-20">10,000G</p>
                                        </div>
                                        <div className="absolute bottom-2 right-1 pointer-events-none">
                                            <img src="/images/coin-checkin.png" alt=""/>
                                        </div>
                                    </div>
                                </li>
                                <li className=" relative cursor-pointer">
                                    <div className="relative text-white h-42 overflow-hidden min-w-27 border border-yellow rounded-12 py-2 px-3">
                                        <img src="/images/bg-checkin.png" className="w-full h-full object-cover absolute top-0 left-0" alt=""/>
                                        <div className="relative z-2 h-full">
                                            <div className="icon mb-1">
                                                <img src="/images/heart-slide.png" className="max-w-6" alt=""/>
                                            </div>
                                            <p className="text-16 mb-0.5 font-medium">3일차</p>
                                            <p className="font-bold text-20">10,000G</p>
                                        </div>
                                        <div className="absolute bottom-2 right-1 pointer-events-none">
                                            <img src="/images/coin-checkin.png" alt=""/>
                                        </div>
                                    </div>
                                </li>
                                <li className=" relative cursor-pointer">
                                    <div className="relative text-white h-42 overflow-hidden min-w-27 border border-yellow rounded-12 py-2 px-3">
                                        <img src="/images/bg-checkin.png" className="w-full h-full object-cover absolute top-0 left-0" alt=""/>
                                        <div className="relative z-2 h-full">
                                            <div className="icon mb-1">
                                                <img src="/images/heart-slide.png" className="max-w-6" alt=""/>
                                            </div>
                                            <p className="text-16 mb-0.5 font-medium">4일차</p>
                                            <p className="font-bold text-20">10,000G</p>
                                        </div>
                                        <div className="absolute bottom-2 right-1 pointer-events-none">
                                            <img src="/images/coin-checkin.png" alt=""/>
                                        </div>
                                    </div>
                                </li>
                                <li className=" relative cursor-pointer">
                                    <div className="relative text-white h-42 overflow-hidden min-w-27 border border-yellow rounded-12 py-2 px-3">
                                        <img src="/images/bg-checkin.png" className="w-full h-full object-cover absolute top-0 left-0" alt=""/>
                                        <div className="relative z-2 h-full">
                                            <div className="icon mb-1">
                                                <img src="/images/heart-slide.png" className="max-w-6" alt=""/>
                                            </div>
                                            <p className="text-16 mb-0.5 font-medium">5일차</p>
                                            <p className="font-bold text-20">10,000G</p>
                                        </div>
                                        <div className="absolute bottom-2 right-1 pointer-events-none">
                                            <img src="/images/coin-checkin.png" alt=""/>
                                        </div>
                                    </div>
                                </li>
                                <li className=" relative cursor-pointer">
                                    <div className="relative text-white h-42 overflow-hidden min-w-27 border border-yellow rounded-12 py-2 px-3">
                                        <img src="/images/bg-checkin.png" className="w-full h-full object-cover absolute top-0 left-0" alt=""/>
                                        <div className="relative z-2 h-full">
                                            <div className="icon mb-1">
                                                <img src="/images/heart-slide.png" className="max-w-6" alt=""/>
                                            </div>
                                            <p className="text-16 mb-0.5 font-medium">6일차</p>
                                            <p className="font-bold text-20">10,000G</p>
                                        </div>
                                        <div className="absolute bottom-2 right-1 pointer-events-none">
                                            <img src="/images/coin-checkin.png" alt=""/>
                                        </div>
                                    </div>
                                </li>
                                <li className=" relative cursor-pointer">
                                    <div className="relative text-white h-42 overflow-hidden min-w-45 border border-yellow rounded-12 py-2 px-3">
                                        <img src="/images/bg-checkin.png" className="w-full h-full object-cover absolute top-0 left-0" alt=""/>
                                        <div className="relative z-2 h-full">
                                            <div className="icon mb-1">
                                                <img src="/images/heart-slide.png" className="max-w-6" alt=""/>
                                            </div>
                                            <p className="text-16 mb-0.5 font-medium">7일차</p>
                                            <p className="font-bold text-20">50,000G</p>
                                        </div>
                                        <div className="absolute bottom-0 right-0 pointer-events-none">
                                            <img src="/images/coin-full.png" alt=""/>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </AutoScaleModal>
        </>
    );
};

export default CheckIn;