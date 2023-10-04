import styled from 'styled-components';

export const PaginationWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: ${({ theme }) => theme.spacing.medium};

	button {
		padding: ${({ theme }) => theme.padding.small};
		margin: 0 ${({ theme }) => theme.spacing.small};
		border: none;
		background-color: ${({ theme }) => theme.colors.lightGrey};
		cursor: pointer;
		transition: background-color 0.3s;

		&.active {
			background-color: ${({ theme }) => theme.colors.primary};
			color: ${({ theme }) => theme.colors.white};
		}

		&:hover {
			opacity: 0.8;
		}
	}
`;

export default { PaginationWrapper };
