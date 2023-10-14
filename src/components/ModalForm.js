// ModalForm.js
import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from './Modal';
import CalendarForm from './CalendarForm';
import Button from './ui/Button';
import Error from './Error';
import DbDisconected from './DbDisconected';

const ModalForm = ({ saveMeeting, isLoading, error }) => {
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
				{!isLoading && !error ? (
					<CalendarForm saveMeeting={saveMeeting} onClose={handleCloseModal} />
				) : (
					<DbDisconected />
				)}
			</Modal>
		</div>
	);
};

export default ModalForm;
