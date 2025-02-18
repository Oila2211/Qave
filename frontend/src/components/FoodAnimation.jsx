// // import React, { useState } from 'react';
// // import { Row, Col, Button } from 'react-bootstrap';
// // import { LinkContainer } from 'react-router-bootstrap';
// // import { motion, AnimatePresence } from 'framer-motion';

// // /**
// //  * 5 total dishes, but only 3 displayed at once:
// //  *   - leftIndex => small dish on the left
// //  *   - rightIndex => small dish on the left (next to the first)
// //  *   - bigIndex => big dish on the right
// //  */
// // const dishes = [
// //   {
// //     id: 0,
// //     name: 'Puff Puff',
// //     description: 'A savory pasta dish with tomato sauce and herbs.',
// //     src: '/images/puff-puff01.jpg',
// //   },
// //   {
// //     id: 1,
// //     name: 'Rice & Beans',
// //     description: 'Fresh veggies and sauces for a perfect bite.',
// //     src: '/images/rice&beans.jpg',
// //   },
// //   {
// //     id: 2,
// //     name: 'Okro Soup',
// //     description: 'A hearty soup with okra, meats, and savory spices.',
// //     src: '/images/okro-soup-1.jpg',
// //   },
// //   {
// //     id: 3,
// //     name: 'Jollof Rice',
// //     description: 'West African rice dish in a rich tomato base.',
// //     src: '/images/jollof-rice-1.jpg',
// //   },
// //   {
// //     id: 4,
// //     name: 'Plantain',
// //     description: 'Golden fried plantains, sweet and delicious.',
// //     src: '/images/plaintain1.jpg',
// //   },
// // ];

// // // Helpers to rotate indices in a circular array
// // const nextIndex = (current) => (current + 1) % dishes.length;
// // const prevIndex = (current) => (current - 1 + dishes.length) % dishes.length;

// // const FoodAnimation = () => {
// //   const [leftIndex, setLeftIndex] = useState(0);
// //   const [rightIndex, setRightIndex] = useState(1);
// //   const [bigIndex, setBigIndex] = useState(2);

// //   const bigDish = dishes[bigIndex];

// //   // Left arrow: left dish => big, big => right, right => new
// //   const handleLeftArrow = () => {
// //     const newBig = leftIndex;
// //     const newRight = bigIndex;
// //     const newLeft = nextIndex(rightIndex);

// //     setBigIndex(newBig);
// //     setRightIndex(newRight);
// //     setLeftIndex(newLeft);
// //   };

// //   // Right arrow: right dish => big, big => left, left => new
// //   const handleRightArrow = () => {
// //     const newBig = rightIndex;
// //     const newLeft = bigIndex;
// //     const newRight = prevIndex(leftIndex);

// //     setBigIndex(newBig);
// //     setLeftIndex(newLeft);
// //     setRightIndex(newRight);
// //   };

// //   // Framer Motion settings for a smooth, not-too-fast transition
// //   const transitionSettings = { duration: 1.2, ease: 'easeInOut' };

// //   return (
// //     <Row className="align-items-center">
// //       {/* LEFT COLUMN */}
// //       <Col md={6}>
// //         {/* 1) Heading & Subheading */}
// //         <h2 className="text-white mb-2" style={{ fontSize: '2rem' }}>
// //           Order Now, We Deliver Now
// //         </h2>
// //         <p className="text-white" style={{ maxWidth: '400px', marginBottom: '1rem' }}>
// //           Enjoy our delicious offerings delivered right to your door. Experience
// //           convenience at its best with our online ordering system.
// //         </p>

// //         {/* 2) “Order Now” button */}
// //         <LinkContainer to="/order">
// //           <Button variant="success" size="lg" className="mb-4">
// //             Order Now
// //           </Button>
// //         </LinkContainer>

// //         {/* 3) Two small images side by side + arrow buttons underneath */}
// //         <div style={{ width: '220px' }}>
// //           {/* Row for two small images */}
// //           <div className="d-flex" style={{ gap: '1rem', marginBottom: '1rem' }}>
// //             {/* Left small image (fixed container => stable layout) */}
// //             <div style={{ width: '80px', height: '80px', position: 'relative' }}>
// //               <AnimatePresence>
// //                 <motion.img
// //                   key={`left-${leftIndex}`}
// //                   src={dishes[leftIndex].src}
// //                   alt={dishes[leftIndex].name}
// //                   initial={{ opacity: 0, scale: 0.8 }}
// //                   animate={{ opacity: 1, scale: 1 }}
// //                   exit={{ opacity: 0 }}
// //                   transition={transitionSettings}
// //                   style={{
// //                     width: '80px',
// //                     height: '80px',
// //                     objectFit: 'cover',
// //                     borderRadius: '50%',
// //                     position: 'absolute',
// //                     top: 0,
// //                     left: 0,
// //                   }}
// //                 />
// //               </AnimatePresence>
// //             </div>

