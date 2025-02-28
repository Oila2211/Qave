
import React from "react";
import { motion } from "framer-motion";
import { FaShoppingCart, FaCoins, FaGift } from "react-icons/fa";
import "../assets/styles/QanaPoints.css";

const steps = [
  {
    id: 1,
    title: "Earn Points",
    description: "Each purchase adds Qana points to your account.",
    icon: <FaShoppingCart className="qana-icon" />,
  },
  {
    id: 2,
    title: "Track Progress",
    description: "Keep an eye on your total points balance by visiting your user profile. Your points are updated with every purchase!",
    icon: <FaCoins className="qana-icon" />,
  },
  {
    id: 3,
    title: "Redeem Rewards",
    description: "Redeem points only when placing order which is ( > or = 350 ) and your net points is ( > or = 2,000 )",
    icon: <FaGift className="qana-icon" />,
  },
];

const QanaPoints = () => {
  return (
    <section className="qana-container" style={{background: 'linear-gradient(to right, rgba(112, 80, 64, 0.1), rgba(0,0,0,0.4))'}}>
      <motion.h2
        className="qana-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        How Qana Points Work
      </motion.h2>

      <div className="qana-timeline">
        {steps.map((step, index) => (
          <motion.div
            key={step.id}
            className="qana-timeline-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.3, duration: 0.6 }}
          >
            <div className="qana-timeline-icon">{step.icon}</div>
            <div className="qana-timeline-content">
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Progress Bar */}
      <motion.div
        className="qana-progress-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <span 
            style={{color: 'white'}}
        >0 Points</span>
        <div className="qana-progress-bar">
          <motion.div
            className="qana-progress"
            initial={{ width: "0%" }}
            animate={{ width: "80%" }}
            transition={{ delay: 1.8, duration: 1 }}
          ></motion.div>
        </div>
        <span 
            style={{color: 'white'}}
        >2000 Points = discount in total order</span>
      </motion.div>
    </section>
  );
};

export default QanaPoints;



