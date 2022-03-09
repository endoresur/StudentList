import React, {useEffect, useState} from 'react';
import {Container, FlexContainer, ListContainer} from "../../../styles/Containers";
import {IStudent} from "../../../types/types";
import axios from "axios";
import Student from "./Student";
import {observer} from "mobx-react-lite";
import StudentList from "../../../store/StudentList";
import {toJS} from "mobx";

const List = observer(() => {

    const [students, setStudents] = useState<IStudent[]>([]);

    useEffect(() => {
            setStudents(StudentList.getList.map((el) => {return toJS(el)}));
    }, [StudentList.getList])

    return (
        <>
            <FlexContainer jc='space-around' mb='16px'>
                <Container>ФИО</Container>
                <Container>Специальность</Container>
                <Container>Группа</Container>
                <Container>Возраст</Container>
                <Container>Рейтинг</Container>
            </FlexContainer>
            <Container>
                <ListContainer>
                    {students.map((student) => {
                        return(<Student student={student} key={student.id}/>)
                    })}
                </ListContainer>
            </Container>
        </>
    );
});

export default List;