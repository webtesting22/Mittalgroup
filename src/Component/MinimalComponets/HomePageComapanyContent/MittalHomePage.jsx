import React from "react";
import { Row, Col, Image, Button } from "antd";
import "./MittalSectionHomePageContainer.css"
import { Link } from "react-router-dom";
import ClientHome from "../ClientHome/ClientHome";
import BackOverlay from "./BackOverlay.png"
const MSLHomePage = () => {

    const CardsContent = [
        {
            cardTitle: "Flat Bars",
            link: "/Products/Flat-Bars",
            topheading: "Strength and Versatility in Steel",
            cardDescription: "Steel flat bars are durable, rectangular-shaped metal bars used in construction and fabrication. They offer strength and versatility for structural supports and custom projects.",
            CardImages: [
                {
                    img: "https://webtesting-upload.vercel.app/assets/FlatBars1-DOa6N3xA.jpeg"
                },

            ]
        },
        {
            cardTitle: "Round Bars",
            link: "/Products/Round-Bars",
            topheading: "Precision and Strength in Every Rod",
            cardDescription: "Steel round bars are strong, cylindrical rods commonly used in construction, machining, and industrial applications. They provide excellent durability and precision for shafts, supports, and custom metalwork.",
            CardImages: [
                {
                    img: "https://webtesting-upload.vercel.app/assets/RoundBars1-CGZDPqFq.jpeg"
                },

            ]
        },
        {
            cardTitle: "Channels",
            link: "/Products/Channels",
            topheading: "Stability and Support in Steel",
            cardDescription: "Steel channels are U-shaped metal profiles widely used in construction, framing, and structural support. They offer strength and stability for load-bearing applications and custom fabrication projects.",
            CardImages: [
                {
                    img: "https://webtesting-upload.vercel.app/assets/ChannelsBar1-BN9_sASO.jpeg"
                },

            ]
        },
        {
            cardTitle: "Angles",
            link: "/Products/Angles",
            topheading: "Strength and Stability from Every Angle",
            cardDescription: "Steel angles are L-shaped metal bars used for structural reinforcement and framing in construction and engineering projects. They provide strength, stability, and versatility for various applications.",
            CardImages: [
                {
                    img: "https://webtesting-upload.vercel.app/assets/Angles1-B8UcZCAq.jpeg"
                },

            ]
        },

    ]
    return (
        <>
            <section className="MSLSectionHomePageContainer">
            <img src={BackOverlay} alt="" className="BackOverlay"/>
                <div className="HeadingContainer">
                    <h1>We Build Innovative Strength</h1>
                </div>
                <div className="MSLProductsCards">
                    {CardsContent.map((item, index) => (
                        <div className="RowAdjust" key={index} data-aos="fade-up"
                            data-aos-delay={`${index * 100}`}>
                            <Row >
                                <Col lg={12} md={24}>
                                    <div className="ContentContainerHome">
                                        <div>
                                            <h4>{item.topheading}</h4>
                                            <h2>{item.cardTitle}</h2>
                                            <p>{item.cardDescription}</p>
                                            <Link to={item.link}><button>Read More</button></Link>
                                            <br />
                                            <br />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={12} md={24}>
                                    <div className="ImageContainer">
                                        {item.CardImages[0].img ? (
                                            <div className="ImageHeightContainer">
                                                <Image src={item.CardImages[0].img} alt={item.cardTitle} />
                                            </div>
                                        ) : (
                                            <div>No Image Available</div> // Placeholder if no image is available
                                        )}
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    ))}

                </div>
            </section>
            <ClientHome />
        </>
    )
}
export default MSLHomePage