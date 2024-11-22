import React, { useState, useEffect, useRef } from "react";
import "./NumbersComponent.css";
import { Row, Col } from "antd";

// Data Array
const NumberData = [
    {
        imgsrc: "/images/factory.gif",
        number: 600000,
        data: "Metric Tonnes Manufactured",
        comparison: "Equivalent to 59+ Eiffel Towers",
    },
    {
        imgsrc: "/images/feedback.gif",
        number: 1400,
        data: "Clients",
        comparison: "In 20+ Industries",
    },
    {
        imgsrc: "/images/project.gif",
        number: 60,
        data: "Projects",
        comparison: "Average Project: 10,000 Metric Tonnes",
    },
];

const NumbersComponent = () => {
    const [counts, setCounts] = useState([0, 0, 0]); // Array for three numbers
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    // Array of target numbers
    const targetNumbers = [600000, 1400, 60];

    const startCounting = () => {
        const duration = 2000; // 2 seconds
        const interval = 100; // 50 ms
        const steps = Math.ceil(duration / interval); // Total steps for the animation

        // Calculate uniform increments so all numbers finish at the same time
        const increments = targetNumbers.map((num) => num / steps);

        let currentCounts = [0, 0, 0];
        let currentStep = 0;

        const intervalId = setInterval(() => {
            if (currentStep < steps) {
                currentCounts = currentCounts.map(
                    (current, index) => Math.min(current + increments[index], targetNumbers[index])
                );
                setCounts([...currentCounts]);
                currentStep++;
            } else {
                clearInterval(intervalId); // Stop when all numbers reach their targets
            }
        }, interval);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
                else {
                    setIsVisible(false);
                }
            },
            { threshold: 0.5 }
        );

        if (containerRef.current) {
            observer.observe(containerRef.current);
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);
    useEffect(() => {
        if (isVisible) {
            setCounts([0, 0, 0]); // Reset counts
            startCounting(); // Start animations
        }
    }, [isVisible]);
    return (
        <div
            className="numbers-container HomePageClientSection"
            ref={containerRef}
        >
            <div>
                <Row>
                    <Col lg={12}>
                        <div className="ImagesContainer">
                           <div className="firstNumber"> <h1>{counts[2]}+</h1> <h2>Projects</h2><h3>Average Project Size 10,000 Metric Tonnes</h3></div>
                            <img
                                src="https://webtesting-upload.vercel.app/assets/G1-CjhU0Zn4.png"
                                alt=""
                            />




                            <img
                                src="https://webtesting-upload.vercel.app/assets/G4-COAkdo_n.png"
                                alt=""
                            />
                            <div className="secondNumber"><h1>{counts[1]}+</h1> <h2>Clients</h2><h3>in 20+ Industries</h3></div>

                        </div>
                    </Col>
                    <Col lg={12}>
                        <h1>{counts[0]}+</h1><h2>Metric Tonnes Manufactured</h2><h3>Equivalent to 59+ Eiffel Towers</h3>
                    </Col>
                </Row>
            </div>
            {/* <Row>
                {NumberData.map((item, index) => (
                    <Col
                        lg={8}
                        md={24}
                        xs={24}
                        key={index}
                        data-aos="fade-up"
                        data-aos-duration="1000"
                        data-aos-delay={index * 200}
                    >
                        <div className="number-card">
                            <div className="icon-container">
                                <img src={item.imgsrc} alt={item.data} />
                            </div>
                            <h3 className="number">{count[item.data] || 0}+</h3>
                            <p className="data">{item.data}</p>
                            {item.comparison && (
                                <p className="comparison">
                                    <i
                                        className="bx bx-line-chart"
                                        style={{ color: "white" }}
                                    ></i>
                                    {item.comparison}
                                </p>
                            )}
                        </div>
                    </Col>
                ))}
            </Row> */}
        </div>
    );
};

export default NumbersComponent;
