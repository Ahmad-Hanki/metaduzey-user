
import { therapyTypes } from "@/types/types";
import { Dispatch, SetStateAction, createContext } from "react";

interface TypesContextType {
    types : therapyTypes[];
    setTypes: Dispatch<SetStateAction<therapyTypes[]>>
}

const types:TypesContextType = {
    types:[],
    setTypes: () => {}
}

const TypesContext = createContext(types);
export default TypesContext