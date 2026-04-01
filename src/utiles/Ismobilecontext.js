import { createContext, useEffect, useState } from "react";

export const Ismobilecontext = createContext()

export function Ismobileprovider ({children}){

    const [Ismobile,setIsmobile] = useState(null)

    const checkmobile = (e)=>{
        console.log("yes")
        setIsmobile(e.matches)
    }

    useEffect(()=>{
        window.matchMedia("(max-width:1024px)").addEventListener("change",checkmobile)
        setIsmobile(window.matchMedia("(max-width:1024px)").matches)
    },[])

    return <Ismobilecontext.Provider value={{Ismobile}}>{children}</Ismobilecontext.Provider>
}