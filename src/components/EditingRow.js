import React from 'react';
import {
	StyledInput,
	InitialsCircle,
	BodyCell,
	BodyRow,
	Container,
	TableButton,
} from './Table.styled';
import getRandomColor from '../helpers/getRandomColor';
import getMeetingStatus from '../helpers/getMeetingStatus';
import { convertDate } from '../helpers/convertDate';

function EditingRow({
	itemData,
	editedMeeting,
	rowNumber,
	onInputChange,
	saveChanges,
	cancelEdit,
}) {
	const convertedDate = convertDate(itemData.date);
	const displayDate = `${convertedDate.day} ${convertedDate.month} ${convertedDate.year}`;
	const initials = `${itemData.firstName[0]}${itemData.lastName[0]}`;
	const circleColor = getRandomColor();

	return (
		<BodyRow key={itemData.id}>
			<BodyCell>{rowNumber}</BodyCell>
			<BodyCell>
				<StyledInput
					type="date"
					value={editedMeeting.date}
					onChange={(e) => onInputChange('date', e.target.value)}
				/>
			</BodyCell>
			<BodyCell>
				<StyledInput
					type="time"
					value={editedMeeting.time}
					onChange={(e) => onInputChange('time', e.target.value)}
				/>
			</BodyCell>
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
				<TableButton onClick={() => saveChanges(itemData.id)}>Save</TableButton>
				<TableButton onClick={cancelEdit}>Cancel</TableButton>
			</BodyCell>
		</BodyRow>
	);
}

export default EditingRow;
