import React from 'react';
import { Container } from '../../style/Container';
import { CardWrapper } from './styled';
import { useHistory } from 'react-router-dom';

const WorkshopCard = ({ workshop }) => {
    const history = useHistory();
    

    return (
        <Container workshopCardContainer>
            <CardWrapper>
                <p>CONTENT</p>
            </CardWrapper>
        </Container>
    )
}

export default WorkshopCard