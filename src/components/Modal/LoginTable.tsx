import React from 'react';
import AutoScaleModal from '../AutoScaleModal';

interface ModalProps {
    onClose: () => void;
}

// Data mẫu cho table
const gameData = [
    {
        date: '2025.10.10 00:00',
        logNumber: '00000',
        game: '게임',
        betting: '1,000G',
        profit: '+ 1,000G',
        result: '승'
    },
    ...Array(8).fill({
        date: '2025.10.10 00:00',
        logNumber: '00000',
        game: '게임',
        betting: '1,000G',
        profit: '+ 1,000G',
        result: '승'
    })
];

const TableUser: React.FC<ModalProps> = ({ onClose }) => {
    return (
        <AutoScaleModal>
            <div className="wraper-main relative opacity-0 slide-up">
                <div className="relative rounded-32 border border-[#FFE085] py-8 px-7 bg-[#010101] text-white overflow-hidden">
                    <img src="/images/cart-top.png" alt="" className="absolute top-0 left-0 pointer-events-none max-h-full"/>
                    <img src="/images/cart-bot.png" alt="" className="absolute bottom-0 right-0 pointer-events-none max-h-full"/>

                    <div onClick={onClose} className="absolute top-3 right-3 close z-4">
                        <img src="/images/close.png" alt=""/>
                    </div>

                    <div className="textModal text-24 relative z-3 font-medium leading-[1.5]">
                        <div className="flex items-center gap-6">
                            <div className="text-28 font-bold">게임 다시보기</div>
                            <span className="font-medium">게임 다시보기 기록은 일주일 후에 자동 삭제됩니다.</span>
                        </div>

                        <div className="block pt-5 text-center">
                            <table className="w-full m-0">
                                <thead>
                                <tr className="font-medium text-24">
                                    {['날짜/시간', '로그번호', '게임', '배팅골드', '득실골드', '승/패', '플레이'].map((header, index) => (
                                        <td key={index} className="px-[5px]">
                                                <span className="flex items-center justify-center h-15 px-2 bg-[#282828] border border-[#5A5A5A] rounded-4">
                                                    {header}
                                                </span>
                                        </td>
                                    ))}
                                </tr>
                                </thead>
                                <tbody>
                                {gameData.map((row, index) => (
                                    <tr key={index}>
                                        <td className="px-[5px] text-18 font-semibold">
                                            <span className="flex items-center justify-center h-12.5 px-2">{row.date}</span>
                                        </td>
                                        <td className="px-[5px] text-18 font-semibold">
                                            <span className="flex items-center justify-center h-12.5 px-2">{row.logNumber}</span>
                                        </td>
                                        <td className="px-[5px] text-18 font-semibold">
                                            <span className="flex items-center justify-center h-12.5 px-2">{row.game}</span>
                                        </td>
                                        <td className="px-[5px] text-18 font-semibold">
                                            <span className="flex items-center justify-center h-12.5 px-2">{row.betting}</span>
                                        </td>
                                        <td className="px-[5px] text-18 font-semibold">
                                            <span className="flex items-center justify-center h-12.5 px-2">{row.profit}</span>
                                        </td>
                                        <td className="px-[5px] text-18 font-semibold">
                                            <span className="flex items-center justify-center h-12.5 px-2">{row.result}</span>
                                        </td>
                                        <td className="px-[5px] text-18 font-semibold">
                                                <span className="flex items-center justify-center h-12.5 px-2 font-black text-gold">
                                                    <button>PLAY</button>
                                                </span>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                        <div className="text-center mt-8">
                            <button
                                onClick={onClose}
                                className="min-w-50 font-semibold bg-gradient border border-yellow rounded-[48px] text-black h-15 transition-all hover:scale-[1.05] btn-login text-18"
                            >
                                확인
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </AutoScaleModal>
    );
};

export default TableUser;