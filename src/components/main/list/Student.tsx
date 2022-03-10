import React from 'react';
import {StudentProps} from "../../../types/types";
import {Entry} from "../../../styles/Entry";
import {Container, FlexContainer} from "../../../styles/Containers";
import {AvatarIcon, ColorCircle, TrashIcon} from "../../../styles/GraphicElements";
import trash from "../../../assets/images/trash.png";
import StudentList from "../../../store/StudentList";

const Student: React.FC<StudentProps> = ({student}) => {

    const handleDelete = () => {
        StudentList.deleteStudent(student);
    }

    return (
        <Entry>
            <Container w='5%' mr='20px'>
                <AvatarIcon src={student.avatar}/>
            </Container>
            <Container w='20%' mr='20px'>
                <div>{student.name}</div>
            </Container>
            <Container w='35%' mr='20px'>{student.specialty}</Container>
            <Container w='10%' mr='60px'>{student.group}</Container>
            <Container w='5%' mr='60px'>{student.birthday}</Container>
            <Container w='10%' mr='17px'>{student.rating}</Container>
            <Container w='10%' mr='20px'>
                <ColorCircle bc={student.color}/>
            </Container>
            <Container mr='17px'>
                <TrashIcon onClick={handleDelete}><img src={trash}/></TrashIcon>
            </Container>
        </Entry>
    );
};

export default Student;