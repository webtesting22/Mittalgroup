import React, { useEffect } from 'react';
import './ContactUs.css';
import { Row, Col } from "antd"
import { Checkbox, Form, Input } from 'antd';
import Home from '../Home/Home';
// import emailjs from '@emailjs/browser';

const { TextArea } = Input;

const ContactUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const onFinish = (values) => {
    console.log('Success:', values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  return (

    <>
      <div className='contactContainer'>
        <div className='HeadingContainer' data-aos="fade-up" data-aos-duration="1000" >
          <h1 >CONTACT US</h1>
          <p >To learn more about our products, services, or potential partnerships, reach out to us.
            Together, we can build a stronger, more sustainable future for the industries that rely on us.</p>
        </div>

        <br /><br />
        <div className='map' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
          <div>
          <h2>Registered Office:</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7343.67102500053!2d72.5537858339964!3d23.02981095646011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84f368a87e9b%3A0x2f2116eeb183aab6!2sMSL%20Sections%20Limited!5e0!3m2!1sen!2sin!4v1729144211887!5m2!1sen!2sin"
              style={{ width: "100%", height: "400px", border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
          {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117583.20310360797!2d72.30290499726563!3d22.932723799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e90eb72248c01%3A0x26dc0f41028db9d4!2sMittal%20Sections%20Limited!5e0!3m2!1sen!2sin!4v1731910149116!5m2!1sen!2sin"
            style={{ width: "100%", height: "400px", border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          <div>
            <h2>Factory Unit:</h2>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117583.20310360797!2d72.30290499726563!3d22.932723799999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e90eb72248c01%3A0x26dc0f41028db9d4!2sMittal%20Sections%20Limited!5e0!3m2!1sen!2sin!4v1731910149116!5m2!1sen!2sin"
              style={{ width: "100%", height: "400px", border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>

        <Row className='contact-details-row'>
          <Col lg={12} xs={24} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300"  >
            <div className="contact-details">
              <h2>Contact Details</h2>
              <p ><b>Registered Office: </b><a href="https://maps.app.goo.gl/rfcWFEJZN66dkx7YA" target="_blank">1, Sona Roopa, Opp. Lal Bungalow, C.G. Road, Ahmedabad-380009.</a></p>
              <p ><b>Factory Unit I: </b><a href="https://maps.app.goo.gl/jLJzi4Veib8yfsAA7" target="_blank">14, Changodar Industrial Estate, B/H Trivedi Marble, Sarkhej-Bavla Highway, Changodar, Ahmedabad-382213.</a></p>
              <p ><b>Factory Unit II: </b><a href="https://maps.app.goo.gl/jLJzi4Veib8yfsAA7" target="_blank">23, Changodar Industrial Estate, B/H Trivedi Marble, Sarkhej-Bavla Highway, Changodar, Ahmedabad-382213.</a></p>
              <p>
                <b>Phone: </b><a href='tel:07926465484'>079-26465484</a>
                {/* <b>Phone:</b><a href="tel:+917926405484">+917926405484</a>, */}
                {/* <a href="tel:+917926406484">+917926406484</a> */}
              </p>
              <p><b>Email: </b><a href="mailto:info@mittalsections.com">info@mittalsections.com</a></p>
            </div>
          </Col>
          <Col lg={1} md={0} xs={0} />
          <Col lg={11} xs={24} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <div className="contact-form">
              <h2>Reach Out To Us!</h2>
              <br />
              <Form
                name="basic"
                labelCol={{
                  span: 5,
                }}
                wrapperCol={{
                  span: 19,
                }}
                style={{
                  maxWidth: 600,

                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Form.Item
                  label="Your Name:"
                  name="name"
                  style={{
                    textAlign: "left"
                  }}
                  rules={[
                    {
                      required: true,
                      message: 'Please write your username!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Your Email"
                  name="email"
                  rules={[
                    {
                      required: true,
                      message: 'Please write your email!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Subject"
                  name="Subject"
                  rules={[{
                    required: true,
                    message: "Please write subject!"
                  }]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Your Message:"
                  name="message"

                >
                  <TextArea rows={3} />
                </Form.Item>


                <div className='ContentContainerHome'>
                  <Form.Item
                  >
                    <button type="primary" htmlType="submit">
                      Submit
                    </button>
                  </Form.Item>
                </div>
              </Form>
            </div>
          </Col>
        </Row >
      </div>
    </>
  );
};

export default ContactUs;
