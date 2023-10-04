import React from 'react';
import styled from 'styled-components';
import { BsXCircleFill } from 'react-icons/bs';
import ModalPortal from './ModalPortal';

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: ${({ theme }) => theme.colors.shadow};
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
	backdrop-filter: blur(${({ theme }) => theme.blur.default});
`;

const ModalContainer = styled.div`
	position: relative;
	background-color: ${({ theme }) => theme.colors.white};
	padding: ${({ theme }) => theme.spacing.large};
	border-radius: ${({ theme }) => theme.borderRadius};
	max-width: 700px;
	padding: 5rem;
	width: 100%;
`;
const CloseButton = styled(BsXCircleFill)`
	position: absolute;
	top: 1.5rem;
	right: 1.5rem;
	cursor: pointer;
	font-size: ${({ theme }) => theme.fontSize.large};
	color: ${({ theme }) => theme.colors.delete};

	&:hover {
		color: ${({ theme }) => theme.colors.confirm};
	}
`;

const Modal = ({ isOpen, onClose, children }) => {
	return (
		isOpen && (
			<ModalPortal>
				<ModalOverlay onClick={onClose}>
					<ModalContainer onClick={(e) => e.stopPropagation()}>
						<CloseButton onClick={onClose} />
						{children}
					</ModalContainer>
				</ModalOverlay>
			</ModalPortal>
		)
	);
};

export default Modal;
