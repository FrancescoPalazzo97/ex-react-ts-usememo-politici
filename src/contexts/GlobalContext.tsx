import { createContext } from "react";
import type { GlobalCotextType } from "../types";

export const GlobalContext = createContext<GlobalCotextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {

}