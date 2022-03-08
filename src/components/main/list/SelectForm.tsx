import React from 'react';
import {FlexContainer, InputContainer, TextContainer} from "../../../styles/Containers";
import menu from "../../../assets/images/dropdown.png"

const SelectForm = () => {
    return (
        <InputContainer w='20%' m='0 0 0 20px' >
            <FlexContainer jc='space-between' ml='0' mr='0' p='0 20px 0 20px'>
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
};

export default SelectForm;