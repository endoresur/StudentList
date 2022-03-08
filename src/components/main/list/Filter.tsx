import React from 'react';
import {FlexContainer, InputContainer} from "../../../styles/Containers";
import search from "../../../assets/images/search.png"
import {InputText} from "../../../styles/Inputs";

const Filter = () => {
    return (
        <FlexContainer jc='space-between' mb='32px'>
            <InputContainer>
                <FlexContainer ml='0' mr='0'>
                    <img src={search} height='20px'/>
                    <InputText placeholder='Поиск по имени'/>
                </FlexContainer>
            </InputContainer>
            <div>5ibu</div>
        </FlexContainer>
    );
};

export default Filter;