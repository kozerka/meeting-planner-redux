const API_URL = 'http://localhost:3005/meetings';

export const loadMeetings = () => {
	return fetch(API_URL)
		.then((resp) => {
			if (resp.ok) {
				return resp.json();
			}
			throw new Error('Network error!');
		})
		.catch((err) => {
			console.error(err);
			throw err;
		});
};

export const sendMeeting = (meetingData) => {
	return fetch(API_URL, {
		method: 'POST',
		body: JSON.stringify(meetingData),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((resp) => {
			if (resp.ok) {
				return resp.json();
			}
			throw new Error('Network error!');
		})
		.catch((err) => {
			console.log(err);
			throw err;
		});
};

export const updateMeetingFromApi = (meetingId, meetingData) => {
	return fetch(`${API_URL}/${meetingId}`, {
		method: 'PUT',
		body: JSON.stringify(meetingData),
		headers: {
			'Content-Type': 'application/json',
		},
	})
		.then((resp) => {
			if (resp.ok) {
				return loadMeetings();
			}
			throw new Error('Network error!');
		})
		.catch((err) => {
			console.log(err);
			throw err;
		});
};

export const deleteMeetingFromApi = (meetingId) => {
	return fetch(`${API_URL}/${meetingId}`, {
		method: 'DELETE',
	})
		.then((resp) => {
			if (resp.ok) {
				return resp.json();
			}
			throw new Error('Network error!');
		})
		.catch((err) => {
			console.log(err);
			throw err;
		});
};
