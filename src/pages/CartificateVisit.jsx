import React from 'react'
import { useParams } from 'react-router-dom'
import CartificateData from '../data/Data'
import NotFoundPage from './NotFoundPage';
import { useContext } from "react";
import { ThemeContext } from "../components/ThemeContext";

function CartificateVisit() {


  const { theme } = useContext(ThemeContext);

  // const cartificate = CartificateData[0]
  const { id } = useParams();

  const cartificate = CartificateData.find(
    (item) => item.id === Number(id)
  );

  if (!cartificate) {
    return (
      <NotFoundPage />
    );
  }

  const styles = {
    container: {
      display: "flex",
      gap: "40px",
      padding: "40px",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "whitesmoke",
      minHeight: "80vh"
    },

    card: {
      display: "flex",
      gap: "40px",
      backgroundColor: "whiteSmoke ",
      padding: "30px",
      borderRadius: "12px",
      boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
      maxWidth: "900px",
      width: "100%",
      flexWrap: "wrap",
      margin: "20px auto"
    },

    left: {
      flex: "1",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    },

    image: {
      width: "500px",
      height: "350px",
      objectFit: "cover",
      borderRadius: "10px",
      boxShadow: "0 8px 18px rgba(0,0,0,0.6)"
    },

    right: {
      flex: "1",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center"
    },

    title: {
      fontSize: "28px",
      fontWeight: "bold",
      color: "rgb(33, 33, 68)",
      marginBottom: "10px"
    },

    id: {
      fontSize: "18px",
      fontWeight: "600",
      marginBottom: "10px",
      color: "#444"
    },

    text: {
      fontSize: "16px",
      lineHeight: "1.6",
      color: "#555"
    }
  };

  return (
    <div style={styles.container} style={{
      backgroundColor: theme === "light" ? "#ffffff" : "#3a3b3b",
      color: theme === "light" ? "#3a3b3b" : "#ffffff",
    }}>

      <div style={styles.card}>

        <div style={styles.left}>
          <img
            src={cartificate.img}
            alt={cartificate.title}
            style={styles.image}
          />
        </div>

        <div style={styles.right}>
          <h1 style={styles.title}>{cartificate.title}</h1>
          <h2 style={styles.id}>ID: {cartificate.id}</h2>
          <h2 style={styles.id}>Student Name: {cartificate.StudentName}</h2>
          <h2 style={styles.id}>Course Title: {cartificate.CourseTitle}</h2>
          <h2 style={styles.id}>Issued By: {cartificate.IssuedBy}</h2>
          <h2 style={styles.id}>Partner Organization: {cartificate.PartnerOrganization}</h2>
          <h2 style={styles.id}>Completion Date: {cartificate.CompletionDate}</h2>
          <h2 style={styles.id}>Instructor: {cartificate.Instructor}</h2>
          <h2 style={styles.id}>Program: {cartificate.Program}</h2>





          {/* <p style={styles.text}>{cartificate.description}</p> */}
        </div>

      </div>

    </div>
  )
}

export default CartificateVisit