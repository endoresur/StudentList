import { DefaultGenerics, Route } from "react-location";
import IndexPage from "../pages/Index";

export enum Paths {
    INDEX = '/'
}

const Routes: Route<DefaultGenerics>[] = [
    {
        path: Paths.INDEX,
        element: <IndexPage/>
    }
]

export default Routes