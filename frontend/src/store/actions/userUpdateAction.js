import baseUrl from '../baseUrl';
import { USER_UPDATE } from '../actionTypes';

export const userUpdateAction = updatedUserProfile => async (dispatch, getState) => {
	const userToken = getState().user.token || localStorage.item('token')
	const url = `${baseUrl}/backend/api/users/me/`;
	const body = JSON.stringify(updatedUserProfile);
	
	const config = {
		method: 'PATCH',
		body,
		headers: new Headers({
			'Content-Type': 'application/json',
			'Authorization': `Bearer ${userToken}`,
		}),
	};
	
	const response = await fetch(url, config);
	const data = await response.json();
	dispatch({
		type: USER_UPDATE,
		payload: data
	});
};
