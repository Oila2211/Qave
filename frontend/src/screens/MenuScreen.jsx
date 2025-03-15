// import React, { useState, useRef } from "react";
// import { Container, Row, Col, Card, Button } from "react-bootstrap";
// import "../assets/styles/Menu.css"; // Import CSS for styling

// const menuGroups = [
//   { id: "soups", name: "Nigerian Soups" },
//   { id: "rice-dishes", name: "Rice Dishes" },
//   { id: "yam-plantain", name: "Yam & Plantain Dishes" },
//   { id: "sides", name: "Sides" },
// ];

// // Sample menu items with prices
// const menuItems = {
//   soups: [
//     {
//       id: 1,
//       name: "Ofe Egusi",
//       image: `${process.env.PUBLIC_URL}/images/egusi.jpg`,
//       price: "129 SEK",
//       shortDesc: "A rich, nutty soup made from melon seeds...",
//       fullDesc:
//         "A rich, nutty soup made from melon seeds, cooked with vegetables and flavored with traditional spices.",
//     },
//     {
//       id: 2,
//       name: "Ofe Nsala",
//       image: `${process.env.PUBLIC_URL}/images/nsala.jpg`,
//       price: "139 SEK",
//       shortDesc: "A white, peppery soup made with catfish...",
//       fullDesc:
//         "A white, peppery soup made with catfish, thickened with yam and enriched with local herbs.",
//     },
//   ],
//   "rice-dishes": [
//     {
//       id: 3,
//       name: "Jollof Rice",
//       image: `${process.env.PUBLIC_URL}/images/jollof.jpg`,
//       price: "119 SEK",
//       shortDesc: "Smoky, flavorful rice cooked in tomato sauce...",
//       fullDesc:
//         "Smoky, flavorful rice cooked in tomato sauce, with a blend of spices and served with grilled chicken or fish.",
//     },
//   ],
// };

// const MenuScreen = () => {
//   const [expanded, setExpanded] = useState({}); // Track expanded items
//   const sectionRefs = useRef({});

//   // Scroll to section when clicking a group
//   const handleScroll = (id) => {
//     sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
//   };

//   // Toggle description visibility
//   const toggleDescription = (id) => {
//     setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
//   };

//   return (
//     <Container className="menu-container">
//       {/* Header */}
//       <h1 className="menu-title">Explore Our Menu</h1>

//       {/* Group Navigation */}
//       <div className="menu-groups">
//         {menuGroups.map((group) => (
//           <Button key={group.id} className="menu-group-btn" onClick={() => handleScroll(group.id)}>
//             {group.name}
//           </Button>
//         ))}
//       </div>

//       {/* Menu Sections */}
//       {menuGroups.map((group) => (
//         <div key={group.id} ref={(el) => (sectionRefs.current[group.id] = el)} className="menu-section">
//           <h2 className="menu-group-title">{group.name}</h2>

//           <Row>
//             {menuItems[group.id]?.map((item) => (
//               <Col md={6} key={item.id} className="menu-item">
//                 <Card className="menu-card">
//                   <Card.Img variant="top" src={item.image} className="menu-img" />
//                   <Card.Body>
//                     <Card.Title className="menu-food-name">{item.name}</Card.Title>
//                     <Card.Text className="menu-price">{item.price}</Card.Text>
//                     <Card.Text>
//                       {expanded[item.id] ? item.fullDesc : `${item.shortDesc} `}
//                       <span className="see-more" onClick={() => toggleDescription(item.id)}>
//                         {expanded[item.id] ? "See Less" : "See More"}
//                       </span>
//                     </Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </div>
//       ))}
//     </Container>
//   );
// };

// export default MenuScreen;




