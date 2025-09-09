import { useGlobalContext } from "../hooks"
import Card from "./Card";
import GridList from "./GridList";

export default function PoliticiansList() {
    const { filteredPoliticians } = useGlobalContext();
    return (
        <div>
            <GridList>
                {filteredPoliticians.map(p => (
                    <li key={p.id} className="p-8">
                        <Card politicians={p} />
                    </li>
                ))}
            </GridList>
        </div>
    )
}
