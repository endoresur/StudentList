import { FC } from "react"

import * as SC from "./styles.d"

const WrapperContainer: FC = ({children}) => {
    return(
        <SC.WrapperContainerRoot>{children}</SC.WrapperContainerRoot>
    )
}

export default WrapperContainer