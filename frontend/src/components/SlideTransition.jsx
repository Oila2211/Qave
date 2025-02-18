// SlideTransition.jsx
import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { motion, useAnimation } from 'framer-motion';

const SlideTransition = () => {
  // Controls for the plate’s animation
  const controls = useAnimation();

  // Animate the plate from center → offscreen left → reappear right → center bigger
  const handleLeftClick = async () => {
    // 1) Move left offscreen
    await controls.start({
      x: -1000,           // Big negative moves it far off the left edge
      transition: { duration: 1 }  // 1 second
    });
    // 2) Instantly teleport to the right edge, bigger
    await controls.start({
      x: 1000,
      scale: 2,
      transition: { duration: 0 }  // No animation here (instant)
    });
    // 3) Animate to center, staying big
    await controls.start({
      x: 0,
      scale: 2,
      transition: { duration: 1 }
    });
  };

  // Animate the plate from center → offscreen right → reappear left → center bigger
  const handleRightClick = async () => {
    // 1) Move right offscreen
    await controls.start({
      x: 1000,
      transition: { duration: 1 }
    });
    // 2) Instantly teleport to the left edge, bigger
    await controls.start({
      x: -1000,
      scale: 2,
      transition: { duration: 0 }
    });
    // 3) Animate to center, staying big
    await controls.start({
      x: 0,
      scale: 2,
      transition: { duration: 1 }
    });
  };

  return (
    <Row className="justify-content-center text-center">
      {/* Left Arrow */}
      <Col xs="auto">
        <Button onClick={handleLeftClick} variant="secondary">
          Left
        </Button>
      </Col>

      {/* The Plate */}
      <Col xs="auto">
        <motion.img
          src="/images/okro-soup-1.jpg"   // Replace with your own path
          alt="Plate"
          style={{
            width: 200,
            height: 200,
            borderRadius: '50%',
            objectFit: 'cover'
          }}
          // Framer Motion controls
          animate={controls}
          // Initial position/size
          initial={{ x: 0, scale: 1 }}
        />
      </Col>

      {/* Right Arrow */}
      <Col xs="auto">
        <Button onClick={handleRightClick} variant="secondary">
          Right
        </Button>
      </Col>
    </Row>
  );
};

export default SlideTransition;
