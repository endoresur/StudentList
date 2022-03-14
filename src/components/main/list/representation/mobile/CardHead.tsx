import React from 'react';
import {CardHeadCell, CardLine} from "../../../../../styles/Card";
import {AvatarIcon, ColorCircle} from "../../../../../styles/GraphicElements";
import {Container, FlexContainer, TextContainer} from "../../../../../styles/Containers";
import star from "../../../../../assets/images/star.png";
import DeleteButton from "../../../../utilities/DeleteButton";
import {StudentProps} from "../../../../../types/types";

const CardHead: React.FC<StudentProps> = ({student}) => {
    return (
        <thead>
        <CardLine>
            <CardHeadCell><AvatarIcon src={student.avatar}/></CardHeadCell>
            <CardHeadCell>
                <FlexContainer dir='column' jc='start' ai='start'>
                    <Container mb='5px'>{student.name}</Container>
                    <FlexContainer w='55px' jc='space-between'>
                        <ColorCircle bc={student.color} mini/>
                        <img src={star} height='10px' width='10px'/>
                        <TextContainer fSize='12px' lh='15px'>
                            {student.rating}
                        </TextContainer>
                    </FlexContainer>
                </FlexContainer>
            </CardHeadCell>
            <CardHeadCell><DeleteButton student={student}/></CardHeadCell>
        </CardLine>
        </thead>
    );
};

export default CardHead;