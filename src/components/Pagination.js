import React from 'react';

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
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				flexDirection: 'column',
				gap: '1rem',
			}}
		>
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
		</div>
	);
}

export default Pagination;
