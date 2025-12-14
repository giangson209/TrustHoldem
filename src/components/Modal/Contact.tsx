import React, { useState } from 'react';
import { useModal } from '../../contexts/ModalContext';
import AutoScaleModal from '../AutoScaleModal';

interface ModalProps {
    onClose: () => void;
}

const Contact: React.FC<ModalProps> = ({ onClose }) => {
    const { openModal } = useModal();

    const [textarea, setTextarea] = useState('');
    const [telegramId, setTelegramId] = useState('');

    const handleSubmit = () => {
        const isTextareaEmpty = textarea.trim() === '';
        const isTelegramEmpty = telegramId.trim() === '';

        if (isTextareaEmpty) {
            openModal('contactrequess');
            return;
        }

        if (isTelegramEmpty) {
            openModal('contacttelegram');
            return;
        }
        console.log('Submit success:', { textarea, telegramId });
        onClose();
    };

    return (
        <>
            <AutoScaleModal>
                <div className="wraper-main relative opacity-0 slide-up">
                    <div className="relative w-full m-auto rounded-32 border border-[#FFE085] py-8 px-10 bg-[#010101] text-white overflow-hidden">
                        <img src="/images/cart-top.png" alt="" className="absolute top-0 left-0 pointer-events-none max-h-full"/>
                        <img src="/images/cart-bot.png" alt="" className="absolute bottom-0 right-0 pointer-events-none max-h-full"/>

                        <div
                            onClick={onClose}
                            className="absolute top-3 right-3 close z-4 cursor-pointer hover:scale-110 transition-all"
                        >
                            <img src="/images/close.png" alt=""/>
                        </div>

                        <div className="textModal text-24 relative z-3 font-medium leading-[1.5]">
                            <h2 className="text-white font-bold text-28 mb-5 mt-[-16px]">{`고객센터 > 문의하기`}</h2>
                            <div className="text-24 font-bold mb-5">궁금하신점이나 불편하신 사항은 언제든지 문의 남겨주세요.</div>

                            <div className="px-8">
                                <div className="item mb-6 last:mb-0">
                                    <label htmlFor="" className="mb-4 block">글작성하기</label>
                                    <textarea
                                        value={textarea}
                                        onChange={(e) => setTextarea(e.target.value)}
                                        className="w-full p-5 h-38.5 border border-[#5A5A5A] bg-[#282828] rounded-[5px] text-20 font-normal"
                                        placeholder="문의 내용을 입력하세요"
                                    ></textarea>
                                </div>

                                <div className="item flex items-center mb-6 last:mb-0">
                                    <div className="flex flex-[calc(100%-920px)] max-w-[calc(100%-920px)]">
                                        <label htmlFor="" className="block">답변받을 텔레그램 아이디</label>
                                    </div>
                                    <div className="flex-[0_0_1000px] max-w-230">
                                        <input
                                            type="text"
                                            value={telegramId}
                                            onChange={(e) => setTelegramId(e.target.value)}
                                            className="w-full px-5 h-15 border border-[#5A5A5A] bg-[#282828] rounded-[5px] text-20 font-normal"
                                        />
                                    </div>
                                </div>

                                <div className="item mb-6 pt-2 last:mb-0 flex items-center justify-center gap-5">
                                    <button
                                        onClick={onClose}
                                        className="min-w-50 font-semibold border border-yellow rounded-[48px] text-yellow h-15 transition-all hover:scale-[1.05] btn-login text-18"
                                    >
                                        취소
                                    </button>
                                    <button
                                        onClick={handleSubmit}
                                        className="min-w-50 font-semibold bg-gradient border border-yellow rounded-[48px] text-black h-15 transition-all hover:scale-[1.05] btn-login text-18"
                                    >
                                        등록
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AutoScaleModal>
        </>
    );
};

export default Contact;