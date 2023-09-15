import { createContext, useState } from "react";

export var CounterContext = createContext<CounterContextType | null>(null);


export const CounterProvider = ({children} : any) => {

    //Global state tanımlıyorum
    const [counter, setcounter] = useState(0);

    return <CounterContext.Provider value={{counter, setcounter}}>{children}</CounterContext.Provider>
}




export type CounterContextType = {
    counter:number;
    setcounter: (value:number) => void 
} 
