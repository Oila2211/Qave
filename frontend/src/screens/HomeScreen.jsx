
import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import FoodAnimation from '../components/FoodAnimation';
import WhyChooseUs from '../components/WhyChooseUs';
import HomeHeroSection from '../components/HomeHeroSection';
import QanaPoints from '../components/QanaPoints';
import ExperienceSection from '../components/ExperienceSection';

const HomeScreen = () => {
  const [backgroundImage, setBackgroundImage] = useState('/images/resturant-interior.jpg');

  return (
    <>
      <div style={{ height: '5vh'}}>

      </div>
      {/* SECTION 1: Hero */}
      <HomeHeroSection />

      {/* SECTION 2: Full width background */}
      <section
        className="py-5"
        style={{
          borderRadius: '20px' 
        }}
      >
        <Container>
          <FoodAnimation onChangeBackground={setBackgroundImage} />
        </Container>
      </section>

    {/* SECTION 3: Point reward system */}
    <QanaPoints /> {/* ✅ Now included as a component */}
    <div style={{ height: '5vh'}}></div>

    {/* SECTION 4: Menu & Dine-In Cards */}
    <ExperienceSection /> {/* ✅ Now included as a component */}
    <div style={{ height: '5vh'}}></div>

    {/* SECTION 4: Menu & Dine-In Cards */}
    <WhyChooseUs /> {/* ✅ Now included as a component */}
    <div style={{ height: '5vh'}}>

</div>

    </>
  );
};

export default HomeScreen;