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
                <div className='processServices ' data-aos="fade-up">

                    {/* <div className="productsContainer">
                    <h1>Our Products</h1>
                    <Row>
                        <Col lg={12}>
                            <div className="productCard">Flat Bars</div>
                        </Col>
                        <Col lg={12}>
                            <div className="productCard">Round Bars</div>
                        </Col>
                        <Col lg={12}>
                            <div className="productCard">Channels</div>
                        </Col>
                        <Col lg={12}>
                            <div className="productCard">Angles</div>
                        </Col>
                    </Row>
                </div> */}
                    {/* <div > */}

                    <div className="productTitle">
                        <h2>Product Range and Specification</h2>
                    </div>
                    <br />
                    <div id='TableContainers' data-aos="fade-up">

                        <div>
                            <h4>Angles</h4>
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
                            <div style={{ width: "100%" }}>
                                <h4>Round & Squares</h4>
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
                                <div >
                                    <h4>Channels</h4>
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
                                </div>
                            </div>
                        </div>

                        <div>
                            <h4>Flats</h4>
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
                        </div>
                        <div>
                            <h4>Technical Composition of Mild Steel (IS 2062 Grade A/B)</h4>
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
                    </div>
                    <div>
                        <div className="productTitle">
                            <h2>Manufacturing and Operations</h2>
                        </div>

                        <h4 style={{ marginTop: "1rem" }}>Precision Manufacturing for Excellence</h4>
                        <p>At Mittal Sections Limited, we operate two fully equipped manufacturing units in Changodar,
                            Ahmedabad. Our commitment to excellence is reflected in our fully automated re-rolling mill, which
                            allows us to consistently deliver high-quality products. Each batch undergoes rigorous testing in
                            our state-of-the-art laboratories to ensure compliance with both mechanical and chemical standards.</p>

                        <p>We follow the <b>5S manufacturing methodology</b>—Sort, Straighten, Shine, Standardize, and Sustain—to
                            optimize efficiency and maintain an organized, high-performance production environment.</p>
                        <br></br>
                        <h4>Energy Efficiency and Sustainable Operations</h4>
                        <p>Our setup utilizes coal-fueled furnaces, and to enhance our energy efficiency, we have integrated
                            <b> coal gas recuperators.</b> These recuperators capture and reuse waste heat from the furnace, significantly
                            reducing coal consumption and overall energy use. By recuperating heat that would otherwise be lost, we
                            contribute to both energy conservation and cost efficiency, aligning with our eco-friendly practices.
                            This system allows us to reduce our environmental impact while maintaining efficient production processes.</p>
                        <br></br>
                        <h4>Testing and Quality Assurance</h4>
                        <p>Our commitment to quality is uncompromising. Every batch of finished goods is tested for its mechanical and
                            chemical properties to ensure consistent quality. We are an ISI-certified and BIS-approved manufacturer, committed
                            to meeting the highest industry standards.</p>
                        <br></br>
                    </div>
                    <div>
                        <div className="productTitle">
                            <h2>Sustainability and Recycling Practices</h2>
                        </div>
                        <h4 style={{ marginTop: "1rem" }}>Commitment and Sustainability</h4>
                        <p>Sustainability is integral to our operations. We actively recycle steel waste like mill scale and end cuttings,
                            repurposing them for various applications. Mill scale is sold to vendors for strengthening cement and improving oil
                            combustion, while end cuttings are reused as scrap in furnaces. These practices contribute to reduced environmental
                            impact while promoting the efficient use of resources.</p>
                        <br></br>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Products;