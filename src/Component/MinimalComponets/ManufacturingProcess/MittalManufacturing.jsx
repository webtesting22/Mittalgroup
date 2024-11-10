import React, { useEffect } from "react";
import { Row, Col } from 'antd';
import "./ManufacturingProcess.css"

const MSLManufacturing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <section id="ManufacturingProcess">
                <div className='processServices' data-aos="fade-up">

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
                    <div className="HeadingContainer">
                        <h2>Manufacturing process</h2>
                    </div>
                    <p>
                        At MSL , we operate two fully equipped manufacturing units in Changodar,
                        Ahmedabad. Our commitment to excellence is reflected in our fully automated re-rolling mill, which
                        allows us to consistently deliver high-quality products. Each batch undergoes rigorous testing in
                        our state-of-the-art laboratories to ensure compliance with both mechanical and chemical standards.

                    </p>
                    <p>We follow the <b>5S manufacturing methodology</b>—Sort, Straighten, Shine, Standardize, and Sustain—to
                        optimize efficiency and maintain an organized, high-performance production environment.</p>

                    <Row gutter={[16, 16]}>
                        <Col lg={14}>
                            <p><b>Sort</b></p>
                            <ul>
                                <li> Action: Remove unnecessary items from the workspace.</li>
                                <li>Impact: Reduces clutter, minimizes waste, and frees up space, promoting efficient resource use.
                                </li>
                            </ul>
                            <p><b>Set in Order</b></p>
                            <ul>
                                <li>Action: Arrange essential tools and materials for easy access.</li>
                                <li>Impact: Streamlines operations, reduces downtime, and optimizes material flow, saving time and energy.</li>
                            </ul>
                            <p><b>Shine </b></p>
                            <ul>
                                <li>Action: Clean equipment and workspaces regularly.</li>
                                <li>Impact: Improves equipment lifespan, reduces the risk of breakdowns, and enhances product quality.</li>
                            </ul>
                            <p><b>Standardize</b></p>
                            <ul>
                                <li>Action: Create consistent procedures and guidelines.</li>
                                <li>Impact: Ensures efficiency, reduces errors, and maintains a high standard of safety and cleanliness.</li>
                            </ul>
                            <p><b>Sustain</b></p>
                            <ul>
                                <li>Action: Cultivate a culture of continuous improvement and accountability.</li>
                                <li>Impact: Drives long-term commitment to sustainability and efficiency through regular training and engagement.</li>
                            </ul>
                            <p>By implementing 5S, steel manufacturers can boost productivity, reduce waste, and contribute to sustainable practices in their industry.</p>
                        </Col>
                        <Col lg={10}>
                            <div className="manufacturingImage"><img src="/images/5s.png" /></div>
                        </Col>
                    </Row>
                    <div style={{ paddingTop: "2rem" }}>
                        <Row>
                            <Col>
                                <div className="HeadingContainer">
                                    <h2>Sustainability and Recycling Practices</h2>
                                </div>
                                {/* <h4 style={{ marginTop: "1rem" }}>Commitment and Sustainability</h4> */}
                                <p>Sustainability is integral to our operations. We actively recycle steel waste like mill scale and end cuttings,
                                    repurposing them for various applications. Mill scale is sold to vendors for strengthening cement and improving oil
                                    combustion, while end cuttings are reused as scrap in furnaces. These practices contribute to reduced environmental
                                    impact while promoting the efficient use of resources.</p>
                                <br></br>
                            </Col>
                        </Row>
                    </div>


                    <div className="HeadingContainer">
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
                    {/* <div style={{ padding: "2rem 0rem" }}>
                        <div className="HeadingContainer">
                            <h2>Manufacturing and Operations</h2>
                        </div>

                        <h4 style={{ marginTop: "1rem" }}>Precision Manufacturing for Excellence</h4>
                        <p>At MSL , we operate two fully equipped manufacturing units in Changodar,
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
                    </div> */}


                </div>
            </section >
        </>
    )
}
export default MSLManufacturing