// //             {/* Right small image (fixed container => stable layout) */}
// //             <div style={{ width: '80px', height: '80px', position: 'relative' }}>
// //               <AnimatePresence>
// //                 <motion.img
// //                   key={`right-${rightIndex}`}
// //                   src={dishes[rightIndex].src}
// //                   alt={dishes[rightIndex].name}
// //                   initial={{ opacity: 0, scale: 0.8 }}
// //                   animate={{ opacity: 1, scale: 1 }}
// //                   exit={{ opacity: 0 }}
// //                   transition={transitionSettings}
// //                   style={{
// //                     width: '80px',
// //                     height: '80px',
// //                     objectFit: 'cover',
// //                     borderRadius: '50%',
// //                     position: 'absolute',
// //                     top: 0,
// //                     left: 0,
// //                   }}
// //                 />
// //               </AnimatePresence>
// //             </div>
// //           </div>

// //           {/* Arrow buttons row */}
// //           <div className="d-flex" style={{ gap: '1rem' }}>
// //             <Button variant="dark" onClick={handleLeftArrow}>
// //               &larr;
// //             </Button>
// //             <Button variant="dark" onClick={handleRightArrow}>
// //               &rarr;
// //             </Button>
// //           </div>
// //         </div>
// //       </Col>

// //       {/* RIGHT COLUMN: big dish + name + description */}
// //       <Col md={6} className="text-white d-flex flex-column align-items-center">
// //         {/* Big image container => stable size => no layout jump */}
// //         <div
// //           style={{
// //             width: '250px',
// //             height: '250px',
// //             borderRadius: '50%',
// //             overflow: 'hidden',
// //             position: 'relative',
// //             marginBottom: '1rem',
// //           }}
// //         >
// //           <AnimatePresence>
// //             <motion.img
// //               key={`big-${bigIndex}`}
// //               src={bigDish.src}
// //               alt={bigDish.name}
// //               initial={{ opacity: 0, scale: 0.8 }}
// //               animate={{ opacity: 1, scale: 1 }}
// //               exit={{ opacity: 0 }}
// //               transition={transitionSettings}
// //               style={{
// //                 width: '250px',
// //                 height: '250px',
// //                 objectFit: 'cover',
// //                 position: 'absolute',
// //                 top: 0,
// //                 left: 0,
// //               }}
// //             />
// //           </AnimatePresence>
// //         </div>

// //         {/* Dish name & description */}
// //         <h4 style={{ marginBottom: '0.5rem' }}>{bigDish.name}</h4>
// //         <p style={{ fontSize: '0.9rem', maxWidth: '300px', textAlign: 'center' }}>
// //           {bigDish.description}
// //         </p>
// //       </Col>
// //     </Row>
// //   );
// // };

// // export default FoodAnimation;










// // import React, { useState } from 'react';
// // import { Row, Col, Button } from 'react-bootstrap';
// // import { LinkContainer } from 'react-router-bootstrap';
// // import { motion, AnimatePresence } from 'framer-motion';

// // const dishes = [
// //   {
// //     id: 0,
// //     name: 'Puff Puff',
// //     description: 'A savory pasta dish with tomato sauce and herbs.',
// //     src: '/images/puff-puff01.jpg',
// //     bgSrc: '/images/resturant-interior.jpg',
// //   },
// //   {
// //     id: 1,
// //     name: 'Rice & Beans',
// //     description: 'Fresh veggies and sauces for a perfect bite.',
// //     src: '/images/rice&beans.jpg',
// //     bgSrc: '/images/resturant-interior2.jpg',
// //   },
// //   {
// //     id: 2,
// //     name: 'Okro Soup',
// //     description: 'A hearty soup with okra, meats, and savory spices.',
// //     src: '/images/okro-soup-1.jpg',
// //     bgSrc: '/images/resturant-interior3.jpg',
// //   },
// //   {
// //     id: 3,
// //     name: 'Jollof Rice',
// //     description: 'West African rice dish in a rich tomato base.',
// //     src: '/images/jollof-rice-1.jpg',
// //     bgSrc: '/images/resturant-interior4.jpg',
// //   },
// //   {
// //     id: 4,
// //     name: 'Plantain',
// //     description: 'Golden fried plantains, sweet and delicious.',
// //     src: '/images/plaintain1.jpg',
// //     bgSrc: '/images/resturant-interior5.jpg',
// //   },
// // ];

// // const nextIndex = (current) => (current + 1) % dishes.length;
// // const prevIndex = (current) => (current - 1 + dishes.length) % dishes.length;

// // const FoodAnimation = ({ onChangeBackground }) => {
// //   // Track indices for left small image, right small image, and big image.
// //   const [leftIndex, setLeftIndex] = useState(0);
// //   const [rightIndex, setRightIndex] = useState(1);
// //   const [bigIndex, setBigIndex] = useState(2);
// //   // Track the direction of the arrow click: 'left' or 'right'
// //   const [direction, setDirection] = useState('');

// //   const bigDish = dishes[bigIndex];

// //   // Define custom variants for the small images
// //   const smallVariants = {
// //     initial: (dir) => ({
// //       opacity: 0,
// //       x: dir === 'left' ? -150 : dir === 'right' ? 150 : 0,
// //       rotate: dir === 'left' || dir === 'right' ? (dir === 'left' ? -360 : 360) : 0,
// //       scale: 0.8,
// //     }),
// //     animate: { opacity: 1, x: 0, rotate: 0, scale: 1 },
// //     exit: (dir) => ({
// //       opacity: 0,
// //       x: dir === 'left' ? -150 : dir === 'right' ? 150 : 0,
// //       rotate: dir === 'left' || dir === 'right' ? (dir === 'left' ? -360 : 360) : 0,
// //       scale: 0.8,
// //     }),
// //   };

