import { ComponentType } from "react"
import { ReactLocation, Router } from "react-location"
import { QueryClient, QueryClientProvider } from "react-query"
import { RootStoreProvider } from "../../context/rootStor.context"

import Routes from "../../constants/routes"
import compose from "../../utilities/common"

const withQueryProvider = (WrappedComponent: ComponentType) => ({ ...props }) => {
    const queryClient = new QueryClient()
    return (
        <QueryClientProvider client={queryClient}>
            <WrappedComponent {...props} />
        </QueryClientProvider>
    )
}

const withRootStoreProvider = (WrappedComponent: ComponentType) => ({ ...props }) => {
    return (
        <RootStoreProvider>
            <WrappedComponent {...props} />
        </RootStoreProvider>
    )
}

const withRouter = (WrappedComponent: ComponentType) => ({ ...props }) => {
    const location = new ReactLocation()
    return (
        <Router location={location} routes={Routes}>
            <WrappedComponent {...props}/>
        </Router>
    )
}

export const withAppProviders = compose(withQueryProvider, withRootStoreProvider, withRouter)