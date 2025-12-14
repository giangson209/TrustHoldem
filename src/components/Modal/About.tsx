import React, {useState} from 'react';
import AutoScaleModal from '../AutoScaleModal';

interface ModalProps {
    onClose: () => void;
}
const About: React.FC<ModalProps> = ({ onClose }) => {

    return ( 
        <>
            <AutoScaleModal>
                <div className="wraper-main relative opacity-0 slide-up">
                    <div className="relative rounded-32 border border-[#FFE085] py-8 px-7 bg-[#010101] text-white overflow-hidden">
                        <img src="/images/cart-top.png" alt="" className="absolute top-0 left-0 pointer-events-none max-h-full"/>
                        <img src="/images/cart-bot.png" alt="" className="absolute bottom-0 right-0 pointer-events-none max-h-full"/>

                        <div onClick={onClose} className="absolute top-3 right-3 close z-4">
                            <img src="/images/close.png" alt=""/>
                        </div>
                        <div className="textModal text-24 relative z-3 font-medium leading-[1.5]">
                            <p>
                                트러스트홀덤을 소개 합니다.  수많은 온라인 홀덤 게임 속에서 트러스트 홀덤을 찾는 것은 가장 중요한 가치입니다.
                                <span className="block">
                                    트러스트 홀덤은 플레이어 여러분의 신뢰를 최우선으로 생각하며  업계 최고 수준의 투명성과 안전성을 자랑하는 <strong>'풀 리플레이(Full Replay)' 기능을 도입했습니다</strong>.
                                </span>
                            </p>
                            <p className="text-26 !mb-2">🔍  모든 핸드를 검증하세요</p>
                            <p className="!mb-5">트러스트 홀덤에서는 게임이 끝난 후, 여러분이 참여했던 모든 핸드(Hand)에 대해 완벽한 리플레이를 제공합니다.</p>
                            <p className="text-26 !mb-2">🔒 데이터 무결성 보장</p>
                            <p>리플레이 데이터는 게임 서버에 안전하게 기록되며, 블록체인 기술에 준하는 무결성 검증 시스템을 통해 어떠한 외부적인 조작도  불가능하도록 보호됩니다. 단 1비트의 오류나 조작도 허용하지 않는 철벽 보안 시스템 위에서 안심하고 플레이하십시오.</p>
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

export default About;
