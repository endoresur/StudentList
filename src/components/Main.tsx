import React, {useEffect, useLayoutEffect} from 'react';
import Header from "./Header";
import ListPage from "./main/list/ListPage";
import {WrapperContainer} from "../styles/Containers";
import AppOptions from "../store/AppOptions";
import {observer} from "mobx-react-lite";
import StudentList from "../store/StudentList";
import {useWindowSize} from "./utilities/Hooks";

const Main = observer(() => {

    const [width, height] = useWindowSize();

    useEffect(() => {
        AppOptions.width = width;
    }, [width, StudentList.getList.length, AppOptions.isMobile])

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
});

export default Main;