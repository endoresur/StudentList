import React from 'react';
import trash from "../../assets/images/trash.png";
import {TrashIcon} from "../../styles/GraphicElements";
import StudentList from "../../store/StudentList";
import {StudentProps} from "../../types/types";

const DeleteButton: React.FC<StudentProps> = ({student}) => {

    const handleDelete = () => {
        StudentList.deleteStudent(student);
    }

    return (
        <TrashIcon onClick={handleDelete}>
            <img src={trash}/>
        </TrashIcon>
    );
};

export default DeleteButton;