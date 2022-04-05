import { FC, useLayoutEffect, useState } from "react"
import dropdown from "../../../../../assets/images/dropdown.png"
import * as SC from "./styles"
import DropDownList from "../DropDownList";
import { useStore } from "../../../../../hooks/useStore";
import { observer } from "mobx-react-lite";

const SelectFilter: FC = observer(() => {

    const store = useStore()

    // @ts-ignore
    const choice: string = store.studentsStore.getFilter.find(option => option.checked == true).text;
    const [isMobile, setIsMobile] = useState(false);
    const [dropped, setDropped] = useState(false);

    useLayoutEffect(() => {
        setIsMobile(store.optionsStore.isMobile);
    }, [store.optionsStore.getWidth, store.studentsStore.getFilter, choice])

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
})

export default SelectFilter