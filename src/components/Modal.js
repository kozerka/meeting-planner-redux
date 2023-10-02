import React, { useState } from 'react';
import CalendarForm from './CalendarForm';
import styled from 'styled-components';
import ModalPortal from './ModalPortal';
import { BsXCircleFill } from 'react-icons/bs';

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

const ModalOverlay = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: rgba(0, 0, 0, 0.5);
	display: flex;
	justify-content: center;
	align-items: center;
	z-index: 1000;
	backdrop-filter: blur(10px);
`;

const ModalContainer = styled.div`
	position: relative;
	background-color: white;
	padding: 2rem;
	border-radius: 8px;
	max-width: 700px;
	padding: 5rem;
	width: 100%;
`;
const CloseButton = styled(BsXCircleFill)`
	position: absolute;
	top: 10px;
	right: 10px;
	cursor: pointer;
	font-size: 1.5rem;
	color: #999;

	&:hover {
		color: #333;
	}
`;

const OpenModalButton = styled.button``;

const Modal = ({ saveMeeting }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpenModal = () => {
		setIsOpen(true);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};

	return (
		<Wrapper>
			<OpenModalButton onClick={handleOpenModal}>
				Add Meeting to calendar
			</OpenModalButton>

			{isOpen && (
				<ModalPortal>
					<ModalOverlay onClick={handleCloseModal}>
						<ModalContainer onClick={(e) => e.stopPropagation()}>
							<CloseButton onClick={handleCloseModal} />
							<CalendarForm
								saveMeeting={saveMeeting}
								onClose={handleCloseModal}
							/>
						</ModalContainer>
					</ModalOverlay>
				</ModalPortal>
			)}
		</Wrapper>
	);
};

export default Modal;
