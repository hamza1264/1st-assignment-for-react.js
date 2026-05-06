import React from 'react'
import { Link } from 'react-router-dom'

function NotFoundPage() {

    const containerStyle = {
        height: "90vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #1f1f1f, #2c3e50)",
        color: "white",
        textAlign: "center"
    };

    const headingStyle = {
        fontSize: "80px",
        margin: "0",
        color: "#00adb5"
    };

    const textStyle = {
        fontSize: "18px",
        margin: "10px 0 20px 0",
        color: "#ccc"
    };

    const linkStyle = {
        padding: "10px 20px",
        backgroundColor: "#00adb5",
        color: "white",
        textDecoration: "none",
        borderRadius: "5px",
        transition: "0.3s"
    };


    return (
        <div style={containerStyle}>
            <h1 style={headingStyle}>404 - Page Not Found</h1>
            <p style={textStyle}>The page you are looking for does not exist.</p>
            <Link to="/" style={linkStyle}>
                Go back to Home ⇉
            </Link>
        </div>
    )
}

export default NotFoundPage
