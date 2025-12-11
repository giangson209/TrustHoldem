import React from 'react';

const Header: React.FC = () => {
  const navItems = [
    { label: '트러스트홀덤 소개', href: '#' },
    { label: '자주하는 질문', href: '#' },
    { label: '고객센터', href: '#' },
    { label: '게임규칙', href: '#' },
  ];

  return (
    <header className="w-full opacity-0 slide-up">
      <div className="container relative">
        <div className="logo absolute top-0 left-[-140px] 3xl:left-[-200px] 4xl:left-[-12px]">
          <img src="/images/logo.png" className="w-[140px] 3xl:w-[200px] 4xl:w-[239px] glow-intense" alt=""/>
        </div>
        <div className="relative font-bold text-center relative py-2 4xl:py-3 px-4 z-2">
          <img src="/images/bg-header.png" className="absolute top-0 left-0 w-full h-full object-cover object-top" alt=""/>
          <div className="grid grid-cols-12 gap-6">
            <div className="item col-span-3"></div>
            <div className="item col-span-6">
              <span className="text-yellow relative z-2 flex items-center justify-center h-full font-sans">Trust the Game! 당신의 패배가 의심된다면, 리플레이를 켜세요.</span>
            </div>
            <div className="item col-span-3 text-right flex items-center justify-end">
              <a href="" className="relative inline-block text-center text-yellow font-bold text-15 2xl:text-17 3xl:text-18 4xl:text-20 btn-heartbeat">
                <img src="/images/btn-main.png" className="h-8 2xl:h-9 3xl:h-10 4xl:h-[auto]" alt=""/>
                <span className="absolute top-0 left-0 w-full h-full flex items-center justify-center">게임다시보기</span>
              </a>
            </div>
          </div>
        </div>

        <div className="relative bg-[linear-gradient(180deg,rgba(215,166,43,0.85)_0%,#D7A62B_100%)] px-3 py-2 2xl:py-3 rounded-40 font-bold font-sans">
          <ul className="mainMenu flex items-center justify-center gap-24">
            <li className="relative"><a href="">트러스트홀덤 소개</a></li>
            <li className="relative"><a href="">자주하는 질문</a></li>
            <li className="relative"><a href="">고객센터</a></li>
            <li className="relative"><a href="">게임규칙</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
