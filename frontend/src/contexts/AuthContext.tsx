import { createContext, useState, type ReactNode, useEffect } from "react";

interface AuthContextType {
    isAuthenticated: boolean;
    login: (token: string) => void;
    logout: () => void;
    loading: boolean;
}

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: { children: ReactNode }) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("finance_token");

        if (token) {
            setIsAuthenticated(true);
        }
        
        setLoading(false);
    }, []);

    function login(token: string) {
        localStorage.setItem("finance_token", token);
        setIsAuthenticated(true);
    }

    function logout() {
        localStorage.removeItem("finance_token");
        setIsAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    )
}