// //   // Define custom variants for the big image
// //   const bigVariants = {
// //     initial: (dir) => ({
// //       opacity: 0,
// //       x: dir === 'left' ? -150 : dir === 'right' ? 150 : 0,
// //       rotate: dir === 'left' || dir === 'right' ? (dir === 'left' ? -360 : 360) : 0,
// //       scale: 0.8,
// //     }),
// //     animate: { opacity: 1, x: 0, rotate: 0, scale: 1 },
// //     exit: (dir) => ({
// //       opacity: 0,
// //       x: dir === 'left' ? -150 : dir === 'right' ? 150 : 0,
// //       rotate: dir === 'left' || dir === 'right' ? (dir === 'left' ? -360 : 360) : 0,
// //       scale: 0.8,
// //     }),
// //   };

// //   const transitionSettings = { duration: 1.2, ease: 'easeInOut' };

// //   const handleLeftArrow = () => {
// //     setDirection('left');
// //     const newBig = leftIndex;
// //     const newRight = bigIndex;
// //     const newLeft = nextIndex(rightIndex);

// //     setBigIndex(newBig);
// //     setRightIndex(newRight);
// //     setLeftIndex(newLeft);
// //     onChangeBackground(dishes[newBig].bgSrc);
// //   };

// //   const handleRightArrow = () => {
// //     setDirection('right');
// //     const newBig = rightIndex;
// //     const newLeft = bigIndex;
// //     const newRight = prevIndex(leftIndex);

// //     setBigIndex(newBig);
// //     setLeftIndex(newLeft);
// //     setRightIndex(newRight);
// //     onChangeBackground(dishes[newBig].bgSrc);
// //   };

// //   return (
// //     <Row className="align-items-center">
// //       {/* LEFT COLUMN: Text, button, and two small images with arrows */}
// //       <Col md={6}>
// //         <h2 className="text-white mb-2" style={{ fontSize: '2rem' }}>
// //           Order Now, We Deliver Now
// //         </h2>
// //         <p className="text-white" style={{ maxWidth: '400px', marginBottom: '1rem' }}>
// //           Enjoy our delicious offerings delivered right to your door. Experience convenience at its best with our online ordering system.
// //         </p>
// //         <LinkContainer to="/order">
// //           <Button variant="success" size="lg" className="mb-4">
// //             Order Now
// //           </Button>
// //         </LinkContainer>

// //         <div style={{ width: '220px' }}>
// //           {/* Small images row */}
// //           <div className="d-flex" style={{ gap: '1rem', marginBottom: '1rem', position: 'relative', height: '80px' }}>
// //             {/* Left small image */}
// //             <div style={{ width: '80px', height: '80px', position: 'relative', overflow: 'hidden' }}>
// //               <AnimatePresence>
// //                 <motion.img
// //                   key={`left-${leftIndex}`}
// //                   src={dishes[leftIndex].src}
// //                   alt={dishes[leftIndex].name}
// //                   custom={direction}
// //                   variants={smallVariants}
// //                   initial="initial"
// //                   animate="animate"
// //                   exit="exit"
// //                   transition={transitionSettings}
// //                   style={{
// //                     width: '80px',
// //                     height: '80px',
// //                     objectFit: 'cover',
// //                     borderRadius: '50%',
// //                     position: 'absolute',
// //                     top: 0,
// //                     left: 0,
// //                   }}
// //                 />
// //               </AnimatePresence>
// //             </div>
// //             {/* Right small image */}
// //             <div style={{ width: '80px', height: '80px', position: 'relative', overflow: 'hidden' }}>
// //               <AnimatePresence>
// //                 <motion.img
// //                   key={`right-${rightIndex}`}
// //                   src={dishes[rightIndex].src}
// //                   alt={dishes[rightIndex].name}
// //                   custom={direction}
// //                   variants={smallVariants}
// //                   initial="initial"
// //                   animate="animate"
// //                   exit="exit"
// //                   transition={transitionSettings}
// //                   style={{
// //                     width: '80px',
// //                     height: '80px',
// //                     objectFit: 'cover',
// //                     borderRadius: '50%',
// //                     position: 'absolute',
// //                     top: 0,
// //                     left: 0,
// //                   }}
// //                 />
// //               </AnimatePresence>
// //             </div>
// //           </div>

// //           {/* Arrow buttons */}
// //           <div className="d-flex" style={{ gap: '1rem' }}>
// //             <Button variant="dark" onClick={handleLeftArrow}>
// //               &larr;
// //             </Button>
// //             <Button variant="dark" onClick={handleRightArrow}>
// //               &rarr;
// //             </Button>
// //           </div>
// //         </div>
// //       </Col>

// //       {/* RIGHT COLUMN: Big image with dish name & description */}
// //       <Col md={6} className="text-white d-flex flex-column align-items-center">
// //         <div
// //           style={{
// //             width: '250px',
// //             height: '250px',
// //             borderRadius: '50%',
// //             overflow: 'hidden',
// //             position: 'relative',
// //             marginBottom: '1rem',
// //           }}
// //         >
// //           <AnimatePresence>
// //             <motion.img
// //               key={`big-${bigIndex}`}
// //               src={bigDish.src}
// //               alt={bigDish.name}
// //               custom={direction}
// //               variants={bigVariants}
// //               initial="initial"
// //               animate="animate"
// //               exit="exit"
// //               transition={transitionSettings}
// //               style={{
// //                 width: '250px',
// //                 height: '250px',
// //                 objectFit: 'cover',
// //                 position: 'absolute',
// //                 top: 0,
// //                 left: 0,
// //               }}
// //             />
// //           </AnimatePresence>
// //         </div>

