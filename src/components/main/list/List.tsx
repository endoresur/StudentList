import React, {useEffect, useState} from 'react';
import {Container, FlexContainer, ListContainer, TextContainer} from "../../../styles/Containers";
import {IStudent} from "../../../types/types";
import Student from "./Student";
import {observer} from "mobx-react-lite";
import StudentList from "../../../store/StudentList";

const List = observer(() => {

    const [students, setStudents] = useState<IStudent[]>([]);

    useEffect(() => {
        setStudents(StudentList.getList.map((el) => {
            return el;
        }));
    }, [StudentList.getList.length])

    return (
        <>
            <TextContainer
                fStyle='normal'
                fWeight='normal'
                fSize='16px'
                lh='20px'
            >
                <FlexContainer jc='space-around' mb='16px'>
                    <Container>ФИО</Container>
                    <Container>Специальность</Container>
                    <Container>Группа</Container>
                    <Container>Возраст</Container>
                    <Container>Рейтинг</Container>
                </FlexContainer>
            </TextContainer>
            <Container>
                <TextContainer
                    fStyle='normal'
                    fWeight='500'
                    fSize='15px'
                    lh='20px'
                >
                    <ListContainer>
                        {students.map((student) => {
                            return (<Student student={student} key={student.id}/>)
                        })}
                    </ListContainer>
                </TextContainer>
            </Container>
        </>
    );
});

export default List;