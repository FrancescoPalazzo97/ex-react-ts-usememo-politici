
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
    filteredPoliticians: PoliticiansArrayType,
    search: string,
    setSearch: React.Dispatch<React.SetStateAction<string>>,
    uniquePositions: string[],
    selectedPosition: string,
    setSelectedPosition: React.Dispatch<React.SetStateAction<string>>
};