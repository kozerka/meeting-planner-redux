// ModalForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import CalendarForm from './CalendarForm';
import Button from './ui/Button';

const ModalForm = ({ saveMeeting }) => {
	const [isOpen, setIsOpen] = useState(false);

	const handleOpenModal = () => {
		setIsOpen(true);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};

	return (
		<div>
			<Button variant="white" onClick={handleOpenModal}>
				Add Meeting to calendar
			</Button>

			<Modal isOpen={isOpen} onClose={handleCloseModal}>
				<CalendarForm saveMeeting={saveMeeting} onClose={handleCloseModal} />
			</Modal>
		</div>
	);
};

export default ModalForm;
