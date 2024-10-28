import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import "./MittalProduct.css";
import Frame from "./Frame.svg"
import test from "./test.jpeg"
import RoundBar from "./RoundBar.jpeg"
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
        stackImage: test,
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
                            <img  src="https://webtesting-upload.vercel.app/assets/flatbar6-KXA3lFiV.jpg" alt="" />
                                <img src="https://webtesting-upload.vercel.app/assets/flatbar3-CxWalcwQ.jpg" alt="" />
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
        stackImage: RoundBar,
        rightSideStackColumn: (
            <>
                <div className='ColumnContainer'>

                    <img src="https://webtesting-upload.vercel.app/assets/FlatBars1-DOa6N3xA.jpeg" alt="" />
                    <div>
                        <p>Strength and Versatility for Every Application</p>
                        <h2>Mild Steel Channels</h2>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'end' }}>
                            <img src="https://webtesting-upload.vercel.app/assets/flatbar6-KXA3lFiV.jpg" alt=""
                                 />
                        </div>
                        <br />
                        <ul>
                            <li>
                                <b>Construction: </b>MS Channels Building frames, bridges, and industrial sheds
                                .
                            </li>
                            <li>
                                <b>Automobile Industry: </b>Truck chassis and vehicle frames .
                            </li>
                            <li>
                                <b>Electrical Infrastructure: </b>MS Round Bars Axles and connecting rods.
                                
                            </li>
                            <li>
                                <b>Power Transmission: </b>Tower bracings and beams.
                                
                            </li>
                        </ul>
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
        stackImage: "https://webtesting-upload.vercel.app/assets/FlatBars1-DOa6N3xA.jpeg",
        rightSideStackColumn: (
            <>
                <div className='ColumnContainer'>

                    <img src="https://webtesting-upload.vercel.app/assets/FlatBars1-DOa6N3xA.jpeg" alt="" />
                    <div>
                        <p>Strength and Versatility for Every Application</p>
                        <h2>Mild Steel Round Bars</h2>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'end' }}>
                            <img className='min-img' src="https://webtesting-upload.vercel.app/assets/flatbar6-KXA3lFiV.jpg" alt=""
                                style={{ width: '150px', height: '150px' }} />
                        </div>
                        <br />
                        <p>Round bars are available in various materials, including steel, aluminum, and titanium, making them suitable for diverse applications such as construction, manufacturing, and automotive industries.
                        </p>
                    </div>
                    <ul>
                            <li>
                                <b>Construction: </b>MS Round Bars Reinforcement bars for concrete structures.
                            </li>
                            <li>
                                <b>Automobile Industry: </b>This steel is used for body reinforcements and various vehicle components, ensuring safety and structural integrity in automobiles.
                            </li>
                            <li>
                                <b>Machinery Manufacturing: </b>MS Round Bars Axles and connecting rods.
                                
                            </li>
                            <li>
                                <b>General Engineering: </b>Tools, fixtures, and agricultural equipment.
                                
                            </li>
                        </ul>
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
        backgroundImage: "https://webtesting-upload.vercel.app/assets/RoundBars1-CGZDPqFq.jpeg",
        keywords: [
            "Steel Angles",
            "Aluminum Angles",
            "Carbon Steel Angles",
            "Metal Angles",
            "Solid Angles",
            "Cold Angles",
            "Hot Rolled Angles",

        ],
        stackImage: "https://webtesting-upload.vercel.app/assets/FlatBars1-DOa6N3xA.jpeg",
        rightSideStackColumn: (
            <>
                <div className='ColumnContainer'>

                    <img src="https://webtesting-upload.vercel.app/assets/FlatBars1-DOa6N3xA.jpeg" alt="" />
                    <div>
                        <p>Strength and Versatility for Every Application</p>
                        <h2>Mild Steel Angles</h2>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'end' }}>
                            <img className='min-img' src="https://webtesting-upload.vercel.app/assets/flatbar6-KXA3lFiV.jpg" alt=""
                                style={{ width: '150px', height: '150px' }} />
                                
                        </div>
                        <br />
                    </div>
                    <ul>
                            <li>
                                <b>Construction: </b>Structural frameworks, bridges, and towers.
                                
                            </li>
                            <li>
                                <b>Automobile Industry: </b>Chassis and vehicle frames.
                            </li>
                            <li>
                                <b>Power Transmission: </b>Tower construction and electric poles.
                                
                            </li>
                            <li>
                                <b>Gating and Fencing: </b>Support for gates, railings and fencing.
                                
                            </li>
                        </ul>
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
