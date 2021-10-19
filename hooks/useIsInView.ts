/* eslint-disable @typescript-eslint/no-explicit-any */
import useInView from 'react-cool-inview';
import useIsSmallScreen from './useIsSmallScreen';

interface ViewProps {
    ref: any,
    opacityEffect: string,
}

const useIsInView = ():ViewProps => {
    const isSmallScreen = useIsSmallScreen();
    const threshold = isSmallScreen ? 0.2 : 0.45;
    const { ref, inView } = useInView({ threshold, unobserveOnEnter: true });
    const opacityEffect = inView ? 'transition-all duration-1000 ease opacity-1' : 'transition-all duration-1000 ease opacity-0';

    return { ref, opacityEffect };
};

export default useIsInView;
