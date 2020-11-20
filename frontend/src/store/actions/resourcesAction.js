import baseUrl from '../baseUrl';

export const resourcesAction = (token = null) => async () => {
	const url = `${baseUrl}/backend/api/resources/`;
	const config = {
		method: 'GET',
		headers: new Headers({
			Accept: 'application/json',
		}),
	};
	const response = await fetch(url, config);
	const data = await response.json();
	return data;
};

export default resourcesAction;
