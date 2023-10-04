import React from 'react';
import { BodyRow, BodyCell, Container, InitialsCircle } from './Table.styled';
import getRandomColor from '../helpers/getRandomColor';
import getMeetingStatus from '../helpers/getMeetingStatus';
import Button from './ui/Button';
import { convertDate } from '../helpers/convertDate';
import FlexContainer from './ui/FlexContainer.styled';

function DeletingRow({ itemData, rowNumber, confirmDelete, cancelDelete }) {
	const convertedDate = convertDate(itemData.date);
	const displayDate = `${convertedDate.day} ${convertedDate.month} ${convertedDate.year}`;
	const initials = `${itemData.firstName[0]}${itemData.lastName[0]}`;
	const circleColor = itemData.color;

	return (
		<BodyRow key={itemData.id}>
			<BodyCell>{rowNumber}</BodyCell>
			<BodyCell>{displayDate}</BodyCell>
			<BodyCell>{itemData.time}</BodyCell>
			<BodyCell>
				<FlexContainer>
					<InitialsCircle style={{ backgroundColor: circleColor }}>
						{initials}
					</InitialsCircle>
					<a href={`mailto:${itemData.email}`}>
						{itemData.firstName} {itemData.lastName}
					</a>
				</FlexContainer>
			</BodyCell>
			<BodyCell>{getMeetingStatus(itemData)}</BodyCell>
			<BodyCell>
				<Button
					variant="confirm"
					size="small"
					onClick={() => confirmDelete(itemData.id)}
				>
					Confirm
				</Button>
				<Button variant={'cancel'} size="small" onClick={cancelDelete}>
					Cancel
				</Button>
			</BodyCell>
		</BodyRow>
	);
}

export default DeletingRow;
