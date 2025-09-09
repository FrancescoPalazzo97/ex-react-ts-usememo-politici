import { createContext, useState, useMemo, useEffect } from "react";
import type { GlobalContextType, PoliticiansArrayType } from "../types";
import { getPoliticians } from "../hooks";

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const [search, setSearch] = useState<string>('');

    const politicians = getPoliticians();

    const filteredPoliticians = useMemo(() => {
        if (!politicians) return [];
        return politicians.filter(p => {
            return (
                !search.trim()
                || p.name.toLowerCase().includes(search.trim().toLowerCase())
                || p.biography.toLowerCase().includes(search.trim().toLowerCase())
            )
        });
    }, [politicians, search]);

    const value = useMemo(() => ({
        filteredPoliticians,
        search,
        setSearch
    }), [filteredPoliticians, search]);

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}