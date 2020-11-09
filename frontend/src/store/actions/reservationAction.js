import baseUrl from '../../store/baseUrl';

export const ReservationAction = workshopId => async (dispatch, getState) => {
	const token = getState().loginReducer.token;

	const url = `${baseUrl}/backend/api/workshops/reserve/${workshopId}/`;
	const config = {
		method: 'POST',
		headers: new Headers({
			'Content-type': 'application/json',
			Authorization: `Bearer ${token}`,
		}),
	};
	const response = await fetch(url, config);
	const data = await response.json();
	return data;
};

export default ReservationAction;