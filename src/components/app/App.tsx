import { Outlet } from "react-location";
import Layout from "../entities/Layout";
import { withAppProviders } from "./appInitHoc";

function App() {

    return (
        <Layout>
            <Outlet/>
        </Layout>
    );
}

export default withAppProviders(App)
