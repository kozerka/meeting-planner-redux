import React from 'react';
import styled from 'styled-components';

const StyledMessageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
	margin: 0 auto;
`;
const NoMeetingsMessage = () => {
	return (
		<StyledMessageWrapper>
			<h2>No meetings scheduled in the calendar.</h2>
		</StyledMessageWrapper>
	);
};

export default NoMeetingsMessage;
