import React, { useState } from 'react';
import LoginSuccess from './LoginSuccess';

interface LoginProps {
    onBack?: () => void;
}

const Login: React.FC<LoginProps> = ({ onBack }) => {
    const [showNextComponent, setShowNextComponent] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault(); // Ngăn reload trang

        // Xử lý logic login ở đây (gọi API, validate...)
        console.log('Đang đăng nhập...');

        // Chuyển sang component khác
        setShowNextComponent(true);
    };

    const handleRegister = () => {
        // Chuyển sang trang đăng ký
        console.log('Chuyển sang đăng ký');
        // setShowRegister(true); hoặc logic khác
    };

    // Nếu đã login thành công, hiển thị component mới
    if (showNextComponent) {
        return <LoginSuccess />;
    }

    return (
        <div className="bg-[#0F0F0F] p-4 rounded-32 relative h-full slide-up-2 border-0">
            <img src="/images/card-modal.png" className="absolute top-0 left-0 w-full h-full pointer-events-none block" alt=""/>
            <img src="/images/border-gradient.png" className="absolute top-0 left-0 w-full h-full pointer-events-none block" alt=""/>
            <div className="flex items-center justify-center w-full h-full p-6 text-center absolute top-0 left-0 z-3 font-semibold">
                <div className="close absolute top-5 right-5 cursor-pointer z-2" onClick={onBack}>
                    <img src="/images/close.png" alt=""/>
                </div>
                <div className="m-auto max-w-102 w-full">
                    <form className="w-full" onSubmit={handleSubmit}>
                        <ul>
                            <li className="mb-4">
                                <input type="text" placeholder="아이디" className="w-full border border-[rgb(255_255_255/50%)] placeholder:text-[rgb(255_255_255/50%)] font-normal text-white rounded-[48px] text-black px-5  h-12"/>
                            </li>
                            <li className="mb-4">
                                <input type="password" placeholder="패스워드" className="w-full border border-[rgb(255_255_255/50%)] placeholder:text-[rgb(255_255_255/50%)] font-normal text-white rounded-[48px] text-black px-5  h-12"/>
                            </li>
                            <li className="mb-4">
                                <input type="text" placeholder="|패스워드 확인" className="w-full border border-[rgb(255_255_255/50%)] placeholder:text-[rgb(255_255_255/50%)] font-normal text-white rounded-[48px] text-black px-5  h-12"/>
                            </li>
                            <li className="mb-6">
                                <input type="text" placeholder="추천인입력란 추가" className="w-full border border-[rgb(255_255_255/50%)] placeholder:text-[rgb(255_255_255/50%)] font-normal text-white rounded-[48px] text-black px-5  h-12"/>
                            </li>
                            <li className="mb-6">
                                <button type="submit" className="w-full border border-yellow rounded-[48px] text-yellow h-12 transition-all hover:scale-[1.05]">로그인 하세요</button>
                            </li>
                        </ul>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;