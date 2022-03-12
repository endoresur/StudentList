import React, {useEffect, useState} from 'react';
import {IStudent} from "../../../types/types";
import StudentEntry from "./StudentEntry";
import {observer} from "mobx-react-lite";
import StudentList from "../../../store/StudentList";
import {Table} from "../../../styles/Table";

const List = observer(() => {

    const [students, setStudents] = useState<IStudent[]>([]);

    useEffect(() => {
        setStudents(StudentList.getList.map((el) => {
            return el;
        }));

    }, [StudentList.getList.length])

    return (
        <>
            <Table>
                <thead>
                <tr>
                    <th> </th>
                    <th>ФИО</th>
                    <th>Специальность</th>
                    <th>Группа</th>
                    <th>Возраст</th>
                    <th>Рейтинг</th>
                </tr>
                </thead>

                <tbody>
                {students.map((student) => {
                    return (
                        <tr key={student.id}>
                            <StudentEntry student={student} key={student.id}/>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </>
    );
});

export default List;