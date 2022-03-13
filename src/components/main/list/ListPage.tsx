import React from 'react';
import {FlexContainer, TextContainer} from "../../../styles/Containers";
import {Button} from "../../../styles/Button";
import Filter from "./filter/Filter";
import List from "./students/List";
import Head from "./head/Head";

const ListPage = () => {
    return (
        <>
            <Head/>
            <Filter/>
            <List/>
        </>
    );
};

export default ListPage;