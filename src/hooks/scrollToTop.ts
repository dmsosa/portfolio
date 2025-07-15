import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function useScrollToTop() {
    const location = useLocation();
    
    useEffect(() => {
        
    }, [location.pathname])
}