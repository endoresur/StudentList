import { observer } from "mobx-react-lite"
import { FC, useLayoutEffect, useState } from "react"
import { useStore } from "../../../../hooks/useStore"
import { Student } from "../../../../models/EntityModels/students"
import DesktopItem from "./DesktopItem/DesktopItem"
import MobileItem from "./MobileItem"

import * as SC from "./styles"

type Props = {
    student: Student
}

const UserItem: FC<Props> = observer(({ student }) => {

    const store = useStore();
    const [isMobile, setIsMobile] = useState(false)

    useLayoutEffect(() => {
        setIsMobile(store.optionsStore.isMobile)
    }, [store.optionsStore.isMobile])

    return (
        <SC.UserItemRoot>
            {(isMobile) ?
                (<MobileItem student={student} />)
                :
                (<DesktopItem student={student} />)}
        </SC.UserItemRoot>
    )
})

export default UserItem;