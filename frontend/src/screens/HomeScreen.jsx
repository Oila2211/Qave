// import React from 'react'
// import { Container, Row, Col, Button, Image, Carousel, Card } from 'react-bootstrap';


// const HomeScreen = () => {
//   return (
//   <>
//     <Container>
//       <Row>
//         <Col xs={6} md={4}>
//           <Image />
//         </Col>
//         <Col xs={6} md={4}>
//           <Image />
//         </Col>
//         <Col xs={6} md={4}>
//           <Image />
//         </Col>
//       </Row>
//     </Container>
//   </>
//   )
// }

// export default HomeScreen






// HomeScreen.jsx
// import React from 'react';
// import { Container, Row, Col, Button, Image, Carousel, Card } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
// import FoodAnimation from '../components/FoodAnimation.jsx';
// import HorizontalTransition from '../components/HorizontalTransition.jsx';
// import SlideTransition from '../components/SlideTransition.jsx';
// import FoodSwiper from '../components/FoodSwiper.jsx';
// import SlowTransition from '../components/SlowTransition.jsx';

// const HomeScreen = () => {
//   return (
//     <>
//       {/* Section 1: Hero */}
//       <section
//         className="hero-section"
//         style={{
//           backgroundImage: "url('/images/resturant-interior.jpg')",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           height: '80vh',
//           position: 'relative'
//         }}
//       >
//         <div
//           className="d-flex flex-column align-items-center justify-content-center text-center"
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             right: 0,
//             bottom: 0,
//             backgroundColor: 'rgba(0,0,0,0.2)'
//           }}
//         >
//           <h1 className="display-1 text-white">THE QAVE</h1>
//           <p className="lead text-white">
//             Experience the ultimate blend of ambiance and flavor.
//           </p>
//           <LinkContainer to="/reserve">
//             <Button variant="primary" size="lg">
//               Reserve Now
//             </Button>
//           </LinkContainer>
//         </div>
//       </section>

//       {/* Section 2: Order Carousel */}
//       <section className="py-5" 
//                style={{ backgroundColor: '#190f0a',
//                         width: "100vw",
//                         position: "relative",
//                         left: "50%",
//                         right: "50%",
//                         marginLeft: "-50vw",
//                         marginRight: "-50vw",
//                         padding: "2rem 0"
//                 }} >
        
//         <Container>
//           <Row className="align-items-center">
//             {/* Left Column: Text & Order Button */}
//             {/* <Col md={6}>
//               <h2>Order Now, We Deliver Now</h2>
//               <p>
//                 Enjoy our delicious offerings delivered right to your door.
//                 Experience convenience at its best with our online ordering system.
//               </p>
//               <LinkContainer to="/order">
//                 <Button variant="success" size="lg">
//                   Order Now
//                 </Button>
//               </LinkContainer>
//             </Col> */}
//             {/* Right Column: Static Carousel */}
//             <Col md={6}>
//               {/* <Carousel interval={3000} pause="hover">
//                 <Carousel.Item>
//                   <Image src="/images/jollof-rice-1.jpg" alt="Dish 1" fluid />
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <Image src="/images/okro-soup-1.jpg" alt="Dish 2" fluid />
//                 </Carousel.Item>
//                 <Carousel.Item>
//                   <Image src="/images/egusi-soup-1.jpg" alt="Dish 3" fluid />
//                 </Carousel.Item>
//               </Carousel> */}
//               <FoodAnimation />
//             </Col>
//           </Row>
//         </Container>
        
//       </section>

//       {/* Section 3: Teaser Section */}
//       <section className="py-5" >
//         <Container >
//           <Row>
//             <Col md={6}>
//               <Card className="mb-3">
//                 <Card.Body>
//                   <Card.Title>Experience THE QAVE</Card.Title>
//                   <Card.Text>
//                     Discover our unique dining experience with an ambiance that perfectly complements our carefully curated menu and exceptional service.
//                   </Card.Text>
//                   <LinkContainer to="/experience">
//                     <Button variant="info">Read More</Button>
//                   </LinkContainer>
//                 </Card.Body>
//               </Card>
//             </Col>
//             <Col md={6}>
//               <Card className="mb-3">
//                 <Card.Body>
//                   <Card.Title>Our Signature Dishes</Card.Title>
//                   <Card.Text>
//                     Explore a menu crafted with passion and innovation. Our signature dishes are prepared with the finest ingredients to provide an unparalleled taste experience.
//                   </Card.Text>
//                   <LinkContainer to="/menu">
//                     <Button variant="info">More</Button>
//                   </LinkContainer>
//                 </Card.Body>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       {/* Footer */}
//       <footer className="bg-dark text-white py-4">
//         <Container>
//           <Row>
//             <Col md={4}>
//               <h5>Contact</h5>
//               <p>Email: info@theqave.com</p>
//               <p>Phone: +1 234 567 890</p>
//             </Col>
//             <Col md={4}>
//               <h5>Follow Us</h5>
//               <p>Social media links here</p>
//             </Col>
//             <Col md={4}>
//               <h5>Information</h5>
//               <p>
//                 <LinkContainer to="/terms">
//                   <a className="text-white" style={{ textDecoration: 'none' }}>
//                     Terms &amp; Conditions
//                   </a>
//                 </LinkContainer>
//                 <br />
//                 <LinkContainer to="/privacy">
//                   <a className="text-white" style={{ textDecoration: 'none' }}>
//                     Privacy Policy
//                   </a>
//                 </LinkContainer>
//               </p>
//             </Col>
//           </Row>
//         </Container>
//       </footer>
//     </>
//   );
// };

// export default HomeScreen;


