// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
// import "../assets/styles/Contact.css";

// const ContactScreen = () => {
//   return (
//     <section className="contact-section">
//       <Container>
//         {/* Section Header */}
//         <Row className="text-center">
//           <Col>
//             <h2 className="contact-title">Contact Us</h2>
//             <p className="contact-description">
//               We’d love to hear from you! Whether you have a question about our menu, want to make a reservation, 
//               or just want to experience the taste of Africa—reach out to us. Our team is always ready to assist you.
//             </p>
//           </Col>
//         </Row>

//         {/* Contact Details */}
//         <Row className="justify-content-center mt-4">
//           {/* 📞 Phone Number */}
//           <Col md={4} className="contact-box text-center">
//             <FaPhoneAlt className="contact-icon" />
//             <h4>Call Us</h4>
//             <p>📞 +46 123 456 789</p>
//           </Col>

//           {/* ✉️ Email Address */}
//           <Col md={4} className="contact-box text-center">
//             <FaEnvelope className="contact-icon" />
//             <h4>Email Us</h4>
//             <p>✉️ info@theqave.com</p>
//           </Col>
//         </Row>

//         {/* 📍 Location */}
//         <Row className="justify-content-center mt-4">
//           <Col md={6} className="contact-box text-center">
//             <FaMapMarkerAlt className="contact-icon" />
//             <h4>Visit Us</h4>
//             <p>📍 Rissneleden 12, 17453 Sundbyberg, Sweden</p>
//           </Col>
//         </Row>

//         {/* 🕒 Opening Hours */}
//         <Row className="justify-content-center mt-4">
//           <Col md={6} className="contact-box text-center">
//             <FaClock className="contact-icon" />
//             <h4>Opening Hours</h4>
//             <p>Monday – Friday: 11:00 AM – 10:00 PM</p>
//             <p>Saturday – Sunday: 10:00 AM – 11:00 PM</p>
//           </Col>
//         </Row>

//         {/* 📌 Google Map Embed */}
//         <Row className="justify-content-center mt-4">
//           <Col md={10} className="contact-box text-center">
//             <h4>Find Us on the Map</h4>
//             <div className="map-container">
//               <iframe
//                 title="Google Map"
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8148.495162353569!2d17.950875369775392!3d59.38752553669726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77e42688978d%3A0xe17b78b32e201f66!2sRissneleden%2012%2C%20174%2053%20Sundbyberg%2C%20Sweden!5e0!3m2!1sen!2sse!4v1708532909816!5m2!1sen!2sse"
//                 width="100%"
//                 height="350"
//                 allowFullScreen
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//               ></iframe>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default ContactScreen;




import React from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import '../assets/styles/Contact.css';

const ContactScreen = () => {
  return (
    <Container className="contact-container">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        We'd love to hear from you! Reach out to us for reservations, orders, or inquiries.
      </p>

      <Row className="contact-sections">
        {/* Contact Information Section */}
        <Col md={6} className="mb-4 contact-section-1">
          <Card className="contact-section-1 h-100">
            <Card.Body>
              <h2 className="section-title">Get In Touch</h2>
              <p className="section-text">
                Visit or reach out to us through the following channels
              </p>
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h6>Address</h6>
                  <p>Rissneleden 12, 17453 Sundbyberg, Sweden</p>
                </div>
              </div>
              <div className="contact-item">
                <FaPhoneAlt className="contact-icon" />
                <div>
                  <h6>Phone</h6>
                  <p>+46 123 456 789</p>
                </div>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h6>Email</h6>
                  <p>info@theqave.com</p>
                </div>
              </div>

              {/* Social Media */}
              <h6 className="social-heading">Follow Us</h6>
              <div className="social-icons">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
              </div>
            </Card.Body>
          </Card>
        </Col>

        {/* Contact Form Section */}
        <Col md={6} className="mb-4">
          <Card className="contact-section-2 h-100">
            <Card.Body>
              <h2 className="section-title">Send a Message</h2>
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Your Name" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Your Email" required />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    placeholder="Your Message"
                    required
                  />
                </Form.Group>
                <Button variant="primary" type="submit" className="submit-button">
                  Submit
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* Google Maps Embed (Outside the row) */}
      <Row className="map-row">
        <Col>
          <div className="map-container">
            <iframe
              title="Restaurant Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2032.1234567890123!2d18.123456789012345!3d59.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f123456789abc%3A0x1234567890abcdef!2sRissneleden%2012%2C%2017453%20Sundbyberg%2C%20Sweden!5e0!3m2!1sen!2sse!4v1633033226787!5m2!1sen!2sse"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactScreen;