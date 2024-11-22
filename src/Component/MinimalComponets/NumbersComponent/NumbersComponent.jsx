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
    const [count, setCount] = useState({});
    const containerRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    const startCounting = () => {
        const duration = 2000; // 2 seconds
        const interval = 50; // 50 ms
        const steps = Math.ceil(duration / interval); // Total steps for the animation

        // Calculate increments for each item
        const increments = NumberData.map((item) =>
            Math.ceil(item.number / steps)
        );

        let currentStep = 0;

        const intervalId = setInterval(() => {
            if (currentStep < steps) {
                setCount((prevCount) => {
                    const newCounts = { ...prevCount };
                    NumberData.forEach((item, index) => {
                        const currentCount = prevCount[item.data] || 0;
                        newCounts[item.data] = Math.min(
                            currentCount + increments[index],
                            item.number
                        );
                    });
                    return newCounts;
                });
                currentStep++;
            } else {
                clearInterval(intervalId); // Stop animation
            }
        }, interval);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
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
            setCount({}); // Reset count
            startCounting(); // Start the animation
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
                            
                            <img
                                src="https://webtesting-upload.vercel.app/assets/G1-CjhU0Zn4.png"
                                alt=""
                            />
                            <img
                                src="https://webtesting-upload.vercel.app/assets/G4-COAkdo_n.png"
                                alt=""
                            />
                        </div>
                    </Col>
                    <Col lg={12}></Col>
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
