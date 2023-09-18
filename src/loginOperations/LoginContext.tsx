import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const LoginContext = createContext<LoginContextType | null>(null);


export const LoginProvider = ({ children }: any) => {

    const [isLogin, setisLogin] = useState(false);
    const [loading, setLoading] = useState(true);


    useEffect(() => {

        var token = localStorage.getItem('token');

        if (token != null) {
            axios.get('http://localhost:3001/', {
                headers: {
                    'Authorization': `Basic ${token}`
                }
            })
            .then(res => {
                setisLogin(true);
                setLoading(false);
            })
            .catch(err => {
                setisLogin(false);
                setLoading(false);
            })
        }
        else {
            setisLogin(false);
            setLoading(false);
        }

    }, [])


    return <LoginContext.Provider value={{ isLogin, setisLogin, loading, setLoading }}>{children}</LoginContext.Provider>

}


export type LoginContextType = {
    isLogin: boolean;
    loading: boolean;
    setLoading: (value: boolean) => void;
    setisLogin: (value: boolean) => void;
} 