import React, { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../assets/styles/Menu.css";

const menuGroups = [
  { id: "soups", name: "Nigerian Soups" },
  { id: "rice_dishes", name: "Rice Dishes" },
  { id: "yam_plantain", name: "Yam & Plantain Dishes" },
  { id: "appetizers", name: "Appetizers" },
  { id: "drinks", name: "Drinks" },
  { id: "desserts", name: "Desserts" },
  { id: "sides", name: "Sides" },
  { id: "lunch", name: "Lunch Menu" },
];

const menuItems = {
  soups: [
    {
      id: 1,
      name: "Ofe Egusi",
      image: `${process.env.PUBLIC_URL}/images/egusi.jpg`,
      price: "129 SEK",
      shortDesc: "A rich, nutty soup made from melon seeds...",
      fullDesc:
        "A rich, nutty soup made from melon seeds, cooked with vegetables and flavored with traditional spices.",
    },
    {
      id: 2,
      name: "Ofe Nsala",
      image: `${process.env.PUBLIC_URL}/images/nsala.jpg`,
      price: "139 SEK",
      shortDesc: "A white, peppery soup made with catfish...",
      fullDesc:
        "A white, peppery soup made with catfish, thickened with yam and enriched with local herbs.",
    },
    {
      id: 3,
      name: "Ofe Ogbono",
      image: `${process.env.PUBLIC_URL}/images/nsala.jpg`,
      price: "139 SEK",
      shortDesc: "A white, peppery soup made with catfish...",
      fullDesc:
        "A white, peppery soup made with catfish, thickened with yam and enriched with local herbs.",
    },
    {
      id: 4,
      name: "Ofe Okra",
      image: `${process.env.PUBLIC_URL}/images/nsala.jpg`,
      price: "139 SEK",
      shortDesc: "A white, peppery soup made with catfish...",
      fullDesc:
        "A white, peppery soup made with catfish, thickened with yam and enriched with local herbs.",
    },
    {
      id: 5,
      name: "Ofe Nsala",
      image: `${process.env.PUBLIC_URL}/images/nsala.jpg`,
      price: "139 SEK",
      shortDesc: "A white, peppery soup made with catfish...",
      fullDesc:
        "A white, peppery soup made with catfish, thickened with yam and enriched with local herbs.",
    },
  ],

  rice_dishes: [
    {
      id: 1,
      name: "Smokey Jollof Rice",
      image: `${process.env.PUBLIC_URL}/images/jollof-rice.jpg`,
      price: "129 SEK",
      shortDesc: "A rich, nutty soup made from melon seeds...",
      fullDesc:
        "A rich, nutty soup made from melon seeds, cooked with vegetables and flavored with traditional spices.",
    },
    {
      id: 2,
      name: "Fried Rice",
      image: `${process.env.PUBLIC_URL}/images/nsala.jpg`,
      price: "139 SEK",
      shortDesc: "A white, peppery soup made with catfish...",
      fullDesc:
        "A white, peppery soup made with catfish, thickened with yam and enriched with local herbs.",
    },
    {
      id: 3,
      name: "OG Rice & Stew",
      image: `${process.env.PUBLIC_URL}/images/nsala.jpg`,
      price: "139 SEK",
      shortDesc: "A white, peppery soup made with catfish...",
      fullDesc:
        "A white, peppery soup made with catfish, thickened with yam and enriched with local herbs.",
    },
  ],

  yam_plantain: [
    {
      id: 1,
      name: "Cripsy Yam Delight",
      image: `${process.env.PUBLIC_URL}/images/jollof-rice.jpg`,
      price: "129 SEK",
      shortDesc: "A rich, nutty soup made from melon seeds...",
      fullDesc:
        "A rich, nutty soup made from melon seeds, cooked with vegetables and flavored with traditional spices.",
    },
    {
      id: 2,
      name: "Sweet Plantain",
      image: `${process.env.PUBLIC_URL}/images/nsala.jpg`,
      price: "139 SEK",
      shortDesc: "A white, peppery soup made with catfish...",
      fullDesc:
        "A white, peppery soup made with catfish, thickened with yam and enriched with local herbs.",
    },
    {
      id: 3,
      name: "Beans & Plantain fusion",
      image: `${process.env.PUBLIC_URL}/images/nsala.jpg`,
      price: "139 SEK",
      shortDesc: "A white, peppery soup made with catfish...",
      fullDesc:
        "A white, peppery soup made with catfish, thickened with yam and enriched with local herbs.",
    },
    {
      id: 4,
      name: "Naija Yam plate",
      image: `${process.env.PUBLIC_URL}/images/nsala.jpg`,
      price: "145 SEK",
      shortDesc: "A white, peppery soup made with catfish...",
      fullDesc:
        "A white, peppery soup made with catfish, thickened with yam and enriched with local herbs.",
    },
  ],

  appetizers: [
    {
      id: 1,
      name: "Pepper Soup",
      image: `${process.env.PUBLIC_URL}/images/jollof-rice.jpg`,
      price: "129 SEK",
      shortDesc: "A rich, nutty soup made from melon seeds...",
      fullDesc:
        "A rich, nutty soup made from melon seeds, cooked with vegetables and flavored with traditional spices.",
    },
    {
      id: 2,
      name: "Meat Pie",
      image: `${process.env.PUBLIC_URL}/images/nsala.jpg`,
      price: "139 SEK",
      shortDesc: "A white, peppery soup made with catfish...",
      fullDesc:
        "A white, peppery soup made with catfish, thickened with yam and enriched with local herbs.",
    },
    {
      id: 3,
      name: "Samosa",
      image: `${process.env.PUBLIC_URL}/images/nsala.jpg`,
      price: "139 SEK",
      shortDesc: "A white, peppery soup made with catfish...",
      fullDesc:
        "A white, peppery soup made with catfish, thickened with yam and enriched with local herbs.",
    },
    {
      id: 4,
      name: "Peppered Meat",
      image: `${process.env.PUBLIC_URL}/images/nsala.jpg`,
      price: "145 SEK",
      shortDesc: "A white, peppery soup made with catfish...",
      fullDesc:
        "A white, peppery soup made with catfish, thickened with yam and enriched with local herbs.",
    },
  ],

  drinks: [
    {
      id: 1,
      name: "Tiger Nut Juice",
      image: `${process.env.PUBLIC_URL}/images/jollof-rice.jpg`,
      price: "129 SEK",
      shortDesc: "A rich, nutty soup made from melon seeds...",
      fullDesc:
        "A rich, nutty soup made from melon seeds, cooked with vegetables and flavored with traditional spices.",
    },
    {
      id: 2,
      name: "Zobo Drink",
      image: `${process.env.PUBLIC_URL}/images/nsala.jpg`,
      price: "139 SEK",
      shortDesc: "A white, peppery soup made with catfish...",
      fullDesc:
        "A white, peppery soup made with catfish, thickened with yam and enriched with local herbs.",
    },
    {
      id: 3,
      name: "Soda",
      image: `${process.env.PUBLIC_URL}/images/nsala.jpg`,
      price: "139 SEK",
      shortDesc: "A white, peppery soup made with catfish...",
      fullDesc:
        "A white, peppery soup made with catfish, thickened with yam and enriched with local herbs.",
    },
    {
      id: 4,
      name: "Malt",
      image: `${process.env.PUBLIC_URL}/images/nsala.jpg`,
      price: "145 SEK",
      shortDesc: "A white, peppery soup made with catfish...",
      fullDesc:
        "A white, peppery soup made with catfish, thickened with yam and enriched with local herbs.",
    },
  ],

  desserts: [
    {
      id: 1,
      name: "Choco puff-puff",
      image: `${process.env.PUBLIC_URL}/images/jollof-rice.jpg`,
      price: "129 SEK",
      shortDesc: "A rich, nutty soup made from melon seeds...",
      fullDesc:
        "A rich, nutty soup made from melon seeds, cooked with vegetables and flavored with traditional spices.",
    },
    {
      id: 2,
      name: "Creamy puff-puff",
      image: `${process.env.PUBLIC_URL}/images/nsala.jpg`,
      price: "139 SEK",
      shortDesc: "A white, peppery soup made with catfish...",
      fullDesc:
        "A white, peppery soup made with catfish, thickened with yam and enriched with local herbs.",
    },
    {
      id: 3,
      name: "Cheese Cake",
      image: `${process.env.PUBLIC_URL}/images/nsala.jpg`,
      price: "139 SEK",
      shortDesc: "A white, peppery soup made with catfish...",
      fullDesc:
        "A white, peppery soup made with catfish, thickened with yam and enriched with local herbs.",
    },
  ],

  sides: [
    {
      id: 1,
      name: "Fried Plantain",
      image: `${process.env.PUBLIC_URL}/images/jollof-rice.jpg`,
      price: "129 SEK",
      shortDesc: "A rich, nutty soup made from melon seeds...",
      fullDesc:
        "A rich, nutty soup made from melon seeds, cooked with vegetables and flavored with traditional spices.",
    },
    {
      id: 2,
      name: "Chicken wings",
      image: `${process.env.PUBLIC_URL}/images/nsala.jpg`,
      price: "139 SEK",
      shortDesc: "A white, peppery soup made with catfish...",
      fullDesc:
        "A white, peppery soup made with catfish, thickened with yam and enriched with local herbs.",
    },
    {
      id: 3,
      name: "Grilled Mackerel",
      image: `${process.env.PUBLIC_URL}/images/nsala.jpg`,
      price: "139 SEK",
      shortDesc: "A white, peppery soup made with catfish...",
      fullDesc:
        "A white, peppery soup made with catfish, thickened with yam and enriched with local herbs.",
    },
    {
      id: 4,
      name: "Spring Roll",
      image: `${process.env.PUBLIC_URL}/images/nsala.jpg`,
      price: "145 SEK",
      shortDesc: "A white, peppery soup made with catfish...",
      fullDesc:
        "A white, peppery soup made with catfish, thickened with yam and enriched with local herbs.",
    },
  ],

  lunch: [
    {
      id: 1,
      name: "Pepper Soup",
      image: `${process.env.PUBLIC_URL}/images/jollof-rice.jpg`,
      price: "129 SEK",
      shortDesc: "A rich, nutty soup made from melon seeds...",
      fullDesc:
        "A rich, nutty soup made from melon seeds, cooked with vegetables and flavored with traditional spices.",
    },
    {
      id: 2,
      name: "Meat Pie",
      image: `${process.env.PUBLIC_URL}/images/nsala.jpg`,
      price: "139 SEK",
      shortDesc: "A white, peppery soup made with catfish...",
      fullDesc:
        "A white, peppery soup made with catfish, thickened with yam and enriched with local herbs.",
    },
    {
      id: 3,
      name: "Samosa",
      image: `${process.env.PUBLIC_URL}/images/nsala.jpg`,
      price: "139 SEK",
      shortDesc: "A white, peppery soup made with catfish...",
      fullDesc:
        "A white, peppery soup made with catfish, thickened with yam and enriched with local herbs.",
    },
    {
      id: 4,
      name: "Peppered Meat",
      image: `${process.env.PUBLIC_URL}/images/nsala.jpg`,
      price: "145 SEK",
      shortDesc: "A white, peppery soup made with catfish...",
      fullDesc:
        "A white, peppery soup made with catfish, thickened with yam and enriched with local herbs.",
    },
  ],
};








const MenuScreen = () => {
  const [expanded, setExpanded] = useState({});
  const sectionRefs = useRef({});

  const handleScroll = (id) => {
    sectionRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const toggleDescription = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <Container className="menu-container">
      <h1 className="menu-title">Our Menu</h1>

      {/* Category Buttons */}
      <div className="menu-groups">
        {menuGroups.map((group) => (
          <button key={group.id} className="menu-group-btn" onClick={() => handleScroll(group.id)}>
            {group.name}
          </button>
        ))}
      </div>

      {/* Menu Sections */}
      {menuGroups.map((group) => (
        <div key={group.id} ref={(el) => (sectionRefs.current[group.id] = el)} className="menu-section">
          <h4 className="menu-group-title">{group.name}</h4>

          <Row className="menu-list">
            {menuItems[group.id]?.map((item) => (
              <Col key={item.id} md={6} sm={12} className="menu-item">
                <div className="menu-item-container">
                  <img src={item.image} alt={item.name} className="menu-img" />
                  <div className="menu-item-details">
                    <h6 className="menu-food-name">{item.name}</h6>
                    <p className="menu-price">{item.price}</p>
                    <p className="menu-desc">
                      {expanded[item.id] ? item.fullDesc : `${item.shortDesc} `}
                      <span className="see-more" onClick={() => toggleDescription(item.id)}>
                        {expanded[item.id] ? "See Less" : "See More"}
                      </span>
                    </p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </Container>
  );
};

export default MenuScreen;