// //         <h4 style={{ marginBottom: '0.5rem' }}>{bigDish.name}</h4>
// //         <p style={{ fontSize: '0.9rem', maxWidth: '300px', textAlign: 'center' }}>
// //           {bigDish.description}
// //         </p>
// //       </Col>
// //     </Row>
// //   );
// // };

// // export default FoodAnimation;



// // import React, { useState } from 'react';
// // import { Row, Col, Button } from 'react-bootstrap';
// // import { LinkContainer } from 'react-router-bootstrap';
// // import { motion, AnimatePresence } from 'framer-motion';

// // const dishes = [
// //   {
// //     id: 0,
// //     name: 'Puff Puff',
// //     description: 'A savory pasta dish with tomato sauce and herbs.',
// //     src: '/images/puff-puff01.jpg',
// //     bgSrc: '/images/resturant-interior.jpg',
// //   },
// //   {
// //     id: 1,
// //     name: 'Rice & Beans',
// //     description: 'Fresh veggies and sauces for a perfect bite.',
// //     src: '/images/rice&beans.jpg',
// //     bgSrc: '/images/resturant-interior.jpg',
// //   },
// //   {
// //     id: 2,
// //     name: 'Okro Soup',
// //     description: 'A hearty soup with okra, meats, and savory spices.',
// //     src: '/images/okro-soup-1.jpg',
// //     bgSrc: '/images/resturant-interior.jpg',
// //   },
// //   {
// //     id: 3,
// //     name: 'Jollof Rice',
// //     description: 'West African rice dish in a rich tomato base.',
// //     src: '/images/jollof-rice-1.jpg',
// //     bgSrc: '/images/resturant-interior.jpg',
// //   },
// //   {
// //     id: 4,
// //     name: 'Plantain',
// //     description: 'Golden fried plantains, sweet and delicious.',
// //     src: '/images/plaintain1.jpg',
// //     bgSrc: '/images/resturant-interior.jpg',
// //   },
// // ];

// // const nextIndex = (current) => (current + 1) % dishes.length;
// // const prevIndex = (current) => (current - 1 + dishes.length) % dishes.length;

// // const FoodAnimation = ({ onChangeBackground }) => {
// //   const [leftIndex, setLeftIndex] = useState(0);
// //   const [rightIndex, setRightIndex] = useState(1);
// //   const [bigIndex, setBigIndex] = useState(2);

// //   const bigDish = dishes[bigIndex];

// //   const handleLeftArrow = () => {
// //     const newBig = leftIndex;
// //     const newRight = bigIndex;
// //     const newLeft = nextIndex(rightIndex);

// //     setBigIndex(newBig);
// //     setRightIndex(newRight);
// //     setLeftIndex(newLeft);
// //     onChangeBackground(dishes[newBig].bgSrc);
// //   };

// //   const handleRightArrow = () => {
// //     const newBig = rightIndex;
// //     const newLeft = bigIndex;
// //     const newRight = prevIndex(leftIndex);

// //     setBigIndex(newBig);
// //     setLeftIndex(newLeft);
// //     setRightIndex(newRight);
// //     onChangeBackground(dishes[newBig].bgSrc);
// //   };

// //   const transitionSettings = { duration: 1.2, ease: 'easeInOut' };

// //   return (
// //     <Row className="align-items-center">
// //       {/* LEFT COLUMN: Small images and controls */}
// //       <Col md={6}>
// //         <h2 className="text-white mb-2" style={{ fontSize: '2rem' }}>
// //           Order Now, We Deliver Now
// //         </h2>
// //         <p className="text-white" style={{ maxWidth: '400px', marginBottom: '1rem' }}>
// //           Enjoy our delicious offerings delivered right to your door. Experience
// //           convenience at its best with our online ordering system.
// //         </p>

// //         <LinkContainer to="/order">
// //           <Button variant="success" size="lg" className="mb-4">
// //             Order Now
// //           </Button>
// //         </LinkContainer>

// //         <div style={{ width: '220px' }}>
// //           {/* Small images */}
// //           <div className="d-flex" style={{ gap: '1rem', marginBottom: '1rem' }}>
// //             {/* Left small image */}
// //             <div style={{ width: '80px', height: '80px', position: 'relative', overflow: 'hidden' }}>
// //               <AnimatePresence>
// //                 <motion.img
// //                   key={`left-${leftIndex}`}
// //                   src={dishes[leftIndex].src}
// //                   alt={dishes[leftIndex].name}
// //                   initial={{ opacity: 0, x: -100, rotate: -180, scale: 0.8 }}
// //                   animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
// //                   exit={{ opacity: 0, x: -100, rotate: -180, scale: 0.8 }}
// //                   transition={transitionSettings}
// //                   style={{
// //                     width: '80px',
// //                     height: '80px',
// //                     objectFit: 'cover',
// //                     borderRadius: '50%',
// //                     position: 'absolute',
// //                     top: 0,
// //                     left: 0,
// //                   }}
// //                 />
// //               </AnimatePresence>
// //             </div>

