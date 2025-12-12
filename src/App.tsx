import React from 'react';
import AutoScaleLayout from "./components/AutoScaleLayout";
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';

import UserPanel from './components/UserPanel/UserPanel';

import JoinGame from './components/GamePanel/JoinGame';

const App: React.FC = () => {
  return (
      <AutoScaleLayout>
          <div className="wraper-main pt-3">
              <div className="section-block relative z-2">
                  <Header />
                  <main className="relative mt-3">
                      <div className="grid grid-cols-2 gap-5">
                          <div className="item">
                              <HeroSection />
                          </div>
                          <div className="item">
                              <UserPanel />
                          </div>
                      </div>
                      <JoinGame />
                  </main>
              </div>
          </div>
      </AutoScaleLayout>
  );
};

export default App;
