import { FC } from "react"
import InputFilter from "./InputFilter"
import SelectFilter from "./SelectFilter"

import * as SC from "./styles.d"

const Filter: FC = () => {
    return (
        <SC.FilterRoot>
            <InputFilter />
            <SelectFilter />
        </SC.FilterRoot>
    )
}

export default Filter