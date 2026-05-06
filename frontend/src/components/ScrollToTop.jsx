import { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

const ScrollToTop = () => {
    const { pathname } = useLocation();
    const navType = useNavigationType();

    useEffect(() => {
        // Only scroll to top for new navigations (PUSH)
        // For back/forward navigation (POP), let the browser restore scroll position
        if (navType === "PUSH") {
            setTimeout(() => {
                window.scrollTo(0, 0);
            }, 100);
        }
    }, [pathname, navType]);

    return null;
};

export default ScrollToTop;
