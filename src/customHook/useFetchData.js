import { useState,useEffect } from "react";

export const useFetchData = (url) => {
    const [data,setData] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(()=> {
            fetchData();
    },[url])

    const fetchData = async (url) =>{
        try{
            const response = await fetch(url)
            const data = response.json();
            setData(data);
        }catch(error){
            setError(error.msg);
            setLoading(false)
        }
    }

    return {loading,data,error}
}
