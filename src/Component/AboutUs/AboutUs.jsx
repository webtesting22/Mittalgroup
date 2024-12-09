import React, { useEffect } from 'react'
import './AboutUs.css'
import { Col, Row } from "antd"
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import carousal3 from "../Home/carousal3.jpeg"
import Image1 from "./founder5.jpg"
import Image2 from "./founder1.jpg"
import Image3 from "./founder2.jpg"
import Image4 from "./founder3.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import backImage from "./backImage.png"
const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    AOS.init({ once: false }); // Initialize AOS with default options
  }, []);

  const qualityPoints = [
    {
      icon: "/images/Quality Icons/durability.svg",
      title: "High Durability",
    },
    {
      icon: "/images/Quality Icons/corrosion.svg",
      title: "Corrosion Resistant",
    },
    {
      icon: "/images/Quality Icons/engineering.svg",
      title: "Precision Engineering",
    },
    {
      icon: "/images/Quality Icons/manufacturing.svg",
      title: "Sustainable Manufacturing",
    },
    {
      icon: "/images/Quality Icons/engineering.svg",
      title: "Cost-Effective Solutions",
    },
    {
      icon: "/images/Quality Icons/steel.svg",
      title: "Custom Steel Solutions",
    },
    {
      icon: "/images/Quality Icons/timely.svg",
      title: "Timely Delivery",
    },
    {
      icon: "/images/Quality Icons/iso.svg",
      title: "ISO Certified Quality",
    },
    {
      icon: "/images/Quality Icons/technology.svg",
      title: "Innovative Technologies",
    },
    {
      icon: "/images/Quality Icons/team.svg",
      title: "Expert Team",
    },
    {
      icon: "/images/Quality Icons/quality.svg",
      title: "Stringent Quality Control",
    },
    {
      icon: "/images/Quality Icons/testing.svg",
      title: "Comprehensive Testing",
    },
    {
      icon: "/images/Quality Icons/customer.svg",
      title: "Customer-Centric Approach",
    },
    {
      icon: "/images/Quality Icons/products.svg",
      title: "Wide Range of Products",
    },
    {
      icon: "/images/Quality Icons/technique.svg",
      title: "Advanced Production Techniques",
    },
  ];
  const data = [
    {
      img: "/images/high-quality_green.png",
      alt: "showing the quality of mild steel",
      title: "Quality",
      description: " Ever since the inception of the group, we have approached every product with the goal of achieving excellence. We deliver the best to our stakeholders and never compromise on the quality of the process and the products we manufacture."
    },
    {
      img: "/images/idea1_green.png",
      alt: "power transmission tower made up of mild steel",
      title: "Innovation",
      description: "We follow through on the promises we make and that has always been at our core. We translate our belief in transparency into our business model and this is what makes us better every day. Our stakeholders are always at the center of our decisions and that has helped us take the right decisions all along."
    },
    {
      img: "/images/satisfication_green.png",
      alt: "customer satisfaction with product",
      title: "Customer Satisfaction",
      description: "Over the years we have created a cohesive framework based on trust. It encapsulates us and our stakeholders and helps us in building strong, meaningful relations with all our stakeholders.",
    },
    {
      img: "/images/operation_green.png",
      alt: "strong bond of bridge",
      title: "Integrity",
      description: "Over the years we have created a cohesive framework based on trust. It encapsulates us and our stakeholders and helps us in building strong, meaningful relations with all our stakeholders.",
    },

  ]

  return (
    <>
      <div className='TopcontainerPart'>
        <div className='InsideTop'>
          <div className='blackOverlay'>

          </div>
          <div className='ContentContainerAdjust'>
            <div>
              <h1>ABOUT US</h1>
              <p>Building Trust Through Quality Service</p>
            </div>
          </div>
          <div className='backimageContainer'>
            <img src={carousal3} alt="" />
          </div>
          <div className="BottomContainer" style={{ padding: "5px" }}>
            <div className="marquee-container">
              <div className="marquee">
                {qualityPoints.map((point, index) => (
                  <div key={index} className="quality-point">
                    <img src={point.icon} />
                    <p>{point.title}</p>
                  </div>
                ))}
              </div>
              <div className="marquee">
                {qualityPoints.map((point, index) => (
                  <div key={index} className="quality-point">
                    <img src={point.icon} />
                    <p>{point.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className='AboutUsSection' style={{ position: "relative" }}>
        <div className='AboutUsContentContainer'>
          <div className='FounderContainer' data-aos="fade-up">
            <Row>
              <div className='BackImageOverlay'>
                <img src={backImage} alt="" />
              </div>
              <Col lg={12} md={12}>
                <Swiper
                  modules={[Autoplay]}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  className="founderSlider" id='founderSlides'>
                  <SwiperSlide> <img src={Image1} alt="founders" /> </SwiperSlide>
                  <SwiperSlide> <img src={Image2} alt="slide2" /> </SwiperSlide>
                  <SwiperSlide> <img src={Image3} alt="slide3" /> </SwiperSlide>
                  <SwiperSlide> <img src={Image4} alt="slide4" /> </SwiperSlide>
                </Swiper>

              </Col>
              <Col lg={12} md={12}>
                <div className='FounderInfo'>
                  <div>
                    <h1 className='MainTitle'>
                      The Vision Behind <span style={{ color: "#9aa966" }}>Our Success
                      </span>
                    </h1>
                    <p>MSL, <b style={{ fontWeight: "500" }}>Founded by Ajay Mittal and Atul Mittal</b>, has grown to become a leader
                      in steel solutions, specializing in the production of high-quality Mild Steel products.
                      Headquartered in Changodar, Ahmedabad, we have over a decade of experience delivering
                      precision-engineered steel products to key industries such as construction, automotive, and
                      power transmission.</p>
                  </div>
                </div>
              </Col>
            </Row>


          </div>
        </div>
      </section>

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
      </div>
      <section className='AboutUsSection'>
        <div id='CollapseEdit' >
          <div  >
            <div className='HeadingContainer'>
              <h2>Our Values</h2>
            </div>

            <p> We at MSL  believe strongly in our core values of Excellence, Integrity and Trust. We strive to make ourselves better and surpass the goals we have, redefining success at every milestone we achieve.</p>
            <br />
            <div className='MSLValuesCards'>
              <Row style={{ width: "100%" }}>
                {data.map((item, index) => (
                  <Col lg={6} md={12} xs={12} >
                    <div className='Card' data-aos="fade-up"
                      data-aos-delay={`${index * 100}`}>
                      <div className='AnimatedCards'>
                        <div className='BlackOverlay'>
                        </div>
                        <div className='animatedcardcontent'>
                          <img src={item.img} alt={item.alt} />
                          <h2>{item.title}</h2>
                        </div>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </div>
          </div>
        </div>

      </section>

    </>
  )
}

export default AboutUs;
