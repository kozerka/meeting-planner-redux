import React from 'react';
import styled from 'styled-components';
import { BsCalendar2Check } from 'react-icons/bs';

const StyledHeader = styled.header`
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 2rem;
	height: 10%;

	h2 {
		font-weight: 300;
		font-size: 3rem;
		color: black;
	}
`;

const StyleCalendarIcon = styled(BsCalendar2Check)`
	color: black;
	font-size: 3rem;
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
