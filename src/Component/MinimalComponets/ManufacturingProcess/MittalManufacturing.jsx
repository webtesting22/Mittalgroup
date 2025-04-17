import React, { useEffect } from "react";
import { Row, Col } from 'antd';
import "./ManufacturingProcess.css"
import "../../AboutUs/AboutUs.css";
const MSLManufacturing = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <><div className='TopcontainerPart'>
            <div className='InsideTop'>
                <div className='blackOverlay'>

                </div>
                <div className='ContentContainerAdjust'>
                    <div>
                        <h1>INFRASTRUCTURE</h1>
                    </div>
                </div>
                <div className='backimageContainer'>
                    <video src="https://webtesting-upload.vercel.app/assets/Mittal%20Manufacturing-CglOzyGp.mp4"
                        autoPlay
                        loop={true}
                        playsInline
                        muted
                        style={{ objectFit: "cover" }}
                        height={"100%"}
                        width={"100%"} />
                </div>
            </div>
        </div>
            <section id="ManufacturingProcess">

                <div data-aos="fade-up" data-aos-duration="1000">
                    <div className="HeadingContainer">
                        <h2>Manufacturing process</h2>
                    </div>
                    <Row className='About-Row row1'>
                        <Col lg={10} md={24} >
                            <div className='About-img' data-aos-duration="1000" data-aos="fade-right" >
                                <img className="manufacturingImage" src="https://webtesting-upload.vercel.app/assets/1-min-BnI64RRP.jpg" alt="Manufacturing" />
                            </div>
                        </Col>
                        <Col lg={1} md={0} />
                        <Col lg={13} md={24} data-aos-duration="1000" data-aos="fade-left" data-aos-delay="200">
                            <div className='About-content'>
                                <p>At MSL, we operate two fully equipped manufacturing units in Changodar,
                                    Ahmedabad. Our commitment to excellence is reflected in our semi-automated re-rolling mill, which
                                    allows us to consistently deliver high-quality products. Each batch undergoes rigorous testing in
                                    our state-of-the-art laboratories to ensure compliance with both mechanical and chemical standards.
                                </p>
                            </div>
                        </Col>

                    </Row>

                    <Row className='About-Row row2'>
                        <Col lg={13} md={24} data-aos-duration="1000" data-aos="fade-right">
                            <div className='About-content'>
                                <p>The projects are designed and installed by experts having an annual production capacity ranges from 30,000 MT to 36,000 MT collectively in both the units. All the machineries, stands & passes are kept in a row perfectly to maintain the consistency and pace of the process. The speed of the machines, stands is matched to the speed of the rolling material which is made possible by organized machinery to get quality end products. High quality mechanical & technical personnel are employed to inspect the process and quality at various stages of the process. Pulverised coal fired Re-heating furnaces are installed to maintain the temperature and provide sufficient heat to the core of raw material which result in better rolling of product.</p>
                                <p>Beside production, keeping the atmosphere green and clean is a major motive at MSL. Both the units are approved from GPCB and environment is the premises are maintained accordingly.</p>

                            </div>
                        </Col>
                        <Col lg={1} md={0} />
                        <Col lg={10} md={24} data-aos-duration="1000" data-aos="fade-left" data-aos-delay="200">
                            <div className='About-img'>
                                <img className="manufacturingImage" src="https://webtesting-upload.vercel.app/assets/5-min-BZ_xFyxz.jpg" alt="Manufacturing" />
                            </div>
                        </Col>
                    </Row>

                    <div className="HeadingContainer">
                        <h2>5S methodology</h2>
                    </div>
                    <p>We follow the <b>5S manufacturing methodology</b>—Sort, Straighten, Shine, Standardize, and Sustain—to
                        optimize efficiency and maintain an organized, high-performance production environment.</p>

                    <Row gutter={[16, 16]}>
                        <Col lg={18} md={24}>
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
                        <Col lg={6} md={24}>
                            <div className="fiveSImage"><img src="/images/5s.png" /></div>
                        </Col>
                    </Row>
                    <div style={{ paddingTop: "2rem" }}>
                        <Row>
                            <Col>
                                <div className="HeadingContainer">
                                    <h2>Energy Efficiency and Sustainable Operations</h2>
                                </div>
                                <p>
                                    Our setup utilizes coal-fueled furnaces, and to enhance our energy efficiency, we have integrated coal gas recuperators. These recuperators capture and reuse waste heat from the furnace, significantly reducing coal consumption and overall energy use. By recuperating heat that would otherwise be lost, we contribute to both energy conservation and cost efficiency, aligning with our eco-friendly practices. This system allows us to reduce our environmental impact while maintaining efficient production processes.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </div>
            </section >
        </>
    )
}
export default MSLManufacturing