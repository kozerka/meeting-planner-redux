import React from 'react';
import { BiSolidErrorAlt } from 'react-icons/bi';
import FlexContainer from './ui/FlexContainer.styled';
import styled from 'styled-components';

const ErrorWrapper = styled(FlexContainer)`
	align-items: center;
	flex-direction: column;
`;
const StyledP = styled.p`
	margin-top: 2rem;
	font-size: ${({ theme }) => theme.fontSize.medium};
	color: ${({ theme }) => theme.colors.text};
`;
const Error = () => {
	return (
		<ErrorWrapper>
			<BiSolidErrorAlt size="4rem" color="#fff" />
			<StyledP>Something went wrong while fetching data...</StyledP>
		</ErrorWrapper>
	);
};

export default Error;
