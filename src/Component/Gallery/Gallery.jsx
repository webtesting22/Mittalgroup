import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import gallery1 from "/images/gallery1.jpg";
import gallery2 from "/images/gallery2.jpg"
import gallery3 from "/images/gallery3.jpg"
import gallery4 from "/images/gallery4.jpg"
import gallery5 from "/images/gallery5.jpg"
import gallery6 from "/images/gallery6.jpg"
import gallery7 from "/images/gallery7.jpg"
import gallery8 from "/images/gallery8.jpg"
import gallery9 from "/images/gallery9.jpg"
import gallery10 from "/images/gallery10.jpg"
import gallery11 from "/images/gallery11.jpg"
import gallery12 from "/images/gallery12.jpg"
import gallery13 from "/images/gallery13.jpg"
import gallery14 from "/images/gallery14.jpg"
import gallery15 from "/images/gallery15.jpg"
import gallery16 from "/images/gallery16.jpg"
import gallery17 from "/images/gallery17.jpg"
import gallery18 from "/images/gallery18.jpg"
import gallery19 from "/images/gallery19.jpg"
import gallery20 from "/images/gallery20.jpg"
import gallery21 from "/images/gallery21.jpg"
import gallery22 from "/images/gallery22.jpg"
import gallery23 from "/images/gallery23.jpg"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './Gallery.css';
import Home from '../Home/Home';
import {Row,Col} from "antd";

export default function Gallery() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const imageMap = [
    {
      img: gallery1,
      alt: "gallery1",
    },
    {
      img: gallery2,
      alt: "gallery2",
    },
    {
      img: gallery3,
      alt: "gallery3",
    },
    {
      img: gallery4,
      alt: "gallery4",
    },
    {
      img: gallery5,
      alt: "gallery5",
    },
    {
      img: gallery6,
      alt: "gallery6",
    },
    {
      img: gallery7,
      alt: "gallery7",
    },
    {
      img: gallery8,
      alt: "gallery8",
    },
    {
      img: gallery9,
      alt: "gallery9",
    },
    {
      img: gallery10,
      alt: "gallery10",
    },
    {
      img: gallery11,
      alt: "gallery11",
    },
    {
      img: gallery12,
      alt: "gallery12",
    },
    {
      img: gallery13,
      alt: "gallery13",
    },
    {
      img: gallery14,
      alt: "gallery14",
    },
    {
      img: gallery15,
      alt: "gallery15",
    },
    {
      img: gallery16,
      alt: "gallery16",
    },
    {
      img: gallery17,
      alt: "gallery17",
    },
    {
      img: gallery18,
      alt: "gallery18",
    },
    {
      img: gallery19,
      alt: "gallery19",
    },
    {
      img: gallery20,
      alt: "gallery20",
    },
    {
      img: gallery21,
      alt: "gallery21",
    },
    {
      img: gallery22,
      alt: "gallery22",
    },
    {
      img: gallery23,
      alt: "gallery23",
    },
  ]
  return (

    <>
      <Home/>
      <h1>IMAGE GALLERY</h1>
      <Row>
      {/* {imageMap.map((item,index)=>(
        <Col lg={6}>
        <div className='galleryImg'>
        <img src={item.img} />
        </div>
        </Col>
      ))} */}
      </Row>
    </>
  );
}
