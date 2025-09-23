import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ComingSoonInterceptor: React.FC = () => {
    const navigate = useNavigate();
    
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            const target = (e.target as HTMLElement).closest("a, [to]");

            if (target) {
                const href = target.getAttribute("href") || target.getAttribute("to");
                if (href === "#") {
                    e.preventDefault();
                    navigate("/coming");
                }
            }
        };

        document.addEventListener("click", handleClick);
        return () => document.removeEventListener("click", handleClick);
    }, [navigate]);

    return null;
}

export default ComingSoonInterceptor