import React, { useEffect } from 'react'
import './AboutUs.css'
import bg1 from "/images/bg1.jpg";
import bg2 from "/images/bg2.jpg";
import bg3 from "/images/bg3.jpg";
import bg4 from "/images/bg4.jpg";
import bg5 from "/images/bg5.jpg";
import bg6 from "/images/bg6.jpg";
import bg7 from "/images/bg7.jpg";
import { Col, Row, Image } from "antd"
import cofounder from "/images/co-founder.jpg"
import gallery2 from "/images/gallery2.jpg"
import picasaImg14 from "/images/picasa-img14.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Home from '../Home/Home'
import BackImage from "./BackImage.jpeg"
import { Collapse } from 'antd';
import MittalGroupLogo from "../../../public/images/MittalGroupLogo.png"
const AboutUs = () => {
  const items = [
    {
      key: '1',
      label: (
        <>
          <div className='MittalShape'>
          </div> <h4>Excellence</h4>
          <img src={MittalGroupLogo} alt="" />
        </>
      ),
      children: <><p>Ever since the inception of the group, we have approached every product with the goal of achieving excellence. We deliver the best to our stakeholders and never compromise on the quality of the process and the products we manufacture.</p></>,
    },
    {
      key: '2',
      label: (
        <>
          <div className='MittalShape'>
          </div> <h4>Integrity</h4>
          <img src={MittalGroupLogo} alt="" />
        </>
      ),
      children: <><p>We follow through on the promises we make and that has always been at our core. We translate our belief in transparency into our business model and this is what makes us better every day. Our stakeholders are always at the center of our decisions and that has helped us take the right decisions all along.</p></>,
    },
    {
      key: '3',
      label: (
        <>
          <div className='MittalShape'>
          </div><h4> Trust</h4>
          <img src={MittalGroupLogo} alt="" />
        </>
      ),
      children: <><p>Over the years we have created a cohesive framework based on trust. It encapsulates us and our stakeholders and helps us in building strong, meaningful relations with all our stakeholders.</p></>,
    },
    {
      key: '4',
      label: (
        <>
          <div className='MittalShape'>
          </div> <h4>Our USP</h4>
          <img src={MittalGroupLogo} alt="" />
        </>
      ),
      children: <><p>We know what it takes to stay ahead of the curve.
        We are firm non-believer of the vision- ‘Under commitment, over deliver’. We do commit our best to our customers, and we do deliver our best. Our USP is fuelled by this vision. The cornerstone of our USP is firmly balanced on our four elemental perspectives. Quality, Service, Integrity and Commitment.
        Our learning tool is our customer’s behavioral analysis, and our satisfaction is our customer’s trust. We are here to build healthy relationships with our customers. That’s why, our commitment towards our customers is our pride, and our integrity designs the quality of our products.</p></>,
    },
    {
      key: '5',
      label: (
        <>
          <div className='MittalShape'>
          </div> <h4>Company Culture</h4>
          <img src={MittalGroupLogo} alt="" />
        </>
      ),
      children: <><p>We believe that culture breeds commitments. From the very starting point of our journey, the entire workforce behind AB Mittal group was focused on building a strong and healthy company culture. We do believe that our vision is our purpose and our strong values help us to outsmart every roadblock we face on the way of achieving our purpose.
        We hire bright and healthy minds that help us to maintain the free flow of a deviation less knowledge processing environment at the workplace. The core company values are deeply enshrined in our daily practices, and we forge our quality products with these values, commitments and endeavours.</p></>,
    },
    {
      key: '6',
      label: (
        <>
          <div className='MittalShape'>
          </div>
          <h4>Corporate Social values</h4>
          <img src={MittalGroupLogo} alt="" />
        </>
      ),
      children: <><p> Every business is a failed purpose without society. We believe in that, and we are aware of our corporate social responsibilities. Our social wing is strong and widely unrolled. We are a proud donor at Pathmeda Godham . It’s an animal welfare trust, and they help domestic and road animals. AB Mittal group is also a proud donor at Akshaya Patra, a big non-profit foundation who serves food to 1.6 million children across 11 states in India. The continuous stewardship of Ab Mittal group for ensuring the quality living standards of its workforce has successfully enacted an accidental and health insurance for its workers.</p></>,
    },
  ];
  useEffect(() => {
    AOS.init({ once: false }); // Initialize AOS with default options
  }, []);
  const Images = [
    {
      image: cofounder
    },
    {
      image: gallery2
    },
    // {
    //   image: picasaImg14
    // }
  ]
  const data = [
    {
      img1: bg7,
      title: "Excellence",
      description: " Ever since the inception of the group, we have approached every product with the goal of achieving excellence. We deliver the best to our stakeholders and never compromise on the quality of the process and the products we manufacture."
    },
    {
      img1: bg2,
      title: "Integrity",
      description: "We follow through on the promises we make and that has always been at our core. We translate our belief in transparency into our business model and this is what makes us better every day. Our stakeholders are always at the center of our decisions and that has helped us take the right decisions all along."
    },
    {
      img1: bg3,
      title: "Trust",
      description: "Over the years we have created a cohesive framework based on trust. It encapsulates us and our stakeholders and helps us in building strong, meaningful relations with all our stakeholders.",
    },
    {
      img1: bg4,
      title: "Our USP",
      description: "We know what it takes to stay ahead of the curve.We are firm non-believer of the vision- ‘Under commitment, over deliver’. We do commit our best to our customers, and we do deliver our best. Our USP is fuelled by this vision. The cornerstone of our USP is firmly balanced on our four elemental perspectives. Quality, Service, Integrity and Commitment.Our learning tool is our customer’s behavioral analysis, and our satisfaction is our customer’s trust. We are here to build healthy relationships with our customers. That’s why, our commitment towards our customers is our pride, and our integrity designs the quality of our products.",
    },
    {
      img1: bg5,
      title: "Company Culture",
      description: "We believe that culture breeds commitments. From the very starting point of our journey, the entire workforce behind AB Mittal group was focused on building a strong and healthy company culture. We do believe that our vision is our purpose and our strong values help us to outsmart every roadblock we face on the way of achieving our purpose.We hire bright and healthy minds that help us to maintain the free flow of a deviation less knowledge processing environment at the workplace. The core company values are deeply enshrined in our daily practices, and we forge our quality products with these values, commitments and endeavours.",
    },
    {
      img1: bg6,
      title: "Corporate Social Values",
      description: " Every business is a failed purpose without society. We believe in that, and we are aware of our corporate social responsibilities. Our social wing is strong and widely unrolled. We are a proud donor at Pathmeda Godham . It’s an animal welfare trust, and they help domestic and road animals. AB Mittal group is also a proud donor at Akshaya Patra, a big non-profit foundation who serves food to 1.6 million children across 11 states in India. The continuous stewardship of Ab Mittal group for ensuring the quality living standards of its workforce has successfully enacted an accidental and health insurance for its workers.",
    },
  ]

  return (
    <>
      <Home backgroundImage={BackImage} />
      <section >
        <div className='AboutUsContentContainer'>
          {/* <div className='sectionHeading'><h2><span>A</span>bout Us</h2></div> */}
          <Row>
            <Col lg={12} md={24}>
              <div className="sectionPadding AboutUsimagesStyle">
                {Images.map((item, index) => (
                  <div key={index}
                    style={{
                      marginLeft: index % 2 === 0 ? "10px" : "0px",
                      marginTop: "10px",
                      marginBottom: "10px"
                    }}>
                    <Image src={item.image} alt="" />
                  </div>
                ))}
              </div>
            </Col>
            <Col lg={12} md={24}>

              <div className="sectionPadding AboutUsParagraph">
                <h2>“Realizing dreams, Achieving goals”</h2>
                <p>AB Mittal group of companies is one of the fastest growing enterprises in the world. Leading with a global approach AB Mittal group is as diverse as it is dynamic. Ever since its inception in the year 2006, the group has diversifies operations and expanded into various sectors that include Structured Steel Products, Textiles, Entertainment, and Chemicals.</p>
                <p>Under the leadership of Mr. Atul B. Mittal the C.E.O. & Director of the group and Mr. Ajay B. Mittal, the Chairman, the group has explored new horizons and redefined the pinnacle of success with every milestone they achieved. Over the years, the group has come a long way and added value to the current market setup.</p>
                <p>According to Mr. Ajay B. Mittal, the group has always believed that ‘Necessity is the mother of all inventions’ and understood the market to deliver quality products crafted to perfection.</p>
                <br /><br />
                <h2>Our Mission:</h2>
                <p>We at AB Mittal Group strive towards delivering world class product and services to our clients. Working towards creating tangible solutions by understanding the needs of our clients, delivering success at every step of the way is at our core.</p>
                <p>We are not just about creating fantastic products; we are more and work towards being more every day. Our perseverance defines us and translates into everything we do. Our mission is to be better every day, delivering the best to everyone associated with and be at the pinnacle of success with our clients.</p>
               
              </div>
            </Col>
          </Row>


        </div>
        <div id='CollapseEdit'>
        <h2>Our Values</h2>
        <p> We at AB Mittal group believe strongly in our core values of Excellence, Integrity and Trust. We strive to make ourselves better and surpass the goals we have, redefining success at every milestone we achieve.</p> 
        <br /><br />
          <Collapse accordion defaultActiveKey={['1']} items={items} />
        </div>
      </section>

    </>
  )
}

export default AboutUs;
