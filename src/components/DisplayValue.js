import { useState } from "react"
import useDebounce from "../customHook/useBounceHook";
const DelayedValue = ()=>{
    const [value,setValue] = useState();
    const delayValue = useDebounce(value,2000)
    return (
        <div>
           
            <input 
                value={value} 
                placeholder="Try to search"
                onChange={(e)=>setValue(e.target.value)}
            />
            <p>DelayValue of 2 sec : {delayValue}</p>
        </div>
    )

}
export default DelayedValue