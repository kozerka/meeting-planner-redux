import React from 'react';
import { useSelector } from 'react-redux';

const CalendarList = () => {
	const meetings = useSelector((state) => state.meetings);

	const renderMeetingsList = () => {
		return meetings.map((item) => renderMeetingsItem(item));
	};

	const renderMeetingsItem = (itemData) => {
		return (
			<li key={itemData.id}>
				{itemData.date} {itemData.time}
				<a href={`mailto: ${itemData.email}`}>
					{itemData.firstName} {itemData.lastName}
				</a>
			</li>
		);
	};

	return <ul>{renderMeetingsList()}</ul>;
};

export default CalendarList