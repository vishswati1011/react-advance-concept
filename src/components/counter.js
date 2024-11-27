import { useEffect, useRef, useState } from "react"

const Counter = () =>{
    const [count,setCount] = useState(0);
    const internalRef = useRef();

    useEffect(()=>{
        internalRef.current = setInterval (()=>{
            setCount((count)=>count+1)
        },1000)
        return()=>{
            clearInterval(internalRef.current)
        }
    },[])

    return (
        <h1>
            This is counter : {count}
        </h1>
    )

}
export default Counter;