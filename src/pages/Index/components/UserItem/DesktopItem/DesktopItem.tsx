import { observer } from "mobx-react-lite"
import { FC } from "react"
import AvatarIcon from "../../../../../components/ui/AvatarIcon"
import ColorCircle from "../../../../../components/ui/ColorCircle"
import DeleteButton from "../../../../../components/ui/DeleteButton"
import { Student } from "../../../../../models/EntityModels/students"
import * as SC from "./styles"

type Props = {
    student: Student
}

const DesktopItem: FC<Props> = observer(({ student }) => {
    return (
        <SC.DesktopItemRoot>
            <SC.DesktopItemLine>
                <SC.Cell>
                    <AvatarIcon
                        src={student.avatar}
                        alt={student.name}
                        height={'40px'}
                        width={'40px'}
                    />
                </SC.Cell>
                <SC.Cell>{student.name}</SC.Cell>
                <SC.Cell>{student.specialty}</SC.Cell>
                <SC.Cell>{student.group}</SC.Cell>
                <SC.Cell>{student.birthday}</SC.Cell>
                <SC.Cell>{student.rating}</SC.Cell>
                <SC.Cell><ColorCircle color={student.color} /></SC.Cell>
                <SC.Cell><DeleteButton student={student} /></SC.Cell>
            </SC.DesktopItemLine>
        </SC.DesktopItemRoot>
    )
})

export default DesktopItem