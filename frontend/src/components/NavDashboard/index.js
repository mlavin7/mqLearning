import React, { useState, Fragment, useEffect } from 'react';
import { Container } from '../../style/Container';
import { Button } from '../../style/Button';
import { NavbarDiV, SectionWorkshop, NavigationWrapper } from './styled';
import WorkshopCard from '../WorkshopCard';

const NavigateDashboard = ({ props }) => {
	// later onw the list will be replaced for fetching
	const [active, setActive] = useState('workshop');
	const [workshop, setWorkshop] = useState([]);

	useEffect(() => {
		setWorkshop(props[0]);
	}, [setWorkshop]);

	console.log(props);

	return (
		<Container>
			<NavigationWrapper>
				<NavbarDiV userProfile>
					<Button btnNavDashboard onClick={() => setActive('workshop')}>
						Select Workshop
					</Button>
					<Button
						btnNavDashboard
						onClick={() => setActive('scheduledWorkshop')}
					>
						Scheduled Workshop
					</Button>
					<Button btnNavDashboard onClick={() => setActive('attendedWorkshop')}>
						Attended Workshop
					</Button>
					<Button btnNavDashboard onClick={() => setActive('resources')}>
						Resources
					</Button>
				</NavbarDiV>

				<SectionWorkshop>
					{active === 'workshop' ? (
						<Fragment>
							{workshop.length !== 0 ? (
								props.map(workshop => (
									<WorkshopCard Zoom workshop={workshop} key={workshop.id} />
								))
							) : (
								<h1>loading..</h1>
							)}
						</Fragment>
					) : null}
					<Fragment>
						{active === 'scheduledWorkshop' ? (
							<ul>
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
							</ul>
						) : null}
					</Fragment>
					<Fragment>
						{active === 'attendedWorkshop' ? (
							<ul>
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
								<WorkshopCard Zoom />
							</ul>
						) : null}
					</Fragment>

					<Fragment>
						{active === 'resources' ? (
							<ul>
								<WorkshopCard Zoom />
							</ul>
						) : null}
					</Fragment>
				</SectionWorkshop>
			</NavigationWrapper>
		</Container>
	);
};

export default NavigateDashboard;