// //             {/* Right small image */}
// //             <div style={{ width: '80px', height: '80px', position: 'relative', overflow: 'hidden' }}>
// //               <AnimatePresence>
// //                 <motion.img
// //                   key={`right-${rightIndex}`}
// //                   src={dishes[rightIndex].src}
// //                   alt={dishes[rightIndex].name}
// //                   initial={{ opacity: 0, x: 100, rotate: 180, scale: 0.8 }}
// //                   animate={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
// //                   exit={{ opacity: 0, x: 100, rotate: 180, scale: 0.8 }}
// //                   transition={transitionSettings}
// //                   style={{
// //                     width: '80px',
// //                     height: '80px',
// //                     objectFit: 'cover',
// //                     borderRadius: '50%',
// //                     position: 'absolute',
// //                     top: 0,
// //                     left: 0,
// //                   }}
// //                 />
// //               </AnimatePresence>
// //             </div>
// //           </div>

// //           {/* Arrow buttons */}
// //           <div className="d-flex" style={{ gap: '1rem' }}>
// //             <Button variant="dark" onClick={handleLeftArrow}>
// //               &larr;
// //             </Button>
// //             <Button variant="dark" onClick={handleRightArrow}>
// //               &rarr;
// //             </Button>
// //           </div>
// //         </div>
// //       </Col>

// //       {/* RIGHT COLUMN: Big image */}
// //       <Col md={6} className="text-white d-flex flex-column align-items-center">
// //         <div
// //           style={{
// //             width: '250px',
// //             height: '250px',
// //             borderRadius: '50%',
// //             overflow: 'hidden',
// //             position: 'relative',
// //             marginBottom: '1rem',
// //           }}
// //         >
// //           <AnimatePresence>
// //             <motion.img
// //               key={`big-${bigIndex}`}
// //               src={bigDish.src}
// //               alt={bigDish.name}
// //               initial={{ opacity: 0, scale: 0.8 }}
// //               animate={{ opacity: 1, scale: 1 }}
// //               exit={{ opacity: 0, scale: 0.8 }}
// //               transition={transitionSettings}
// //               style={{
// //                 width: '250px',
// //                 height: '250px',
// //                 objectFit: 'cover',
// //                 position: 'absolute',
// //                 top: 0,
// //                 left: 0,
// //               }}
// //             />
// //           </AnimatePresence>
// //         </div>

// //         <h4 style={{ marginBottom: '0.5rem' }}>{bigDish.name}</h4>
// //         <p style={{ fontSize: '0.9rem', maxWidth: '300px', textAlign: 'center' }}>
// //           {bigDish.description}
// //         </p>
// //       </Col>
// //     </Row>
// //   );
// // };

// // export default FoodAnimation;



// import React, { useState } from 'react';
// import { Row, Col, Button } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
// import { motion, AnimatePresence } from 'framer-motion';

// const dishes = [
//   {
//     id: 0,
//     name: 'Puff Puff',
//     description: 'A savory pasta dish with tomato sauce and herbs.',
//     src: '/images/puff-puff01.jpg',
//     bgSrc: '/images/resturant-interior.jpg',
//   },
//   {
//     id: 1,
//     name: 'Rice & Beans',
//     description: 'Fresh veggies and sauces for a perfect bite.',
//     src: '/images/rice&beans.jpg',
//     bgSrc: '/images/resturant-interior.jpg',
//   },
//   {
//     id: 2,
//     name: 'Okro Soup',
//     description: 'A hearty soup with okra, meats, and savory spices.',
//     src: '/images/okro-soup-1.jpg',
//     bgSrc: '/images/resturant-interior.jpg',
//   },
//   {
//     id: 3,
//     name: 'Jollof Rice',
//     description: 'West African rice dish in a rich tomato base.',
//     src: '/images/jollof-rice-1.jpg',
//     bgSrc: '/images/resturant-interior.jpg',
//   },
//   {
//     id: 4,
//     name: 'Plantain',
//     description: 'Golden fried plantains, sweet and delicious.',
//     src: '/images/plaintain1.jpg',
//     bgSrc: '/images/resturant-interior.jpg',
//   },
// ];

// const nextIndex = (current) => (current + 1) % dishes.length;
// const prevIndex = (current) => (current - 1 + dishes.length) % dishes.length;

// const FoodAnimation = ({ onChangeBackground }) => {
//   const [leftIndex, setLeftIndex] = useState(0);
//   const [rightIndex, setRightIndex] = useState(1);
//   const [bigIndex, setBigIndex] = useState(2);
//   const [direction, setDirection] = useState('');

//   const bigDish = dishes[bigIndex];

//   const handleLeftArrow = () => {
//     setDirection('left');
//     const newBig = leftIndex;
//     const newRight = bigIndex;
//     const newLeft = nextIndex(rightIndex);
//     setBigIndex(newBig);
//     setRightIndex(newRight);
//     setLeftIndex(newLeft);
//     onChangeBackground(dishes[newBig].bgSrc);
//   };

