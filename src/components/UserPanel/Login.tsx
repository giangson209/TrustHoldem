import React, { useState } from 'react';
import Register from './Register';
import LoginSuccess from './LoginSuccess';

interface LoginProps {
    onBack?: () => void;
}

const Login: React.FC<LoginProps> = ({ onBack }) => {
    const [showNextComponent, setShowNextComponent] = useState(false);
    const [showRegister, setShowRegister] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setShowNextComponent(true);
    };

    const handleRegister = () => {
        setShowRegister(true);
    };

    if (showNextComponent) {
        return <LoginSuccess />;
    }

    if (showRegister) {
        return <Register onBack={() => setShowRegister(false)} />;
    }

    return (
        <div className="bg-[#0F0F0F] p-4 rounded-32 relative h-full border-0">
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
                                <input type="text" placeholder="아이디" className="w-full border border-[rgb(255_255_255/50%)] outline-white placeholder:text-[rgb(255_255_255/50%)] font-normal text-white rounded-[48px] text-black px-5 h-12"/>
                            </li>
                            <li className="mb-6">
                                <input type="password" placeholder="패스워드" className="w-full border border-[rgb(255_255_255/50%)] placeholder:text-[rgb(255_255_255/50%)] font-normal text-white rounded-[48px] text-black px-5 h-12"/>
                            </li>
                            <li className="mb-6">
                                <button type="submit" className="w-full bg-gradient border border-yellow rounded-[48px] text-black h-12 transition-all hover:scale-[1.05]">로그인 하세요</button>
                            </li>
                        </ul>
                    </form>
                    <div className="text-center">
                        <button
                            type="button"
                            onClick={handleRegister}
                            className="w-full border border-yellow rounded-[48px] text-yellow h-12 transition-all hover:scale-[1.05]"
                        >
                            회원 가입
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;