import { observer } from 'mobx-react-lite'
import React from 'react'
import trash from "../../../assets/images/trash.png"
import { useStore } from '../../../hooks/useStore'
import { Student } from '../../../models/EntityModels/students'

import * as SC from './styles'

type Props = {
    student: Student
}

const DeleteButton: React.FC<Props> = observer(({student}) => {

    const store = useStore()

    const handleDelete = () => {
        store.studentsStore.deleteStudent(student)
    }

    return (
        <SC.DeleteIconRoot onClick={handleDelete}>
            <img src={trash}/>
        </SC.DeleteIconRoot>
    );
})

export default DeleteButton