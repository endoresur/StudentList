import React from 'react';
import {FlexContainer, TextContainer} from "../../../styles/Containers";
import {Button} from "../../../styles/Button";
import Filter from "./Filter";
import List from "./List";

const ListPage = () => {
    return (
        <div>
            <FlexContainer jc='space-between' mb='47px'>
                <TextContainer
                    fStyle='normal'
                    fWeight='bold'
                    fSize='40px'
                    lh='50px'
                >
                    Студенты
                </TextContainer>
                <Button>
                    <TextContainer
                        fStyle='normal'
                        fWeight='bold'
                        fSize='16px'
                        lh='20px'
                    >
                        + Добавить студента
                    </TextContainer>
                </Button>
            </FlexContainer>
            <Filter/>
            <List/>
        </div>
    );
};

export default ListPage;