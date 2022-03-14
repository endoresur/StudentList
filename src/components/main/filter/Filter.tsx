import React from 'react';
import {FlexContainer} from "../../../styles/Containers";
import SelectFilter from "./SelectFilter";
import InputFilter from "./InputFilter";

const Filter = () => {
    return (
        <FlexContainer jc='space-between' mb='32px'>
            <InputFilter/>
            <SelectFilter/>
        </FlexContainer>
    );
};

export default Filter;