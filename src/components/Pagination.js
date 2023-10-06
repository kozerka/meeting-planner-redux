import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

function Pagination({
	currentPage,
	totalPages,
	onPageChange,
	totalMeetings,
	meetingsPerPage,
}) {
	const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
	const currentStart = (currentPage - 1) * meetingsPerPage + 1;
	const currentEnd = Math.min(currentPage * meetingsPerPage, totalMeetings);

	return (
		<Wrapper>
			<div className="pagination">
				{pages.map((page) => (
					<button
						style={{
							borderRadius: '6px',
						}}
						key={page}
						className={currentPage === page ? 'active' : ''}
						onClick={() => onPageChange(page)}
					>
						{page}
					</button>
				))}
			</div>
			{`Displaying  ${currentStart}-${currentEnd} of all ${totalMeetings} available meetings`}
		</Wrapper>
	);
}

export default Pagination;
