import React from 'react';
import {StudentProps} from "../../../types/types";
import {FlexContainer} from "../../../styles/Containers";
import {AvatarIcon, ColorCircle, TrashIcon} from "../../../styles/GraphicElements";
import trash from "../../../assets/images/trash.png";
import StudentList from "../../../store/StudentList";

const StudentEntry: React.FC<StudentProps> = ({student}) => {

    const handleDelete = () => {
        StudentList.deleteStudent(student);
    }

    return (
            <>
                <td><AvatarIcon src={student.avatar}/></td>
                <td>{student.name}</td>
                <td>{student.specialty}</td>
                <td>{student.group}</td>
                <td>{student.birthday}</td>
                <td>
                    <FlexContainer jc='space-between'>
                        {student.rating}
                        <FlexContainer>
                            <ColorCircle bc={student.color}/>
                            <TrashIcon onClick={handleDelete}><img src={trash}/></TrashIcon>
                        </FlexContainer>
                    </FlexContainer>
                </td>
            </>
    );
};

export default StudentEntry;