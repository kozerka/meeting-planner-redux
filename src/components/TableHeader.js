import React from 'react';
import { HeaderRow, HeaderCell, TableHeader } from './Table.styled';

function TableHeaders(props) {
	const { handleSort, renderArrow } = props;

	return (
		<TableHeader>
			<HeaderRow>
				<HeaderCell>Nr</HeaderCell>
				<HeaderCell onClick={() => handleSort('date')}>
					Date {renderArrow('date')}
				</HeaderCell>
				<HeaderCell onClick={() => handleSort('time')}>
					Time {renderArrow('time')}
				</HeaderCell>
				<HeaderCell onClick={() => handleSort('firstName')}>
					Contact {renderArrow('firstName')}
				</HeaderCell>
				<HeaderCell onClick={() => handleSort('status')}>
					Status {renderArrow('status')}
				</HeaderCell>
				<HeaderCell>Actions</HeaderCell>
			</HeaderRow>
		</TableHeader>
	);
}

export default TableHeaders;
