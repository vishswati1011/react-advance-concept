import  { useEffect, useState } from "react";

const useErrorBoundary = () =>{
    const  [hasError,setHasError] = useState(false);
    useEffect(()=>{
        const handleError = (error,info) =>{
            setHasError(true);
            console.error(error,info)
        }
        window.addEventListener('error',handleError);
        return ()=>{
            window.removeEventListener('error',handleError)
        }
    },[]);

    return hasError

}
export default useErrorBoundary;