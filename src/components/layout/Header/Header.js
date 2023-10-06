import React from 'react';
import styled from 'styled-components';
import { BsCalendar2Check } from 'react-icons/bs';

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 10%;
	background-color: ${({ theme }) => theme.colors.whiteTransparent};
	margin-bottom: 3rem;
	h2 {
		font-weight: 300;
		font-size: ${({ theme }) => theme.fontSize.extraLarge};
		color: black;
	}
`;

const StyleCalendarIcon = styled(BsCalendar2Check)`
	color: black;
	font-size: ${({ theme }) => theme.fontSize.extraLarge};
	margin-right: 1rem;
`;

const Header = () => {
	return (
		<StyledHeader>
			<StyleCalendarIcon />
			<h2>MeetingPlanner</h2>
		</StyledHeader>
	);
};
export default Header;
