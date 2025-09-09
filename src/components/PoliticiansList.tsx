import { useGlobalContext } from "../hooks"

export default function PoliticiansList() {
    const { filteredPoliticians } = useGlobalContext();
    return (
        <div>
            <ul>
                {filteredPoliticians.map(p => (
                    <li>
                        <div className="max-w-[200px]">
                            <img src={p.image} alt={`${p.image}'s image`} className="w-full" />
                            <h2>{p.name}</h2>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
