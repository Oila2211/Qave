import React, { useState } from 'react';
import { Row, Col, Button, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { motion, AnimatePresence } from 'framer-motion';

const dishes = [
  { id: 0, name: 'Puff Puff', description: 'A crispy, deep-fried West African snack.', src: '/images/puff-puff01.jpg' },
  { id: 1, name: 'Rice & Beans', description: 'A classic African dish with rich flavors.', src: '/images/rice&beans.jpg' },
  { id: 2, name: 'Okro Soup', description: 'A hearty soup with okra, meats, and savory spices.', src: '/images/okro-soup-1.jpg' },
];

const nextIndex = (current) => (current + 1) % dishes.length;
const prevIndex = (current) => (current - 1 + dishes.length) % dishes.length;

const FoodAnimation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dish = dishes[currentIndex];

  const handleNext = () => setCurrentIndex(nextIndex(currentIndex));
  const handlePrev = () => setCurrentIndex(prevIndex(currentIndex));

  // 🔄 Rolling Animation for Small Images
  const rollingVariants = {
    initial: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -60 : 60,
      rotate: direction === "left" ? -360 : 360,
      scale: 0.9,
    }),
    animate: { opacity: 1, x: 0, rotate: 0, scale: 1 },
    exit: (direction) => ({
      opacity: 0,
      x: direction === "left" ? -60 : 60,
      rotate: direction === "left" ? -360 : 360,
      scale: 0.9,
    }),
  };

  return (
    <Row 
      className="d-flex align-items-center justify-content-between"
      style={{
        padding: '2rem 5%', // 🔥 REDUCED EXCESS SPACE
        background: 'linear-gradient(to right, rgba(76,50,37,0.9), rgba(0,0,0,0.4))',
        borderRadius: '16px',
        color: '#fff',
        margin: '0', // ✅ REMOVED UNNECESSARY MARGINS
      }}
    >
      {/* LEFT TEXT SECTION */}
      <Col md={6} className="d-flex flex-column justify-content-center">
        <h2 style={{ fontSize: '2.3rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>
          Order Now,
        </h2>
        <h2 style={{ fontSize: '2.3rem', fontWeight: 'bold', color: '#ffb25b', marginBottom: '1rem' }}>
          We Deliver Now
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: '1.5', maxWidth: '450px' }}>
          Enjoy our delicious offerings delivered right to your door. Experience convenience at its best with our online ordering system.
        </p>

        <LinkContainer 
          to="/productcatalog" 
          style={{
            display: 'inline-block', 
            padding: '10px 18px',
            backgroundColor: '#ffc27d', 
            // backgroundColor: '#ffc107',  // ✅ Button color
            color: '#000', // ✅ Text color
            fontWeight: 'bold',
            borderRadius: '6px',
            textDecoration: 'none', // ✅ Removes underline from link
            minWidth: '160px', // ✅ Sets a reasonable size
            maxWidth: '180px', // ✅ Prevents it from getting too long
            textAlign: 'center',
            whiteSpace: 'nowrap', // ✅ Prevents wrapping
            transition: '0.3s ease-in-out',
          }}
        >
          <Nav.Link style={{ padding: '5px 10px' }}> 
            Order Now
          </Nav.Link>
       </LinkContainer>


        {/* 🔄 Rolling Small Images */}
        <div 
          className="d-flex align-items-center mt-3"
          style={{ 
            gap: '0.8rem', 
            position: 'relative', 
            overflow: 'visible', 
            minWidth: '150px', 
          }}
        >
          {/* Left Small Image */}
          <div style={{ width: '55px', height: '55px', position: 'relative', overflow: 'visible' }}>
            <AnimatePresence>
              <motion.img
                key={`left-${prevIndex(currentIndex)}`}
                src={dishes[prevIndex(currentIndex)].src}
                alt="Prev Dish"
                custom="left"
                variants={rollingVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 1, ease: "easeInOut" }}
                style={{
                  width: '55px',
                  height: '55px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  position: 'absolute',
                  left: '-10px',
                }}
              />
            </AnimatePresence>
          </div>

          {/* Right Small Image */}
          <div style={{ width: '55px', height: '55px', position: 'relative', overflow: 'visible' }}>
            <AnimatePresence>
              <motion.img
                key={`right-${nextIndex(currentIndex)}`}
                src={dishes[nextIndex(currentIndex)].src}
                alt="Next Dish"
                custom="right"
                variants={rollingVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 1, ease: "easeInOut" }}
                style={{
                  width: '55px',
                  height: '55px',
                  objectFit: 'cover',
                  borderRadius: '50%',
                  position: 'absolute',
                  right: '-10px',
                }}
              />
            </AnimatePresence>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="d-flex align-items-center mt-3" style={{ gap: '1rem' }}>
          <Button variant="light" size="sm" onClick={handlePrev}>
            &larr;
          </Button>
          <Button variant="light" size="sm" onClick={handleNext}>
            &rarr;
          </Button>
        </div>
      </Col>

      {/* RIGHT IMAGE SECTION */}
      <Col md={6} className="d-flex flex-column align-items-center">
        <motion.div
          key={dish.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8 }}
          style={{
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            overflow: 'hidden',
            boxShadow: '0px 8px 20px rgba(0,0,0,0.2)',
          }}
        >
          <img
            src={dish.src}
            alt={dish.name}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </motion.div>

        <h4 style={{ marginTop: '1rem', fontSize: '1.4rem' }}>{dish.name}</h4>
        <p style={{ fontSize: '1rem', textAlign: 'center', maxWidth: '350px' }}>
          {dish.description}
        </p>
      </Col>
    </Row>
  );
};

export default FoodAnimation;
