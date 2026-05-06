import React from 'react'
import html from '../data/images/html-logo.png'
import css from '../data/images/css-logo.png'
import javascript from '../data/images/javascript-logo.png'
import bootstrap from '../data/images/bootstrip-logo.jpg'
import github from '../data/images/github-logo.png'
import git from '../data/images/git-logo.png'
import firebase from '../data/images/firebase-logo.png'
import typescript from '../data/images/typescript-logo.jpeg'
import react from '../data/images/react-logo.png'

function Skills() {

  const container = {
    backgroundColor: "whiteSmoke",
    padding: "50px 20px",
    textAlign: "center",
    fontFamily: "Arial, sans-serif"
  };

  const heading = {
    textAlign: "center",
    fontWeight: "900",
    fontSize: "45px",
    textDecoration: "underline",
    color: "rgb(33, 33, 68)",
  };

  const grid = {
    width: "80%",
    margin: "0 auto",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "60px"
  };

  const card = {
    width: "150px",
    height: "170px",
    backgroundColor: "#fff",
    borderRadius: "10px",
    boxShadow: "0 5px 10px rgba(0,0,0,0.6)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "0.3s"
  };

  const img = {
    width: "60px",
    marginBottom: "10px"
  };

  const text = {
    color: "rgb(33, 33, 68)",
    fontWeight: "bold",
    textTransform: "capitalize",
  };

  const skillsData = [
    { name: "HTML", img: html },
    { name: "CSS", img: css },
    { name: "JavaScript", img: javascript },
    { name: "Bootstrap", img: bootstrap },
    { name: "GitHub", img: github },
    { name: "Git", img: git },
    { name: "Firebase", img: firebase },
    { name: "TypeScript", img: typescript },
    { name: "React", img: react }
  ];

  return (
    <div style={container}>
      <h1 style={heading}>skills:</h1>

      <div style={grid}>
        {skillsData.map((skill, index) => (
          <div
            key={index}
            style={card}
            onMouseOver={(hover) => hover.currentTarget.style.transform = "scale(1.1)"}
            onMouseOut={(hover) => hover.currentTarget.style.transform = "scale(1)"}
          >
            <img src={skill.img} alt={skill.name} style={img} />
            <p style={text}>{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Skills
