import React, { useState, useEffect, useRef } from "react";
import './Investors.css';
import investor from '/images/investors.jpg';
import { Row, Col } from 'antd';
import DocumentData from "./DocumentData.jsx";
import pdfIcon from "/images/pdf.png";

const CorporatePolicy = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // State to manage selected company (from Corporate Policy)
    const [selectedCompany, setSelectedCompany] = useState("MSL");
    const documentSectionRef = useRef(null);

    // Handle company selection (left sidebar click)
    const handleCompanyClick = (company) => {
        setSelectedCompany(company);

        // Scroll to the document section after selecting a company
        const documentSectionPosition = documentSectionRef.current.offsetTop;
        const offset = 50;
        window.scrollTo({
            top: documentSectionPosition - offset,
            behavior: "smooth",
        });
    };

    // Render documents for the selected company
    const renderDocuments = (documents) => {
        const entries = Object.entries(documents);

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

    // Get documents of the selected company from Corporate Policy section
    const currentDocuments = DocumentData["Corporate Policy"][selectedCompany];

    // Get list of all companies in Corporate Policy
    const groupCompanies = Object.keys(DocumentData["Corporate Policy"]);

    return (
        <>
            <div className="investorsSection">
                <div className='TopcontainerPart'>
                    <div className='InsideTop'>
                        <div className='blackOverlay'></div>
                        <div className='ContentContainerAdjust'>
                            <div>
                                <h1>INVESTORS</h1>
                                <p>Find Out More About Our Corporate Policies</p>
                            </div>
                        </div>
                        <div className='backimageContainer'>
                            <img src={investor} alt="Investors" />
                        </div>
                    </div>
                </div>

                <div className="documentsSection" ref={documentSectionRef}>
                    <Row>
                        <Col lg={6} sm={24} xs={24}>
                            <div className="companyList">
                                <ul>
                                    {/* Render list of Corporate Policy dynamically */}
                                    {groupCompanies.map((company) => (
                                        <li
                                            key={company}
                                            onClick={() => handleCompanyClick(company)}
                                            style={{
                                                fontWeight: selectedCompany === company ? "bold" : "normal",
                                                backgroundColor: selectedCompany === company ? "white" : "whitesmoke",
                                            }}
                                        >
                                            {company}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </Col>
                        <Col lg={1} sm={0} xs={0} />
                        <Col lg={17} sm={24} xs={24}>
                            <div>
                                <h1 className="companyHeading">{selectedCompany}</h1>
                                {renderDocuments(currentDocuments)}
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    );
};

export default CorporatePolicy;
