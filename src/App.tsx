// src/App.tsx
import React from 'react';
import { useModal } from './contexts/ModalContext';
import AutoScaleLayout from "./components/AutoScaleLayout";
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import UserPanel from './components/UserPanel/UserPanel';
import JoinGame from './components/GamePanel/JoinGame';
import About from './components/Modal/About';
import FAQ from './components/Modal/FAQ';
import Contact from './components/Modal/Contact';
import ContactRequest from './components/Modal/ContactRequest';
import ContactTele from './components/Modal/ContactTele';
import GameRule from './components/Modal/GameRule';
import RefillGold from './components/Modal/RefillGold';
import ExchangeGold from './components/Modal/ExchangeGold';
import WithdrawMembership from './components/Modal/WithdrawMembership';
import Infomation from './components/Modal/Infomation';
import ChangePassword from './components/Modal/ChangePassword';
import CompExchange from './components/Modal/CompExchange';

const App: React.FC = () => {
    const { activeModal, closeModal } = useModal();

    return (
        <>
            {activeModal && (
                <div
                    className="fixed top-0 left-0 bg-[#000000] opacity-85 w-full h-full z-40"
                    onClick={closeModal}
                ></div>
            )}
            <AutoScaleLayout>
                <div className="wraper-main pt-3">
                    <div className="section-block relative z-2">
                        <Header />
                        <main className="relative mt-3">
                            <div className="grid grid-cols-2 gap-5 opacity-0 slide-up slide-up-2">
                                <div className="item">
                                    <HeroSection />
                                </div>
                                <div className="item">
                                    <UserPanel />
                                </div>
                            </div>
                            <section className="mt-3 font-medium slide-up opacity-0 slide-up-3">
                                <JoinGame />
                            </section>

                        </main>
                    </div>
                </div>
            </AutoScaleLayout>

            {activeModal === 'about' && <About onClose={closeModal} />}
            {activeModal === 'faq' && <FAQ onClose={closeModal} />}
            {activeModal === 'contact' && <Contact onClose={closeModal} />}
            {activeModal === 'rule' && <GameRule onClose={closeModal} />}
            {activeModal === 'refill' && <RefillGold onClose={closeModal} />}
            {activeModal === 'exchange' && <ExchangeGold onClose={closeModal} />}
            {activeModal === 'contactrequess' && <ContactRequest onClose={closeModal} />}
            {activeModal === 'contacttelegram' && <ContactTele onClose={closeModal} />}
            {activeModal === 'infomation' && <Infomation onClose={closeModal} />}
            {activeModal === 'withdrawmembership' && <WithdrawMembership onClose={closeModal} />}
            {activeModal === 'changepass' && <ChangePassword onClose={closeModal} />}
            {activeModal === 'compexchange' && <CompExchange onClose={closeModal} />}
        </>
    );
};

export default App;