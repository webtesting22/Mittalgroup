import React, {
    useState, useEffect, useRef
} from "react";
import { Row, Col } from "antd";
import AbMittalLogo from "../../../public/images/MittalGroupLogo.png"
import MITTALSECTIONSUNIT2 from "../../../public/images/big-mittal-logo-section.png"
import MITTALSTEEL from "../../../public/images/big-mittal-steel-logo.png"
import AMSTEEL from "../../../public/images/am-steel-logo.png"
import AROOINDUSTRIES from "../../../public/images/big-aroo-industries-logo.png"
import BRLOBAL from "../../../public/images/br-global-logo.png"
import ARSTEEL from "../../../public/images/big-ar-steel-logo.png"
import ARMAANIMPEX from "../../../public/images/big-arman-impex-logo.png"
import ARMAANYATEXTILES from "../../../public/images/big-armaanya-textiles-logo.png"
const MittalOffice = () => {
    // const [scrollPosition, setScrollPosition] = useState(0);
    // const [isVisible, setIsVisible] = useState(false);
    // const paragraphRef = useRef(null);

    // // Intersection Observer to detect when the paragraph is in view
    // useEffect(() => {
    //     const observer = new IntersectionObserver(
    //         (entries) => {
    //             const [entry] = entries;
    //             if (entry.boundingClientRect.top <= window.innerHeight - 200) {
    //                 setIsVisible(true);
    //             }
    //         },
    //         { threshold: 0.1 }
    //     );

    //     if (paragraphRef.current) {
    //         observer.observe(paragraphRef.current);
    //     }

    //     return () => {
    //         if (paragraphRef.current) {
    //             observer.unobserve(paragraphRef.current);
    //         }
    //     };
    // }, []);

    // // Scroll detection only starts when paragraph is visible
    // useEffect(() => {
    //     const handleScroll = () => {
    //         if (isVisible) {
    //             const maxScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    //             const scrollPercent = (window.scrollY / maxScrollHeight) * 100;
    //             setScrollPosition(scrollPercent);
    //         }
    //     };

    //     window.addEventListener('scroll', handleScroll);

    //     return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //     };
    // }, [isVisible]);

    // // The width (progress) of the paragraph fill based on scroll position
    // const paragraphStyle = {
    //     backgroundImage: `linear-gradient(to right, black ${scrollPosition}%, gray ${scrollPosition}%)`,
    //     WebkitBackgroundClip: 'text',
    //     color: 'transparent',
    //     transition: 'background-position 0.3s ease',
    //     // fontSize: "80px"
    // };


    const AddressContainer = [
        {
            AddressTitle: "AB Mittal House (Corporate Office)",
            AddressDescription: "1, Sona Roopa, Opp. Lal Bungalow, C.G. Road, AHMEDABAD -380009, GUJARAT – INDIA",
            Logo: AbMittalLogo
        },
        {
            AddressTitle: "MITTAL SECTIONS LIMITED (UNIT- II )",
            AddressDescription: "23, Changodar Industrial Estate, B/H Trivedi Marble, Sarkhej- Bavla Highway , Changodar , AHMEDABAD -380009, GUJARAT – INDIA"
            , Logo: MITTALSECTIONSUNIT2
        },
        {
            AddressTitle: "MITTAL SECTIONS LIMITED (UNIT- I )",
            AddressDescription: "14, Changodar Industrial Estate, B/H Trivedi Marble, Sarkhej- Bavla Highway , Changodar , AHMEDABAD -380009, GUJARAT – INDIA"
            , Logo: MITTALSECTIONSUNIT2
        },
        {
            AddressTitle: "MITTAL STEEL",
            AddressDescription: "Plot NO.1, Block No. 382 Changodar Industrial Estate,Trivedi Marble Lane, Sarkhej- Bavla Highway , Changodar , AHMEDABAD -380009, GUJARAT – INDIA"
            , Logo: MITTALSTEEL
        },
        {
            AddressTitle: "AM STEEL",
            AddressDescription: "Plot NO.4, Block No. 382 Changodar Industrial Estate,Trivedi Marble Lane, Sarkhej- Bavla Highway , Changodar , Dist. AHMEDABAD -380009, GUJARAT – INDIA",
            Logo: AMSTEEL
        },
        {
            AddressTitle: "AROO INDUSTRIES",
            AddressDescription: "138/3 ,143/1 , 143/2 , Village Lodariyal, Bavla - Sanand Road, Taluka Sanand Ahmedabad -382230",
            Logo: AROOINDUSTRIES
        },
        {
            AddressTitle: "BR GLOBAL",
            AddressDescription: "Plot NO.1/A Block No. 382 Changodar Industrial Estate,Trivedi Marble Lane, Sarkhej- Bavla Highway,Changodar, AHMEDABAD -380009, GUJARAT – INDIA",
            Logo: BRLOBAL
        },
        {
            AddressTitle: "AR STEEL",
            AddressDescription: "1, Sona Roopa Apt., Opp. Lal Bungalow, C.G. Road, Ahmedabad -380009, Gujarat – India",
            Logo: ARSTEEL
        },
        {
            AddressTitle: "ARMAAN IMPEX",
            AddressDescription: "1, Sona Roopa Apt., Opp. Lal Bungalow, C.G. Road, Ahmedabad -380009, Gujarat – India",
            Logo: ARMAANIMPEX
        },
        {
            AddressTitle: "ARMAANYA TEXTILES",
            AddressDescription: "138/3 ,143/1 , 143/2 , Village Lodariyal, Bavla - Sanand Road, Taluka Sanand Ahmedabad -382230",
            Logo: ARMAANYATEXTILES
        },
    ]
    return (
        <>
            <section className="OfficeAdressContainer">
                {/* <p ref={paragraphRef} style={paragraphStyle}>
                    This is a demo paragraph. As you scroll down, this text will gradually fill line by line from gray to black, just like a progress bar. The animation starts when this paragraph is 200px from the top.
                </p> */}
                <div className="sectionPadding">
                    <Row>
                        {AddressContainer.map((item, index) => (
                            <Col lg={12} md={24} key={index}>
                                <div className="MittalAdressContainer">
                                    <div style={{ width: "200px",}}>
                                    <img src={item.Logo} alt="" style={{ width:"150px",aspectRatio: "3/2", objectFit: "contain" }} />
                                    </div>
                                    <div style={{width:"100%"}}> 
                                        <h4>{item.AddressTitle}</h4>
                                        <p>{item.AddressDescription}</p>
                                        <hr />
                                    </div>
                                </div>
                            </Col>
                        ))}
                    </Row>

                </div>
            </section>
        </>
    )
}
export default MittalOffice