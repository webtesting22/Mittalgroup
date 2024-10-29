import React, { useEffect } from "react";
import "./Products.css"
import Home from "../Home/Home";
import { Row, Col, Descriptions } from "antd";
import Productback from "./Productback.jpeg"
import Productback2 from "./Productback2.jpg"
import AnimatedStackCards from "../MinimalComponets/AnimatedStackCards";
const Products = () => {
    const Images = [Productback, Productback2]
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);


    const CardsContent = [
        {
            images: "https://images.unsplash.com/photo-1541263235992-1863345ef977?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Building Construction",
            tagline: "Reinforcing structures and architectural frameworks.",
            description: "Mittal's steel products, such as flat bars and round bars, offer exceptional strength and durability, making them ideal for constructing high-rise buildings, bridges, and other architectural structures."
        },
        {
            images: "https://plus.unsplash.com/premium_photo-1664299281764-2560020e8d52?q=80&w=2938&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Automobile and Machinery Building",
            tagline: " Vehicle frames and essential structural components.",
            description: "Precision-engineered steel bars from Mittal ensure robust performance in automotive frames, machinery parts, and heavy equipment, providing reliability and longevity for demanding applications."
        },
        {
            images: "https://plus.unsplash.com/premium_photo-1661921878223-5d6d29ece773?q=80&w=3061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Pipeline Construction",
            tagline: "Oil, gas and water pipelines.",
            description: " Mittal’s steel pipes are designed for fluid transport and gas distribution, ensuring safe and efficient pipeline systems that meet the highest industry standards."
        },
        {
            images: "https://plus.unsplash.com/premium_photo-1664695710295-b524b34386db?q=80&w=2944&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Power Transmission",
            tagline: "Transmission towers and electrical infrastructure.",
            description: "Our high-quality steel products play a critical role in power transmission infrastructure, offering strength and resilience in electrical towers and substation components."
        },
        {
            images: "https://images.unsplash.com/28/see-through.JPG?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            title: "Gating and Fencing",
            tagline: "Residential and industrial gates and fencing solutions.",
            description: "Mittal’s versatile steel flat bars and pipes provide durability and design flexibility, perfect for secure and aesthetically pleasing gates, fences, and boundary enclosures."
        }


    ]
    return (
        <>
          <AnimatedStackCards />
            <section id="ProductPage">
              
                <div className="productsApplications ">
                    <div>
                        <div className="HeadingContainer">
                            <h2 >Innovative Steel Solutions</h2>
                            <p>Our product range includes Flat Bars, Round Bars, Channels, and Angles, all manufactured in strict compliance with IS 2062 standards. Our products are used in:

                            </p>
                        </div>
                        <div className="MittalCardContainer">
                            {CardsContent.map((item, index) => (
                                <div className="HoverRow">
                                    <div className="HoverImageContainer">
                                        <img src={item.images} alt="" />
                                    </div>
                                    <div className="HoverContent">
                                        <div>
                                        <p>{item.tagline}</p>
                                        <h2>{item.title}</h2>
                                        <p>{item.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                        {/* <p>Our product range includes Flat Bars, Round Bars, Channels, and Angles, all manufactured
                            in strict compliance with IS 2062 standards. Our products are used in:</p>
                        <ul>
                            <li>Building Construction: Reinforcing structures and architectural frameworks.</li>
                            <li>Automobile and Machinery Building: Vehicle frames and essential structural components.</li>
                            <li>Pipeline Construction: Oil, gas and water pipelines.</li>
                            <li>Power Transmission: Transmission towers and electrical infrastructure.</li>
                            <li>Gating and Fencing: Residential and industrial gates and fencing solutions.</li>
                        </ul> */}
                    </div>
                </div>
                
            </section>
        </>
    )
}
export default Products;