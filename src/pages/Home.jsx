import React from 'react'
import mainpicture from '../data/images/main-picture.jpeg'


function Home() {

  const containerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "50px",
    flexWrap: "wrap",
    backgroundColor: "whiteSmoke",
    // border: "2px solid black",
  };

  const textBox = {
    flex: "1",
    padding: "20px",
    margin: "60px 120px",
    // border: "2px solid black",
  };

  const imageBox = {
    flex: "1",
    display: "flex",
    justifyContent: "center",
    padding: "20px",
    margin: "60px auto",
  };

  const imgStyle = {
    width: "400px",
    height: "450px",
    borderRadius: "10%",
    boxShadow: "0 0 20px rgba(0,0,0,0.3)"
  };

  const heading1 = {
    fontSize: "40px",
    marginBottom: "10px"
  };

  const heading2 = {
    color: "rgb(33, 33, 68)",
    marginBottom: "15px",
    textTransform: "capitalize"
  };

  const para = {
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "25px",
    fontSize: "18px",
    fontWeight: "6 00"
  };

  const buttonStyle = {
    padding: "12px 17px",
    marginRight: "10px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    backgroundColor: "rgb(33, 33, 68)",
    color: "white",
    fontSize: "14px",
    textTransform : "capitalize",
  };


  return (
    <div style={containerStyle}>

      <div style={textBox}>
        <h1 style={heading1}>Hi, I am Hamza Ansari </h1>
        <h2 style={heading2}>frontend web developer </h2>
        <p style={para}>A passionate Frontend Web Developer I build responsive, clean, and user-friendly web interfaces
          using HTML, CSS, JavaScript, and Bootstrap. Currently a 1st Year student, learning Web Development
          at SMIT, with a strong focus on turning ideas into functional, real-world websites. </p>
        <button style={buttonStyle}>
          view projects
        </button>
        <button style={buttonStyle}>
          view certificate
        </button>
      </div>
      <div style={imageBox}>
        <img src={mainpicture} alt="main picture" style={imgStyle} />
      </div>

    </div>
  )
}

export default Home
