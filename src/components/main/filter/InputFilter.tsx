import React, {ChangeEvent} from 'react';
import {FlexContainer, InputContainer} from "../../../styles/Containers";
import search from "../../../assets/images/search.png";
import {InputText} from "../../../styles/Inputs";
import StudentList from "../../../store/StudentList";

const InputFilter = () => {

    const handleChange = (value: string) => {
        StudentList.search(value);
    }

    return (
        <InputContainer w='85%' p='0 20px 0 20px'>
            <FlexContainer>
                <img src={search} height='20px'/>
                <InputText
                    placeholder='Поиск по имени'
                    onChange={(event:ChangeEvent<HTMLInputElement>) => handleChange(event.target.value)}
                />
            </FlexContainer>
        </InputContainer>
    );
};

export default InputFilter;