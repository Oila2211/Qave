import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/styles/About.css"; // Keep styles for other elements

// Import image from public folder
const aboutImage = `${process.env.PUBLIC_URL}/images/restaurant.interior-3.jpg`;

const AboutScreen = () => {
  return (
    <section className="about-container">
      {/* Hero Section */}
      <div className="about-hero" style={{ 
        backgroundImage: `url(${aboutImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "60vh", 
        borderRadius: "10px"
      }}>
        <div className="about-hero-overlay">
          <h1 className="about-title">About The Qave</h1>
        </div>
      </div>

      {/* About Content */}
      <Container className="about-content mt-4">
        <Row className="align-items-center">
          <Col md={6}>
            <h2>Experience Africa in Stockholm</h2>
            <p>
              The Qave is a unique restaurant concept that unites talented chefs of African origin 
              to serve homemade, authentic African delicacies right here in Stockholm. We believe 
              that food is more than just a meal—it's an experience, a story, a journey across cultures.
            </p>
            <p>
              Our passion for market-fresh traditional ingredients, honest cooking, and a welcoming atmosphere 
              makes The Qave a place where every bite takes you deeper into the heart of Africa.
            </p>
            <p>
              Whether you're a lifelong lover of African cuisine or new to its bold and vibrant flavors, 
              The Qave invites you to explore, celebrate, and belong. Here, everyone is welcome to experience 
              the taste and culture of Africa—right in the heart of Stockholm.
            </p>
          </Col>

          {/* Image Section */}
          <Col md={6} className="text-center">
            <img 
              src={aboutImage} 
              alt="The Qave Restaurant Interior" 
              className="about-image img-fluid rounded"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutScreen;
