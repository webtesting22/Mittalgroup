import React, { useState, useEffect, useRef, useLayoutEffect } from "react";
import './Investors.css';
import investor from '/images/investors.jpg'
import "../AboutUs/AboutUs.css";
import { Row, Col } from 'antd';
import { Radio, Tabs } from 'antd';
import DocumentData from "./DocumentData.jsx";
import pdfIcon from "/images/pdf.png";

const Investors = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    const categoryRefs = useRef({});
    
    const [selectedCategory, setSelectedCategory] = useState("Annual Return");
    const [selectedCompany, setSelectedCompany] = useState("MSL");

    const documentSectionRef = useRef(null);
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        const sectionRef = categoryRefs.current[category];
        if (sectionRef) {
            const rect = sectionRef.getBoundingClientRect();
            const documentSectionPosition = rect.top + window.scrollY;  // Add the current scroll position
            console.log('scroll to section position (using getBoundingClientRect):', documentSectionPosition);
            window.scrollTo({
                top: documentSectionPosition-100, // Adjust the offset as needed
                behavior: 'smooth',
            });
        }
        
    };
    useEffect(() => {
        // Ensure smooth scroll behavior is applied universally
        document.documentElement.style.scrollBehavior = "smooth";  // Enable smooth scroll globally
        return () => {
            document.documentElement.style.scrollBehavior = ""; // Reset after component unmount
        };
    }, []);
    const renderDocuments = (data) => {
        const entries = Object.entries(data);

        return (
            <Row gutter={[16, 16]}>
                {entries.map(([key, value], index) => {
                    if (typeof value === "object" && !value.title) {
                        return (
                            <Col span={24} key={key}>
                                <h1 className="InvestorHeadingContainer" ref={(el) => categoryRefs.current[key] = el}>
                                    {key}
                                </h1>
                                {renderDocuments(value)}
                            </Col>
                        );
                    } else if (typeof value === "object" && value.title) {
                        const { title, filePath } = value;
                        return (
                            <Col xs={24} sm={24} md={8} key={key}>
                                <div className="documentCard" data-aos="fade-up" data-aos-duration="500" data-aos-delay={index * 100}>
                                    <a href={filePath} download={title} target="_blank" rel="noopener noreferrer">
                                        <img src={pdfIcon} alt="PDF" />
                                        <p>{title}</p>
                                    </a>
                                </div>
                            </Col>
                        );
                    }
                })}
            </Row>
        );
    };

    const currentDocuments = DocumentData["Issuer Company"][selectedCompany];
    const categories = Object.keys(DocumentData["Issuer Company"][selectedCompany]);


    return (
        <>
            <div className="investorsSection">
                <div className='TopcontainerPart'>
                    <div className='InsideTop'>
                        <div className='blackOverlay'>

                        </div>
                        <div className='ContentContainerAdjust'>
                            <div>
                                <h1>INVESTORS</h1>
                                <p>Find Out More About Our Issuer Company</p>
                            </div>
                        </div>
                        <div className='backimageContainer'>
                            <img src={investor} alt="" />
                        </div>
                    </div>
                </div>
                <div className="documentsSection" ref={documentSectionRef}>
                    <Row>
                        <Col lg={6} sm={24} xs={24}>
                            <div className="companyList">
                                <ul>
                                    {categories.map((category, index) => (
                                        <li
                                            key={category}
                                            onClick={() => handleCategoryClick(category)}
                                            style={{
                                                fontWeight: selectedCategory === category ? "bold" : "normal",
                                                backgroundColor: selectedCategory === category ? "white" : "whitesmoke",
                                            }}
                                        >
                                            {category}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col lg={1} sm={0} xs={0} />
                        <Col lg={17} sm={24} xs={24}>
                            <div>

                                <>
                                    <h1 className="companyHeading">MSL</h1>
                                    {renderDocuments(currentDocuments)}
                                </>
                            </div>
                        </Col>
                    </Row>

                    <div>


                    </div>
                </div>
            </div>
        </>
    )
}
export default Investors;