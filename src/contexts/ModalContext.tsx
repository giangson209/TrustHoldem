
import React, { createContext, useContext, useState, ReactNode } from 'react';

type ModalType = 'about' | 'faq' | 'contact' | 'rule' | 'refill' | 'exchange' | 'contactrequess' | 'contacttelegram' | 'withdrawmembership' | 'infomation' | 'changepass' | 'compexchange' | 'inforoomtable' | null;

interface ModalContextType {
    activeModal: ModalType;
    openModal: (type: ModalType) => void;
    closeModal: () => void;
}

// Tạo Context
const ModalContext = createContext<ModalContextType | undefined>(undefined);

// Provider component
export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [activeModal, setActiveModal] = useState<ModalType>(null);

    const openModal = (type: ModalType) => {
        setActiveModal(type);
    };

    const closeModal = () => {
        setActiveModal(null);
    };

    return (
        <ModalContext.Provider value={{ activeModal, openModal, closeModal }}>
            {children}
        </ModalContext.Provider>
    );
};

export const useModal = () => {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within ModalProvider');
    }
    return context;
};