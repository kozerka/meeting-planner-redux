import React from 'react';
import { BodyRow, BodyCell, InitialsCircle } from './Table.styled';
import getMeetingStatus from '../helpers/getMeetingStatus';
import { convertDate } from '../helpers/convertDate';
import Button from './ui/Button';
import styled from 'styled-components';
import FlexContainer from './ui/FlexContainer.styled';
import { BsEnvelopeAt } from 'react-icons/bs';

const Envelope = styled(BsEnvelopeAt)`
	font-size: 1.2rem;
	vertical-align: middle;
	margin: 0.3rem;
`;

function DefaultRow({ itemData, rowNumber, handleEdit, handleDelete }) {
	const convertedDate = convertDate(itemData.date);
	const displayDate = `${convertedDate.day} ${convertedDate.month} ${convertedDate.year}`;
	const initials = `${itemData.firstName[0]}${itemData.lastName[0]}`;
	const circleColor = itemData.color;

	return (
		<BodyRow key={itemData.id}>
			<BodyCell>{rowNumber}</BodyCell>
			<BodyCell>{displayDate}</BodyCell>
			<BodyCell>
				<FlexContainer>{itemData.time}</FlexContainer>
			</BodyCell>
			<BodyCell>
				<FlexContainer>
					<InitialsCircle style={{ backgroundColor: circleColor }}>
						{initials}
					</InitialsCircle>
					<a href={`mailto:${itemData.email}`}>
						{itemData.firstName} {itemData.lastName} <Envelope />
					</a>
				</FlexContainer>
			</BodyCell>
			<BodyCell>
				<FlexContainer>{getMeetingStatus(itemData)}</FlexContainer>
			</BodyCell>
			<BodyCell>
				<Button
					variant="edit"
					size="small"
					onClick={() => handleEdit(itemData.id)}
				>
					Edit
				</Button>
				<Button
					variant="delete"
					size="small"
					onClick={() => handleDelete(itemData.id)}
				>
					Delete
				</Button>
			</BodyCell>
		</BodyRow>
	);
}

export default DefaultRow;