//   const handleRightArrow = () => {
//     setDirection('right');
//     const newBig = rightIndex;
//     const newLeft = bigIndex;
//     const newRight = prevIndex(leftIndex);
//     setBigIndex(newBig);
//     setLeftIndex(newLeft);
//     setRightIndex(newRight);
//     onChangeBackground(dishes[newBig].bgSrc);
//   };

//   const transitionSettings = { duration: 1.2, ease: 'easeInOut' };

//   // Variants for small images (rolling effect)
//   const smallVariants = {
//     initial: (dir) => ({
//       opacity: 0,
//       x: dir === 'left' ? -100 : 100,
//       rotate: dir === 'left' ? -360 : 360,
//       scale: 0.8,
//     }),
//     animate: { opacity: 1, x: 0, rotate: 0, scale: 1 },
//     exit: (dir) => ({
//       opacity: 0,
//       x: dir === 'left' ? -100 : 100,
//       rotate: dir === 'left' ? -360 : 360,
//       scale: 0.8,
//     }),
//   };

//   // Variants for big image (no extra x movement here)
//   const bigVariants = {
//     initial: { opacity: 0, scale: 0.8 },
//     animate: { opacity: 1, scale: 1 },
//     exit: { opacity: 0, scale: 0.8 },
//   };

//   return (
//     // Set overflow visible on the Row so images can travel between columns
//     <Row className="align-items-center "  >
//       {/* LEFT COLUMN: Text & Controls */}
//       <Col md={6} style={{ overflow: 'visible', }}>
//         <h2 className="text-white mb-2" style={{ fontSize: '2rem' }}>
//           Order Now, 
//         </h2>
//         <h2 className="text-white mb-2" style={{ fontSize: '2rem' }}>
//           We Deliver Now, 
//         </h2>
//         <p className="text-white" style={{ maxWidth: '400px', marginBottom: '1rem' }}>
//           Enjoy our delicious offerings delivered right to your door. Experience convenience at its best with our online ordering system.
//         </p>
//         <LinkContainer to="/order">
//           <Button variant="success" size="lg" className="mb-4">
//             Order Now
//           </Button>
//         </LinkContainer>

//         <div style={{ width: '220px', overflow: 'visible' }}>
//           {/* Small Images Row */}
//           <div
//             className="d-flex"
//             style={{ gap: '1rem', marginBottom: '1rem', position: 'relative', height: '80px', overflow: 'visible' }}
//           >
//             {/* Left small image */}
//             <div style={{ width: '80px', height: '80px', position: 'relative', overflow: 'visible' }}>
//               <AnimatePresence>
//                 <motion.img
//                   key={`left-${leftIndex}`}
//                   src={dishes[leftIndex].src}
//                   alt={dishes[leftIndex].name}
//                   custom={direction}
//                   variants={smallVariants}
//                   initial="initial"
//                   animate="animate"
//                   exit="exit"
//                   transition={transitionSettings}
//                   style={{
//                     width: '80px',
//                     height: '80px',
//                     objectFit: 'cover',
//                     borderRadius: '50%',
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                   }}
//                 />
//               </AnimatePresence>
//             </div>

//             {/* Right small image */}
//             <div style={{ width: '80px', height: '80px', position: 'relative', overflow: 'visible' }}>
//               <AnimatePresence>
//                 <motion.img
//                   key={`right-${rightIndex}`}
//                   src={dishes[rightIndex].src}
//                   alt={dishes[rightIndex].name}
//                   custom={direction}
//                   variants={smallVariants}
//                   initial="initial"
//                   animate="animate"
//                   exit="exit"
//                   transition={transitionSettings}
//                   style={{
//                     width: '80px',
//                     height: '80px',
//                     objectFit: 'cover',
//                     borderRadius: '50%',
//                     position: 'absolute',
//                     top: 0,
//                     left: 0,
//                   }}
//                 />
//               </AnimatePresence>
//             </div>
//           </div>

//           {/* Arrow Buttons */}
//           <div className="d-flex" style={{ gap: '1rem' }}>
//             <Button variant="dark" onClick={handleLeftArrow}>
//               &larr;
//             </Button>
//             <Button variant="dark" onClick={handleRightArrow}>
//               &rarr;
//             </Button>
//           </div>
//         </div>
//       </Col>

//       {/* RIGHT COLUMN: Big Image */}
//       <Col md={6} className="d-flex flex-column align-items-center"  >
//         <div
//           style={{
//             width: '250px',
//             height: '250px',
//             borderRadius: '50%',
//             overflow: 'visible', // allow rolling image to be seen as it moves
//             position: 'relative',
//             marginBottom: '1rem',
//           }}
//         >
//           <AnimatePresence>
//             <motion.img
//               key={`big-${bigIndex}`}
//               src={bigDish.src}
//               alt={bigDish.name}
//               custom={direction}
//               variants={bigVariants}
//               initial="initial"
//               animate="animate"
//               exit="exit"
//               transition={transitionSettings}
//               style={{
//                 width: '250px',
//                 height: '250px',
//                 objectFit: 'cover',
//                 position: 'absolute',
//                 top: 0,
//                 left: 0,
//               }}
//             />
//           </AnimatePresence>
//         </div>
//         <h4 style={{ marginBottom: '0.5rem' }}>{bigDish.name}</h4>
//         <p style={{ fontSize: '0.9rem', maxWidth: '300px', textAlign: 'center' }}>
//           {bigDish.description}
//         </p>
//       </Col>
//     </Row>
//   );
// };

