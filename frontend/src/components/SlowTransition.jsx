// SlowTransitionExample.jsx
import React, { useState } from 'react';
import { motion, LayoutGroup } from 'framer-motion';
import { Row, Col } from 'react-bootstrap';

const images = [
  { id: 1, src: '/images/jollof-rice-1.jpg', title: 'Jollof Rice' },
  { id: 2, src: '/images/okro-soup-1.jpg', title: 'Okro Soup' },
  { id: 3, src: '/images/plaintain1.jpg', title: 'Plantain' },
  { id: 4, src: '/images/rice&beans.jpg', title: 'White Rice & Beans' },
  { id: 5, src: '/images/puff-puff01.jpg', title: 'Puff Puff' },
];

const SlowTransition = () => {
  // Which image is currently "big" on the right
  const [selectedId, setSelectedId] = useState(null);

  // Handler when a small image is clicked
  const handleSelect = (id) => {
    setSelectedId(id);
  };

  // The image object for the big image on the right
  const selectedImage = images.find((img) => img.id === selectedId);

  return (
    <LayoutGroup>
      <Row>
        {/* LEFT COLUMN: Small images (thumbnails) */}
        <Col md={6}>
          <h2 className="text-white">Order Now, We Deliver Now</h2>
          <p className="text-white">
            Click a food item to see it transition to the big display on the right.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {images.map((img) => {
              // If it's selected, don't render it here (it will appear on the right)
              if (img.id === selectedId) return null;

              return (
                <motion.div
                  key={img.id}
                  layoutId={`food-${img.id}`}  // Shared layout ID
                  style={{
                    width: 100,
                    height: 100,
                    borderRadius: 8,
                    overflow: 'hidden',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleSelect(img.id)}
                  whileHover={{ scale: 1.05 }}
                  // A slow, smooth transition
                  transition={{ duration: 1.5, ease: 'easeInOut' }}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </motion.div>
              );
            })}
          </div>
        </Col>

        {/* RIGHT COLUMN: Big image */}
        <Col
          md={6}
          style={{
            minHeight: '300px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Only render if we have a selected image */}
          {selectedImage && (
            <motion.div
              layoutId={`food-${selectedImage.id}`}
              style={{
                width: 250,
                height: 250,
                borderRadius: 10,
                overflow: 'hidden',
              }}
              // Slow, smooth transition
              transition={{ duration: 1.5, ease: 'easeInOut' }}
              onClick={() => setSelectedId(null)} // Click to deselect if desired
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>
          )}
        </Col>
      </Row>
    </LayoutGroup>
  );
};

export default SlowTransition;
