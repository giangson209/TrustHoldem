import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';

const UserPanel: React.FC = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showRegister, SetShowRegister] = useState(false);

    if (showLogin) {
        return <Login onBack={() => setShowLogin(false)} />;
    }

    if (showRegister) {
        return <Register onBack={() => SetShowRegister(false)} />;
    }

    return (
        <div className="bg-[#0F0F0F] p-4 rounded-32 relative h-full opacity-0 slide-up slide-up-2 border-0">
            <img src="/images/card-modal.png" className="absolute top-0 left-0 w-full h-full pointer-events-none block" alt=""/>
            <img src="/images/border-gradient.png" className="absolute top-0 left-0 w-full h-full pointer-events-none block" alt=""/>
            <div className="flex items-center justify-center w-full h-full p-6 text-center absolute top-0 left-0 z-3 font-semibold">
                <ul className="m-auto max-w-102 w-full">
                    <li className="mb-6 last:mb-0">
                        <button
                            onClick={() => setShowLogin(true)}
                            className="w-full bg-gradient border border-yellow rounded-[48px] text-black h-12 transition-all hover:scale-[1.05] btn-login"
                        >
                            로그인 하세요
                        </button>
                    </li>
                    <li className="mb-6 last:mb-0">
                        <button
                            onClick={() => SetShowRegister(true)}
                            className="w-full border border-yellow rounded-[48px] text-yellow h-12 transition-all hover:scale-[1.05] btn-register"
                        >
                            로그인 하세요
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default UserPanel;