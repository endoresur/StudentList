import React, {useState} from 'react';
import {DropDown, Line} from "../../../styles/DropDownList";
import {filterOption, IFilterOption} from "../../../types/types";
import {FlexContainer} from "../../../styles/Containers";
import check from "../../../assets/images/check.png"

const DropDownList = () => {

    const [options, setOptions] = useState<IFilterOption[]>(filterOption);

    return (
        <DropDown>
            {options.map((option) => {
                return (
                    <Line>
                        <FlexContainer jc='space-between'>
                            {option.text}
                            {option.checked && <img src={check} height='10px'/>}
                        </FlexContainer>
                    </Line>
                )
            })}
        </DropDown>
    );
};

export default DropDownList;