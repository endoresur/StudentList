import React from 'react';

import {Container, FlexContainer, TextContainer} from "../../../../styles/Containers";
import {Button} from "../../../../styles/Button";
import AppOptions from "../../../../store/AppOptions";

const Head = () => {

    const isMobile = AppOptions.isMobile;

    return (
        <>
            <FlexContainer
                ai={isMobile ? 'start' : ''}
                jc={isMobile ? '' : 'space-between'}
                dir={isMobile ? 'column' : 'row'}
                mb={isMobile ? '10px' : '47px'}
                mt={isMobile ? '40px' : '75px'}
            >
                <Container mb={AppOptions.isMobile ? '25px' : ''}>
                    <TextContainer
                        fStyle='normal'
                        fWeight='bold'
                        fSize='40px'
                        lh='50px'
                    >
                        Студенты
                    </TextContainer>
                </Container>
                <Button w={AppOptions.isMobile ? '100%' : ''}>
                    <TextContainer
                        fStyle='normal'
                        fWeight='bold'
                        fSize='16px'
                        lh='20px'
                    >
                        + Добавить студента
                    </TextContainer>
                </Button>
            </FlexContainer>
        </>
    );
};

export default Head;