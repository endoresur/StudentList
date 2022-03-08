import React from 'react';
import Header from "./Header";
import ListPage from "./main/list/ListPage";
import {Container} from "../styles/Containers";

const Main = () => {
    return (
        <div>
            <Header/>
            <Container ml='130px' mr='130px'>
                <ListPage/>
            </Container>
        </div>
    );
};

export default Main;