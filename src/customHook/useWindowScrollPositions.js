import { useEffect, useState } from "react"

const useWindowScrollPositions = () => {
    const [scroll,setScroll] = useState({
        scrollX:0,
        scrollY:0,
    })

    useEffect(()=>{
        window.addEventListener("scroll",updateScrollPosition)
    },[])
    const updateScrollPosition = () =>{
        setScroll({
            scrollX:window.screenX,
            scrollY:window.scrollY,
        })
    }

    return scroll;
}
export default useWindowScrollPositions;