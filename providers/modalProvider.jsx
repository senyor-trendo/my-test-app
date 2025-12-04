"use client"
import { createContext, useContext, useState } from 'react';
import Modal from '@/components/modal/modal';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
	const [modalContent, setModalContent] = useState(null);
	const [isOpen, setIsOpen] = useState(false);

	const openModal = (content) => {
		setModalContent(content);
		setIsOpen(true);
	};

	const closeModal = () => {
		setIsOpen(false);
		setModalContent(null);
	};

	return (
		<ModalContext.Provider value={{ openModal, closeModal }}>
			{children}
			<Modal isOpen={isOpen} onClose={closeModal}>
				{modalContent}
			</Modal>
		</ModalContext.Provider>
	);
};

export const useModal = () => {
	const context = useContext(ModalContext);
	if (!context) {
		throw new Error('useModal must be used within a ModalProvider');
	}
	return context;
};
