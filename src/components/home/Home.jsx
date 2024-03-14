// Home.js
// import React from 'react';
import { motion } from "framer-motion";
import backgroundImage from "../../assets/home-bg.jpg";

import Doc from "../../assets/Doc.png";

const Home = () => {
  const buttonColor = "#7D00A9";
  const imageVariants = {
    initial: { x: 0, y: 0, rotate: 0 },
    animate: {
      rotate: [0, -5, 0, 5, 0],
      transition: { duration: 2, ease: "linear", repeat: Infinity },
    },
  };

  return (
    <div
      style={{
        position: "relative",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          position: "absolute",
          width: "100%",
          filter: "brightness(0.5)", // Adjust the brightness value as needed
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay color
        }}
      />

      {/* Add new elements here */}

      <h1
        style={{
          color: "white",
          transform: "translateX(-430px) translateY(100px)", // Separate translations for X and Y axes

          fontSize: "3em",
          fontWeight: "bold",
          zIndex: 1, // Ensure the text is on top of the overlay
          textAlign: "center",
          marginTop: "20vh", // Adjust vertical spacing as needed
        }}
      >
        FEELING SICK ?
      </h1>

      <motion.img
        src={Doc}
        alt="Your Image Alt Text"
        style={{
          width: "450px",
          height: "450px",
          marginLeft: "900px",
          zIndex: 1,
          position: "absolute",
        }}
        variants={imageVariants}
        initial="initial"
        animate="animate"
      />

      <h1
        style={{
          color: "white",
          transform: "translateX(-300px) translateY(130px)", // Separate translations for X and Y axes

          fontFamily: "Lora, serif",
          fontSize: "2em",
          zIndex: 1, // Ensure the text is on top of the overlay
          textAlign: "center",
        }}
      >
        ACCESS DIVERSE DOCTORS INSTANTLY
      </h1>

      <h1
        style={{
          color: "white",
          transform: "translateX(-500px) translateY(160px)", // Separate translations for X and Y axes

          fontSize: "2em",
          fontFamily: "Lora, serif",
          zIndex: 1, // Ensure the text is on top of the overlay
          textAlign: "center",
        }}
      >
        WITH EZDOC.{" "}
      </h1>

      <button
        style={{
          position: "absolute",
          bottom: "100px",
          left: "15%",
          transform: "translateX(-50%)",
          zIndex: 1, // Ensure the button is on top of the overlay
          backgroundColor: buttonColor,
          color: "white",
          padding: "15px 30px", // Increase padding for a larger button
          borderRadius: "40px",
          cursor: "pointer",
          fontSize: "1.2em", // Adjust font size
          fontWeight: "bold", // Set font weight to bold
          transition: "background 0.3s ease, color 0.3s ease",
          fontFamily: "Arial, sans-serif", // Specify a preferred font family
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "white";
          e.target.style.color = buttonColor;
        }}
        // Reset the background color on mouse out
        onMouseOut={(e) => {
          e.target.style.backgroundColor = buttonColor;
          e.target.style.color = "white";
        }}
      >
        Consult Doc
      </button>
      <button
        style={{
          position: "absolute",
          bottom: "100px",
          left: "35%",
          transform: "translateX(-50%)",
          zIndex: 1, // Ensure the button is on top of the overlay
          backgroundColor: buttonColor,
          color: "white",
          padding: "15px 30px", // Increase padding for a larger button
          borderRadius: "40px",
          cursor: "pointer",
          fontSize: "1.2em", // Adjust font size
          fontWeight: "bold", // Set font weight to bold
          transition: "background 0.3s ease, color 0.3s ease",
          fontFamily: "Arial, sans-serif", // Specify a preferred font family
        }}
        onMouseOver={(e) => {
          e.target.style.backgroundColor = "white";
          e.target.style.color = buttonColor;
        }}
        // Reset the background color on mouse out
        onMouseOut={(e) => {
          e.target.style.backgroundColor = buttonColor;
          e.target.style.color = "white";
        }}
      >
        Chat with AI
      </button>
    </div>
  );
};

export default Home;
