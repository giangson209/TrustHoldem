import React, { useState } from 'react';
import AutoScaleModal from '../AutoScaleModal';

interface Message {
    id: number;
    date: string;
    question: string;
    answer: string;
    isRead: boolean;
}

interface Messages {
    onClose: () => void;
}

const Login: React.FC<Messages> = ({ onClose }) => {
    const [messages, setMessages] = useState<Message[]>([
        { id: 1, date: '2025-01-15', question: 'Lorem imsum 1', answer: 'Lorem imsum 1', isRead: false },
        { id: 2, date: '2025-01-14', question: 'Lorem imsum 2', answer: 'Lorem imsum 2', isRead: false },
        { id: 3, date: '2025-01-13', question: 'Lorem imsum 3', answer: 'Lorem imsum 3', isRead: false },
        { id: 4, date: '2025-01-12', question: 'Lorem imsum 4', answer: 'Lorem imsum 4', isRead: false },
        { id: 5, date: '2025-01-11', question: 'Lorem imsum 5', answer: 'Lorem imsum 5', isRead: false },
        { id: 6, date: '2025-01-10', question: 'Lorem imsum 6', answer: 'Lorem imsum 6', isRead: false },
        { id: 7, date: '2025-01-09', question: 'Lorem imsum 7', answer: 'Lorem imsum 7', isRead: false },
        { id: 8, date: '2025-01-08', question: 'Lorem imsum 8', answer: 'Lorem imsum 8', isRead: false },
        { id: 9, date: '2025-01-07', question: 'Lorem imsum 9', answer: 'Lorem imsum 9', isRead: false },
        { id: 10, date: '2025-01-06', question: 'Lorem imsum 10', answer: 'Lorem imsum 10', isRead: false },
    ]);

    const [currentPage, setCurrentPage] = useState(1);
    const messagesPerPage = 1;

    const totalPages = Math.ceil(messages.length / messagesPerPage);

    const indexOfLastMessage = currentPage * messagesPerPage;
    const indexOfFirstMessage = indexOfLastMessage - messagesPerPage;
    const currentMessages = messages.slice(indexOfFirstMessage, indexOfLastMessage);

    const handlePageChange = (pageNumber: number) => {
        setMessages(prevMessages =>
            prevMessages.map((msg, index) => {
                if (index >= indexOfFirstMessage && index < indexOfLastMessage) {
                    return { ...msg, isRead: true };
                }
                return msg;
            })
        );

        setCurrentPage(pageNumber);
    };

    return (
        <>
            <AutoScaleModal>
                <div className="wraper-main relative opacity-0 slide-up">
                    <div className="relative w-full max-w-175 m-auto rounded-32 border border-[#FFE085] py-8 px-10 bg-[#010101] text-white overflow-hidden">
                        <img src="/images/cart-top.png" alt="" className="absolute top-0 left-0 pointer-events-none max-h-full"/>
                        <img src="/images/cart-bot.png" alt="" className="absolute bottom-0 right-0 pointer-events-none max-h-full"/>

                        <div onClick={onClose} className="absolute top-3 right-3 close z-4 cursor-pointer">
                            <img src="/images/close.png" alt=""/>
                        </div>
                        <div className="absolute top-6 left-8 font-bold text-24">
                            내 쪽지
                        </div>
                        <div className="pt-16 pb-6 relative z-2">
                            <div className="grid grid-cols-1 gap-6">
                                {currentMessages.map((message) => (
                                    <div key={message.id}>
                                        <p className="font-bold mb-6 flex items-center gap-3">
                                            <span>
                                                [{!message.isRead ? '신규' : '원음'}]
                                            </span>
                                            <span>{message.date}</span>
                                            <span>로의 답변</span>
                                        </p>
                                        <div className="grid grid-cols-1 gap-6 mb-6 font-semibold text-18">
                                            <div className="item flex">
                                                <div className="flex-[0_0_100px] max-w-25 pr-5">문의내용</div>
                                                <div className="flex-[0_0_calc(100%-100px)] max-w-[calc(100%-100px)] pr-5">
                                                    <textarea
                                                        readOnly
                                                        value={message.question}
                                                        className="w-full border border-1 border-[rgb(255_255_255/50%)] outline-none font-medium py-2 px-4 h-40 rounded-6 bg-transparent resize-none"
                                                    />
                                                </div>
                                            </div>
                                            <div className="item flex">
                                                <div className="flex-[0_0_100px] max-w-25 pr-5">답변</div>
                                                <div className="flex-[0_0_calc(100%-100px)] max-w-[calc(100%-100px)] pr-5">
                                                    <textarea
                                                        readOnly
                                                        value={message.answer}
                                                        className="w-full border border-1 border-[rgb(255_255_255/50%)] outline-none font-medium py-2 px-4 h-40 rounded-6 bg-transparent resize-none"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <ul className="flex items-center justify-center gap-4">
                                {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                                    <li
                                        key={pageNumber}
                                        onClick={() => handlePageChange(pageNumber)}
                                        className={`cursor-pointer font-bold transition-opacity ${
                                            currentPage === pageNumber
                                                ? 'opacity-100 text-yellow-400'
                                                : 'opacity-40 hover:opacity-100'
                                        }`}
                                    >
                                        {pageNumber}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </AutoScaleModal>
        </>
    );
};

export default Login;