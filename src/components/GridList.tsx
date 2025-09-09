type GridListProps = {
    children: React.ReactNode
}

export default function GridList({ children }: GridListProps) {
    return (
        <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {children}
        </ul>
    )
}