// export default FoodAnimation;



//THe new update 

// import React, { useState } from 'react';
// import { Row, Col, Button } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
// import { motion, AnimatePresence } from 'framer-motion';

// const dishes = [
//   {
//     id: 0,
//     name: 'Puff Puff',
//     description: 'A savory pasta dish with tomato sauce and herbs.',
//     src: '/images/puff-puff01.jpg',
//   },
//   {
//     id: 1,
//     name: 'Rice & Beans',
//     description: 'Fresh veggies and sauces for a perfect bite.',
//     src: '/images/rice&beans.jpg',
//   },
//   {
//     id: 2,
//     name: 'Okro Soup',
//     description: 'A hearty soup with okra, meats, and savory spices.',
//     src: '/images/okro-soup-1.jpg',
//   },
// ];

// const nextIndex = (current) => (current + 1) % dishes.length;
// const prevIndex = (current) => (current - 1 + dishes.length) % dishes.length;

// const FoodAnimation = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const dish = dishes[currentIndex];

//   const handleNext = () => {
//     setCurrentIndex(nextIndex(currentIndex));
//   };

//   const handlePrev = () => {
//     setCurrentIndex(prevIndex(currentIndex));
//   };

//   return (
//     <Row 
//       className="d-flex align-items-center justify-content-between"
//       style={{
//         padding: '3rem 5%',
//         background: 'linear-gradient(to right, rgba(0,0,0,0.8), rgba(0,0,0,0.3))',
//         borderRadius: '12px',
//         color: '#fff',
//       }}
//     >
//       {/* LEFT TEXT SECTION */}
//       <Col md={6} className="d-flex flex-column justify-content-center">
//         <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
//           Order Now,
//         </h2>
//         <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', color: '#ff8800', marginBottom: '1rem' }}>
//           We Deliver Now
//         </h2>
//         <p style={{ fontSize: '1rem', lineHeight: '1.5', maxWidth: '450px' }}>
//           Enjoy our delicious offerings delivered right to your door. Experience convenience at its best with our online ordering system.
//         </p>

//         <LinkContainer to="/order">
//           <Button 
//             variant="warning" 
//             size="lg" 
//             style={{ marginTop: '1rem', fontWeight: 'bold' }}
//           >
//             Order Now
//           </Button>
//         </LinkContainer>

//         {/* Navigation Arrows */}
//         <div className="d-flex align-items-center mt-4" style={{ gap: '1.5rem' }}>
//           <Button variant="dark" size="sm" onClick={handlePrev}>
//             &larr;
//           </Button>
//           <Button variant="dark" size="sm" onClick={handleNext}>
//             &rarr;
//           </Button>
//         </div>
//       </Col>

//       {/* RIGHT IMAGE SECTION */}
//       <Col md={6} className="d-flex flex-column align-items-center">
//         <motion.div
//           key={dish.id}
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.8 }}
//           transition={{ duration: 0.8 }}
//           style={{
//             width: '280px',
//             height: '280px',
//             borderRadius: '50%',
//             overflow: 'hidden',
//             boxShadow: '0px 8px 20px rgba(0,0,0,0.2)',
//           }}
//         >
//           <img
//             src={dish.src}
//             alt={dish.name}
//             style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//           />
//         </motion.div>

//         <h4 style={{ marginTop: '1rem', fontSize: '1.5rem' }}>{dish.name}</h4>
//         <p style={{ fontSize: '1rem', textAlign: 'center', maxWidth: '350px' }}>
//           {dish.description}
//         </p>
//       </Col>
//     </Row>
//   );
// };

// export default FoodAnimation;



// display 3.]\\

// import React, { useState } from 'react';
// import { Row, Col, Button } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
// import { motion, AnimatePresence } from 'framer-motion';

// const dishes = [
//   { id: 0, name: 'Puff Puff', description: 'A crispy, deep-fried West African snack.', src: '/images/puff-puff01.jpg' },
//   { id: 1, name: 'Rice & Beans', description: 'A classic African dish with rich flavors.', src: '/images/rice&beans.jpg' },
//   { id: 2, name: 'Okro Soup', description: 'A hearty soup with okra, meats, and savory spices.', src: '/images/okro-soup-1.jpg' },
// ];

// const nextIndex = (current) => (current + 1) % dishes.length;
// const prevIndex = (current) => (current - 1 + dishes.length) % dishes.length;

// const FoodAnimation = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const dish = dishes[currentIndex];

//   const handleNext = () => setCurrentIndex(nextIndex(currentIndex));
//   const handlePrev = () => setCurrentIndex(prevIndex(currentIndex));

//   // 🔄 Rolling Animation for Small Images
//   const rollingVariants = {
//     initial: (direction) => ({
//       opacity: 0,
//       x: direction === "left" ? -60 : 60, // Less movement to keep balance
//       rotate: direction === "left" ? -360 : 360,
//       scale: 0.9,
//     }),
//     animate: { opacity: 1, x: 0, rotate: 0, scale: 1 },
//     exit: (direction) => ({
//       opacity: 0,
//       x: direction === "left" ? -60 : 60,
//       rotate: direction === "left" ? -360 : 360,
//       scale: 0.9,
//     }),
//   };

