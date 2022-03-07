import React from 'react';
import {FlexContainer, HeaderContainer} from "../styles/Containers";
import {LogoIcon} from "../styles/GraphicElements";

const Header = () => {
    return (
        <HeaderContainer>
            <FlexContainer>
                <div>
                    <LogoIcon/>
                </div>
                <div>STUDENTS by <a href='https://github.com/endoresur'>endoresur</a> </div>
            </FlexContainer>
        </HeaderContainer>
    );
};

export default Header;
