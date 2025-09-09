import { createContext } from "react";
import type { GlobalCotextType } from "../types";
import { getPoliticians } from "../hooks/getPoliticians";

export const GlobalContext = createContext<GlobalCotextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {

    const politicians = getPoliticians();

    const value = {
        politicians
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}