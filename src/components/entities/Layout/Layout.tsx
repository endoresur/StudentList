import { useLayoutEffect } from "react"

import Header from "../Header"
import IndexPage from '../../../pages/Index/IndexPage'

import { useWindowSize } from "../../../hooks/useWindowSize"
import RootStore from "../../../stores/RootStore"

const Layout = () => {

    const [width, height] = useWindowSize()

    useLayoutEffect(() => {
        RootStore.options.setWidth = width
    }, [width])

    return (
        <>
            <Header />
            <IndexPage />
        </>
    );
};

export default Layout