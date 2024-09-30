import { useEffect } from "react";
import "./Clients.css";
import Home from "../Home/Home";
import Client from "./ClientsData"
const Clients = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Home />
            <div className="sectionHeading">
                <h2>
                    Our Clients
                </h2>
            </div>
            <div className="ClientsContainer">
                {Client.map((item, index) => (
                    <div
                        id="ImageContainerLogo"
                        key={index}
                        data-aos="fade-up"
                    >
                        <img src={item.img} alt="" />
                    </div>
                ))}
            </div>
        </>
    )
}
export default Clients;