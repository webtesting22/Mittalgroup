import { useEffect } from "react";
import "./Clients.css";
import Client from "./ClientsData"
import { Row, Col } from "antd";
const Clients = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <div className="ClientContainerSet">
                <div className="HeadingContainer">
                    <h2 >
                        Our Clients
                    </h2>
                    <p>Trusted Partners in Steel Solutions</p>
                </div>
                <br /><br />
                <div className="ClientsContainer">
                    <Row>
                        {Client.map((item, index) => (

                            <Col lg={6} md={6} sm={24}>
                                <div
                                    id="ImageContainerLogo"
                                    key={index}
                                    data-aos="fade-up"
                                >
                                    <img src={item.img} alt="" />
                                </div>
                            </Col>
                        ))}

                    </Row>

                </div>
            </div>
        </>
    )
}
export default Clients;