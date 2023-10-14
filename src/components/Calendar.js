import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CalendarList from './CalendarList';
import GlassContainer from './ui/GlassContainer.styled';
import getRandomColor from '../helpers/getRandomColor';
import Loader from './Loader';
import Error from './Error';

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
	setLoadingAction,
	setErrorAction,
} from '../actions/calendar';
import styled from 'styled-components';
import ModalForm from './ModalForm';

const CalendarWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
	flex: 1;
	gap: 3rem;
	margin: 0 auto;
	max-width: 1400px;
`;

const Calendar = () => {
	const dispatch = useDispatch();
	const meetings = useSelector((state) => state.meetings);
	const isLoading = useSelector((state) => state.isLoading);
	const error = useSelector((state) => state.error);

	useEffect(() => {
		dispatch(setLoadingAction(true));
		loadMeetings()
			.then((meetingsFromApi) => {
				dispatch(setLoadingAction(false));
				dispatch(loadMeetingsAction(meetingsFromApi));
			})
			.catch((error) => {
				dispatch(setLoadingAction(false));
				dispatch(setErrorAction(' while fetching data', error));
			});
	}, [dispatch]);

	const saveMeeting = (meetingData) => {
		const meetingWithColor = { ...meetingData, color: getRandomColor() };
		sendMeeting(meetingWithColor)
			.then((response) => {
				dispatch(sendMeetingAction(meetingWithColor));
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
			<ModalForm />
			<GlassContainer>
				{isLoading ? (
					<Loader />
				) : error ? (
					<Error />
				) : (
					<CalendarList
						meetings={meetings}
						saveMeeting={saveMeeting}
						updateMeeting={updateMeeting}
						deleteMeeting={deleteMeeting}
					/>
				)}
			</GlassContainer>
		</CalendarWrapper>
	);
};

export default Calendar;
