export const fetchJson = async (url: string): Promise<unknown> => {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`Errore durante la chiamata all'endpoint`);
    return await res.json();
};