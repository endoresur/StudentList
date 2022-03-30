import { FC, useLayoutEffect, useState } from "react"
import { Student } from "../../../../models/EntityModels/students"
import RootStore from "../../../../stores/RootStore"
import DesktopItem from "./DesktopItem/DesktopItem"
import MobileItem from "./MobileItem"

import * as SC from "./styles.d"

type Props = {
    student: Student
}

const UserItem: FC<Props> = ({ student }) => {

    const [isMobile, setIsMobile] = useState<boolean>(false)

    useLayoutEffect(() => {
        setIsMobile(RootStore.options.isMobile)
    }, [RootStore.options.isMobile])

    return (
        <SC.UserItemRoot>
            {(isMobile) ?
                (<MobileItem student={student} />)
                :
                (<DesktopItem student={student} />)}
        </SC.UserItemRoot>
    )
}

export default UserItem;