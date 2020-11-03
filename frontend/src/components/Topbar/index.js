import React from 'react';
import {ViewProfileBtnWrapper, ViewProfileBtn, TopBarHeader, TopBarLeft, TopBarCenter, TopBarRight, AvatarContainer, Avatar, UserProfileContainer, UserWelcome, TokensValidText, CompanyText} from './styled';
// import {Button} from '../../style/Button'
import avatar from '../../assets/svgs/avatar.svg';
import {Container} from '../../style/Container';

const TopBar = () => {

    return (
        <>
        <TopBarHeader>
            <TopBarLeft>
                
            </TopBarLeft>
            <TopBarCenter>
                <TokensValidText>
                    Tokens Remaining: 3
                    <br></br>
                    Valid Until: 31 / 12 / 2020
                </TokensValidText>
            </TopBarCenter>
            <TopBarRight>
                <AvatarContainer>
                    <Avatar src={avatar}></Avatar>
                </AvatarContainer>
                <UserProfileContainer>
                    <UserWelcome>Welcome, User</UserWelcome>
                    <CompanyText>Company: Zurich</CompanyText>
                    <ViewProfileBtnWrapper>
                    <ViewProfileBtn>View Profile</ViewProfileBtn>
                    </ViewProfileBtnWrapper>
                </UserProfileContainer>
            </TopBarRight>
        </TopBarHeader>
        </>
    )

}

export default TopBar