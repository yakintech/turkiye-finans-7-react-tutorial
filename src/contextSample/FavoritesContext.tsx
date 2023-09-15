import { createContext, useState } from "react";



export var FavoritesContext = createContext<FavoritesContextType | null>(null);


export const FavoritesProvider = ({ children }: any) => {

    //Global state tanımlıyorum
    const [favorites, setfavorites] = useState([]);

    return <FavoritesContext.Provider value={{favorites, setfavorites}}>{children}</FavoritesContext.Provider>

}



export type FavoritesContextType = {
    favorites: Product[];
    setfavorites: (value: any) => void
}


export interface Product {
    id: number;
    name: string
    unitPrice: number
}