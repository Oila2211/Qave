import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaHeartbeat, FaStar, FaShippingFast } from "react-icons/fa"; // Icons

const WhyChooseUs = () => {
  return (
    <section
      className="py-5"
      style={{
        background: 'linear-gradient(to right, rgba(76,50,37,0.9), rgba(0,0,0,0.3))', // ✅ Custom background color
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: '20px',
      }}
    >
      <Container className="text-center">
        {/* Heading */}
        <h2 style={{ fontSize: "2.2rem", fontWeight: "bold", color: "#fff" }}>
          WHY CHOOSE US?
        </h2>
        <p style={{ color: "#ddd", maxWidth: "600px", margin: "10px auto" }}>
          You wish to taste, feel, explore and experience Africa ? No shaking, We got you covered.
        </p>

        {/* Cards Section */}
        <Row className="justify-content-center mt-4">
          {/* Card 1: Serve Healthy Food */}
          <Col md={4} sm={12} className="mb-3 d-flex justify-content-center">
            <Card
              className="shadow-lg"
              style={{
                width: "100%",
                maxWidth: "320px",
                borderRadius: "12px",
                padding: "20px",
                textAlign: "center",
                backgroundColor: "#7c5945", // ✅ Slightly lighter than background for contrast
                boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.3)", // ✅ Soft shading at bottom & sides
                color: "#fff",
              }}
            >
              <div className="d-flex justify-content-center">
                <FaHeartbeat size={40} color="#ff8800" /> {/* ✅ Centered & Orange */}
              </div>
              <h4 style={{ fontSize: "1.3rem", marginTop: "15px" }}>Serve Healthy West African Cuisine</h4>
              <p style={{ fontSize: "0.95rem", color: "#ddd" }}>
                  Bringing the taste of Africa to Stockholm with traditional recipes and rich flavors
              </p>
            </Card>
          </Col>

          {/* Card 2: Best Quality */}
          <Col md={4} sm={12} className="mb-3 d-flex justify-content-center">
            <Card
              className="shadow-lg"
              style={{
                width: "100%",
                maxWidth: "320px",
                borderRadius: "12px",
                padding: "20px",
                textAlign: "center",
                backgroundColor: "#7c5945", // ✅ Slightly lighter than background
                boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.3)", // ✅ Soft shading at bottom & sides
                color: "#fff",
              }}
            >
              <div className="d-flex justify-content-center">
                <FaStar size={40} color="#ff8800" /> {/* ✅ Centered & Orange */}
              </div>
              <h4 style={{ fontSize: "1.3rem", marginTop: "15px" }}>Earn Qana Points</h4>
              <p style={{ fontSize: "0.95rem", color: "#ddd" }}>
                 Get rewarded every time you order! Accumulate points and redeem them for discounts.
              </p>
            </Card>
          </Col>

          {/* Card 3: Fast Delivery */}
          <Col md={4} sm={12} className="mb-3 d-flex justify-content-center">
            <Card
              className="shadow-lg"
              style={{
                width: "100%",
                maxWidth: "320px",
                borderRadius: "12px",
                padding: "20px",
                textAlign: "center",
                backgroundColor: "#7c5945", // ✅ Slightly lighter than background
                boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.3)", // ✅ Soft shading at bottom & sides
                color: "#fff",
              }}
            >
              <div className="d-flex justify-content-center">
                <FaShippingFast size={40} color="#ff8800" /> {/* ✅ Centered & Orange */}
              </div>
              <h4 style={{ fontSize: "1.3rem", marginTop: "15px" }}>Fast Delivery & Dine-In</h4>
              <p style={{ fontSize: "0.95rem", color: "#ddd" }}>
                 Enjoy a seamless food experience delivered to your doorstep or in our cozy restaurant.
              </p>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseUs;
