type ClearButtonProps = {
    clear: () => void
}

export default function ClearButton({ clear }: ClearButtonProps) {
    return (
        <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <button
                onClick={clear}
                className="h-5 w-5 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
                <i className="fa-solid fa-xmark hover:text-red-500"></i>
            </button>
        </div>
    )
}
