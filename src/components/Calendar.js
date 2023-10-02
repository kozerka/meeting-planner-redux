import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CalendarList from './CalendarList';
import CalendarForm from './CalendarForm';
import {
	loadMeetings,
	sendMeeting,
	deleteMeetingFromApi,
	updateMeetingFromApi,
} from '../providers/api';
import {
	loadMeetingsAction,
	sendMeetingAction,
	updateMeetingAction,
	deleteMeetingAction,
} from '../actions/calendar';
import styled from 'styled-components';

const CalendarWrapper = styled.div`
	display: flex;
	flex: 1;
	gap: 3rem;
	margin: 0 auto;
	max-width: 1400px;
`;
const FirstChild = styled.div`
	flex: 1;
`;

const SecondChild = styled.div`
	flex: 3;
`;

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
	const updateMeeting = (meetingId, updatedData) => {
		updateMeetingFromApi(meetingId, updatedData)
			.then((updatedMeeting) => {
				dispatch(updateMeetingAction(updatedMeeting));
			})
			.catch((error) => {
				console.error('Problem with updating meeting', error);
			});
	};

	const deleteMeeting = (meetingId) => {
		deleteMeetingFromApi(meetingId)
			.then(() => {
				dispatch(deleteMeetingAction(meetingId));
			})
			.catch((error) => {
				console.error('Problem with deleting meeting', error);
			});
	};

	return (
		<CalendarWrapper>
			<FirstChild>
				<CalendarForm saveMeeting={saveMeeting} />
			</FirstChild>
			<SecondChild>
				<CalendarList
					meetings={meetings}
					updateMeeting={updateMeeting}
					deleteMeeting={deleteMeeting}
				/>
			</SecondChild>
		</CalendarWrapper>
	);
};

export default Calendar;
