const getMeetingStatus = (itemData) => {
	const now = new Date();
	const meetingDate = new Date(`${itemData.date} ${itemData.time}`);
	return meetingDate < now ? 'Outdated' : 'Pending';
};

export default getMeetingStatus;
