import React, { useState, Fragment } from 'react';
import { Container } from '../../style/Container';
import { Button } from '../../style/Button';
import { NavbarDiV, SectionWorkshop, SectionInfo } from './styled';

const NavigateDashboard = () => {
	const [active, setActive] = useState('workshop');
	//const [sheworkshop, setSheworkshop] = useState('ScheduledWorkshop');
	//const [atworkshop, setAtworkshop] = useState('AttendedWorkshop');
	//const [resourses, setResourses] = useState('Resourses');

	return (
		<Container>
			<NavbarDiV>
				<Button btnNavDashboard onClick={() => setActive('workshop')}>
					Select Workshop
				</Button>
				<Button btnNavDashboard onClick={() => setActive('scheduledWorkshop')}>
					Scheduled Workshop
				</Button>
				<Button btnNavDashboard onClick={() => setActive('attendedWorkshop')}>
					Attended Workshop
				</Button>
				<Button btnNavDashboard onClick={() => setActive('resourses')}>
					Resourses
				</Button>
			</NavbarDiV>

			<SectionWorkshop>
				<Fragment>
					{active === 'workshop' ? (
						<ul>
							<SectionInfo>
								<p> Workshop</p>
							</SectionInfo>

							<SectionInfo>
								<p> Workshop</p>
							</SectionInfo>

							<SectionInfo>
								<p> Workshop</p>
							</SectionInfo>

							<SectionInfo>
								<p> Workshop</p>
							</SectionInfo>
						</ul>
					) : null}
				</Fragment>
				<Fragment>
					{active === 'scheduledWorkshop' ? (
						<ul>
							<SectionInfo>
								<p> S Workshop</p>
							</SectionInfo>

							<SectionInfo>
								<p> S Workshop</p>
							</SectionInfo>

							<SectionInfo>
								<p> S Workshop</p>
							</SectionInfo>

							<SectionInfo>
								<p> S Workshop</p>
							</SectionInfo>
						</ul>
					) : null}
				</Fragment>
				<Fragment>
					{active === 'attendedWorkshop' ? (
						<ul>
							<SectionInfo>
								<p> A Workshop</p>
							</SectionInfo>

							<SectionInfo>
								<p> A Workshop</p>
							</SectionInfo>

							<SectionInfo>
								<p> A Workshop</p>
							</SectionInfo>

							<SectionInfo>
								<p> A Workshop</p>
							</SectionInfo>
						</ul>
					) : null}
				</Fragment>

				<Fragment>
					{active === 'resourses' ? (
						<ul>
							<SectionInfo>
								<p>Resourses</p>
							</SectionInfo>

							<SectionInfo>
								<p> Resourses</p>
							</SectionInfo>

							<SectionInfo>
								<p> Resourses</p>
							</SectionInfo>

							<SectionInfo>
								<p> Resourses</p>
							</SectionInfo>
						</ul>
					) : null}
				</Fragment>
			</SectionWorkshop>
		</Container>
	);
};

export default NavigateDashboard;
