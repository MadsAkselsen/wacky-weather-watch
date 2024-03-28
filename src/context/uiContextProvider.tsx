import React, { useContext, useState, Dispatch, SetStateAction } from 'react';

export interface UIContextType {
    mobileOpen: boolean;
    setMobileOpen: Dispatch<SetStateAction<boolean>>;
    // Add other UI state management properties here as needed
}

const initialState = {
    mobileOpen: false,
};

export const UIContext = React.createContext<UIContextType | null>(null);

export const UIContextProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
    const [mobileOpen, setMobileOpen] = useState(initialState.mobileOpen);

    return (
        <UIContext.Provider value={{ mobileOpen, setMobileOpen }}>
            {children}
        </UIContext.Provider>
    );
};

export const useUIContext = (): UIContextType => {
    const context = useContext(UIContext);
    if (!context) {
        throw new Error('useUIContext must be used within a UIContextProvider');
    }
    return context;
};
