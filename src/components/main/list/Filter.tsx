import React from 'react';
import {FlexContainer, InputContainer, TextContainer} from "../../../styles/Containers";
import search from "../../../assets/images/search.png"
import {InputText} from "../../../styles/Inputs";
import SelectForm from "./SelectForm";

const Filter = () => {
    return (
        <FlexContainer jc='space-between' mb='32px'>
            <InputContainer w='80%' p='0 20px 0 20px'>
                <FlexContainer>
                    <img src={search} height='20px'/>
                    <InputText placeholder='Поиск по имени'/>
                </FlexContainer>
            </InputContainer>
            <SelectForm/>
        </FlexContainer>
    );
};

export default Filter;