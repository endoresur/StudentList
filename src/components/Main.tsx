import React from 'react';
import Header from "./Header";
import ListPage from "./main/list/ListPage";
import {WrapperContainer} from "../styles/Containers";

const Main = () => {
    return (
        <>
            <Header/>
            <WrapperContainer>
                <ListPage/>
            </WrapperContainer>
        </>
    );
};

export default Main;