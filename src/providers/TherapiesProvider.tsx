'use client'
import TherapiesContext from './TherapiesContext';
import React, {  useState, Dispatch, SetStateAction } from 'react';
import { TherapyType } from '@/types/types';

interface TherapiesContextType {
    therapies: TherapyType[];
    setTherapies: Dispatch<SetStateAction<TherapyType[]>>;
}

interface TherapiesProviderProps {
    children: React.ReactNode;
}

const TherapiesProvider: React.FC<TherapiesProviderProps> = ({ children }) => {
    const [therapies, setTherapies] = useState<TherapyType[]>([]);

    const therapiesContextValue: TherapiesContextType = {
        therapies,
        setTherapies,
    };

    return (
        <TherapiesContext.Provider value={therapiesContextValue}>
            {children}
        </TherapiesContext.Provider>
    );
};

export { TherapiesProvider };
