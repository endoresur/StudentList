import React from 'react';
import {FlexContainer, TextContainer} from "../../../styles/Containers";
import AppOptions from "../../../store/AppOptions";

const Head = () => {
    const isMobile = AppOptions.isMobile;
    return (
        <>
            <FlexContainer
                ai={isMobile ? 'start' : ''}
                jc={isMobile ? '' : 'space-between'}
                mb={isMobile ? '22px' : '47px'}
                mt={isMobile ? '40px' : '75px'}
            >
                <TextContainer
                    fStyle='normal'
                    fWeight='bold'
                    fSize='40px'
                    lh='50px'
                >
                    Студенты
                </TextContainer>
            </FlexContainer>
        </>
    );
};

export default Head;