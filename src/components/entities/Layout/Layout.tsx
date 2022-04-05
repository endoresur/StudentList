import {FC, useLayoutEffect } from "react"
import Header from "../Header"
import { useWindowSize } from "../../../hooks/useWindowSize"
import { useStore } from "../../../hooks/useStore"
import IndexPage from "../../../pages/Index";
import { observer } from "mobx-react-lite";

const Layout: FC = observer(({children}) => {

    const [width, height] = useWindowSize()
    const store = useStore();

    useLayoutEffect(() => {
        store.optionsStore.setWidth = width
    }, [width])

    return (
        <>
            <Header />
            <IndexPage/>
            {children}
        </>
    )
})

export default Layout