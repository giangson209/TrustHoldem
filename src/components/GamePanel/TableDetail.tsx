import React, { useState, useRef, useEffect } from 'react';

interface DropdownProps {
    value: string;
    onChange: (value: string) => void;
    options: { value: string; label: string }[];
    placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ value, onChange, options, placeholder }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const selectedOption = options.find(opt => opt.value === value);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative w-full" ref={dropdownRef}>
            <div
                onClick={() => setIsOpen(!isOpen)}
                className="w-full bg-[#090702] border border-[rgb(255_255_255/50%)] font-normal text-white rounded-[48px] pl-5 pr-16 h-11.5 flex items-center cursor-pointer hover:border-white transition-all"
            >
                <span>{selectedOption?.label || placeholder}</span>
            </div>

            <div className="absolute top-0 right-5 flex items-center h-11.5 pointer-events-none">
                <img
                    src="/images/icon-select.svg"
                    alt=""
                    className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}
                />
            </div>

            {isOpen && (
                <div className="absolute top-[calc(100%+4px)] left-0 w-full text-left font-medium bg-[#090702] border border-white rounded-12 z-50 overflow-hidden">
                    <div className="max-h-35 overflow-y-auto dropdown-scroll">
                        {options.map((option) => (
                            <div
                                key={option.value}
                                onClick={() => {
                                    onChange(option.value);
                                    setIsOpen(false);
                                }}
                                className={`px-5 py-3 text-white cursor-pointer hover:bg-[#1a1a1a] transition-all ${
                                    option.value === value ? 'bg-[#1a1a1a]' : ''
                                }`}
                            >
                                {option.label}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

interface JoinGameProps {
    onBack: () => void;
}

const TableList: React.FC<JoinGameProps> = ({ onBack }) => {
    const [tableTitle, setTableTitle] = useState('');
    const [blindValue, setBlindValue] = useState('100');
    const [participants, setParticipants] = useState('9');
    const [password, setPassword] = useState('');

    const minGold = (parseInt(blindValue) * 100).toLocaleString('ko-KR');

    const tableTitleOptions = [
        { value: '1', label: "Let's have fun!" },
        { value: '2', label: 'High Stakes Game' },
        { value: '3', label: 'Casual Play' },
        { value: '4', label: "Let's have fun!" },
        { value: '5', label: 'High Stakes Game' },
        { value: '6', label: 'Casual Play' },
    ];

    const blindOptions = [
        { value: '100', label: '100 G' },
        { value: '200', label: '200 G' },
        { value: '500', label: '500 G' },
        { value: '1000', label: '1000 G' },
        { value: '2000', label: '2000 G' },
        { value: '5000', label: '5000 G' },
    ];

    const participantOptions = [
        { value: '9', label: '9명' },
        { value: '10', label: '10명' },
        { value: '11', label: '11명' },
        { value: '12', label: '12명' },
    ];

    return (
        <section className="mt-3 font-medium">
            <div className="relative block rounded-32">
                <img src="/images/bg-detail.png" className="absolute top-0 left-0 w-full h-full object-bottom" alt=""/>
                <div className="relative z-2">
                    <img src="/images/patten.png" className="absolute left-0 top-0 w-full h-full object-cover pointer-events-none" alt=""/>
                    <h2 className="text-28 font-bold text-white py-3 px-10 font-sans">테이블 만들기</h2>
                    <div
                        onClick={onBack}
                        className="close absolute top-0 right-4 cursor-pointer h-full flex items-center hover:scale-110 transition-all"
                    >
                        <img src="/images/close.png" alt=""/>
                    </div>
                </div>
                <div className="tableList text-center px-6 pb-3 pt-2 relative z-2">
                    <div className="max-w-225 w-full m-auto grid grid-cols-1 gap-5">
                        {/* Table Title */}
                        <div className="item flex items-center">
                            <div className="w-full flex-[0_0_152px] pr-2 font-bold text-white text-left">테이블 제목</div>
                            <div className="w-full flex-[0_0_calc(100%-152px)]">
                                <Dropdown
                                    value={tableTitle}
                                    onChange={setTableTitle}
                                    options={tableTitleOptions}
                                    placeholder="선택하세요"
                                />
                            </div>
                        </div>

                        {/* Blind & Min Gold */}
                        <div className="item flex items-center justify-between">
                            <div className="item flex items-center">
                                <div className="w-full flex-[0_0_152px] pr-2 font-bold text-white text-left">블라인드</div>
                                <div className="w-full flex-[0_0_180px]">
                                    <Dropdown
                                        value={blindValue}
                                        onChange={setBlindValue}
                                        options={blindOptions}
                                    />
                                </div>
                            </div>
                            <div className="item flex items-center">
                                <div className="w-full flex-[0_0_152px] pr-2 font-bold text-white text-left">최소입장골드</div>
                                <div className="w-full flex-[0_0_180px]">
                                    <input
                                        type="text"
                                        className="w-full bg-[#090702] border border-[rgb(255_255_255/50%)] font-normal text-white rounded-[48px] pl-5 pr-5 h-11.5 outline-0"
                                        value={`${minGold} G`}
                                        readOnly
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Participants & Password */}
                        <div className="item flex items-center justify-between">
                            <div className="item flex items-center">
                                <div className="w-full flex-[0_0_152px] pr-2 font-bold text-white text-left">참가 인원</div>
                                <div className="w-full flex-[0_0_180px]">
                                    <Dropdown
                                        value={participants}
                                        onChange={setParticipants}
                                        options={participantOptions}
                                    />
                                </div>
                            </div>
                            <div className="item flex items-center">
                                <div className="w-full flex-[0_0_152px] pr-2 font-bold text-white text-left">비밀번호</div>
                                <div className="w-full flex-[0_0_180px]">
                                    <input
                                        type="text"
                                        className="w-full bg-[#090702] border border-[rgb(255_255_255/50%)] font-normal text-white rounded-[48px] pl-5 pr-5 h-11.5 outline-0"
                                        placeholder="2자리 이상"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="item flex items-center justify-center gap-4 font-semibold pt-4 pb-2 border-t border-[#ffffff1a]">
                            <button className="w-full max-w-59 bg-gradient border border-yellow rounded-[48px] text-black h-11.5 transition-all hover:scale-[1.03] btn-login">
                                테이블 만들기
                            </button>
                            <button
                                onClick={onBack}
                                className="w-full max-w-59 border border-yellow rounded-[48px] text-yellow h-11.5 transition-all hover:scale-[1.03] btn-register"
                            >
                                취소
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TableList;