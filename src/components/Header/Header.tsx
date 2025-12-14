import React from 'react';
import { useModal } from '../../contexts/ModalContext';

const Header: React.FC = () => {
  const { openModal } = useModal();

  return (
      <header className="w-full opacity-0 slide-up">
        <div className="logo absolute top-0 left-[-200px] mb-0">
          <img src="/images/logo.png" className="w-50 glow-intense m-auto" alt=""/>
        </div>
        <div className="relative font-bold text-center relative py-3 px-4 z-2 overflow-hidden rounded-0">
          <img src="/images/bg-header.png" className="absolute top-0 left-0 w-full h-full" alt=""/>
          <div className="grid grid-cols-12 gap-6">
            <div className="item col-span-3 block"></div>
            <div className="item col-span-6">
            <span className="text-yellow relative z-2 flex items-center justify-center h-full font-sans">
              Trust the Game! 당신의 패배가 의심된다면, 리플레이를 켜세요.
            </span>
            </div>
            <div className="item col-span-3 text-right flex items-center justify-end">
              <button
                  className="relative inline-block text-center text-yellow font-bold text-20 btn-heartbeat scale-[1]"
              >
                <img src="/images/btn-main.png" className="h-[auto]" alt=""/>
                <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
                게임다시보기
              </span>
              </button>
            </div>
          </div>
        </div>

        <div className="relative bg-[linear-gradient(180deg,rgba(215,166,43,0.85)_0%,#D7A62B_100%)] px-3 py-3 rounded-40 font-bold font-sans">
          <ul className="mainMenu flex items-center justify-center flex-wrap gap-x-24 gap-y-0">
            <li className="relative">
              <a className="cursor-pointer" onClick={() => openModal('about')}>
                트러스트홀덤 소개
              </a>
            </li>
            <li className="relative">
              <a className="cursor-pointer" onClick={() => openModal('faq')}>
                자주하는 질문
              </a>
            </li>
            <li className="relative">
              <a className="cursor-pointer" onClick={() => openModal('contact')}>
                고객센터
              </a>
            </li>
            <li className="relative">
              <a className="cursor-pointer" onClick={() => openModal('rule')}>
                게임규칙
              </a>
            </li>
          </ul>
        </div>
      </header>
  );
};

export default Header;