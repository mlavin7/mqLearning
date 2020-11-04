import React from 'react';
import { Container } from '../../style/Container';
import { CardWrapper, ContentWrapper } from './styled';
import { useHistory } from 'react-router-dom';

const WorkshopCard = ({ workshop }) => {
    const history = useHistory();
    

    return (
        <Container workshopCardContainer>
            <CardWrapper>
                <ContentWrapper>
                    <p>CONTENT</p>
                </ContentWrapper>
            </CardWrapper>
        </Container>
    )
}

export default WorkshopCard