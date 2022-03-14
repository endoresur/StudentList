import React from 'react';
import {StudentProps} from "../../../../../types/types";
import {CardBodyCell, CardLine} from "../../../../../styles/Card";

const CardBody: React.FC<StudentProps> = ({student}) => {
    return (
        <tbody>
        <CardLine>
            <CardBodyCell> </CardBodyCell>
            <CardBodyCell>
                <ul>
                    <li>{student.birthday}</li>
                    <li>{student.specialty}</li>
                    <li>{student.group}</li>
                </ul>
            </CardBodyCell>
            <CardBodyCell> </CardBodyCell>
        </CardLine>
        </tbody>
    );
};

export default CardBody;