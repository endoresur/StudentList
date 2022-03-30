import { FC, useLayoutEffect, useState } from "react"
import { Student } from "../../../../models/EntityModels/students"
import RootStore from "../../../../stores/RootStore"
import UserItem from "../UserItem"
import { DesktopItemLine, Cell } from "../UserItem/DesktopItem/styles.d"

import * as SC from "./styles.d"

type Props = {
    students: Student[]
}

const UsersList: FC<Props> = ({ students }) => {
    const [isMobile, setIsMobile] = useState<boolean>(false)

    useLayoutEffect(() => {
        setIsMobile(RootStore.options.isMobile)
    }, [RootStore.options.isMobile])

    return (
        <SC.UserListRoot>
            {(students.length > 0 && !isMobile) && (
                <DesktopItemLine>
                    <Cell> </Cell>
                    <Cell>ФИО</Cell>
                    <Cell>Специальность</Cell>
                    <Cell>Группа</Cell>
                    <Cell>Возраст</Cell>
                    <Cell>Рейтинг</Cell>
                    <Cell> </Cell>
                    <Cell> </Cell>
                </DesktopItemLine>
            )}
            <SC.UserItemsContainer isMobile={isMobile || students.length < 1}>
                {(students.length) ?
                    (students.map((student) => { return (<UserItem key={student.id} student={student} />) }))
                    :
                    (<SC.NotFoundTitle>Ничего не найдено</SC.NotFoundTitle>)
                }
            </SC.UserItemsContainer>
        </SC.UserListRoot>
    )
}

export default UsersList