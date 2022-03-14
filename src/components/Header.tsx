import React from 'react';
import {FlexContainer, HeaderContainer, TextContainer, WrapperContainer} from "../styles/Containers";
import {LogoIcon} from "../styles/GraphicElements";
import AppOptions from "../store/AppOptions";

const Header = () => {

    const isMobile = AppOptions.isMobile;

    return (
        <HeaderContainer>
            <WrapperContainer>
                <FlexContainer>
                    <LogoIcon mini={isMobile}/>
                    <TextContainer
                        fStyle='normal'
                        fWeight='500'
                        fSize='20px'
                        lh='44px'
                    >
                        STUDENTS
                        {!isMobile &&
                        <> by <a href='https://github.com/endoresur'>endoresur</a></>
                        }
                    </TextContainer>
                </FlexContainer>
            </WrapperContainer>
        </HeaderContainer>
    );
};

export default Header;
