import React, { useState, useEffect, useRef } from "react";
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
    const [selectedCategory, setSelectedCategory] = useState("Annual Return");
    const [selectedCompany, setSelectedCompany] = useState("MSL");

    const documentSectionRef = useRef(null);

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);

        const documentSectionPosition = documentSectionRef.current.offsetTop;
        const offset = 50;
        window.scrollTo({
            top: documentSectionPosition - offset,
            behavior: "smooth",

        });
    };

    const renderDocuments = (data) => {
        const entries = Object.entries(data);

        return (
            <Row gutter={[16, 16]}>
                {entries.map(([key, value], index) => {
                    if (typeof value === "object" && !value.title) {
                        return (
                            <Col span={24} key={key}>
                                <h1 className="InvestorHeadingContainer">{key}</h1>
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
                                    {/* Render categories like Annual Return, Corporate Policy dynamically */}
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