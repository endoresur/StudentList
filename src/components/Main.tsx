import React from 'react';
import Header from "./Header";
import ListPage from "./main/list/ListPage";
import {WrapperContainer} from "../styles/Containers";

const Main = () => {
    return (
        <>
            <Header/>
            <main>
                <WrapperContainer>
                    <ListPage/>
                </WrapperContainer>
            </main>
        </>
    );
};

export default Main;