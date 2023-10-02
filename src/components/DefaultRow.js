import React from 'react';
import {
	BodyRow,
	BodyCell,
	Container,
	InitialsCircle,
	TableButton,
} from './Table.styled';
import getRandomColor from '../helpers/getRandomColor';
import getMeetingStatus from '../helpers/getMeetingStatus';
import { convertDate } from '../helpers/convertDate';

function DefaultRow({ itemData, rowNumber, handleEdit, handleDelete }) {
	const convertedDate = convertDate(itemData.date);
	const displayDate = `${convertedDate.day} ${convertedDate.month} ${convertedDate.year}`;
	const initials = `${itemData.firstName[0]}${itemData.lastName[0]}`;
	const circleColor = getRandomColor();

	return (
		<BodyRow key={itemData.id}>
			<BodyCell>{rowNumber}</BodyCell>
			<BodyCell>{displayDate}</BodyCell>
			<BodyCell>{itemData.time}</BodyCell>
			<BodyCell>
				<Container>
					<InitialsCircle style={{ backgroundColor: circleColor }}>
						{initials}
					</InitialsCircle>
					<a href={`mailto:${itemData.email}`}>
						{itemData.firstName} {itemData.lastName}
					</a>
				</Container>
			</BodyCell>
			<BodyCell>{getMeetingStatus(itemData)}</BodyCell>
			<BodyCell>
				<TableButton onClick={() => handleEdit(itemData.id)}>Edit</TableButton>
				<TableButton onClick={() => handleDelete(itemData.id)}>
					Delete
				</TableButton>
			</BodyCell>
		</BodyRow>
	);
}

export default DefaultRow;
