import { useContext } from "react"
import { StoreContext } from "../context/rootStor.context"

export function useStore() {
    const context = useContext(StoreContext)

    if (context === undefined) {
        throw new Error('useRootStore must be used within RootStoreProvider')
    }

    return context
}