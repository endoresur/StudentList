import { observer } from "mobx-react-lite";
import { FC, useEffect, useState } from "react"

import WrapperContainer from "../../components/ui/WrapperContainer";
import { useGetStudentsQuery } from "../../hooks/useGetStudentsQuery";
import { useStore } from "../../hooks/useStore";
import { Student } from "../../models/EntityModels/students";
import Filter from "./components/Filter";
import UsersList from "./components/UsersList";

import * as SC from "./styles"

const IndexPage: FC = observer(() => {

    const store = useStore()

    const list = useGetStudentsQuery().data?.students as Student[]
    const [isMobile, setIsMobile] = useState(false)    
    const [students, setStudents] = useState<Student[]>()

    useEffect(() => {
        store.studentsStore.setList(list)
    }, [list])

    useEffect(() => {    
        setIsMobile(store.optionsStore.isMobile)
        setStudents(store.studentsStore.getList)
    }, [ store.optionsStore.isMobile, store.studentsStore.getList?.length])

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

export default IndexPage