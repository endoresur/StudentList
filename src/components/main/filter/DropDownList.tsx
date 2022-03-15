import React, {useEffect, useState} from 'react';
import {DropDown, Line} from "../../../styles/DropDownList";
import {filterOptions, IFilterOption} from "../../../types/types";
import {FlexContainer} from "../../../styles/Containers";
import check from "../../../assets/images/check.png"
import StudentList from "../../../store/StudentList";

const DropDownList = () => {

    const [options, setOptions] = useState<IFilterOption[]>(StudentList.filter);

    useEffect(() => {

    }, [options])

    const handleClick = (id: number) => {
        StudentList.changeFilter(id);
    }

    return (
        <DropDown>
            {options.map((option) => {
                return (
                    <Line
                        key={option.id}
                        onClick={() => handleClick(option.id)}
                    >
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