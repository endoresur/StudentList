import { FC, useState } from "react"

import check from "../../../../../assets/images/check.png"

import * as SC from "./styles"
import { useStore } from "../../../../../hooks/useStore";
import { observer } from "mobx-react-lite";

const DropDownList: FC = observer(() => {

    const store = useStore()
    const [options, setOptions] = useState(store.studentsStore.getFilter);
    
    const handleClick = (id: number) => {
        store.studentsStore.changeFilter(id);
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
})

export default DropDownList