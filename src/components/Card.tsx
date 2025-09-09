import type { PoliticianType } from "../types"

type CardProps = {
    politicians: PoliticianType
}

export default function Card({ politicians }: CardProps) {
    const { id, name, dob, country, party, position, years_in_office, biography, image } = politicians;
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 h-full flex flex-col">
            <div className="h-[500] md:h-96 overflow-hidden">
                <img
                    src={image}
                    alt={`${name}'s image`}
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="p-4 flex-1 flex flex-col">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{name}</h2>
                <p className="text-gray-600 mb-1">
                    <span className="font-semibold">Position:</span> {position}
                </p>
                <p className="text-gray-600 mb-1">
                    <span className="font-semibold">Party:</span> {party}
                </p>
                <p className="text-gray-600 mb-1">
                    <span className="font-semibold">Country:</span> {country}
                </p>
                <p className="text-gray-600 mb-1">
                    <span className="font-semibold">Years in Office:</span> {years_in_office}
                </p>
                <p className="text-gray-600 mb-2">
                    <span className="font-semibold">Born:</span> {new Date(dob).toLocaleDateString()}
                </p>
                <hr className="w-full text-gray-500 my-2" />
                <p className="text-gray-700 text-sm leading-relaxed line-clamp-3 mt-auto" title={biography}>
                    {biography}
                </p>
            </div>
        </div>
    )
}
