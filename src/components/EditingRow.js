import React from 'react';
import { InitialsCircle, BodyCell, BodyRow } from './Table.styled';
import getMeetingStatus from '../helpers/getMeetingStatus';
import Button from './ui/Button';
import FlexContainer from './ui/FlexContainer.styled';
import Input from './ui/Input';

function EditingRow({
	itemData,
	editedMeeting,
	rowNumber,
	onInputChange,
	saveChanges,
	cancelEdit,
}) {
	const initials = `${itemData.firstName[0]}${itemData.lastName[0]}`;
	const circleColor = itemData.color;

	return (
		<BodyRow key={itemData.id}>
			<BodyCell>{rowNumber}</BodyCell>
			<BodyCell>
				<Input
					placeholder={'YYYY-MM-DD'}
					label={'Format YYYY-MM-DD'}
					type="date"
					value={editedMeeting.date}
					onChange={(e) => onInputChange('date', e.target.value)}
				/>
			</BodyCell>
			<BodyCell>
				<Input
					placeholder={'HH:MM'}
					label={'Format HH:MM'}
					type="time"
					value={editedMeeting.time}
					onChange={(e) => onInputChange('time', e.target.value)}
				/>
			</BodyCell>
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
					onClick={() => saveChanges(itemData.id)}
				>
					Save
				</Button>
				<Button variant="cancel" size="small" onClick={cancelEdit}>
					Cancel
				</Button>
			</BodyCell>
		</BodyRow>
	);
}

export default EditingRow;
