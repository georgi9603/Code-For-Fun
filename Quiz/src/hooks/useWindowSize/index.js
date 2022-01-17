import { useLayoutEffect, useState } from 'react';

export const useWindowSize = (ref) => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);

    useLayoutEffect(() => {
        const updateSize = () => {
            setWidth(ref?.current?.clientWidth);
            setHeight(ref?.current?.clientHeight);
        }
        window.addEventListener('resize', updateSize);

        updateSize();

        return () => window.removeEventListener('resize', updateSize);
    }, [ref]);

    return { width, height };
}