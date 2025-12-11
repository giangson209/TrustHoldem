import React from 'react';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import UserPanel from './components/UserPanel/UserPanel';
import TableList from './components/TableList/JoinGame';

const App: React.FC = () => {
  return (
    <div className="h-screen overflow-hidden w-screen relative p-2 3xl:p-4">
      <img src="/images/background.jpg" className="w-full h-full bottom-0 right-0 absolute object-cover" alt=""/>
        <div className="section-block relative z-2 origin-top scale-[0.94] 4xl:scale-[1]">
            <Header />
            <main className="relative mt-3">
                <div className="container">
                    <div className="grid grid-cols-2 gap-5">
                        <div className="item">
                            <HeroSection />
                        </div>
                        <div className="item">
                            <UserPanel />
                        </div>
                    </div>
                </div>
                <TableList />
            </main>
        </div>
    </div>
  );
};

export default App;
