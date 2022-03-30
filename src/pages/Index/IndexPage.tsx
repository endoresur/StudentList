import { observer } from "mobx-react-lite";
import { FC, useLayoutEffect, useState } from "react"

import WrapperContainer from "../../components/ui/WrapperContainer";
import { Student } from "../../models/EntityModels/students";
import RootStore from "../../stores/RootStore";
import Filter from "./components/Filter";
import UsersList from "./components/UsersList";

import * as SC from "./styles.d"

const IndexPage: FC = observer(() => {
    const [students, setStudents] = useState<Student[]>([])
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useLayoutEffect(() => {
        setStudents(RootStore.students.getList)
        setIsMobile(RootStore.options.isMobile)
    }, [RootStore.students.getList.length, RootStore.options.isMobile])

    return (
        <main>
            <WrapperContainer>
                <section>
                    <SC.PageTitle isMobile={isMobile}>Студенты</SC.PageTitle>
                    <Filter />
                    <UsersList students={students || []} />
                </section>
            </WrapperContainer>
        </main>
    )
})

export default IndexPage;