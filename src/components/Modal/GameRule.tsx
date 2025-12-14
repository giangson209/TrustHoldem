import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import AutoScaleModal from '../AutoScaleModal';

interface ModalProps {
    onClose: () => void;
}

const GameRule: React.FC<ModalProps> = ({ onClose }) => {
    return (
        <>
            <AutoScaleModal>
                <div className="wraper-main relative opacity-0 slide-up">
                    <div className="relative max-w-250 w-full m-auto rounded-32 border border-[#FFE085] py-8 px-10 bg-[#010101] text-white overflow-hidden">
                        <img src="/images/cart-top.png" alt="" className="absolute top-0 left-0 pointer-events-none max-h-full"/>
                        <img src="/images/cart-bot.png" alt="" className="absolute bottom-0 right-0 pointer-events-none max-h-full"/>

                        <div onClick={onClose} className="absolute top-3 right-3 close z-4">
                            <img src="/images/close.png" alt=""/>
                        </div>

                        <div className="textModal text-23 relative z-3 font-medium leading-[1.5]">
                            <div className="relative">
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay]}
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    navigation={{
                                        nextEl: '.custom-next',
                                        prevEl: '.custom-prev',
                                    }}
                                    autoplay={{
                                        delay: 30000,
                                        disableOnInteraction: false
                                    }}
                                    loop={false}
                                >
                                    <SwiperSlide>
                                        <div className="item-slider">
                                            <h2 className="text-white font-bold text-28 mb-8">홀덤은 어떤 게임인가요?</h2>
                                            <div className="max-w-218.5 w-full m-auto">
                                                <ul className="list-disc pl-6">
                                                    <li>플레이어는 각자 2장의 비공개 카드(Private Card)를 받습니다.</li>
                                                    <li>테이블 중앙에 5장의 공동 카드(Community Card)가 차례로 오픈됩니다.</li>
                                                    <li>내 카드 2장과 공동 카드 5장, 총 7장 중 가장 강력한 5장의 조합을 만들어 승부를 겨룹니다.</li>
                                                </ul>
                                            </div>
                                            <div className="text-center mt-8">
                                                <img src="/images/modal-1.png" className="m-auto" alt=""/>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="item-slider">
                                            <h2 className="text-white font-bold text-28 mb-8">게임의 순서 :4번의 베팅</h2>
                                            <div className="max-w-218.5 w-full m-auto">
                                                <p>홀덤은 4번의 베팅 라운드로 진행됩니다.</p>
                                                <p>1. 프리플롭 (Pre-Flop): 카드를 받고 공동 카드가 나오기 전 베팅 </p>
                                                <p>2. 플롭 (Flop): 공동 카드 3장 오픈 후 베팅 </p>
                                                <p>3. 턴 (Turn): 공동 카드 1장 (총 4장) 오픈 후 베팅 </p>
                                                <p>4. 리버 (River): 마지막 공동 카드 1장 (총 5장) 오픈 후 베팅</p>
                                            </div>
                                            <div className="text-center mt-8">
                                                <img src="/images/modal-2.png" className="m-auto" alt=""/>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="item-slider">
                                            <h2 className="text-white font-bold text-28 mb-8">게임의 핵심 : 3가지 베팅</h2>
                                            <div className="max-w-218.5 w-full m-auto">
                                                <p>각 베팅 라운드에서 할 수 있는 3가지 주요 행동입니다.</p>
                                                <p>• 콜 (Call): 앞 사람이 건 금액만큼 따라 겁니다.</p>
                                                <p>• 레이즈 (Raise): 앞 사람이 건 금액보다 더 많이 베팅하여 판돈을 키웁니다.</p>
                                                <p>• 폴드 (Fold): 이번 판을 포기하고 카드를 버립니다. (베팅 금액 손실)</p>
                                            </div>
                                            <div className="text-center mt-8">
                                                <img src="/images/modal-3.png" className="m-auto" alt=""/>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="item-slider">
                                            <h2 className="text-white font-bold text-28 mb-8">족보 : 높은 패가 이긴다</h2>
                                            <div className="text-center mt-8">
                                                <img src="/images/modal-4.png" className="m-auto" alt=""/>
                                            </div>
                                        </div>
                                    </SwiperSlide>

                                    <SwiperSlide>
                                        <div className="item-slider">
                                            <h2 className="text-white font-bold text-28 mb-8">승리 조건</h2>
                                            <div className="max-w-218.5 w-full m-auto">
                                                <p>• 4번의 베팅 라운드 후, 남은 유저들이 족보를 공개하여 가장 높은 족보를 가진 유저가 승리합니다. (쇼다운, Showdown)</p>
                                                <p>• 베팅으로 승리 : 마지막까지 폴드하지 않고 혼자 남으면, 족보와 상관없이 승리합니다. (모두를 폴드시키는 블러핑)</p>
                                            </div>
                                            <div className="text-center mt-8">
                                                <img src="/images/modal-5.png" className="m-auto" alt=""/>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                </Swiper>
                                {/* Custom Navigation Buttons */}
                                <div className="custom-prev absolute left-0] top-1/2 z-10 cursor-pointer">
                                    <svg width="23" height="43" viewBox="0 0 23 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="21.2134" y="42.6274" width="30" height="2" rx="1" transform="rotate(-135 21.2134 42.6274)" fill="#D9D9D9"/>
                                        <rect x="22.6275" y="1.4143" width="30" height="2" rx="1" transform="rotate(135 22.6275 1.4143)" fill="#D9D9D9"/>
                                    </svg>
                                </div>
                                <div className="custom-next absolute right-0 top-1/2 z-10 cursor-pointer">
                                    <svg width="23" height="43" viewBox="0 0 23 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="1.41406" width="30" height="2" rx="1" transform="rotate(45 1.41406 0)" fill="#D9D9D9"/>
                                        <rect y="41.2131" width="30" height="2" rx="1" transform="rotate(-45 0 41.2131)" fill="#D9D9D9"/>
                                    </svg>
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

export default GameRule;