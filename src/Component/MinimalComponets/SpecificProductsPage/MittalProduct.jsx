import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Row, Col } from 'antd'
import "./MittalProduct.css";
import { FaArrowRightLong } from "react-icons/fa6";

const serviceData = {
    "Flat-Bars": {
        title: 'Precision-Made MS Flats for Every Industry',
        link: "/Products/Flat-Bars",
        mainTitle: "MS Flats",
        tagline: "Strength and durability in every bar.",
        backgroundImage: "https://webtesting-upload.vercel.app/assets/flatbar2-AIX5AiwC.jpg",
        backgroundImages: [
            "https://webtesting-upload.vercel.app/assets/flatbar2-AIX5AiwC.jpg",
            "https://webtesting-upload.vercel.app/assets/FlatBars1-DOa6N3xA.jpeg",
        ],

        stackImage: "https://webtesting-upload.vercel.app/assets/gflatbar-A8y9OrP5.jpeg",
        rightSideStackColumn: (
            <>
                <div className='ColumnContainer'>

                    <img src="https://webtesting-upload.vercel.app/assets/FlatBars1-DOa6N3xA.jpeg" alt="" />

                    <div>
                        <p>Strength and Versatility for Every Application</p>
                        <h2>MS Flats</h2>
                        <p>MS flats are a versatile and durable material widely used across various industries, including construction, automotive, machinery manufacturing, and general engineering. Its strength makes it ideal for fabricating structural components, vehicle reinforcements, and tools. MS flats provide essential support and stability in numerous applications.</p>
                        <p>MS Flats are rectangular cross-section steel products used in fabrication and construction. Manufactured with precision, these sections ensure consistency in mechanical properties and easy processing.
                        </p>
                        <p>Their versatility, weldability, and machinability make MS Flats popular across a variety of industrial uses.</p>

                        <div className='GalleryImagesProducts'>
                            <img src="https://webtesting-upload.vercel.app/assets/flatbar6-KXA3lFiV.jpg" alt="" />
                            <img src="https://webtesting-upload.vercel.app/assets/flatbar2-AIX5AiwC.jpg" alt="" />
                        </div>

                    </div>


                </div>
            </>
        ),
        tableContent: (
            <div className='productTable'>
                <h2>Product Range & Specification</h2>
                <table>
                    <tr>
                        <th>Size M.M.</th>
                        <th>Wt. Kg./Mtr.</th>
                        <th>Size M.M.</th>
                        <th>Wt. Kg./Mtr.</th>
                    </tr>
                    <tr>
                        <td>50*6</td>
                        <td>2.35</td>
                        <td>100*6</td>
                        <td>4.70</td>
                    </tr>
                    <tr>
                        <td>50*8</td>
                        <td>3.14</td>
                        <td>100*8</td>
                        <td>6.28</td>
                    </tr>
                    <tr>
                        <td>50*10</td>
                        <td>3.92</td>
                        <td>100*10</td>
                        <td>7.85</td>
                    </tr>
                    <tr>
                        <td>50*12</td>
                        <td>4.71</td>
                        <td>100*12</td>
                        <td>9.42</td>
                    </tr>
                    <tr>
                        <td>50*16</td>
                        <td>6.28</td>
                        <td>100*16</td>
                        <td>12.56</td>
                    </tr>
                    <tr>
                        <td>50*20</td>
                        <td>7.85</td>
                        <td>100*20</td>
                        <td>15.70</td>
                    </tr>
                    <tr>
                        <td>50*25</td>
                        <td>9.81</td>
                        <td>100*25</td>
                        <td>19.6</td>
                    </tr>
                    <tr>
                        <td>65*6</td>
                        <td>3.00</td>
                        <td>125*6</td>
                        <td>5.89</td>
                    </tr>
                    <tr>
                        <td>65*8</td>
                        <td>4.10</td>
                        <td>125*8</td>
                        <td>7.85</td>
                    </tr>
                    <tr>
                        <td>65*10</td>
                        <td>5.10</td>
                        <td>125*10</td>
                        <td>9.81</td>
                    </tr>
                    <tr>
                        <td>65*12</td>
                        <td>6.12</td>
                        <td>125*12</td>
                        <td>11.78</td>
                    </tr>
                    <tr>
                        <td>65*16</td>
                        <td>8.16</td>
                        <td>125*16</td>
                        <td>15.70</td>
                    </tr>
                    <tr>
                        <td>65*20</td>
                        <td>10.20</td>
                        <td>125*20</td>
                        <td>19.62</td>
                    </tr>
                    <tr>
                        <td>65*25</td>
                        <td>12.75</td>
                        <td>125*25</td>
                        <td>24.53</td>
                    </tr>
                    <tr>
                        <td>75*6</td>
                        <td>3.53</td>
                        <td>150*6</td>
                        <td>7.07</td>
                    </tr>
                    <tr>
                        <td>75*8</td>
                        <td>4.71</td>
                        <td>150*8</td>
                        <td>9.42</td>
                    </tr>
                    <tr>
                        <td>75*10</td>
                        <td>5.90</td>
                        <td>150*10</td>
                        <td>11.78</td>
                    </tr>
                    <tr>
                        <td>75*12</td>
                        <td>7.10</td>
                        <td>150*12</td>
                        <td>14.13</td>
                    </tr>
                    <tr>
                        <td>75*16</td>
                        <td>9.42</td>
                        <td>150*16</td>
                        <td>18.84</td>
                    </tr>
                    <tr>
                        <td>75*20</td>
                        <td>11.80</td>
                        <td>150*20</td>
                        <td>23.55</td>
                    </tr>
                    <tr>
                        <td>75*25</td>
                        <td>14.70</td>
                        <td>150*25</td>
                        <td>29.44</td>
                    </tr>
                </table>

                <h2>Technical Composition of Mild Steel (IS 2062 Grade A/B)</h2>
                <table>
                    <tr>
                        <th>Element</th>
                        <th>Composition</th>
                    </tr>
                    <tr>
                        <td>Carbon (C)</td>
                        <td>0.15% - 0.23%</td>
                    </tr>
                    <tr>
                        <td>Manganese (Mn)</td>
                        <td>0.30% - 0.60%</td>
                    </tr>
                    <tr>
                        <td>Silicon (Si)</td>
                        <td>Max 0.40%</td>
                    </tr>
                    <tr>
                        <td>Sulphur (S)</td>
                        <td>Max 0.050%</td>
                    </tr>
                    <tr>
                        <td>Phosphorus (P)</td>
                        <td>Max 0.050%</td>
                    </tr>
                </table>

            </div>
        )

    },
    "Channels": {
        title: 'Precision-Made MS Channels for Every Industry',
        link: '/Products/Channels',
        mainTitle: "MS Channels",
        tagline: "Support and stability in every channel.",
        backgroundImages: [
            "https://webtesting-upload.vercel.app/assets/channels3-CZ3B0n8e.jpg",
            "https://webtesting-upload.vercel.app/assets/ChannelsBar1-BN9_sASO.jpeg",
        ],
        backgroundImage: "https://webtesting-upload.vercel.app/assets/channels3-CZ3B0n8e.jpg",
        stackImage: "https://webtesting-upload.vercel.app/assets/gchannels-Bl-utN2m.jpeg",
        rightSideStackColumn: (
            <>
                <div className='ColumnContainer'>

                    <img src="https://webtesting-upload.vercel.app/assets/channels3-CZ3B0n8e.jpg" alt="" />
                    <div>
                        <p>Strength and Versatility for Every Application</p>
                        <h2>MS Channels</h2>
                        <p>MS Channels are C-shaped steel components widely used in construction and industrial fabrication. Their strength and shape provide excellent load distribution, making them ideal for structural support.
                        </p>
                        <p>With high structural stability and easy weldability, MS Channels are crucial in heavy-duty applications.</p>

                        <div className='GalleryImagesProducts'>
                            <img src="https://webtesting-upload.vercel.app/assets/gchannels2-Bere5Un7.jpeg" alt="" />
                            <img src="https://webtesting-upload.vercel.app/assets/ChannelsBar1-BN9_sASO.jpeg" alt="" />
                        </div>



                    </div>

                </div>
            </>
        ),
        tableContent: (
            <div className='productTable' >
                <h2>Product Range & Specification</h2>

                <table>
                    <tr>
                        <th>Size M.M.</th>
                        <th>Wt. Kg./Mtr.</th>
                    </tr>
                    <tr>
                        <td>75*40</td>
                        <td>6.8</td>
                    </tr>
                    <tr>
                        <td>100*50</td>
                        <td>9.2</td>
                    </tr>
                </table>

                <h2>Technical Composition of Mild Steel (IS 2062 Grade A/B)</h2>
                <table>
                    <tr>
                        <th>Element</th>
                        <th>Composition</th>
                    </tr>
                    <tr>
                        <td>Carbon (C)</td>
                        <td>0.15% - 0.23%</td>
                    </tr>
                    <tr>
                        <td>Manganese (Mn)</td>
                        <td>0.30% - 0.60%</td>
                    </tr>
                    <tr>
                        <td>Silicon (Si)</td>
                        <td>Max 0.40%</td>
                    </tr>
                    <tr>
                        <td>Sulphur (S)</td>
                        <td>Max 0.050%</td>
                    </tr>
                    <tr>
                        <td>Phosphorus (P)</td>
                        <td>Max 0.050%</td>
                    </tr>
                </table>

            </div>

        )

    },
    "Round-Bars": {
        title: 'Precision-Made MS Round Bars for Every Industry',
        link: '/Products/Round-Bars',
        mainTitle: "MS Round Bars",
        tagline: "Precision crafted for enduring strength.",
        backgroundImage: "https://webtesting-upload.vercel.app/assets/RoundBars1-CGZDPqFq.jpeg",
        backgroundImages: [
            "https://webtesting-upload.vercel.app/assets/RoundBars1-CGZDPqFq.jpeg",
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
                        <p>MS Round Bars are long, cylindrical steel products widely used in construction, engineering, and manufacturing. These bars are known for their ductility and strength, conforming to IS 2062 standards.</p>
                        <p>MS Round Bars are easy to fabricate, weld, and machine, making them an essential product across industries.</p>

                        <div className='GalleryImagesProducts'>
                            <img src="https://webtesting-upload.vercel.app/assets/groundbar3-h5DyZF8G.jpeg" alt="" />
                            <img src="https://webtesting-upload.vercel.app/assets/groundbar2-BSwERkZb.jpeg" alt="" />
                        </div>

                    </div>

                </div>
            </>
        ),
        tableContent: (
            <div className='productTable'>
                <h2>Product Range & Specification</h2>
                <table>
                    <tr>
                        <th>Size M.M.</th>
                        <th>Rounds</th>
                    </tr>
                    <tr>
                        <td>16</td>
                        <td>1.58</td>
                    </tr>
                    <tr>
                        <td>20</td>
                        <td>2.47</td>
                    </tr>
                    <tr>
                        <td>25</td>
                        <td>3.85</td>
                    </tr>
                    <tr>
                        <td>28</td>
                        <td>4.83</td>
                    </tr>
                    <tr>
                        <td>30</td>
                        <td>5.55</td>
                    </tr>
                    <tr>
                        <td>32</td>
                        <td>6.31</td>
                    </tr>
                </table>

                <h2>Technical Composition of Mild Steel (IS 2062 Grade A/B)</h2>
                <table>
                    <tr>
                        <th>Element</th>
                        <th>Composition</th>
                    </tr>
                    <tr>
                        <td>Carbon (C)</td>
                        <td>0.15% - 0.23%</td>
                    </tr>
                    <tr>
                        <td>Manganese (Mn)</td>
                        <td>0.30% - 0.60%</td>
                    </tr>
                    <tr>
                        <td>Silicon (Si)</td>
                        <td>Max 0.40%</td>
                    </tr>
                    <tr>
                        <td>Sulphur (S)</td>
                        <td>Max 0.050%</td>
                    </tr>
                    <tr>
                        <td>Phosphorus (P)</td>
                        <td>Max 0.050%</td>
                    </tr>
                </table>

            </div>
        ),
    },
    "Angles": {
        title: 'Precision-Made MS Angles for Every Industry',
        link: '/Products/Angles',
        mainTitle: "MS Angles",
        tagline: "Angle your build toward strength.",
        backgroundImage: "https://webtesting-upload.vercel.app/assets/angles5-CWuBRgWS.jpg",
        backgroundImages: [
            "https://webtesting-upload.vercel.app/assets/angles2-BfrxcBO7.jpg",
            "https://webtesting-upload.vercel.app/assets/angles5-CWuBRgWS.jpg",
            "https://webtesting-upload.vercel.app/assets/angles4-DRl15On2.jpg",
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

                        <p>MS Angles are L-shaped structural components made of mild steel, offering strength and stability for various load-bearing applications. These versatile products are corrosion-resistant and conform to IS 2062 standards, ensuring durability and structural integrity.
                        </p>
                        <p>MS Angles are known for their easy weldability and machinability, ideal for demanding structural applications.

                        </p>

                        <div className='GalleryImagesProducts'>
                            <img src="https://webtesting-upload.vercel.app/assets/gangles2-C70vGWoX.jpeg" alt="" />
                            <img src="https://webtesting-upload.vercel.app/assets/gangles3-B0OBK59y.webp" alt="" />
                        </div>
                    </div>

                </div>
            </>
        ),
        tableContent: (
            <div className='productTable'><h2>Product Range & Specification</h2>
                <table>
                    <tr>
                        <th>Size M.M.</th>
                        <th>Wt. Kg./Mtr.</th>
                        <th>Size M.M.</th>
                        <th>Wt. Kg./Mtr.</th>
                    </tr>
                    <tr>
                        <td>35*35*5</td>
                        <td>2.6</td>
                        <td>65*65*5</td>
                        <td>4.8</td>
                    </tr>
                    <tr>
                        <td>40*40*5</td>
                        <td>3.0</td>
                        <td>65*65*6</td>
                        <td>5.8</td>
                    </tr>
                    <tr>
                        <td>40*40*6</td>
                        <td>3.5</td>
                        <td>65*65*8</td>
                        <td>7.7</td>
                    </tr>
                    <tr>
                        <td>45*45*5</td>
                        <td>3.4</td>
                        <td>75*75*6</td>
                        <td>6.8</td>
                    </tr>
                    <tr>
                        <td>50*50*5</td>
                        <td>3.8</td>
                        <td>75*75*8</td>
                        <td>8.9</td>
                    </tr>
                    <tr>
                        <td>50*50*6</td>
                        <td>4.5</td>
                        <td>75*75*10</td>
                        <td>11.0</td>
                    </tr>
                </table>

                <h2>Technical Composition of Mild Steel (IS 2062 Grade A/B)</h2>
                <table>
                    <tr>
                        <th>Element</th>
                        <th>Composition</th>
                    </tr>
                    <tr>
                        <td>Carbon (C)</td>
                        <td>0.15% - 0.23%</td>
                    </tr>
                    <tr>
                        <td>Manganese (Mn)</td>
                        <td>0.30% - 0.60%</td>
                    </tr>
                    <tr>
                        <td>Silicon (Si)</td>
                        <td>Max 0.40%</td>
                    </tr>
                    <tr>
                        <td>Sulphur (S)</td>
                        <td>Max 0.050%</td>
                    </tr>
                    <tr>
                        <td>Phosphorus (P)</td>
                        <td>Max 0.050%</td>
                    </tr>
                </table>

            </div>
        ),

    }
};

