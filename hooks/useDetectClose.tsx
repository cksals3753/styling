import { useEffect, useState } from "react";

const useDetectClose = (elem : any, initialState : any) => {

    const [ isOpen, setIsOpen ] = useState(initialState);
    
    useEffect(() => {
        const onClick = (e : any) => {
            if (elem.current && !elem.current.contains(e.target)) {
                setIsOpen(false);
            }
        };

        if ( isOpen ) {
            window.addEventListener("click", onClick);
        }

        return () => {
            window.removeEventListener("click", onClick);
        }

    },[isOpen, elem]);
    return [ isOpen, setIsOpen ];
};

export default useDetectClose;