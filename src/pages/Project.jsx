import React from 'react'
import project1 from '../data/images/project-image-01.jpg'
import project2 from '../data/images/project-image-02.jpg'
import project3 from '../data/images/project-image-03.jpg'
import project4 from '../data/images/project-image-04.jpg'
import project5 from '../data/images/project-image-05.jpg'
// import { projectData } from '../data/Data' 
// import { Link } from 'react-router-dom'

function Project() {

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
    width: "350px",
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
    fontWeight: "700",
    color: "rgb(33, 33, 68)",
  };

  const title = {
    fontWeight: "900",
    fontSize: "20px",
    textTransform: "uppercase",
   
    color: "rgb(33, 33, 68)",
  };



  const project = [
    { id: 1, title: "car rental platform damo (RentCars)", discription: "Damo is a website I developed using HTML, CSS, Bootstrap, and basic JavaScript. The website focuses on a clean UI, responsive design, and smooth user experience. I handled the complete front-end development, including layout design, styling, and basic interactivity, resulting in a simple, functional, and user-friendly web solution.", link:"https://hamza1264.github.io/1st-hackathon/", img: project1 },
    { id: 2, title: "Online Clothing Platform Damo (Aisha Ariyan)", discription: "Aisha Ariyan is an online clothing platform I developed using HTML, CSS, Bootstrap, and JavaScript, focusing on responsive design and smooth user experience. I handled front-end development, layout, styling, and interactivity, delivering a functional, user-friendly, and visually appealing web solution.", link:"https://hamza1264.github.io/4th-assignment-E-COMMERCE-/#bridals", img: project2 },
    { id: 3, title: "E-commerce Platform Damo (SkyPluse)", discription: "Aisha Ariyan is an online clothing platform I developed using HTML, CSS, Bootstrap, and JavaScript, focusing on responsive design and smooth user experience. I handled front-end development, layout, styling, and interactivity, delivering a functional, user-friendly, and visually appealing web solution.", link:"https://hamza1264.github.io/E-commerce--website-SKY-PLUSE/", img: project3 },
    { id: 4, title: "Online Jewelry Platform Damo (Bayside Fine Jewelry)", discription: "Bayside Fine Jewelry is an online jewelry platform I developed using HTML, CSS, Bootstrap, and js, focusing on responsive design and smooth user experience. I handled front-end development, layout, styling, and interactivity, delivering a functional, visually appealing, and user-friendly solution.", link:"https://hamza1264.github.io/4th-assignment--E-COMMERCE--with-js-/", img: project4 },
    { id: 5, title: "Online Grocery Platform Demo (FreshBasket)", discription: "FreshBasket is an online grocery platform I developed using HTML, CSS, Bootstrap, and JavaScript, focused on responsive design and a smooth user experience. I handled front-end development, including layout structuring, styling, and interactive features such as product listings, search functionality, and a cart system, creating a user-friendly and visually appealing shopping experience.", link:"https://hamza1264.github.io/2nd-assignment-freshbasket-for-firebase/", img: project5 },
  ];

  return (
    <div style={container}>
      <h1 style={heading}>project:</h1>

      <div style={grid}>
        {project.map((cert, index) => (
          <div
            key={index}
            style={card}
            onMouseOver={(hover) => hover.currentTarget.style.transform = "scale(1.05)"}
            onMouseOut={(hover) => hover.currentTarget.style.transform = "scale(1)"}
            onClick={() => window.open(cert.link, "_blank")}
          >
            <img src={cert.img} style={img} />
            <h5 style={title}>{cert.title}</h5>
            <p style={text}>{cert.discription}</p>
          </div>
        ))}
      </div>
    </div>
  );
}


export default Project
