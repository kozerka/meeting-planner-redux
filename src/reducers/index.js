import { LOAD_MEETINGS, SAVE_MEETINGS } from '../actions/calendar';

const initialState = {
	meetings: [],
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
		default:
			return state;
	}
};

export default reducer;
