import React from 'react';
import {FlexContainer, InputContainer} from "../../../styles/Containers";
import search from "../../../assets/images/search.png";
import {InputText} from "../../../styles/Inputs";

const InputFilter = () => {
    return (
        <InputContainer w='100%' p='0 20px 0 20px'>
            <FlexContainer>
                <img src={search} height='20px'/>
                <InputText placeholder='Поиск по имени'/>
            </FlexContainer>
        </InputContainer>
    );
};

export default InputFilter;