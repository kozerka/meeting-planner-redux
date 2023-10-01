import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CalendarList from './CalendarList';
import CalendarForm from './CalendarForm';
import { loadMeetings, sendMeeting } from '../providers/api';
import { loadMeetingsAction, sendMeetingAction } from '../actions/calendar';

const Calendar = () => {
	const dispatch = useDispatch();
	const meetings = useSelector((state) => state.meetings);

	useEffect(() => {
		loadMeetings()
			.then((meetingsFromApi) => dispatch(loadMeetingsAction(meetingsFromApi)))
			.catch((error) => console.error('Can not load meetings:', error));
	}, [dispatch]);

	const saveMeeting = (meetingData) => {
		sendMeeting(meetingData)
			.then((response) => {
				dispatch(sendMeetingAction(meetingData));
			})
			.catch((error) => {
				console.error('Problem with sending meeting', error);
			});
	};

	return (
		<section>
			<CalendarList meetings={meetings} />
			<CalendarForm saveMeeting={saveMeeting} />
		</section>
	);
};

export default Calendar;
