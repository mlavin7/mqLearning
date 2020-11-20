import React from 'react';
import { CardWrapper, ContentWrapper } from '../WorkshopCard/styled';

const ResourcesCard = ({ resource }) => {
	return (
		<CardWrapper resources>
			<iFrame
				width='100%'
				height='250'
				src={resource.link}
				frameborder='0'
				allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
				allowfullscreen
				referrerpolicy='origin-when-cross-origin'
			></iFrame>
			<ContentWrapper resources>
				<div className='title-section'>
					<h5>{resource.name}</h5>
				</div>
				<div className='description'>
					<p>{resource.description}</p>
				</div>
			</ContentWrapper>
		</CardWrapper>
	);
};

export default ResourcesCard;
