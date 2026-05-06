import React from 'react';
import html from '../data/images/html-cartificate.jpg'
import css from '../data/images/css-cartificate.jpg'
import javascript1 from '../data/images/javascript-cartificate-01.jpg'
import javascript2 from '../data/images/javascript-cartificate-02.jpg'
import { Link } from 'react-router-dom';


function Cartificate() {

  const container = {
    padding: "20px",
    backgroundColor: "whiteSmoke",
    textAlign: "center"
  };

  const heading = {
    textAlign: "center",
    fontWeight: "900",
    fontSize: "40px",
    textDecoration: "underline",
    color: "rgb(33, 33, 68)",
  };

  const grid = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "30px"
  };

  const card = {
    width: "320px",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 5px 12px rgba(0,0,0,0.6)",
    transition: "0.3s",
    cursor: "pointer"
  };

  const img = {
    width: "100%",
    borderRadius: "8px",
    marginBottom: "15px"
  };

  const text = {
    fontWeight: "900",
    color: "rgb(33, 33, 68)",
  };

  const certificates = [
    { id: 1, title: "HTML", img: html },
    { id: 2, title: "CSS", img: css },
    { id: 3, title: "JavaScript1", img: javascript1 },
    { id: 4, title: "JavaScript2", img: javascript2 }
  ];

  return (
    <div style={container}>
      <h1 style={heading}>Certificates:</h1>

      <div style={grid}>
        {certificates.map((cert, index) => (
          <Link to={`/cartificatevisit/${cert.id}`}
            key={index}
            style={card}
            onMouseOver={(hover) => hover.currentTarget.style.transform = "scale(1.05)"}
            onMouseOut={(hover) => hover.currentTarget.style.transform = "scale(1)"}
          >
            <img src={cert.img} alt={cert.id} style={img} />
            <h2 style={text}>{cert.title}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Cartificate;
