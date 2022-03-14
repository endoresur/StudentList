import React, {useEffect, useLayoutEffect, useState} from 'react';
import {IStudent} from "../../../types/types";
import StudentList from "../../../store/StudentList";
import DesktopList from "./representation/desktop/DesktopList";
import MobileList from "./representation/mobile/MobileList";
import AppOptions from "../../../store/AppOptions";

const List = () => {

    const [students, setStudents] = useState<IStudent[]>([]);
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        setStudents(StudentList.getList);
    }, [StudentList.getList.length])

    useLayoutEffect(() => {
        setIsMobile(AppOptions.isMobile);
    }, [AppOptions.width])

    return (
        <>
            {(isMobile) ? (
                <MobileList students={students}/>
            ) : (
                <DesktopList students={students}/>
            )}
        </>
    );
};

export default List;