import React from 'react';
import {FlexContainer, HeaderContainer, TextContainer} from "../styles/Containers";
import {LogoIcon} from "../styles/GraphicElements";

const Header = () => {
    return (
        <HeaderContainer>
            <FlexContainer>
                <div>
                    <LogoIcon/>
                </div>
                <TextContainer
                    fStyle='normal'
                    fWeight='500'
                    fSize='20px'
                    lh='44px'
                >
                    STUDENTS by <a href='https://github.com/endoresur'>endoresur</a>
                </TextContainer>
            </FlexContainer>
        </HeaderContainer>
    );
};

export default Header;
