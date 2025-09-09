import { createContext, useState, useMemo, useEffect } from "react";
import type { GlobalContextType, PoliticiansArrayType } from "../types";
import { getPoliticians } from "../hooks";

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const [filteredPoliticians, setFilteredPoliticians] = useState<PoliticiansArrayType>([]);

    const politicians = getPoliticians();
    
    useEffect(() => {
        if (politicians) {
            setFilteredPoliticians(politicians);
        }
    }, [politicians]);

    const value = useMemo(() => ({
        filteredPoliticians
    }), [filteredPoliticians]);

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}