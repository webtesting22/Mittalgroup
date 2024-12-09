import React, { useEffect } from "react";
import Home from "../Home/Home";

const MSLHome = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Home />
        </>
    )
}
export default MSLHome;