import React from 'react';
import styled from 'styled-components';

const StyledMessageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	margin: 0 auto;
	color: ${({ theme }) => theme.colors.white};
	text-shadow: 1px 1px 4px ${({ theme }) => theme.colors.black};
`;
const NoMeetingsMessage = () => {
	return (
		<StyledMessageWrapper>
			<h2>No meetings scheduled in the calendar.</h2>
		</StyledMessageWrapper>
	);
};

export default NoMeetingsMessage;
