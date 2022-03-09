import React from 'react';
import {StudentProps} from "../../../types/types";
import {Entry} from "../../../styles/Entry";
import {Container, FlexContainer} from "../../../styles/Containers";
import {ColorCircle} from "../../../styles/GraphicElements";

const Student: React.FC<StudentProps> = ({student}) => {

    return (
        <Entry>
            <Container w='5%' mr='20px'><img src={student.avatar}/></Container>
            <Container w='20%' mr='20px'>
                <div>{student.name}</div>
            </Container>
            <Container w='35%' mr='20px'>{student.specialty}</Container>
            <Container w='10%' mr='60px'>{student.group}</Container>
            <Container w='5%' mr='60px'>{student.birthday}</Container>
            <FlexContainer w='20%' mr='17px'>
                {student.rating}
                <ColorCircle bc={student.color}/>
            </FlexContainer>
        </Entry>
    );
};

export default Student;