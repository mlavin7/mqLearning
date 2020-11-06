import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from '../../style/Container';
import { TopBarWrapper, Showcase, MainContent } from './styled';
import mqlogo from '../../assets/images/mq-logo.jpg';
import { Button } from '../../style/Button';

const WorkshopPage = ({ workshop }) => {
	const history = useHistory();

	return (
		<Container workshop>
			<TopBarWrapper>
				<div className='logo-container'>
					<img src={mqlogo} alt='logo' />
				</div>
				<div className='workshop-info-container'>
					<h1>How to Make Inner Values Based Decisions: Zürich</h1>
					<p>Mon, Nov 23rd | location </p>
					<p>Zürich</p>
					<p>Learn to develop deeper self awareness of your inner self.</p>
				</div>
				<div className='btn-container'>
					<Button reserveBtn>Reserve</Button>
				</div>
			</TopBarWrapper>
			<Showcase />
			<MainContent>
				<div className='time-location-container'>
					<h1>Time & Location</h1>
					<p>Jan 25, 2021, 6:30 PM – 9:30 PM GMT+1</p>
					<p>Zürich, Zürich, Switzerland</p>
				</div>
				<div className='workshop-details-container'>
					<h1>Details</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
						illo? Obcaecati modi fuga harum voluptates distinctio delectus vitae
						doloribus cum rem illo? Perferendis, expedita illum? Ratione dolorum
						repellendus neque eveniet, tenetur amet quaerat iure accusamus
						corporis. Aspernatur pariatur eos, quis repellat necessitatibus
						cumque vero. Ea, non eveniet placeat aliquam debitis ipsum sint
						sapiente alias facere in amet temporibus corporis reiciendis, sunt
						accusantium vero doloribus dolor, omnis velit qui laborum
						perspiciatis assumenda. Impedit error quas consectetur dolorum
						labore alias corporis sapiente, numquam voluptate ea voluptas
						excepturi animi, ipsa laudantium molestias quidem expedita? Corrupti
						doloremque nesciunt ducimus assumenda hic aliquid eum at.
					</p>
				</div>
				<div className='action-btns-container'>
					<Button backBtn onClick={() => history.push('/mainpage')}>
						Back
					</Button>
					<Button reserveBtn>Reserve</Button>
				</div>
			</MainContent>
		</Container>
	);
};

export default WorkshopPage;
