import PropTypes from 'prop-types';

const Modal = ({ isOpen, onClose, children, title }) => {
	if (!isOpen) return null;

	return (
		<div className="modal" onClick={onClose}>
			<article
				className="modal-container"
				onClick={(e) => e.stopPropagation()}
			>
				<header className="modal-container-header">
					<h1 className="modal-container-title">{title}</h1>
					<button className="icon-button" onClick={onClose}>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							width="24"
							height="24"
						>
							<path fill="none" d="M0 0h24v24H0z" />
							<path
								fill="currentColor"
								d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z"
							/>
						</svg>
					</button>
				</header>
				<div className="modal-container-body">{children}</div>
				<footer className="modal-container-footer"></footer>
			</article>
		</div>
	);
};

Modal.propTypes = {
	isOpen: PropTypes.bool,
	onClose: PropTypes.func,
	children: PropTypes.node,
	title: PropTypes.string,
};

export default Modal;
