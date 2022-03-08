import React from 'react';
import Header from "./Header";
import {FlexContainer, TextContainer} from "../../styles/Containers";
import Filter from "./Filter";
import List from "./List";
import {Button} from "../../styles/Button";

const Main = () => {
    return (
        <div>
            <Header/>
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
        </div>
    );
};

export default Main;