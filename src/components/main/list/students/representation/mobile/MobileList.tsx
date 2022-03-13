import React from 'react';
import {StudentComponentProps} from "../../../../../../types/types";

const MobileList: React.FC<StudentComponentProps> = ({students}) => {
    return (
        <>
            {students.map((student) => {
                return(
                    <p key={student.id}>{student.name}</p>
                );
            })}
        </>
    );
};

export default MobileList;