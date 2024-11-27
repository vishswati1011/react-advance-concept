const { useState, useCallback } = require("react");


function useCopyToClipboard (content) {
    const [isCopied,setIsCopied] = useState(false);

    const copy = useCallback(()=>{
        navigator.clipboard
        .writeText(content)
        .then(()=>setIsCopied(true))
        .then(()=>setTimeout(()=>
            setIsCopied(false),1250))
        .catch((error)=>alert(error));
    },[content])

    return [isCopied,copy]
}

export default useCopyToClipboard;