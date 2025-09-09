import { useState } from "react"

type ReturnType = {
    isLoading: boolean,
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

export const useLoader = (): ReturnType => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    return {
        isLoading,
        setIsLoading
    };
}