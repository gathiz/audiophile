import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface ScrollProps {
    children: React.ReactNode;
}

const Scroll: React.FC<ScrollProps> = (props) => {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    return <>{props.children}</>;
};

export default Scroll;