

import React, { useState } from "react";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import Toast styles
import "../assets/styles/Contact.css";

const ContactScreen = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // State for loading
  const [loading, setLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:4000/api/contact-us", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("✅ Your message has been sent successfully!"); // 🎉 Success toast
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error(data.error || "Something went wrong");
      }
    } catch (error) {
      toast.error(`❌ ${error.message}`); // 🔴 Error toast
    }

    setLoading(false);
  };

  return (
    <Container className="contact-container">
      <ToastContainer position="top-right" autoClose={3000} /> {/* 🔥 Toast Notification Container */}
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
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                  <Form.Label>Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name" 
                    placeholder="Your Name" 
                    value={formData.name} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control 
                    type="email" 
                    name="email" 
                    placeholder="Your Email" 
                    value={formData.email} 
                    onChange={handleChange} 
                    required 
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Phone (Optional)</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="phone" 
                    placeholder="Your Phone (Optional)" 
                    value={formData.phone} 
                    onChange={handleChange} 
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={5}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
                
                <Button variant="primary" type="submit" className="submit-button" disabled={loading}>
                  {loading ? "Sending..." : "Submit"}
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactScreen;
