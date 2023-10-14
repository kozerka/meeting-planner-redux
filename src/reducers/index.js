import {
	LOAD_MEETINGS,
	SAVE_MEETINGS,
	UPDATE_MEETING,
	DELETE_MEETING,
	SET_LOADING,
	SET_ERROR,
} from '../actions/calendar';
import getRandomColor from '../helpers/getRandomColor';
const initialState = {
	meetings: [],
	isLoading: false,
	error: null,
};

export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case LOAD_MEETINGS:
			return {
				...state,
				meetings: action.payload,
			};
		case SAVE_MEETINGS:
			return {
				...state,
				meetings: [...state.meetings, action.payload],
			};

		case UPDATE_MEETING:
			return {
				...state,
				meetings: state.meetings.map((meeting) =>
					meeting.id === action.payload.id ? action.payload : meeting
				),
			};
		case DELETE_MEETING:
			return {
				...state,
				meetings: state.meetings.filter(
					(meeting) => meeting.id !== action.payload
				),
			};
		case SET_LOADING:
			return {
				...state,
				isLoading: action.payload,
			};
		case SET_ERROR:
			return {
				...state,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default reducer;
