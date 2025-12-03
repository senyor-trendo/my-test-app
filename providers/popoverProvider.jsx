'use client';
import { createContext, useContext, useState } from 'react';
import GlobalPopover from './globalPopover';
import './popover.css'; // We'll create this CSS file

const PopoverContext = createContext();

export function PopoverProvider({ children }) {
	const [popover, setPopover] = useState({
		isOpen: false,
		title: '',
		message: '',
		type: 'info', // 'info', 'success', 'error', 'warning'
		position: { top: 0, left: 0 }
	});

	const showPopover = (title, message, type = 'info', position = { top: 0, left: 0 }) => {
		setPopover({
			isOpen: true,
			title,
			message,
			type,
			position
		});
	};

	const hidePopover = () => {
		setPopover(prev => ({ ...prev, isOpen: false }));
	};

	return (
		<PopoverContext.Provider value={{ showPopover, hidePopover }}>
			{children}
			<GlobalPopover
				{...popover}
				onClose={hidePopover}
			/>
		</PopoverContext.Provider>
	);
}

export const usePopover = () => {
	const context = useContext(PopoverContext);
	if (!context) {
		throw new Error('usePopover must be used within PopoverProvider');
	}
	return context;
};