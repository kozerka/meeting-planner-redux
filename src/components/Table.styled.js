import styled from 'styled-components';
export const Container = styled.div`
	max-width: 1200px;
	min-width: 500px;
	margin: 0 auto;
	display: flex;
	align-items: center;
	border-radius: 1rem;
	overflow: hidden;
	background-color: ${({ theme }) => theme.colors.lightGrey};
	overflow: hidden;
	a {
		text-transform: uppercase;
		text-decoration: none;
		color: ${({ theme }) => theme.colors.black};
		align-items: center;
	}
`;

export const StyledTable = styled.table`
	width: 100%;
	border-collapse: separate;
	border-spacing: 0;
	border-radius: 10px;
	overflow: hidden;

	th {
		padding: 10px;
		background-color: ${({ theme }) => theme.colors.grayTransparent};
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
	background-color: ${({ theme }) => theme.colors.middleGrey};
	cursor: pointer;
	text-transform: capitalize;
	text-align: center;

	&:hover {
		color: ${({ theme }) => theme.colors.white};
	}

	&.active span.icon-arrow {
		background-color: orange;
		color: ${({ theme }) => theme.colors.white};
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
		background-color: ${({ theme }) => theme.colors.active};
	}
`;
export const InitialsCircle = styled.div`
	width: 2.6rem;
	height: 2.6rem;
	border-radius: 50%;
	background-color: ${(props) => props.backgroundColor || '#000'};
	color: ${({ theme }) => theme.colors.white};
	display: flex;
	padding: 1rem;
	align-items: center;
	justify-content: center;
	font-size: ${({ theme }) => theme.fontSize.medium};
	margin-right: 10px;
	text-transform: uppercase;
	text-shadow: 1px 1px 1px ${({ theme }) => theme.colors.grayTransparent};
	box-shadow: ${({ theme }) => theme.boxShadow.light};
`;
export const BodyCell = styled.td`
	padding: 1rem;
	text-align: left;
`;


