'use client'
import TypesContext from './TypesContext';
import React, {  useState, Dispatch, SetStateAction } from 'react';
import { therapyTypes } from '@/types/types';

interface TypesContextType {
    types: therapyTypes[];
    setTypes: Dispatch<SetStateAction<therapyTypes[]>>;
}

interface TypesProviderProps {
    children: React.ReactNode;
}

const TypesProvider: React.FC<TypesProviderProps> = ({ children }) => {
    const [types, setTypes] = useState<therapyTypes[]>([]);

    const TypesContextValue: TypesContextType = {
        types,
        setTypes,
    };

    return (
        <TypesContext.Provider value={TypesContextValue}>
            {children}
        </TypesContext.Provider>
    );
};

export { TypesProvider };
