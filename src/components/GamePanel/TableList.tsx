import React, { useState } from 'react';
import { useModal } from '../../contexts/ModalContext';
import InfoModal from './InfoModal';

interface JoinGameProps {
  onBack: () => void;
}

interface TableRoom {
  no: number;
  status: string;
  isPrivate: boolean;
  bb: number;
  minGold: string;
  title: string;
  players: string;
  canJoin: boolean;
}

const TableList: React.FC<JoinGameProps> = ({ onBack }) => {
  const [showInfoModal, setShowInfoModal] = useState(false);

  const { openModal } = useModal();

  const tableData: TableRoom[] = [
    { no: 15, status: '참여가능', isPrivate: false, bb: 100, minGold: '10000 G', title: '즐겁게 올인', players: '2/7', canJoin: true },
    { no: 14, status: '참여가능', isPrivate: false, bb: 100, minGold: '10000 G', title: '즐겁게 올인', players: '2/7', canJoin: true },
    { no: 13, status: '참여가능', isPrivate: false, bb: 100, minGold: '10000 G', title: '즐겁게 올인', players: '2/7', canJoin: true },
    { no: 12, status: '비밀방', isPrivate: true, bb: 200, minGold: '10000 G', title: '재미있게 즐겨요', players: '2/7', canJoin: true },
    { no: 11, status: '참여가능', isPrivate: false, bb: 500, minGold: '10000 G', title: '즐겁게 올인', players: '2/7', canJoin: true },
    { no: 10, status: '만석', isPrivate: false, bb: 1000, minGold: '10000 G', title: '재미있게 즐겨요', players: '9/9', canJoin: true },
    { no: 9, status: '참여가능', isPrivate: false, bb: 100, minGold: '10000 G', title: '즐겁게 올인', players: '2/7', canJoin: true },
    { no: 8, status: '참여가능', isPrivate: false, bb: 100, minGold: '10000 G', title: '즐겁게 올인', players: '2/7', canJoin: true },
    { no: 7, status: '비밀방', isPrivate: true, bb: 200, minGold: '10000 G', title: '재미있게 즐겨요', players: '2/7', canJoin: true },
    { no: 6, status: '참여가능', isPrivate: false, bb: 500, minGold: '10000 G', title: '즐겁게 올인', players: '2/7', canJoin: true },
    { no: 5, status: '만석', isPrivate: false, bb: 1000, minGold: '10000 G', title: '재미있게 즐겨요', players: '9/9', canJoin: true },
    { no: 4, status: '참여가능', isPrivate: false, bb: 100, minGold: '10000 G', title: '즐겁게 올인', players: '2/7', canJoin: true },
    { no: 3, status: '비밀방', isPrivate: true, bb: 200, minGold: '10000 G', title: '재미있게 즐겨요', players: '2/7', canJoin: true },
    { no: 2, status: '참여가능', isPrivate: false, bb: 500, minGold: '10000 G', title: '즐겁게 올인', players: '2/7', canJoin: true },
    { no: 1, status: '만석', isPrivate: false, bb: 1000, minGold: '10000 G', title: '재미있게 즐겨요', players: '9/9', canJoin: true },
  ];

  const getStatusStyles = (status: string) => {
    switch (status) {
      case '참여가능': return 'bg-green-400/15 text-green-400';
      case '비밀방': return 'bg-gold/15 text-gold';
      case '만석': return 'bg-gray-400/15 text-gray-400';
      default: return '';
    }
  };

  return (
      <>
        {showInfoModal && <InfoModal onClose={() => setShowInfoModal(false)} />}
      <section className="mt-3 font-medium">
        <div className="relative block overflow-hidden rounded-32 border border-[#fff3]">
          <img src="/images/bg-table-2.png" className="absolute top-0 left-0 w-full h-full object-bottom" alt=""/>



          <div className="relative z-2">
            <img src="/images/patten.png" className="absolute left-0 top-0 w-full h-full object-cover pointer-events-none" alt=""/>
            <h2 className="text-28 font-bold text-white py-3 px-10 font-sans">TABLE LIST</h2>
            <div
                onClick={onBack}
                className="close absolute top-0 right-4 cursor-pointer h-full flex items-center"
            >
              <img src="/images/close.png" alt=""/>
            </div>
          </div>
          <div className="text-center px-6 pb-3 pt-2 relative z-2">
            <div className="tableList overflow-auto overflow-x-hidden">
              <table className="w-full table-rooms">
                <thead>
                <tr className="bg-[#EBBD381A] border-b border-solid border-[#FFFFFF1A] text-20">
                  {['No', '상태', 'BB', '최소 입장 골드', '방제목', '현재인원', '', ''].map((header, i) => (
                      <th key={i} className="t py-3 px-5">
                        {header}
                      </th>
                  ))}
                </tr>
                </thead>
                <tbody>
                {tableData.map((room) => (
                    <tr key={room.no} className={`border-b border-solid border-[#FFFFFF1A] ${room.isPrivate === true ? 'bg-[#ff292d33]' : ''}`}>
                      <td className="px-4 py-[7px] text-white">{room.no}</td>
                      <td className="px-4 py-[7px]">
                        <span className={`inline-flex items-center gap-1`}>
                          {room.isPrivate && <span><img src="/images/lock.svg" alt=""/></span>}
                          {room.status}
                        </span>
                      </td>
                      <td className="px-4 py-[7px] text-white">{room.bb.toLocaleString()}</td>
                      <td className="px-4 py-[7px] text-gold font-semibold">{room.minGold}</td>
                      <td className="px-4 py-[7px] text-white">{room.title}</td>
                      <td className="px-4 py-[7px] text-white">{room.players}</td>

                      {room.isPrivate ? (
                          <td className="px-4 py-[7px]" colSpan={2}>
                            <div className="flex items-center justify-center gap-3">
                              <button
                                  onClick={() => openModal('inforoomtable')}
                                  className="button-gradient px-9 py-2 text-black rounded-full font-semibold transition-all hover:scale-[1.08] bg-[linear-gradient(180deg,#EBBD38_0%,#AE760D_100%)]">
                                입장
                              </button>
                            </div>
                          </td>
                      ) : (
                          <>
                            <td className="px-4 py-[7px]">
                              <button className="button-gradient px-9 py-2 text-black rounded-full font-semibold transition-all hover:scale-[1.08] bg-[linear-gradient(180deg,#EBBD38_0%,#AE760D_100%)]">
                                입장
                              </button>
                            </td>
                            <td className="px-3 py-[7px]">
                              <button
                                  className="button-gradient px-9 py-2 text-gold rounded-full font-semibold transition-all hover:scale-[1.08]"
                              >
                                관전
                              </button>
                            </td>
                          </>
                      )}
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
      </>
  );
};

export default TableList;