//   return (
//     <Row 
//       className="d-flex align-items-center justify-content-between"
//       style={{
//         padding: '2.5rem 5%',
//         background: 'linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.5))',
//         borderRadius: '16px',
//         color: '#fff',
//       }}
//     >
//       {/* LEFT TEXT SECTION */}
//       <Col md={6} className="d-flex flex-column justify-content-center">
//         <h2 style={{ fontSize: '2.3rem', fontWeight: 'bold', marginBottom: '0.3rem' }}>
//           Order Now,
//         </h2>
//         <h2 style={{ fontSize: '2.3rem', fontWeight: 'bold', color: '#ff8800', marginBottom: '1rem' }}>
//           We Deliver Now
//         </h2>
//         <p style={{ fontSize: '1rem', lineHeight: '1.5', maxWidth: '450px' }}>
//           Enjoy our delicious offerings delivered right to your door. Experience convenience at its best with our online ordering system.
//         </p>

//         <LinkContainer to="/order">
//           <Button 
//             variant="warning" 
//             size="md" 
//             style={{ marginTop: '1rem', fontWeight: 'bold', padding: '10px 18px' }}
//           >
//             Order Now
//           </Button>
//         </LinkContainer>

//         {/* 🔄 Rolling Small Images (Optimized Spacing) */}
//         <div 
//           className="d-flex align-items-center mt-3"
//           style={{ 
//             gap: '0.8rem', // **REDUCED gap** to bring small images closer together
//             position: 'relative', 
//             overflow: 'visible', // Keeps rolling effect visible
//             minWidth: '150px', // Adjust width for better alignment
//           }}
//         >
//           {/* Left Small Image */}
//           <div style={{ width: '55px', height: '55px', position: 'relative', overflow: 'visible' }}>
//             <AnimatePresence>
//               <motion.img
//                 key={`left-${prevIndex(currentIndex)}`}
//                 src={dishes[prevIndex(currentIndex)].src}
//                 alt="Prev Dish"
//                 custom="left"
//                 variants={rollingVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 transition={{ duration: 1, ease: "easeInOut" }}
//                 style={{
//                   width: '55px',
//                   height: '55px',
//                   objectFit: 'cover',
//                   borderRadius: '50%',
//                   position: 'absolute',
//                   left: '-10px', // **REDUCED distance to bring it closer**
//                 }}
//               />
//             </AnimatePresence>
//           </div>

//           {/* Right Small Image */}
//           <div style={{ width: '55px', height: '55px', position: 'relative', overflow: 'visible' }}>
//             <AnimatePresence>
//               <motion.img
//                 key={`right-${nextIndex(currentIndex)}`}
//                 src={dishes[nextIndex(currentIndex)].src}
//                 alt="Next Dish"
//                 custom="right"
//                 variants={rollingVariants}
//                 initial="initial"
//                 animate="animate"
//                 exit="exit"
//                 transition={{ duration: 1, ease: "easeInOut" }}
//                 style={{
//                   width: '55px',
//                   height: '55px',
//                   objectFit: 'cover',
//                   borderRadius: '50%',
//                   position: 'absolute',
//                   right: '-10px', // **REDUCED distance to bring it closer**
//                 }}
//               />
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Navigation Arrows */}
//         <div className="d-flex align-items-center mt-3" style={{ gap: '1rem' }}>
//           <Button variant="dark" size="sm" onClick={handlePrev}>
//             &larr;
//           </Button>
//           <Button variant="dark" size="sm" onClick={handleNext}>
//             &rarr;
//           </Button>
//         </div>
//       </Col>

//       {/* RIGHT IMAGE SECTION */}
//       <Col md={6} className="d-flex flex-column align-items-center">
//         <motion.div
//           key={dish.id}
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0, scale: 0.8 }}
//           transition={{ duration: 0.8 }}
//           style={{
//             width: '250px',
//             height: '250px',
//             borderRadius: '50%',
//             overflow: 'hidden',
//             boxShadow: '0px 8px 20px rgba(0,0,0,0.2)',
//           }}
//         >
//           <img
//             src={dish.src}
//             alt={dish.name}
//             style={{ width: '100%', height: '100%', objectFit: 'cover' }}
//           />
//         </motion.div>

//         <h4 style={{ marginTop: '1rem', fontSize: '1.4rem' }}>{dish.name}</h4>
//         <p style={{ fontSize: '1rem', textAlign: 'center', maxWidth: '350px' }}>
//           {dish.description}
//         </p>
//       </Col>
//     </Row>
//   );
// };

// export default FoodAnimation;




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
        <h2 style={{ fontSize: '2.3rem', fontWeight: 'bold', color: '#ff8800', marginBottom: '1rem' }}>
          We Deliver Now
        </h2>
        <p style={{ fontSize: '1rem', lineHeight: '1.5', maxWidth: '450px' }}>
          Enjoy our delicious offerings delivered right to your door. Experience convenience at its best with our online ordering system.
        </p>

        <LinkContainer 
          to="/order" 
          style={{
            display: 'inline-block', 
            padding: '10px 18px', 
            backgroundColor: '#ffc107',  // ✅ Button color
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
          <Button variant="dark" size="sm" onClick={handlePrev}>
            &larr;
          </Button>
          <Button variant="dark" size="sm" onClick={handleNext}>
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
