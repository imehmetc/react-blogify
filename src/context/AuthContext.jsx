import React, { createContext, useState } from 'react'
import AuthService from '../services/AuthService';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setAuthenticated] = useState(JSON.stringify(localStorage.getItem("userTokens")));

    const login = async (username, password) => {
        try {
            const response = await AuthService.login(username, password);
            if (response.access_token) {
                setAuthenticated(JSON.stringify(localStorage.getItem("userTokens")));
            }
        } catch (error) {
            setAuthenticated(JSON.stringify(localStorage.getItem("userTokens")));
            throw new Error(error);
        }
    };

    const logout = () => {
        AuthService.logout();
        setAuthenticated(JSON.stringify(localStorage.getItem("userTokens")));
    }

    return <AuthContext.Provider value={{login, logout, isAuthenticated}}>
                {children}
            </AuthContext.Provider>
}

export default AuthContext;