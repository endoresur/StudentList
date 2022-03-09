import React from 'react';
import {StudentProps} from "../../../types/types";
import {Entry} from "../../../styles/Entry";
import {Container} from "../../../styles/Containers";

const Student: React.FC<StudentProps> = ({student}) => {

    return (
        <Entry>
            <Container w='5%' mr='20px'><img src={student.avatar}/></Container>
            <Container w='37%' mr='20px'><div>{student.name}</div></Container>
            <Container w='35%' mr='20px'>{student.specialty}</Container>
            <Container w='10%' mr='60px'>{student.group}</Container>
            <Container w='10%' mr='60px'>{student.birthday}</Container>
            <Container w='10%' mr='17px'>{student.rating} {student.color}</Container>
        </Entry>
    );
};

export default Student;