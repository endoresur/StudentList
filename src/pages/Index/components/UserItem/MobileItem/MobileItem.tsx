import { FC } from "react"
import DeleteButton from "../../../../../components/ui/DeleteButton"
import { ageWordDeterminant } from "../../../../../utilities/AgeWordDeterminant"
import star from "../../../../../assets/images/star.png"
import * as SC from "./styles"
import AvatarIcon from "../../../../../components/ui/AvatarIcon"
import ColorCircle from "../../../../../components/ui/ColorCircle"
import { Student } from "../../../../../models/EntityModels/students"
import { observer } from "mobx-react-lite"

type Props = {
    student: Student
}

const MobileItem: FC<Props> = observer(({ student }) => {
    return (
        <SC.MobileItemRoot>
            <SC.Card>
                <SC.CardLine>
                    <AvatarIcon src={student.avatar} alt={student.name} height={'40px'} width={'40px'} />
                    <div>
                        {student.name}
                        <SC.Container>
                        <ColorCircle color={ student.color} isMobile />
                        <img src={star} height='10px' width='10px' />
                        {student.rating}
                        </SC.Container>
                    </div>
                    <DeleteButton student={student} />
                </SC.CardLine>
                <SC.CardLine>
                    <div> </div>
                    <div>
                        <li>{student.birthday} {ageWordDeterminant(Number(student.birthday))}</li>
                        <li>{student.specialty}</li>
                        <li>{student.group}</li>
                    </div>
                    <div> </div>
                </SC.CardLine>
            </SC.Card>
        </SC.MobileItemRoot>
    )
})

export default MobileItem