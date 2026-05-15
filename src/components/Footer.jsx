import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'
import { ThemeContext } from "./ThemeContext";
import { useContext } from 'react';

function Footer() {

    const { theme, changeTheme } = useContext(ThemeContext);

    const buttonStyle = {
        backgroundColor: theme === "light" ? "#000" : "#fff",
        color: theme === "light" ? "#fff" : "#000",
        padding: "10px 15px",
        border: "none",
        cursor: "pointer",
        borderRadius: "5px"
    };

    return (
        <div>
            <footer className="footer">
                <div className="footer-container">
                    <h1 className="footer-logo">
                        <i>&lt;Hamza Ansari/&gt;</i>
                    </h1>
                    <p className="footer-text">
                        © 2026 Hamza Ansari. Designed & Developed by Hamza Ansari.
                    </p>
                    <div className="footer-links">
                        <NavLink to="/">
                            Home
                        </NavLink>
                        <NavLink to="/about">
                            About
                        </NavLink>
                        <NavLink to="/skills">
                            Skills
                        </NavLink>
                        <NavLink to="/certificate">
                            Certificate
                        </NavLink>
                        <NavLink to="/project">
                            Project
                        </NavLink>
                    </div>
                    <button onClick={changeTheme} style={buttonStyle}>
                        {theme === "light" ? "Dark Mode 🌙" : "Light Mode 🌞"}
                    </button>
                </div>
            </footer>
        </div>
    )
}

export default Footer
