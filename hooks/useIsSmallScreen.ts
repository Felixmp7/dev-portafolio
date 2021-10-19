import { useState, useEffect } from 'react';

const useIsSmallScreen = (screenBreakPoint = 762): boolean => {
    const [width, setWidth] = useState(null);
    const breakPoint = screenBreakPoint;

    useEffect(() => {
        setWidth(window.innerWidth);
        const handleWindowResize = () => setWidth(window.innerWidth);
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return width <= breakPoint;
};

export default useIsSmallScreen;
