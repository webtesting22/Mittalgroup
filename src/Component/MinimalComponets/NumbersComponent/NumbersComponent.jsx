import React, { useState, useEffect, useRef } from "react";
import { Row, Col } from "antd";
import CountUp from "react-countup"
import "./NumbersComponent.css";
// import BackImage from "./BackImage.jpeg"
const AboutCompany = () => {
    const [offsetY, setOffsetY] = useState(0);
    const [startCount, setStartCount] = useState(false); // State to trigger count-up animation
    const sectionRef = useRef(null); // Ref for the observer

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                // Always trigger the counter reset each time the section is in view
                if (entry.isIntersecting) {
                    setStartCount(false);  // Reset the count
                    setTimeout(() => {
                        setStartCount(true);  // Start the count-up animation again
                    }, 0);  // Delay the start to ensure reset happens
                }
            },
            {
                threshold: 0.5, // Trigger when 50% of the element is visible
            }
        );

        const currentRef = sectionRef.current;
        if (currentRef) {
            observer.observe(currentRef); // Observe the section
        }

        // Cleanup observer when component unmounts
        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);
    // Update scroll position
    const handleScroll = () => {
        setOffsetY(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const CompanyData = [
        {
            points: "Metric Tonnes Manufactured",
            numbers: 600000
        },
        {
            points: "Projects",
            numbers: 60
        },
        {
            points: "Clients",
            numbers: 1400
        },

    ];
    return (
        <>
            <section id="AboutCompanyContainer" className="section_Padding">
                {/* <div className="backGroundAttachment">

                </div> */}
                <div className="DesignedContainer">
                    <h1 data-aos="fade-up"><span style={{ color: "#9aa966" }}>Shaping Excellence</span> in Steel Solutions</h1>
                    <p data-aos="fade-up">Driving the future of infrastructure with high-quality, durable, and innovative steel products.</p>
                </div>

                <div className="CompanyContentRow">

                    <Row>
                        <Col lg={10} md={24}>
                            <div className="ListItemUl" ref={sectionRef}>
                                <ul>
                                    {CompanyData.map((item, index) => (
                                        <div key={index} className="statCard">
                                            {startCount && ( // Only render CountUp when in view
                                                <CountUp
                                                    start={0}
                                                    suffix="+"
                                                    end={item.numbers} // Target value
                                                    duration={3} // Animation duration
                                                    delay={0.3 * index} // Staggered delay for each card
                                                />
                                            )}
                                            <li>{item.points}</li>
                                        </div>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col lg={6} md={24} xs={24}>
                            <div className="MiddleImageContainer">
                                <img style={{
                                    transform: `translateY(${offsetY * 0.1}px)`, // Adjust speed with the multiplier
                                }} src="https://webtesting-upload.vercel.app/assets/G3-BqsGTIGe.png" alt="" />
                            </div>
                        </Col>
                        <Col lg={8}>
                            <div style={{ display: "flex", alignItems: "center", height: "100%" }}>
                                <div>
                                    <h2 style={{textAlign:"center"}}>BIS And ISO Certified</h2>
                                    <div className="SideContentContainer">
                                        <div className="ISOLogoContainer"><img src="/images/Isi.png" /></div>
                                        <div className="ISOLogoContainer"><img src="/images/ISO.png" /></div>
                                    </div>
                                    {/* <p>
                                        Our company holds both BIS (Bureau of Indian Standards) certification and ISO
                                        certification, reflecting our unwavering commitment to quality, safety, and
                                        reliability. These certifications ensure that our products and processes adhere
                                        to the highest global standards, delivering excellence in every aspect.
                                    </p> */}


                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                {/* <div className="AnimatedParallaxContainer">
                    <div >
                        <img
                            className="parallax-image"
                            style={{
                                transform: `translateY(${offsetY * 0.1}px)`, // Adjust speed with the multiplier
                            }}
                            src="https://plus.unsplash.com/premium_photo-1683120974913-1ef17fdec2a8?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        
                    </div>
                    <div>
                        <img
                            className="parallax-image"
                            style={{
                                transform: `translateY(${offsetY * 0.1}px)`, // Adjust speed for second image
                            }}
                            src="https://images.unsplash.com/photo-1639004643579-7286ae5a771d?q=80&w=2835&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                            alt=""
                        />
                        
                    </div>
                </div> */}
                {/* <div className="FixedImage" /> */}
                {/* <div style={{ position: "sticky" }}>
                    <Row>
                        <Col lg={12} md={24}>
                            <div className="AboutCompanyContent">
                                <div className="sectionHeading"><h2>Company Overview</h2></div>
                                <p>We are a leading provider of Design and Verification solutions.</p>
                                <p>
                                    Truechip, the Verification IP specialist, is a leading provider of
                                    Design and Verification solutions – which help you accelerate your
                                    design, lowering the cost and risks associated with the development
                                    of your ASIC, FPGA, and SOC. Truechip is a privately held company,
                                    with a global footprint and sales coverage across North America,
                                    Europe, and Asia.
                                </p>
                                <p>
                                    Truechip has been serving customers for the last 10 years in VLSI
                                    with strong and experienced leadership. Truechip provides the
                                    industry’s first 24x5 support model with specialization in VIP
                                    integration, customization, and SOC Verification.
                                </p>
                                <p>Get in Touch with us to learn about our Services.</p>
                            </div>
                        </Col>
                        <Col lg={12} md={24}>
                            <div className="VideoContainer">
                                <video
                                    className="BackgroundVideo"
                                    src={AboutContentVideo}
                                    autoPlay
                                    loop
                                    muted
                                />
                            </div>

                        </Col>
                    </Row>

                </div> */}
            </section>
        </>
    )
}
export default AboutCompany