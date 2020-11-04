import React, {Fragment} from 'react';
import TopBar from '../components/Topbar';
import Footer from '../components/Footer';
import WorkshopCard from '../components/WorkshopCard';

const MainPage = () => {
	return (
		<>
			<TopBar />
			<WorkshopCard />
			<Footer />
		</>
	);
};

export default MainPage;
