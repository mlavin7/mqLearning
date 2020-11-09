import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from '../../style/Container';
import { TopBarWrapper, Showcase, MainContent } from './styled';
import mqlogo from '../../assets/images/mq-logo.jpg';
import { Button } from '../../style/Button';
import Modal from '../Modal';

const WorkshopPage = ({ singleWorkshop, user }) => {

	const history = useHistory();
	const [showModal, setShowModal] = useState(false);

	const openModal = e => {
		setShowModal(true);
	};

	const hideModal = e => {
		setShowModal(false);
	};

	return (
		<Container workshop>
			<TopBarWrapper>
				<div className='logo-container'>
					<img src={mqlogo} alt='logo' />
				</div>
				<div className='workshop-info-container'>
					<h1>{singleWorkshop.title}</h1>
					<p>{singleWorkshop.date_start}</p>
					<p>{singleWorkshop.location}</p>
					<p>{singleWorkshop.subtitle}</p>
				</div>
			</TopBarWrapper>
			<Showcase banner={singleWorkshop.banner} />
			<MainContent>
				<div className='time-location-container'>
					<h1>Time & Location</h1>
					<p>{singleWorkshop.date_start}</p>
					<p>{singleWorkshop.location}</p>
				</div>
				<div className='workshop-details-container'>
					<h1>Details</h1>
					<p>{singleWorkshop.description}</p>
				</div>
				<div className='action-btns-container'>
					<Button backBtn onClick={() => history.push('/mainpage')}>
						Back
					</Button>
					<Button reserveBtn onClick={openModal}>
						Reserve
					</Button>
					{showModal ? (
						<Modal handleClose={hideModal} workshop={singleWorkshop} user={user}/>
					) : null}
				</div>
			</MainContent>
		</Container>
	);
};

export default WorkshopPage;
