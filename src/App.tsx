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
import Messages from './components/Modal/Messages';
import WithdrawalSettings from './components/Modal/WithdrawalSettings';
import CheckIn from './components/Modal/CheckIn';
import ModalTournament from './components/Tournament/ModalTournament';
import RuleTournament from './components/Tournament/RuleTournament';    
import CancelTournament from './components/Tournament/CancelTournament';
import NotMoneyTournament from './components/Tournament/NotMoneyTournament';

import InfoModaTable from './components/GamePanel/InfoModal';

import Login from './components/Modal/Login';
import LoginTable from './components/Modal/LoginTable';
import CompleteTournament from './components/Tournament/CompleteTournament';

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
                <div className="wraper-main pt-1">
                    <div className="section-block relative z-2">
                        <Header />
                        <main className="relative mt-1">
                            <div className="grid grid-cols-2 gap-5 opacity-0 slide-up slide-up-2">
                                <div className="item">
                                    <HeroSection />
                                </div>
                                <div className="item">
                                    <UserPanel />
                                </div> 
                            </div>
                            <section className="mt-1 font-medium slide-up opacity-0 slide-up-3">
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
            {activeModal === 'inforoomtable' && <InfoModaTable onClose={closeModal} />}
            {activeModal === 'login' && <Login onClose={closeModal} />}
            {activeModal === 'logintable' && <LoginTable onClose={closeModal} />}
            {activeModal === 'messages' && <Messages onClose={closeModal} />}
            {activeModal === 'withdrawalsettings' && <WithdrawalSettings onClose={closeModal} />}
            {activeModal === 'checkin' && <CheckIn onClose={closeModal} />}
            {activeModal === 'tournament' && <ModalTournament onClose={closeModal} />}
            {activeModal === 'ruletournament' && <RuleTournament onClose={closeModal} />}
            {activeModal === 'completetournament' && <CompleteTournament onClose={closeModal} />}
            {activeModal === 'canceltournament' && <CancelTournament onClose={closeModal} />}
            {activeModal === 'notmoneytournament' && <NotMoneyTournament onClose={closeModal} />}
        </>
    );
};

export default App;