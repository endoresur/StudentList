import React from 'react';
import TableEntry from "./TableEntry";
import {Table} from "../../../../../styles/Table";
import {StudentComponentProps} from "../../../../../types/types";

const DesktopList: React.FC<StudentComponentProps> = ({students}) => {
    return (
        <>
            <Table>
                <tbody>
                <tr>
                    <th> </th>
                    <th>ФИО</th>
                    <th>Специальность</th>
                    <th>Группа</th>
                    <th>Возраст</th>
                    <th>Рейтинг</th>
                </tr>
                {students.map((student) => {
                    return (
                        <tr key={student.id}>
                            <TableEntry student={student} key={student.id}/>
                        </tr>
                    )
                })}
                </tbody>
            </Table>
        </>
    )
        ;
};

export default DesktopList;