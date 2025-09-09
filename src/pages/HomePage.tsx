import PoliticiansList from "../components/PoliticiansList"
import Loader from "../components/Loader"
import SearchBar from "../components/SearchBar"
import { useLoader } from "../hooks"

export default function HomePage() {
    const { isLoading } = useLoader();

    return (
        <main>
            <h1 className="text-6xl font-bold text-center my-10">Lista Politici</h1>
            {isLoading
                ? <Loader />
                : (<>
                    <SearchBar />
                    <PoliticiansList />
                </>)}
        </main>
    )
}
