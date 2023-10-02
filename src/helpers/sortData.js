import getMeetingStatus from './getMeetingStatus';
const sortData = (data, sortBy, sortDirection) => {
	return [...data].sort((a, b) => {
		let diff = 0;

		switch (sortBy) {
			case 'date':
				diff = new Date(a.date) - new Date(b.date);
				break;
			case 'time':
				diff =
					new Date(`1970-01-01 ${a.time}`) - new Date(`1970-01-01 ${b.time}`);
				break;
			case 'status':
				const aStatus = getMeetingStatus(a);
				const bStatus = getMeetingStatus(b);
				diff = aStatus.localeCompare(bStatus);
				break;
			default:
				diff = String(a[sortBy]).localeCompare(String(b[sortBy]));
				break;
		}

		return sortDirection === 'asc' ? diff : -diff;
	});
};

export default sortData;
