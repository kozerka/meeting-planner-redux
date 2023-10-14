import React from 'react';
import { MdOutlineFreeCancellation } from 'react-icons/md';
import FlexContainer from './ui/FlexContainer.styled';
import styled from 'styled-components';

const DisconectedWrapper = styled(FlexContainer)`
	align-items: center;
	flex-direction: column;
`;
const StyledP = styled.p`
	margin: 3rem;
	font-size: ${({ theme }) => theme.fontSize.medium};
	color: ${({ theme }) => theme.colors.text};
	text-align: center;
	text-transform: uppercase;
	line-height: 2rem;
`;
const DbDisconected = () => {
	return (
		<DisconectedWrapper>
			<MdOutlineFreeCancellation size={'4rem'} color={'#fa5252'} />
			<StyledP>
				There is no database connection.
				<br />
				Unable to add a new meeting. <br />
				Please ensure you have a database connection before adding a meeting.
			</StyledP>
		</DisconectedWrapper>
	);
};

export default DbDisconected;
