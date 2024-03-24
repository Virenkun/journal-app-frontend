import { createContext } from 'react';
import { useContext } from 'react';

export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}