// // HomeScreen.jsx
// import React from 'react';
// import { Container } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
// import FoodAnimation from '../components/FoodAnimation';

// const HomeScreen = () => {
//   return (
//     <>
//       {/* SECTION 1: Hero */}
//       <section
//         style={{
//           backgroundImage: "url('/images/resturant-interior.jpg')",
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           height: '80vh',
//           position: 'relative'
//         }}
//       >
//         <div
//           className="d-flex flex-column align-items-center justify-content-center text-center"
//           style={{
//             position: 'absolute',
//             inset: 0,
//             backgroundColor: 'rgba(0,0,0,0.2)',
//           }}
//         >
//           <h1 className="display-1 text-white">THE QAVE</h1>
//           <p className="lead text-white">
//             Experience the ultimate blend of ambiance and flavor.
//           </p>
//           <LinkContainer to="/reserve">
//             <button className="btn btn-primary btn-lg">Reserve Now</button>
//           </LinkContainer>
//         </div>
//       </section>

//       {/* SECTION 2: Full width background, using negative margins or 100vw approach */}
//       <section
//         className="py-5"
//         style={{
//           backgroundColor: '#190f0a',
//           width: '100vw',
//           position: 'relative',
//           left: '50%',
//           right: '50%',
//           marginLeft: '-50vw',
//           marginRight: '-50vw',
//           padding: '2rem 0'
//         }}
//       >
//         <Container>
//           <FoodAnimation />
//         </Container>
//       </section>

//       {/* SECTION 3: Teasers, etc. (unchanged) */}
//       {/* ... */}
//     </>
//   );
// };

// export default HomeScreen;



// import React, { useState } from 'react';
// import { Container } from 'react-bootstrap';
// import { LinkContainer } from 'react-router-bootstrap';
// import FoodAnimation from '../components/FoodAnimation';

// const HomeScreen = () => {
//   const [backgroundImage, setBackgroundImage] = useState('/images/resturant-interior.jpg');

//   return (
//     <>
//       {/* SECTION 1: Hero */}
//       <section
//         style={{
//           backgroundImage: `url(${backgroundImage})`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           height: '80vh',
//           position: 'relative',
//         }}
//       >
//         <div
//           className="d-flex flex-column align-items-center justify-content-center text-center"
//           style={{
//             position: 'absolute',
//             inset: 0,
//             backgroundColor: 'rgba(0,0,0,0.2)',
//           }}
//         >
//           <h1 className="display-1 text-white">THE QAVE</h1>
//           <p className="lead text-white">
//             Experience the ultimate blend of ambiance and flavor.
//           </p>
//           <LinkContainer to="/reserve">
//             <button className="btn btn-primary btn-lg">Reserve Now</button>
//           </LinkContainer>
//         </div>
//       </section>

//       {/* SECTION 2: Full width background */}
//       <section
//         className="py-5"
//         style={{
//           backgroundColor: '#190f0a',
//           width: '100vw',
//           position: 'relative',
//           left: '50%',
//           right: '50%',
//           marginLeft: '-50vw',
//           marginRight: '-50vw',
//           padding: '2rem 0',
//         }}
//       >
//         <Container>
//           <FoodAnimation onChangeBackground={setBackgroundImage} />
//         </Container>
//       </section>
//     </>
//   );
// };

// export default HomeScreen;


import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import FoodAnimation from '../components/FoodAnimation';
import WhyChooseUs from '../components/WhyChooseUs';

const HomeScreen = () => {
  const [backgroundImage, setBackgroundImage] = useState('/images/resturant-interior.jpg');

  return (
    <>
      <div style={{ height: '5vh'}}>

      </div>
      {/* SECTION 1: Hero */}
      <section
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '80vh',
          position: 'relative',
          borderRadius: '20px',
          // backgroundColor: '#190f0a',
        }}
      >
        <div
          className="d-flex flex-column align-items-center justify-content-center text-center"
          style={{
            position: 'absolute',
            inset: 0,
            // backgroundColor: 'rgba(0,0,0,0.2)',
          }}
        >
          <h1 className="display-1 text-white">THE QAVE</h1>
          <p className="lead text-white">
            Experience the ultimate blend of ambiance and flavor.
          </p>
          <LinkContainer to="/reserve">
            <button className="btn btn-primary btn-lg">Reserve Now</button>
          </LinkContainer>
        </div>
      </section>

      {/* SECTION 2: Full width background */}
      <section
        className="py-5"
        style={{
          // backgroundColor: '#190f0a',
          // padding: '2rem 0',
          // marginTop: '30px',
          // marginBottom: '30px',
          // position: 'relative',
          // left: '50%',
          // right: '50%',
          // marginLeft: '-50vw',
          // marginRight: '-50vw',
          borderRadius: '20px' 
        }}
      >
        <Container>
          <FoodAnimation onChangeBackground={setBackgroundImage} />
        </Container>
      </section>

      {/* <section className="py-5">
      <Container>
        <Row>
          <Col md={6}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Menu</Card.Title>
                <Card.Text>
                  Explore our extensive menu featuring a fusion of traditional flavors and modern cuisine.
                </Card.Text>
                <LinkContainer to="/menu">
                  <Button variant="info">View Menu</Button>
                </LinkContainer>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Dine-in</Card.Title>
                <Card.Text>
                  Experience our inviting dining atmosphere with exceptional service.
                </Card.Text>
                <LinkContainer to="/dinein">
                  <Button variant="info">Learn More</Button>
                </LinkContainer>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section> */}

    {/* SECTION 3: Menu & Dine-In Cards */}
    <WhyChooseUs /> {/* ✅ Now included as a component */}
    <div style={{ height: '5vh'}}>

</div>

    </>
  );
};

export default HomeScreen;