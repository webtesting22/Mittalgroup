import React,{useEffect} from "react";
import Home from "../Home/Home";
// import MSLOffice from "../MinimalComponets/MSLOffices";

const MSLHome = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Home />
            {/* <MSLHomeAbout /> */}
        </>
    )
}
export default MSLHome