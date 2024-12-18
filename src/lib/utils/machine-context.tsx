import {createContext, type FC, type ReactNode, useContext, useState} from 'react';

// Define the shape of the context
interface MachineContextType {
    machine: Machine;
    changeMachine: (machine: Machine) => void;
}

interface Machine {
    ip: string;
    name: string
}

// Create the Context with a default value
const MachineContext = createContext<MachineContextType>({} as MachineContextType);

// Custom hook to use the MachineContext
export const useMachine = (): MachineContextType => {
    const context = useContext(MachineContext);

    // Throw an error if the context is used outside a provider
    if (!context) {
        throw new Error('useMachine must be used within a MachineProvider');
    }

    return context;
};

// ThemeProvider component with the context value
interface MachineProviderProps {
    children: ReactNode;
}

export const MachineProvider: FC<MachineProviderProps> = ({children}) => {
    const [machine, setMachine] = useState<Machine>({} as Machine)
    const changeMachine = (machine: Machine) => {
        setMachine(() => machine);
    };

    return (
        <MachineContext.Provider value={{machine, changeMachine}}>
            {children}
        </MachineContext.Provider>
    );
};
