import React from 'react';
import '../assets/styles/ExperienceSection.css' // Import the CSS file

const TheExperience = () => {
  return (
    <section className="experience-section">
      <div className="experience-content"
        style={{background: 'linear-gradient(to right, rgba(76,50,37,0.9), rgba(0,0,0,0.4))'}}
      >
        <div className="text-content">
          <h2
          >The Experience</h2>
          <p>
            Imagine stepping into a place where the rhythms of Afrobeat blend with the aromas of traditional West African dishes, creating an experience that transports you straight to Africa—without leaving Stockholm.
          </p>
          <p>
            At The Qave, dining is more than just eating; it’s an adventure. Feel the warmth of handcrafted African décor, savor the rich, authentic flavors of African cuisine, and immerse yourself in the cultural vibes—from the music to the art.
          </p>
          <p>
            Whether you're a lifelong lover of African culture or new to its vibrant flavors, The Qave invites you to explore, celebrate, and belong.
          </p>
          <p>🌍 Here, everyone is welcome to experience the heart of Africa—right in the heart of Stockholm.</p>
          <button className="explore-button">Explore More</button>
        </div>
        <div className="image-content">
          <img src="/images/art-interior.jpg" alt="African Interior" />
        </div>
      </div>
    </section>
  );
};

export default TheExperience;