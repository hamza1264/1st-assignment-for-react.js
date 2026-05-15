import React from 'react'
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";

function About() {


  const container = {
    padding: "40px",
    backgroundColor: "whiteSmoke",
    fontFamily: "Arial, sans-serif"
  };

  const heading = {
    textAlign: "center",
    fontWeight: "900",
    fontSize: "40px",
    textDecoration: "underline",
    color: "rgb(33, 33, 68)",
  };

  const flex = {
    display: "flex",
    justifyContent: "center",
    gap: "40px",
    flexWrap: "wrap"
  };

  const card = {
    width: "500px",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "5px",
    margin: "30px 20px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.6)"
  };

  const title = {
    color: "rgb(33, 33, 68)",
    fontSize: "30px",
    margin: "10px auto",
    fontWeight: "700",
    textTransform: "capitalize",
  };

  const text = {
    color: "#666",
    lineHeight: "1.5",
    fontSize: "20px",
    fontWeight: "700",
  };

  const eduText = {
    color: "#222",
    fontSize: "20px",
    lineHeight: "1",
    fontWeight: "700",
  };

  const { theme } = useContext(ThemeContext);

  return (
    <div  style={{
    ...container,
    backgroundColor: theme === "light" ? "#ffffff" : "#3a3b3b",
    color: theme === "light" ? "#3a3b3b" : "#ffffff",
  }}>
      <h1 style={heading}>About:</h1>
      <div style={flex} >

        <div style={card} >
          <h2 style={title}>
            who i am:
          </h2>
          <p style={text}>
            I am a passionate Frontend Web Developer focused on creating modern and user-friendly web interfaces.
            I work with HTML, CSS, JavaScript, and Bootstrap to build responsive websites. I continuously improve
            my skills to stay updated with the latest development practices.
          </p>
          <p style={text}>
            I am currently a first-year student learning Web Development at SMIT. I focus on industry-standard practices
            and best coding techniques. My goal is to turn creative ideas into functional, real-world websites.
          </p>

        </div>

        <div style={card}>
          <h2 style={title}>
            education:
          </h2>
          <p style={eduText}>Secondary School Certificate (SSC) – 10th Grade</p>
          <p style={eduText}>Institution: [Awadh Public School]</p>
          <p style={eduText}>Percentage: 70%</p>
          <p style={eduText}>Year Completed: [2025]</p>
          <br />
          <h3>Current Education:</h3>
          <p style={eduText}>1st Year Student, Web Development – SMIT</p>
        </div>
      </div>

    </div>
  )
}

export default About
