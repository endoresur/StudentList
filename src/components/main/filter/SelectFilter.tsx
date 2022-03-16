import React, {useLayoutEffect, useState} from 'react';
import {FlexContainer, InputContainer, TextContainer} from "../../../styles/Containers";
import menu from "../../../assets/images/dropdown.png"
import AppOptions from "../../../store/AppOptions";
import DropDownList from "./DropDownList";
import StudentList from "../../../store/StudentList";

const SelectFilter = () => {
    // @ts-ignore
    const choice: string = StudentList.filter.find(option => option.checked == true).text;
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [hover, setHover] = useState<boolean>(false);

    useLayoutEffect(() => {
        setIsMobile(AppOptions.isMobile);
    }, [AppOptions.width, StudentList.filter, choice])

    const handleHover = () => {
        if (!isMobile) {
            setHover(true);
        }
    }

    const handleLeave = () => {
        setHover(false);
    }

    const handleClick = () => {
        setHover(!hover);
    }
    return (
        <InputContainer
            pointer
            m='0 0 0 17px'
            w={isMobile ? '54px' : '180px'}
            onMouseEnter={handleHover}
            onMouseLeave={handleLeave}
            onClick={handleClick}
        >
            <FlexContainer
                jc={isMobile ? 'center' : 'space-between'}
                p={isMobile ? '' : '0 20px 0 20px'}
            >
                {hover && <DropDownList/>}
                {!isMobile &&
                    <TextContainer
                        fStyle='normal'
                        fWeight='500'
                        fSize='12px'
                        lh='15px'
                    >
                        {choice}
                    </TextContainer>
                }
                <img src={menu} height='20px'/>
            </FlexContainer>
        </InputContainer>
    );
};

export default SelectFilter;