import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./MittalProduct.css";
import Frame from "./Frame.svg"
const serviceData = {
    "Flat-Bars": {
        title: 'Precision-Made Flat Bars for Every Industry',
        backgroundImage: "https://webtesting-upload.vercel.app/assets/FlatBars1-DOa6N3xA.jpeg",
        keywords: [
            "Steel Flat Bars",
            "Mild Steel Flat Bars",
            "Carbon Steel Flat Bars",
            "Alloy Steel Flat Bars",
            "Stainless Steel Flat Bars",
            "Precision Flat Bars",
            "Galvanized Flat Bars",
            "Hot Rolled Flat Bars",
            "Cold Rolled Flat Bars",
            "Durable Flat Bars"
        ],
        stackImage: "https://webtesting-upload.vercel.app/assets/FlatBars1-DOa6N3xA.jpeg",
        rightSideStackColumn: (
            <>
                <div className='ColumnContainer'>

                    <img src="https://webtesting-upload.vercel.app/assets/FlatBars1-DOa6N3xA.jpeg" alt="" />
                    <div>
                        <p>Strength and Versatility for Every Application</p>
                        <h2>Mild Steel Flat Bars</h2>
                        <br />
                        <p>Mild steel flat bars are known for their excellent weldability and machinability, making them perfect for a wide range of structural applications. Their ductile nature allows for easy shaping, ensuring they meet the specific needs of your projects, from construction to general fabrication.
                        </p>
                    </div>
                    <div>
                        <p>Corrosion-Resistant Excellence for Long-Lasting Use</p>
                        <h2>Stainless Steel Flat Bars
                        </h2>
                        <br />
                        <p>Stainless steel flat bars offer superior resistance to corrosion and oxidation, making them ideal for use in harsh environments. Perfect for architectural and industrial applications, these flat bars combine aesthetic appeal with unmatched durability, ensuring your projects stand the test of time.
                        </p>
                    </div>
                    <div>
                        <p>Enhanced Strength and Toughness for Demanding Conditions</p>
                        <h2>Alloy Steel Flat Bars
                        </h2>
                        <br />
                        <p>Alloy steel flat bars are engineered for high performance under extreme conditions, providing enhanced strength and toughness. These bars are suitable for applications in the automotive, aerospace, and construction industries, where high tensile strength and durability are essential for reliability and safety.
                        </p>
                    </div>

                </div>
            </>
        ),
        description: (
            <>
                {/* Add description content if needed */}
            </>
        )
    }
};

const MittalProduct = () => {
    const { service } = useParams();
    const currentService = serviceData[service];

    if (!currentService) {
        return <p>Service not found</p>;
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [service]);

    return (
        <>
            <section
                className="AnimatedStackCards"
                style={{
                    backgroundImage: `url(${currentService.backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "background-image 0.5s ease",
                }}
            >
                <div className="Overlayback"></div>
            </section>
            <div className='ProductContentContainer' style={{ paddingBottom: "0px" }}>
                <div className="marquee-container">
                    <div className="marquee-text">
                        {currentService.keywords.map((keyword, index) => (
                            <span key={index} className="marquee-item">
                                {keyword}
                            </span>
                        ))}
                        {currentService.keywords.map((keyword, index) => (
                            <span key={`repeat-${index}`} className="marquee-item">
                                {keyword}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
            <div className='ProductContentContainer'>
                <div className="HeadingContainer">
                    <h2>{currentService.title}</h2>
                    <p>Trusted Partners in Steel Solutions</p>
                </div>
                <p>{currentService.description}</p>
                <div className='StackContainersEdit' style={{ display: 'flex' }}>
                    <div style={{ flex: '1' }}>
                        <img src={currentService.stackImage} alt="Stack" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                    <div style={{ flex: '1', padding: '0px 20px' }}>
                        {currentService.rightSideStackColumn}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MittalProduct;
