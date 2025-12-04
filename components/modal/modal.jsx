import classes from './modal.module.css';

const Modal = ({ isOpen, onClose, children }) => {
	if (!isOpen) return null;

	return (
		<div className={classes["modal-overlay"]} onClick={onClose}>
			<div className={classes["modal-content"]} onClick={(e) => e.stopPropagation()}>
				<button className={classes["modal-close"]} onClick={onClose}>
					&times;
				</button>
				{children}
			</div>
		</div>
	);
};

export default Modal;
