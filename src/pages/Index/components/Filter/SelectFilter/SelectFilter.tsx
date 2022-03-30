import { FC, useLayoutEffect, useState } from "react"

import dropdown from "../../../../../assets/images/dropdown.png"

import * as SC from "./styles.d"
import DropDownList from "../DropDownList";
import RootStore from "../../../../../stores/RootStore";

const SelectFilter: FC = () => {

    // @ts-ignore
    const choice: string = RootStore.students.filter.find(option => option.checked == true).text;
    const [isMobile, setIsMobile] = useState<boolean>(false);
    const [dropped, setDropped] = useState<boolean>(false);

    useLayoutEffect(() => {
        setIsMobile(RootStore.options.isMobile);
    }, [RootStore.options.getWidth, RootStore.students.filter, choice])

    const handleClick = () => {
        setDropped(!dropped);
    }

    return (
        <SC.SelectFilterRoot
            isMobile={isMobile}
            onClick={handleClick}
        >
            {dropped && <DropDownList />}
            {!isMobile && <SC.ChoiceContainer>{choice}</SC.ChoiceContainer>}
            <img src={dropdown} height='20px' />
        </SC.SelectFilterRoot>
    )
}

export default SelectFilter