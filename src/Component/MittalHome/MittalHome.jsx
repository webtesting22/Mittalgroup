import React,{useEffect} from "react";
import Home from "../Home/Home";
import MittalHomeAbout from "../MinimalComponets/MittalHomeAbout";
import MittalOffice from "../MinimalComponets/MittalOffices";

const MittalHome = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Home />
            <MittalHomeAbout />
        </>
    )
}
export default MittalHome