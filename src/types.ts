
export type PoliticianType = {
    id: number,
    name: string,
    dob: string,
    country: string,
    party: string,
    position: string,
    years_in_office: string,
    biography: string,
    image: string
}

export type PoliticiansArrayType = PoliticianType[];

export type GlobalContextType = {
    filteredPoliticians: PoliticiansArrayType
};