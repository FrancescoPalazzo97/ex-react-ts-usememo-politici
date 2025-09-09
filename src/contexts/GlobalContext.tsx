import { createContext, useState, useMemo } from "react";
import type { GlobalContextType } from "../types";
import { getPoliticians } from "../hooks";

export const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
    const [search, setSearch] = useState<string>('');
    const [selectedPosition, setSelectedPosition] = useState<string>('');

    const politicians = getPoliticians();

    const uniquePositions = useMemo(() => {
        if (!politicians) return [];
        return [...new Set(politicians.map(p => p.position))];
    }, [politicians]);

    const filteredPoliticians = useMemo(() => {
        if (!politicians) return [];
        return politicians.filter(p => {
            return (
                !search.trim()
                || p.name.toLowerCase().includes(search.trim().toLowerCase())
                || p.biography.toLowerCase().includes(search.trim().toLowerCase())
            )
                && (!selectedPosition || p.position === selectedPosition)
        });
    }, [politicians, search, selectedPosition]);

    const value = useMemo(() => ({
        filteredPoliticians,
        search,
        setSearch,
        uniquePositions,
        selectedPosition,
        setSelectedPosition
    }), [filteredPoliticians, uniquePositions, search, selectedPosition]);

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}