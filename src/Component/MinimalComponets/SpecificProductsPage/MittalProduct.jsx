import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import "./MittalProduct.css";
import { FaArrowRightLong } from "react-icons/fa6";

const serviceData = {
    "Flat-Bars": {
        title: 'Precision-Made Flat Bars for Every Industry',
        mainTitle: "Flat Bars Metal",
        tagline: "Strength and durability in every bar.",
        backgroundImage: "https://webtesting-upload.vercel.app/assets/flatbar2-AIX5AiwC.jpg",
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
        stackImage: "https://webtesting-upload.vercel.app/assets/gflatbar-A8y9OrP5.jpeg",
        rightSideStackColumn: (
            <>
                <div className='ColumnContainer'>

                    <img src="https://webtesting-upload.vercel.app/assets/FlatBars1-DOa6N3xA.jpeg" alt="" />
                    
                    <div>
                        <p>Strength and Versatility for Every Application</p>
                        <h2>MS Flats</h2>

                        <br />
                        <ul>
                            <li>
                                <b>Construction: </b>MS flats steel is crucial for fabricating frames, doors, windows, and railings, offering strength and durability in building projects.
                            </li>
                            <li>
                                <b>Automobile Industry: </b>This steel is used for body reinforcements and various vehicle components, ensuring safety and structural integrity in automobiles.
                            </li>
                            <li>
                                <b>Machinery Manufacturing: </b>MS flats serve as base plates and parts, enhancing the stability and performance of various machinery.
                            </li>
                            <li>
                                <b>General Engineering: </b>It is widely utilized in the creation of tools and equipment, supporting diverse engineering applications across industries.
                            </li>
                        </ul>
                        <div className='GalleryImagesProducts'>
                            <img src="https://webtesting-upload.vercel.app/assets/flatbar6-KXA3lFiV.jpg" alt="" />
                            <img src="https://webtesting-upload.vercel.app/assets/flatbar2-AIX5AiwC.jpg" alt="" />
                        </div>
                        <p>MS flats steel is a versatile and durable material widely used across various industries, including construction, automotive, machinery manufacturing, and general engineering. Its strength makes it ideal for fabricating structural components, vehicle reinforcements, and tools. MS flats provide essential support and stability in numerous applications.</p>
                        <p>MS Flats are rectangular cross-section steel products used in fabrication and construction. Manufactured with precision, these sections ensure consistency in mechanical properties and easy processing.
                        </p>
                        <p>Their versatility, weldability, and machinability make MS Flats popular across a variety of industrial uses.</p>
                    </div>


                </div>
            </>
        ),
        description: (
            <>
                {/* Add description content if needed */}
            </>
        )
    },
    "Channels": {
        title: 'Precision-Made Channels for Every Industry',
        mainTitle: "Channels",
        tagline: "Support and stability in every channel.",
        backgroundImage: "https://webtesting-upload.vercel.app/assets/channels3-CZ3B0n8e.jpg",
        keywords: [
            "Steel Channels",
            "Aluminum Channels",
            "C-Channels",
            "U-Channels",
            "Channels Beam",
            "Channels Section",
            "Channels Framing",
            "Cold-Formed Channels",

        ],
        stackImage: "https://webtesting-upload.vercel.app/assets/gchannels-Bl-utN2m.jpeg",
        rightSideStackColumn: (
            <>
                <div className='ColumnContainer'>

                    <img src="https://webtesting-upload.vercel.app/assets/channels3-CZ3B0n8e.jpg" alt="" />
                    <div>
                        <p>Strength and Versatility for Every Application</p>
                        <h2>MS Channel</h2>
                        <ul>
                            <li>
                                <b>Construction: </b>Building frames, bridges, and industrial sheds.                              
                            </li>
                            <li>
                                <b>Automobile Industry: </b>Truck chassis and vehicle frames.
                            </li>
                            <li>
                                <b>Electrical Infrastructure: </b>Cable trays and supports.

                            </li>
                            <li>
                                <b>Power Transmission: </b>Tower bracings and beams.

                            </li>
                        </ul>
                        <div className='GalleryImagesProducts'>
                            <img src="https://webtesting-upload.vercel.app/assets/gchannels2-Bere5Un7.jpeg" alt="" />
                            <img src="https://webtesting-upload.vercel.app/assets/ChannelsBar1-BN9_sASO.jpeg" alt="" />
                        </div>
                        
                        <p>MS Channels are U-shaped steel components widely used in construction and industrial fabrication. Their strength and shape provide excellent load distribution, making them ideal for structural support.
                        </p>
                        <p>With high structural stability and easy weldability, MS Channels are crucial in heavy-duty applications</p>

                    </div>

                </div>
            </>
        ),
        description: (
            <>
                {/* Add description content if needed */}
            </>
        )
    },
    "Round-Bars": {
        title: 'Precision-Made Round Bars for Every Industry',
        mainTitle: "Round Bars",
        tagline: "Precision crafted for enduring strength.",
        backgroundImage: "https://webtesting-upload.vercel.app/assets/RoundBars1-CGZDPqFq.jpeg",
        keywords: [
            "Steel Round Bars",
            "Aluminum Round Bars",
            "Carbon Steel Flat Bars",
            "Metal Fabrication",
            "Bar stock",
            "Solid Round Bars",
            "Cold Round Bars",
            "Hot Rolled Round Bars",

        ],
        stackImage: "https://webtesting-upload.vercel.app/assets/groundbar-CO_KTVMO.jpeg",
        rightSideStackColumn: (
            <>
                <div className='ColumnContainer'>

                    <img src="https://webtesting-upload.vercel.app/assets/RoundBars1-CGZDPqFq.jpeg" alt="" />
                    <div>
                        <p>Strength and Versatility for Every Application</p>
                        <h2>MS Round Bars
                        </h2>
                        <br />
                        <ul>
                            <li>
                                <b>Construction: </b>Reinforcement bars for concrete structures

                            </li>
                            <li>
                                <b>Automobile Industry: </b>Shafts, gears, and fasteners

                            </li>
                            <li>
                                <b>Machinery Manufacturing: </b>Axles and connecting rods


                            </li>
                            <li>
                                <b>General Engineering: </b>Tools, fixtures, and agricultural equipment


                            </li>
                        </ul>
                        <div className='GalleryImagesProducts'>
                            <img src="https://webtesting-upload.vercel.app/assets/groundbar3-h5DyZF8G.jpeg" alt="" />
                            <img src="https://webtesting-upload.vercel.app/assets/groundbar2-BSwERkZb.jpeg" alt="" />
                        </div>
                        <p>MS Round Bars are long, cylindrical steel products widely used in construction, engineering, and manufacturing. These bars are known for their ductility and strength, conforming to IS 2062 standards.</p>
                        <p>MS Round Bars are easy to fabricate, weld, and machine, making them an essential product across industries.</p>
                    </div>

                </div>
            </>
        ),
        description: (
            <>
                {/* Add description content if needed */}
            </>
        )
    },
    "Angles": {
        title: 'Precision-Made Angles for Every Industry',
        mainTitle: "Angles",
        tagline: "Angle your build toward strength.",
        backgroundImage: "https://webtesting-upload.vercel.app/assets/angles5-CWuBRgWS.jpg",
        keywords: [
            "Steel Angles",
            "Aluminum Angles",
            "Carbon Steel Angles",
            "Metal Angles",
            "Solid Angles",
            "Cold Angles",
            "Hot Rolled Angles",

        ],
        stackImage: "https://webtesting-upload.vercel.app/assets/gangles-C43DN7Bi.jpeg",
        rightSideStackColumn: (
            <>
                <div className='ColumnContainer'>

                    <img src="https://webtesting-upload.vercel.app/assets/angles5-CWuBRgWS.jpg" alt="" />
                    <div>
                        <p>Strength and Versatility for Every Application</p>
                        <h2>MS Angles
                        </h2>
                        <br />
                        <ul>
                            <li>
                                <b>Construction: </b>Structural frameworks, bridges, and towers
                            </li>
                            <li>
                                <b>Automobile Industry: </b>Chassis and vehicle frames
                            </li>
                            <li>
                                <b>Power Transmission: </b>Tower construction and electrical poles
                            </li>
                            <li>
                                <b>Gating and Fencing: </b>Supports for gates, railings, and fencing

                            </li>
                        </ul>
                        <div className='GalleryImagesProducts'>
                            <img src="https://webtesting-upload.vercel.app/assets/gangles2-C70vGWoX.jpeg" alt="" />
                            <img src="https://webtesting-upload.vercel.app/assets/gangles3-B0OBK59y.webp" alt="" />
                        </div>
                    </div>

                    <p>MS Angles are L-shaped structural components made of mild steel, offering strength and stability for various load-bearing applications. These versatile products are corrosion-resistant and conform to IS 2062 standards, ensuring durability and structural integrity.
                    </p>
                    <p>MS Angles are known for their easy weldability and machinability, ideal for demanding structural applications.

                    </p>
                </div>
            </>
        ),

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
                <div className='LeftSideContentajust'>

                    <div>
                        <button className="Dynamicbtn" data-aos="fade-up"
                            data-aos-delay={`${ 100}`}>
                            <div>
                                {currentService.mainTitle}
                            </div>
                            <div>
                                <Link to="/Products" style={{ display: "flex", alignItems: "center" }}>
                                    See more&nbsp;&nbsp;<FaArrowRightLong />
                                </Link>
                            </div>
                        </button>
                        <br />
                        <h1 data-aos="fade-up"
                            data-aos-delay={`${300}`}>{currentService.tagline}</h1>

                    </div>
                </div>
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
                <div className='StackContainersEdit'>
                    <div style={{ flex: '1' }}>

                        <img src={currentService.stackImage} alt="Stack" style={{ maxWidth: '100%', height: 'auto' }} />
                    </div>
                    <div style={{ flex: '1' }} className='PaddingAjust'>
                        {currentService.rightSideStackColumn}
                    </div>
                </div>
            </div>
        </>
    );
};

export default MittalProduct;
