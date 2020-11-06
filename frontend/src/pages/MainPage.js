import React, { Fragment, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import TopBar from '../components/Topbar';
import Footer from '../components/Footer';
// import WorkshopCard from '../components/WorkshopCard';
import NavigateDashboard from '../components/NavDashboard';
import { Container } from '../style/Container';
import workshopAction from '../store/actions/workshopAction';

const MainPage = () => {
	const dispatch = useDispatch();
	const [workshops, setWorkshops] = useState([]);

	useEffect(() => {
		const getData = async () => {
			const data = await dispatch(workshopAction());
			console.log(data);
			setWorkshops(data);
		};
		getData();
	}, [setWorkshops]);

	return (
		<Fragment>
			<TopBar />
			<Container>
				{workshops.length !== 0 ? (
					<NavigateDashboard props={workshops} />
				) : null}
			</Container>
			<Footer />
		</Fragment>
	);
};

export default MainPage;
