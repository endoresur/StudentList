import { ChangeEvent, FC } from "react"
import RootStore from "../../../../../stores/RootStore";
import search from "./../../../../../assets/images/search.png";


import * as SC from "./styles.d"

const InputFilter: FC = () => {

    const handleChange = (value: string) => {
        RootStore.students.search(value);
    }

    return(
        <SC.InputFilterRoot>
            <img src={search} height='20px'/>
            <SC.InputText
                placeholder='Поиск по имени'
                onChange={(event:ChangeEvent<HTMLInputElement>) => handleChange(event.target.value)}
            />
        </SC.InputFilterRoot>
    )
}

export default InputFilter