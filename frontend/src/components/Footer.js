import React from 'react'
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaCcVisa, FaCcMastercard,  } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import { SiKlarna } from "react-icons/si";
import { TbCurrencySwedishKrona } from "react-icons/tb"; // Swish (represented by SEK icon)
import "../assets/styles/Footer.css"; 

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <footer style={{ backgroundColor: '#352923' }}>
        <Container>
            <div style={{height: '5vh' }}></div>
            <Row className="footer-top">
                {/* Logo & Description */}
                <Col md={4} className="text-center text-md-start">
                    <img src={`${process.env.PUBLIC_URL}/images/qave-logo.png`} alt="The Qave Logo" className="footer-logo" />
                    <p className="footer-description">
                        Taste Africa in Stockholm. Enjoy authentic West African flavors in a modern, cozy atmosphere.
                    </p>

                    {/* ✅ Payment Section Under Logo */}
                    <h5  style={{color : 'white'}}>We Accept</h5>
                        <FaCcVisa size={32} />
                        <FaCcMastercard size={32} />
                        <SiKlarna size={32} color="#ff3399" /> {/* Klarna - Pink color */}
                    
                </Col>

                {/* Quick Links */}
                <Col md={4} className="text-center">
                    <h5  style={{color : 'white'}}>Quick Links</h5>
                    <Nav className="flex-column footer-links">
                        <LinkContainer to="/menu">
                            <Nav.Link>View Menu</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/order">
                            <Nav.Link>Order Online</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/reserve">
                            <Nav.Link>Reserve a Table</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/experience">
                            <Nav.Link>Experience</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/loyalty">
                            <Nav.Link>Qana Points</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/contact-us">
                            <Nav.Link>Contact Us</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/about-us">
                            <Nav.Link>About Us</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Col>

                {/* Contact Info & Social Media */}
                <Col md={4} className="text-center text-md-end">
                    <h5 style={{color : 'white'}}>Contact Us</h5>
                    <p>📍 Stockholm, Sweden</p>
                    <p>📞 +46 123 456 789</p>
                    <p>✉️ info@theqave.com</p>
                    <div className="social-icons">
                        <a style={{color: "#1877F2"}} href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                        <a style={{color: "#E4405F"}} href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        <a style={{color: "#1DA1F2"}} href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                    </div>
                    <p></p>

                    {/* ✅ Opening Hours Under Contact Section */}
                    <h5  style={{color : 'white'}}>Opening Hours</h5>
                    <p>Monday – Friday: 11:00 AM – 10:00 PM</p>
                    <p>Saturday – Sunday: 10:00 AM – 11:00 PM</p>
                </Col>
            </Row>

            {/* Copyright */}
            <Row>
                <Col className='text-center py-3 text-light'>
                    <p>Afriqana &copy; {currentYear}</p>
                </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer;
