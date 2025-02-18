// HorizontalTransition.jsx
import React, { useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { Row, Col, Button } from 'react-bootstrap';

const HorizontalTransition = () => {
  // Controls whether the image is displayed BIG on the left or SMALL on the right
  const [isBig, setIsBig] = useState(false);

  // A single demo item (you could adapt this for multiple items)
  const item = {
    id: 1,
    name: 'Okro Soup',
    image: '/images/okro-soup-1.jpg', // Adjust path as needed
  };

  return (
    <LayoutGroup>
      <Row>
        {/* LEFT COLUMN: Big Image if isBig = true */}
        <Col
          md={6}
          style={{
            minHeight: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {isBig && (
            <motion.div
              layoutId={`food-${item.id}`}
              style={{
                width: '300px',
                height: '300px',
                borderRadius: '50%',
                overflow: 'hidden',
              }}
            >
              <img
                src={item.image}
                alt="Big"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
          )}
        </Col>

        {/* RIGHT COLUMN: Small Image if isBig = false */}
        <Col
          md={6}
          style={{
            minHeight: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {!isBig && (
            <motion.div
              layoutId={`food-${item.id}`}
              style={{
                width: '120px',
                height: '120px',
                borderRadius: '50%',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsBig(true)}
            >
              <img
                src={item.image}
                alt="Small"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
          )}
        </Col>
      </Row>

      {/* A button to toggle back and forth for demo purposes */}
      <div className="mt-3 text-center">
        <Button variant="secondary" onClick={() => setIsBig(!isBig)}>
          Toggle
        </Button>
      </div>
    </LayoutGroup>
  );
};

export default HorizontalTransition;
