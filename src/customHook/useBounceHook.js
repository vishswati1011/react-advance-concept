import { useEffect, useState } from "react"

const useDebounce = (value,delay) =>{
    const [debouceValue,setDebounseValue] = useState();
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setDebounseValue(value)
        },delay)   
        return ()=>{
            clearTimeout(timeout);
        } 
    },[value])

    return debouceValue;
}
export default useDebounce;