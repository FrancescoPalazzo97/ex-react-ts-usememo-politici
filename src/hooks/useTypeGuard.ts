import type { PoliticianType, PoliticiansArrayType } from "../types"

type ReturnType = {
    isPolitician: (data: unknown) => data is PoliticianType,
    isPoliticiansArray: (data: unknown) => data is PoliticiansArrayType
}

export const useTypeGuard = (): ReturnType => {

    const isPolitician = (data: unknown): data is PoliticianType => {
        return (
            data !== null && typeof data === 'object'
            && 'id' in data && typeof data.id === 'number'
            && 'name' in data && typeof data.name === 'string'
            && 'dob' in data && typeof data.dob === 'string'
            && 'country' in data && typeof data.country === 'string'
            && 'party' in data && typeof data.party === 'string'
            && 'position' in data && typeof data.position === 'string'
            && 'years_in_office' in data && typeof data.years_in_office === 'string'
            && 'biography' in data && typeof data.biography === 'string'
            && 'image' in data && typeof data.image === 'string'
        );
    };

    const isPoliticiansArray = (data: unknown): data is PoliticiansArrayType => {
        return (data !== null && Array.isArray(data));
    };

    return {
        isPolitician,
        isPoliticiansArray
    }
}