const MSLProduct = () => {
    const { service } = useParams();
    const currentService = serviceData[service];

    if (!currentService) {
        return <p>Service not found</p>;
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [service]);
    const currentMainTitle = currentService.mainTitle;
    const filteredProducts = Object.values(serviceData).filter(item => item.mainTitle !== currentMainTitle).slice(0, 3);
    const [backgroundImage, setBackgroundImage] = useState(currentService.backgroundImage);
    useEffect(() => {
        const imageArray = Array.isArray(currentService.backgroundImages)
            ? currentService.backgroundImages
            : [currentService.backgroundImage];

        let currentIndex = 0;

        const interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % imageArray.length;
            setBackgroundImage(imageArray[currentIndex]);
        }, 3000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, [currentService]);

    return (
        <>
            <section
                className="AnimatedStackCards"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "background-image 0.5s ease",
                }}
            >
                <div className='LeftSideContentajust'>

                    <div>
                        <button className="Dynamicbtn" data-aos="fade-up"
                            data-aos-delay={`${100}`}>
                            <div>
                                {currentService.mainTitle}
                            </div>
                            <div>
                                <Link to="/Products" style={{ display: "flex", alignItems: "center" }}>
                                    See&nbsp;more&nbsp;&nbsp;<FaArrowRightLong />
                                </Link>
                            </div>
                        </button>
                        <h1 data-aos="fade-up"
                            data-aos-delay={`${300}`}>{currentService.tagline}</h1>

                    </div>
                </div>
                <div className="Overlayback"></div>
            </section>
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

                <br />

            </div>
            <div className='TableContainer'>
                {currentService.tableContent}
            </div>
            <div className='moreProductsSection'>
                <div className='HeadingContainer'>
                    <h3>View More Products</h3>
                </div>

                <Row gutter={[16, 16]} style={{ margin: "0px" }}>
                    {filteredProducts.map((product, index) => (
                        <Col key={index} lg={8} md={8} sm={24} style={{ padding: "2px" }}>
                            <Link to={product.link}>
                                <div className='productCard' data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 200}>
                                    <img src={product.backgroundImage} alt={`${product.mainTitle} Icon`} />
                                    <h3>{product.mainTitle}</h3>
                                </div>
                            </Link>
                        </Col>
                    ))}
                </Row>
            </div>
        </>
    );
};

export default MSLProduct;
