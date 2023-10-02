export const LOAD_MEETINGS = 'calendar/LOAD_MEETINGS';
export const SAVE_MEETINGS = 'calendar/SAVE_MEETINGS';
export const UPDATE_MEETING = 'calendar/UPDATE_MEETING';
export const DELETE_MEETING = 'calendar/DELETE_MEETING';

export const loadMeetingsAction = (meetings) => {
	return {
		type: LOAD_MEETINGS,
		payload: meetings,
	};
};

export const sendMeetingAction = (newMeeting) => {
	return {
		type: SAVE_MEETINGS,
		payload: newMeeting,
	};
};
export const updateMeetingAction = (updatedMeeting) => {
	return {
		type: UPDATE_MEETING,
		payload: updatedMeeting,
	};
};

export const deleteMeetingAction = (meetingId) => {
	return {
		type: DELETE_MEETING,
		payload: meetingId,
	};
};
