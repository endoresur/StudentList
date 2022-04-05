import { FC } from "react"
import Colors, { ColorTypes } from "../../../constants/colors"
import * as SC from "./styles"

type Props = {
    color: ColorTypes,
    isMobile?: boolean
}

const ColorCircle: FC<Props> = ({color, isMobile = false}) => {
    return(
        <SC.ColorCircleRoot color={color} isMobile={isMobile}/>
    )
}

export default ColorCircle