import styled from 'styled-components';
export const Container = styled.div`
	max-width: 1200px;
	margin: 0 auto;
	padding: 0 20px;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
	overflow: hidden;
`;

export const StyledTable = styled.table`
	width: 100%;
	border-collapse: separate;
	border-spacing: 0;
	border-radius: 10px;
	overflow: hidden;

	th {
		padding: 10px;
		background-color: grey;
	}

	th:first-child {
		border-top-left-radius: 10px;
	}

	th:last-child {
		border-top-right-radius: 10px;
	}

	td {
		padding: 10px;
	}
`;

export const TableHeader = styled.thead`
	text-align: center;
`;

export const HeaderRow = styled.tr``;

export const HeaderCell = styled.th`
	padding: 1rem;
	text-align: left;
	position: sticky;
	top: 0;
	left: 0;
	background-color: #d5d1defe;
	cursor: pointer;
	text-transform: capitalize;
	text-align: center;

	& span.icon-arrow {
		display: inline-block;
		width: 1.3rem;
		height: 1.3rem;
		border-radius: 50%;
		border: 1.4px solid transparent;
		text-align: center;
		font-size: 1rem;
		margin-left: 0.5rem;
		transition: 0.2s ease-in-out;

		&:hover {
			border: 1.4px solid orange;
		}
	}

	&:hover {
		color: white;
	}

	&.active span.icon-arrow {
		background-color: orange;
		color: #fff;
	}

	&.asc span.icon-arrow {
		transform: rotate(180deg);
	}
`;
export const TableBody = styled.tbody``;

export const BodyRow = styled.tr`
	--delay: 0.1s;
	transition: 0.5s ease-in-out var(--delay), background-color 0s;
	opacity: ${({ hidden }) => (hidden ? 0 : 1)};
	transform: ${({ hidden }) => (hidden ? 'translateX(100%)' : 'none')};
	border-radius: 10px;
	margin-bottom: 4px;

	&:nth-child(even) {
		background-color: #0000000b;
	}

	&:hover {
		background-color: orange;
	}
`;
export const InitialsCircle = styled.div`
	width: 36px;
	height: 36px;
	border-radius: 50%;
	background-color: ${(props) => props.backgroundColor || '#000'};
	color: white;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 18px;
	margin-right: 10px;
`;
export const BodyCell = styled.td`
	padding: 1rem;
	text-align: center;
	vertical-align: middle;
	& img {
		width: 36px;
		height: 36px;
		margin-right: 0.5rem;
		border-radius: 50%;
		vertical-align: middle;
	}
`;

export const StyledInput = styled.input`
	padding: 0 0.5rem;
	background-color: transparent;
`;

export const TableButton = styled.button`
	margin: 5px;
	padding: 5px 15px;
	border: none;
	border-radius: 4px;
	background-color: #007bff;
	color: white;
	font-size: 1rem;
	cursor: pointer;
	transition: background-color 0.3s ease;

	&:hover {
		background-color: #0056b3;
	}

	&:disabled {
		background-color: #ccc;
		cursor: not-allowed;
	}
`;
