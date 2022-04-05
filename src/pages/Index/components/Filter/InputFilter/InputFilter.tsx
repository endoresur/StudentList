import { observer } from "mobx-react-lite";
import { ChangeEvent, FC } from "react"
import { useStore } from "../../../../../hooks/useStore";
import search from "./../../../../../assets/images/search.png";


import * as SC from "./styles"

const InputFilter: FC = observer(() => {

    const store = useStore()

    const handleChange = (value: string) => {
        store.studentsStore.search(value);
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
})

export default InputFilter