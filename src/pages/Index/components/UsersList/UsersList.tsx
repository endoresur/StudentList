import { observer } from "mobx-react-lite"
import { FC, useLayoutEffect, useState } from "react"
import { useStore } from "../../../../hooks/useStore"
import { Student } from "../../../../models/EntityModels/students"
import UserItem from "../UserItem"
import { DesktopItemLine, Cell } from "../UserItem/DesktopItem/styles"

import * as SC from "./styles"

type Props = {
    students: Student[]
}

const UsersList: FC<Props> = observer(({ students }) => {
    const store = useStore()

    const [isMobile, setIsMobile] = useState(false)

    useLayoutEffect(() => {
        setIsMobile(store.optionsStore.isMobile)
    }, [store.optionsStore.isMobile])

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
})

export default UsersList