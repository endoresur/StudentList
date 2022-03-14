import React from 'react';
import {StudentComponentProps} from "../../../../../types/types";
import {Card} from "../../../../../styles/Card";
import CardHead from "./CardHead";
import CardBody from "./CardBody";

const MobileList: React.FC<StudentComponentProps> = ({students}) => {
    return (
        <>
            {students.map((student) => {
                return (
                    <Card key={student.id}>
                        <CardHead student={student}/>
                        <CardBody student={student}/>
                    </Card>
                );
            })}
        </>
    );
};

export default MobileList;