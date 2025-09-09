import { useState, useEffect } from "react";
import { useTypeGuard, fetchJson, useLoader } from "./";

import type { PoliticiansArrayType } from "../types";

const API_POLITICIANS = 'http://localhost:3333/politicians';

export const getPoliticians = () => {
    const [politicians, setPoliticians] = useState<PoliticiansArrayType | null>(null);

    const { setIsLoading } = useLoader();

    const getData = async () => {
        setIsLoading(true);
        return await fetchJson(API_POLITICIANS)
    };

    useEffect(() => {
        getData()
            .then(data => {
                if (useTypeGuard().isPoliticiansArray(data)) {
                    const validPoliticians = data.filter(p => useTypeGuard().isPolitician(p));
                    setPoliticians(validPoliticians);
                    setIsLoading(false);
                } else {
                    throw new Error(`Formato del dato non valido!`);
                }
            })
            .catch(e => {
                setIsLoading(false);
                console.error(e)
            })
    }, []);

    return politicians;
}

