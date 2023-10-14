import React from 'react';
import { Hourglass } from 'react-loader-spinner';
import FlexContainer from './ui/FlexContainer.styled';
import styled from 'styled-components';

const LoaderWrapper = styled(FlexContainer)`
	align-items: center;
	flex-direction: column;
`;
const StyledP = styled.p`
	margin-top: 2rem;
	font-size: ${({ theme }) => theme.fontSize.medium};
	color: ${({ theme }) => theme.colors.text};
`;

const Loader = () => {
	return (
		<LoaderWrapper>
			<Hourglass
				visible={true}
				height="80"
				width="80"
				ariaLabel="hourglass-loading"
				wrapperStyle={{}}
				wrapperClass=""
				colors={['#ddd', '#ffffff']}
			/>
			<StyledP>Loading meetings from API...</StyledP>
		</LoaderWrapper>
	);
};

export default Loader;
