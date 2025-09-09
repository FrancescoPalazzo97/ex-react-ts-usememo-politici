import { useState, useEffect } from "react";
import { fetchJson } from "./fetchJson";
import { useTypeGuard } from "./useTypeGuard";

import type { PoliticiansArrayType } from "../types";

const API_POLITICIANS = 'http://localhost:3333/politicians';

export const getPoliticians = () => {
    const [politicians, setPoliticians] = useState<PoliticiansArrayType | null>(null);

    const getData = async () => await fetchJson(API_POLITICIANS);

    useEffect(() => {
        getData()
            .then(data => {
                if (useTypeGuard().isPoliticiansArray(data)) {
                    const validPoliticians = data.filter(p => useTypeGuard().isPolitician(p));
                    setPoliticians(validPoliticians);
                } else {
                    throw new Error(`Formato del dato non valido!`);
                }
            })
            .catch(e => console.error(e))
    }, []);

    return politicians;
}

