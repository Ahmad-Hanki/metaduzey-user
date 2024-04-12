
import { TherapyType } from "@/types/types";
import { Dispatch, SetStateAction, createContext } from "react";

interface TherapiesContextType {
    therapies : TherapyType[];
    setTherapies: Dispatch<SetStateAction<TherapyType[]>>
}

const therapies:TherapiesContextType = {
    therapies:[],
    setTherapies: () => {}
}

const TherapiesContext = createContext(therapies);
export default TherapiesContext