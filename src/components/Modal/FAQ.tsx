import React, { useState, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import AutoScaleModal from '../AutoScaleModal';

interface ModalProps {
    onClose: () => void;
}

const GameFaq: React.FC<ModalProps> = ({ onClose }) => {
    const [activeTab, setActiveTab] = useState(0);
    const swiperRef = useRef(null);

    const handleTabClick = (index: number) => {
        setActiveTab(index);
        if (swiperRef.current && swiperRef.current.swiper) {
            swiperRef.current.swiper.slideTo(index);
        }
    };

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
                        <div className="textModal text-22 relative z-3 font-medium leading-[1.5]">
                            <h2 className="text-white font-bold text-28 mb-8 mt-[-16px]">홀덤은 어떤 게임인가요?</h2>

                            <div className="tab flex items-center justify-center gap-6 font-semibold text-20 mb-6">
                                <div className="item">
                                    <button
                                        onClick={() => handleTabClick(0)}
                                        className={`w-full border rounded-[48px] text-black h-12 px-10 transition-all hover:bg-yellow hover:border-yellow ${
                                            activeTab === 0 ? 'bg-gradient border-yellow' : 'bg-white border-white'
                                        }`}
                                    >
                                        기본 규칙 관련 Q&A
                                    </button>
                                </div>
                                <div className="item">
                                    <button
                                        onClick={() => handleTabClick(1)}
                                        className={`w-full border rounded-[48px] text-black h-12 px-10 transition-all hover:bg-yellow hover:border-yellow ${
                                            activeTab === 1 ? 'bg-gradient border-yellow' : 'bg-white border-white'
                                        }`}
                                    >
                                        베팅 & 게임 진행 관련
                                    </button>
                                </div>
                                <div className="item">
                                    <button
                                        onClick={() => handleTabClick(2)}
                                        className={`w-full border rounded-[48px] text-black h-12 px-10 transition-all hover:bg-yellow hover:border-yellow ${
                                            activeTab === 2 ? 'bg-gradient border-yellow' : 'bg-white border-white'
                                        }`}
                                    >
                                        초보자들이 많이 묻는 질문
                                    </button>
                                </div>
                            </div>

                            <Swiper
                                ref={swiperRef}
                                modules={[Navigation, Pagination, EffectFade]}
                                spaceBetween={20}
                                slidesPerView={1}
                                effect="fade"
                                fadeEffect={{
                                    crossFade: true
                                }}
                                allowTouchMove={false}
                                navigation={{
                                    nextEl: '.custom-next',
                                    prevEl: '.custom-prev',
                                }}
                                loop={false}
                                onSlideChange={(swiper) => setActiveTab(swiper.activeIndex)}
                            >
                                <SwiperSlide>
                                    <div className="relative">
                                        <div className="item mb-4 last:mb-0">
                                            <div className="px-8 py-2 bg-[#282828] font-semibold border border-[#5A5A5A] rounded-[5px] mb-3">Q1. 홀덤은 어떻게 이기는 게임인가요?</div>
                                            <div className="px-8 text-20">
                                                <p>🅰️</p>
                                                <p>각 플레이어는 2장의 개인 카드와 5장의 공용 카드를 조합해 가장 높은 족보를 만드는 사람이 승리합니다.</p>
                                            </div>
                                        </div>
                                        <div className="item mb-4 last:mb-0">
                                            <div className="px-8 py-2 bg-[#282828] font-semibold border border-[#5A5A5A] rounded-[5px] mb-3">Q2. 족보 순서가 헷갈려요.</div>
                                            <div className="px-8 text-20">
                                                <p>🅰️</p>
                                                <p>가장 높은 족보는 로열 스트레이트 플러시, 가장 낮은 족보는 하이카드입니다.</p>
                                            </div>
                                        </div>
                                        <div className="item mb-4 last:mb-0">
                                            <div className="px-8 py-2 bg-[#282828] font-semibold border border-[#5A5A5A] rounded-[5px] mb-3">Q3. 스트레이트에서 A는 어떻게 계산되나요?</div>
                                            <div className="px-8 text-20">
                                                <p>🅰️</p>
                                                <p>A는 A-K-Q-J-10 또는 A-2-3-4-5로 사용됩니다.</p>
                                            </div>
                                        </div>
                                        <div className="item mb-4 last:mb-0">
                                            <div className="px-8 py-2 bg-[#282828] font-semibold border border-[#5A5A5A] rounded-[5px] mb-3">Q4. 공용 카드 5장을 다 써야 하나요?</div>
                                            <div className="px-8 text-20">
                                                <p>🅰️</p>
                                                <p>아니요. 개인 카드 2장 중 0~2장 + 공용 카드를 조합해 가장 강한 5장을 만듭니다.</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="relative">
                                        <div className="item mb-4 last:mb-0">
                                            <div className="px-8 py-2 bg-[#282828] font-semibold border border-[#5A5A5A] rounded-[5px] mb-3">Q5. 프리플랍 / 플랍 / 턴 / 리버가 뭐예요?</div>
                                            <div className="px-8 text-20">
                                                <p>🅰️</p>
                                                <p>프리플랍: 카드 2장 배분 후</p>
                                                <p>플랍: 공용 카드 3장</p>
                                                <p>턴: 4번째 카드</p>
                                                <p>리버: 5번째 카드</p>
                                            </div>
                                        </div>
                                        <div className="item mb-4 last:mb-0">
                                            <div className="px-8 py-2 bg-[#282828] font-semibold border border-[#5A5A5A] rounded-[5px] mb-3">체크와 콜의 차이는 뭔가요?</div>
                                            <div className="px-8 text-20">
                                                <p>🅰️</p>
                                                <p>체크: 베팅 없이 다음으로 넘김</p>
                                                <p>콜: 상대 베팅 금액만큼 맞춰 냄</p>
                                            </div>
                                        </div>
                                        <div className="item mb-4 last:mb-0">
                                            <div className="px-8 py-2 bg-[#282828] font-semibold border border-[#5A5A5A] rounded-[5px] mb-3">Q7. 올인은 언제 가능한가요?</div>
                                            <div className="px-8 text-20">
                                                <p>🅰️</p>
                                                <p>본인이 가진 칩 전부를 베팅하는 행위로, 언제든 가능하지만 이후에는 사이드 팟이 생길 수 있습니다.</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="relative">
                                        <div className="item mb-4 last:mb-0">
                                            <div className="px-8 py-2 bg-[#282828] font-semibold border border-[#5A5A5A] rounded-[5px] mb-3">Q8. 초보자는 어떤 패로 시작하는 게 좋아요?</div>
                                            <div className="px-8 text-20">
                                                <p>🅰️</p>
                                                <p>초반에는 AA, KK, QQ, AK 같은 강한 패 위주로 플레이하는 것이 안정적입니다.</p>
                                            </div>
                                        </div>
                                        <div className="item mb-4 last:mb-0">
                                            <div className="px-8 py-2 bg-[#282828] font-semibold border border-[#5A5A5A] rounded-[5px] mb-3">Q9. 계속 지는데 정상인가요?</div>
                                            <div className="px-8 text-20">
                                                <p>🅰️</p>
                                                <p>네. 홀덤은 확률 + 장기 게임입니다. 단기 결과보다 판단 과정이 더 중요합니다.</p>
                                            </div>
                                        </div>
                                        <div className="item mb-4 last:mb-0">
                                            <div className="px-8 py-2 bg-[#282828] font-semibold border border-[#5A5A5A] rounded-[5px] mb-3">Q10. 블러핑은 꼭 해야 하나요?</div>
                                            <div className="px-8 text-20">
                                                <p>🅰️</p>
                                                <p>아닙니다. 블러핑은 상황 판단이 중요하며, 무리한 블러핑은 오히려 손해가 될 수 있습니다.</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
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