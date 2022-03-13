import React, {useLayoutEffect, useState} from 'react';
import {Container, FlexContainer, InputContainer, TextContainer} from "../../../../styles/Containers";
import menu from "../../../../assets/images/dropdown.png"
import AppOptions from "../../../../store/AppOptions";

const SelectForm = () => {

    const [isMobile, setIsMobile] = useState<boolean>(false);

    useLayoutEffect(() => {
        setIsMobile(AppOptions.isMobile);
    }, [AppOptions.width])

    const Desktop = () => {
        return (
            <InputContainer w='25%' m='0 0 0 20px'>
                <FlexContainer jc='space-between' p='0 20px 0 20px'>
                    <TextContainer
                        fStyle='normal'
                        fWeight='500'
                        fSize='12px'
                        lh='15px'
                    >
                        Имя Я-А
                    </TextContainer>
                    <img src={menu} height='20px'/>
                </FlexContainer>
            </InputContainer>
        );
    }

    const Mobile = () => {
        return (
            <InputContainer w='54px' m='0 0 0 15px'>
                <Container w='100%' h='100%' p='15px 15px 15px 15px'>
                    <img src={menu} height='20px'/>
                </Container>
            </InputContainer>
        );
    }

    return (
        <>{isMobile ? (<Mobile/>) : (<Desktop/>)}</>
    );
};

export default SelectForm;