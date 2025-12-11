import React from 'react';

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

const TableList: React.FC = () => {
  const tableData: TableRoom[] = [
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
    <section className="mt-3 font-medium">
      <div className="container">
        <div className="relative block overflow-hidden rounded-24 2xl:rounded-32">
          <img src="/images/bg-table.png" className="absolute top-0 left-0 w-full h-full object-bottom" alt=""/>
          <div className="relative z-2">
            <img src="/images/patten.png" className="absolute left-0 top-0 w-full h-full object-cover pointer-events-none" alt=""/>
            <h2 className="text-18 2xl:text-20 3xl:text-24 4xl:text-28 font-bold text-white px-10 py-2 2xl:py-3 font-sans">TABLE LIST</h2>
            <div className="close absolute top-0 right-4 cursor-pointer h-full flex items-center">
              <img src="/images/close.png" alt=""/>
            </div>
          </div>
          <div className="tableList text-center px-6 pb-3 2xl:pb-5 pt-1 4xl:pt-5 relative z-2">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse">
                <thead>
                <tr className="bg-[#EBBD381A] border-b border-solid border-[#FFFFFF1A] text-14 2xl:text-16 3xl:text-18 4xl:text-20">
                  {['No', '상태', 'BB', '최소 입장 골드', '방제목', '현재인원', '', ''].map((header, i) => (
                      <th key={i} className="t py-2 2xl:py-[10px] 3xl:py-3 px-5">
                        {header}
                      </th>
                  ))}
                </tr>
                </thead>
                <tbody>
                {tableData.map((room) => (
                    <tr key={room.no} className={`border-b border-solid border-[#FFFFFF1A] ${room.isPrivate === true ? 'bg-[#FFFFFF1A]' : ''}`} >
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
                      <td className="px-4 py-[7px]">
                        <button className="button-gradient px-7 2xl:px-9 py-1 2xl:py-[6px] 3xl:py-2 text-black rounded-full font-semibold transition-all hover:scale-[1.08] bg-[linear-gradient(180deg,#EBBD38_0%,#AE760D_100%)]">
                          입장
                        </button>
                      </td>
                      <td className="px-3 py-[7px]">
                        <button className="button-gradient px-7 2xl:px-9 py-1 2xl:py-[6px] 3xl:py-2 text-gold rounded-full font-semibold transition-all hover:scale-[1.08]">
                          관전
                        </button>
                      </td>
                    </tr>
                ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TableList;
