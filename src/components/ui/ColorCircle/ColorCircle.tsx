import { FC } from "react"
import * as SC from "./styles.d"

type Props = {
    color: string,
    mini?: boolean
}

const ColorCircle: FC<Props> = ({color, mini = false}) => {
    return(
        <SC.ColorCircleRoot bc={color} mini={mini}/>
    )
}

export default ColorCircle