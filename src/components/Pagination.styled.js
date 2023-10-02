import styled from 'styled-components';

export const PaginationWrapper = styled.div`
	display: flex;
	justify-content: center;
	margin-top: 20px;

	button {
		padding: 10px;
		margin: 0 5px;
		border: none;
		background-color: #f0f0f0;
		cursor: pointer;
		transition: background-color 0.3s;

		&.active {
			background-color: #333;
			color: white;
		}

		&:hover {
			background-color: #ddd;
		}
	}
`;

export default { PaginationWrapper };
