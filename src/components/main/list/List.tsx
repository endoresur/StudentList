import React, {useEffect, useState} from 'react';
import {Container, FlexContainer, ListContainer} from "../../../styles/Containers";
import {IStudent} from "../../../types/types";
import axios from "axios";
import Student from "./Student";

const List = () => {

    const [students, setStudents] = useState<IStudent[]>([]);

    useEffect(() => {
        const apiUrl = 'https://front-assignment-api.2tapp.cc/api/persons';
        axios.get(apiUrl).then((resp) => {
            setStudents(resp.data.students);
        })
    }, [])

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
                        return(<Student student={student}/>)
                    })}
                </ListContainer>
            </Container>
        </>
    );
};

export default List;