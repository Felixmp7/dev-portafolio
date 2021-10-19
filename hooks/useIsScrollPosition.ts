import { useState, useEffect } from 'react';

const useIsScrollPosition = (targetPosition: number): boolean => {
    const [scrollPosition, setScrollPosition] = useState(null);
    useEffect(() => {
        setScrollPosition(window.scrollY);
        const handleScrollDown = () => setScrollPosition(window.scrollY);
        window.addEventListener('scroll', handleScrollDown);
        return () => window.removeEventListener('scroll', handleScrollDown);
    }, []);

    return scrollPosition >= targetPosition;
};

export default useIsScrollPosition;
