import React from 'react'
import trash from "../../../assets/images/trash.png"
import { Student } from '../../../models/EntityModels/students'
import RootStore from '../../../stores/RootStore'

import * as SC from './styles.d'

type Props = {
    student: Student
}

const DeleteButton: React.FC<Props> = ({student}) => {

    const handleDelete = () => {
        RootStore.students.deleteStudent(student)
    }

    return (
        <SC.DeleteIconRoot onClick={handleDelete}>
            <img src={trash}/>
        </SC.DeleteIconRoot>
    );
};

export default DeleteButton