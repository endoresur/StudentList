import { FC, useState } from "react"

import { IFilterOption } from "../../../../../types/types";
import check from "../../../../../assets/images/check.png"

import * as SC from "./styles.d"
import RootStore from "../../../../../stores/RootStore";

const DropDownList: FC = () => {

    const [options, setOptions] = useState<IFilterOption[]>(RootStore.students.filter);
    
    const handleClick = (id: number) => {
        RootStore.students.changeFilter(id);
    }

    return(
        <SC.DropDownListRoot>
            {options.map((option) => {
                return (
                    <SC.Line
                        key={option.id}
                        onClick={() => handleClick(option.id)}
                    >
                            {option.text}
                            {option.checked && <img src={check} height='10px'/>}
                    </SC.Line>
                )
            })}
        </SC.DropDownListRoot>
    )
}

export default DropDownList