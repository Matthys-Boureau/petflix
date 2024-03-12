"use client";

import { createContext, useContext, useState } from "react";

const AuthContext = createContext({
    isSignedIn: false,
    setIsSignedIn: (value: boolean) => { },
});

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    return (
        <AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuthContext = () => {
    return useContext(AuthContext);
};

export { AuthContextProvider, useAuthContext };
