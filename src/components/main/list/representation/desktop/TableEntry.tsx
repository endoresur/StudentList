import React from 'react';
import {StudentProps} from "../../../../../types/types";
import {FlexContainer} from "../../../../../styles/Containers";
import {AvatarIcon, ColorCircle} from "../../../../../styles/GraphicElements";
import DeleteButton from "../../../../utilities/DeleteButton";

const TableEntry: React.FC<StudentProps> = ({student}) => {
    return (
            <>
                <td><AvatarIcon src={student.avatar}/></td>
                <td>{student.name}</td>
                <td>{student.specialty}</td>
                <td>{student.group}</td>
                <td>{student.birthday}</td>
                <td>
                    <FlexContainer jc='space-between'>
                        {student.rating}
                        <FlexContainer jc='space-between' w='90px'>
                            <ColorCircle bc={student.color}/>
                            <DeleteButton student={student}/>
                        </FlexContainer>
                    </FlexContainer>
                </td>
            </>
    );
};

export default TableEntry;