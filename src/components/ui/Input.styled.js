import styled from 'styled-components';

const StyledInput = styled.input`
	padding: ${({ theme }) => theme.padding.medium};
	font-size: ${({ theme }) => theme.fontSize.medium};
	color: ${({ theme }) => theme.colors.text};
	background-color: ${({ theme }) => theme.colors.lightGrey};
	border-radius: ${({ theme }) => theme.borderRadius};
	transition: box-shadow 0.3s ease, border 0.3s ease;
	width: 100%;
	border: none;
	&:hover {
		box-shadow: ${({ theme }) => theme.boxShadow.hover};
	}

	&:focus {
		outline: none;
		box-shadow: ${({ theme }) => theme.boxShadow.hover};
	}
`;

export default StyledInput;
