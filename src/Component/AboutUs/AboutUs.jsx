import React, { useEffect } from 'react'
import './AboutUs.css'
import bg1 from "./Card1.avif";
import bg2 from "./Card2.avif";
import bg3 from "./Card3.avif";
import bg4 from "./Card4.avif";
import { Col, Row, Image } from "antd"
import cofounder from "/images/co-founder.jpg"
import gallery2 from "/images/gallery2.jpg"
import picasaImg14 from "/images/picasa-img14.jpg"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Home from '../Home/Home'
import BackImage from "./BackImage.jpeg"
import DiffrentTestImage from "../Navbar/navigation.jpg"
import MittalGroupLogo from "../../../public/images/MittalGroupLogo.png"
import MittalGallllery from '../Mittalgallery/MittalGallery';
import carousal3 from "../Home/carousal3.jpeg"
import Image1 from "./founder5.jpg"
import Image2 from "./founder1.jpg"
import Image3 from "./founder2.jpg"
import Image4 from "./founder3.jpg"
import Image5 from "./what.jpg"
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

import backImage from "./backImage.png"


const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const images = [DiffrentTestImage, BackImage];
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

  ]
  const data = [
    {
      img: bg1,
      title: "Quality",
      description: " Ever since the inception of the group, we have approached every product with the goal of achieving excellence. We deliver the best to our stakeholders and never compromise on the quality of the process and the products we manufacture."
    },
    {
      img: bg2,
      title: "Innovation",
      description: "We follow through on the promises we make and that has always been at our core. We translate our belief in transparency into our business model and this is what makes us better every day. Our stakeholders are always at the center of our decisions and that has helped us take the right decisions all along."
    },
    {
      img: bg3,
      title: "Customer Satisfaction",
      description: "Over the years we have created a cohesive framework based on trust. It encapsulates us and our stakeholders and helps us in building strong, meaningful relations with all our stakeholders.",
    },
    {
      img: bg4,
      title: "Integrity",
      description: "Over the years we have created a cohesive framework based on trust. It encapsulates us and our stakeholders and helps us in building strong, meaningful relations with all our stakeholders.",
    },

  ]

  return (
    <>
      {/* <Home images={images} /> */}
      <div className='TopcontainerPart'>
        <div className='InsideTop'>
          <div className='blackOverlay'>

          </div>
          <div className='ContentContainerAdjust'>
            <div>
              <h1>ABOUT MITTAL</h1>
              <p>Building Trust Through Quality Service</p>
            </div>
          </div>
          <div className='backimageContainer'>
            <img src={carousal3} alt="" />
          </div>
        </div>
      </div>
      <section className='AboutUsSection' style={{ position: "relative" }}>
        <div className='AboutUsContentContainer'>
          <div className='FounderContainer' data-aos="fade-up">
            {/* <h2>About Us</h2>
            <b><i>Yesterday's Vision, Today's Sucess, Tomorrow's Promise</i></b>
            <b><i>Our Legacy of Excellence</i></b> */}
            {/* <br /> */}
            {/* <br /> */}
            {/* <p>An identity is the reflection of ideals, goals and aspirations that make an organisation. At <b>Mittal Section Ltd. (MSL)</b> we believe that coming together is a beginning, Working together is progress & Forging ahead together is success. Our misson is to provide highest quality of end product & services through a spirit of dynamism with a will to achieve full customer delight.</p> */}



            <Row>
              <div className='BackImageOverlay'>
                <img src={backImage} alt="" />
              </div>
              <Col lg={12} md={12}>
                {/* <div className='foundersImage'> */}
                  <Swiper pagination={true}
                   modules={[Pagination, Autoplay]}
                  //  autoplay={{ delay: 2500, disableOnInteraction: false }}
                    className="founderSlider">
                    <SwiperSlide> <img src={Image1} alt="slide1"/> </SwiperSlide>
                    <SwiperSlide> <img src={Image2} alt="slide2"/> </SwiperSlide>
                    <SwiperSlide> <img src={Image3} alt="slide3"/> </SwiperSlide>
                    <SwiperSlide> <img src={Image4} alt="slide4"/> </SwiperSlide>
                    <SwiperSlide> <img src={Image5} alt="slide5"/> </SwiperSlide>
                  </Swiper>

                {/* </div> */}
              </Col>
              <Col lg={12} md={12}>
                <div className='FounderInfo'>
                  <div>
                    <h1 className='MainTitle'>
                      The Vision Behind <span style={{ color: "#9aa966" }}>Our Success
                      </span>
                    </h1>
                    <p>Mittal Sections Limited, <b style={{ fontWeight: "500" }}>Founded by Ajay Mittal and Atul Mittal</b>, has grown to become a leader
                      in steel solutions, specializing in the production of high-quality Mild Steel products.
                      Headquartered in Changodar, Ahmedabad, we have over a decade of experience delivering
                      precision-engineered steel products to key industries such as construction, automotive, and
                      power transmission.</p>
                  </div>
                </div>
              </Col>
            </Row>

            {/* <p><b>Mittal Sections Limited (MSL)</b> is one of the largest steel rolling mill located at Changodar,
              Ahmedabad. MSL is into the rolling of complete ranige of MS sections like<b> Angles, Channels, Squares,
                Rounds & Flat bars</b> etc. <b>MSL's</b> quest for excellence through various technologies & quality initiatives
              has helped to establish us as one of the largest manufactureres of entire range. Since inception of the
              organisation we have grown in reserves, profits and customer base, <b>MSL's</b> large talent pool of skilled technicians,
              engineers & managers enable the delivery of superior quality product helping the organisation to build a strong,
              self reliant and modern industrial base.</p>
            <p><b>MSL </b>is promoted by young, energetic, experienced technocrats having long commercial experience. The project is equipped with abundance of power, raw material, man power with growing rate of industrialisation</p> */}
          </div>
        </div>
      </section>
      {/* 
      <div className='OutMV'>
        <div className='blackOverlay'>

        </div>
        <div style={{ position: "sticky", zIndex: "5555" }}>
          <div className='HeadingContainer '>
            <p>Forging a Future of Strength and Innovation</p>
            <br />
            <h2>Quality steel products for industries, driven by innovation and reliability.</h2>
          </div>
          <div className='MissionVisionParent'>
            <div style={{ marginRight: "4rem" }}>
              <h2>Our Vision</h2>
              <p>To empower our partners with innovative and quality steel solutions, achieving sustainable growth and a brighter future for all.</p>
            </div>
            <div>
              <h2>Our Mission</h2>
              <p>We strive to deliver world-class products by understanding the needs of our clients and delivering success at every step of the way.</p>
            </div>
          </div>
        </div>
      </div> */}
      <section className='AboutUsSection'>
        {/* <Row>
              <Col lg={12} md={24} data-aos="fade-up">
                <div className=" AboutUsimagesStyle">
                  {Images.map((item, index) => (
                    <div key={index}
                      style={{
                        marginLeft: index % 2 === 0 ? "0px" : "0px",
                        marginTop: "10px",
                        marginBottom: "10px"
                      }}>
                      <Image src={item.image} alt="" />
                    </div>
                  ))}
                </div>
              </Col>
              <Col lg={12} md={24} data-aos="fade-up">

                <div className=" AboutUsParagraph">
                 
                  <div>
                    <h2>Our Vision:</h2>
                    <p>To empower our partners with innovative and quality steel solutions, achieving sustainable growth and a brighter future for all.</p>

                  </div>
                  <div>
                    <h2>Our Mission:</h2>
                    <p>We strive to deliver world-class products by understanding the needs of our clients and delivering success at every step of the way.
                    </p>
                  </div>

                 
                </div>
              </Col>
            </Row> */}
        {/* 
        <div className='WhyChooseSection'>
          <div className='HeadingContainer'>
            <p>Expertise You Can Trust</p>
            <h2>Why Choose Mittal Sections Limited?</h2>
          </div>

          <p>
            At Mittal Sections Limited, we believe that just like a steel bar that rolls out of a stand can never return, our word is our bond.
            We stand by our promises and deliver products that exceed industry standards. Our commitment to quality, innovation, and sustainability
            makes us a trusted partner for industries across Gujarat.
          </p>

        </div> */}
        <div id='CollapseEdit' >
          <div  >
            <div className='HeadingContainer'>
              <h2>Our Values</h2>
            </div>

            <p> We at Mittal Sections Limited believe strongly in our core values of Excellence, Integrity and Trust. We strive to make ourselves better and surpass the goals we have, redefining success at every milestone we achieve.</p>
            <br />
            <div className='MittalValuesCards'>
              <Row style={{ width: "100%" }}>
                {data.map((item, index) => (
                  <Col lg={6} md={12} xs={12} sm={12}>
                    <div className='Card' data-aos="fade-up"
                      data-aos-delay={`${index * 100}`}>
                      <div className='AnimatedCards'>
                        <div className='BlackOverlay'>
                        </div>
                        <img src={item.img} alt="" />
                        <h4>{item.title}</h4>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>
        {/* <hr /> */}
        {/* <div>
            <MittalGallllery />
          </div> */}

      </section>

    </>
  )
}

export default AboutUs;
