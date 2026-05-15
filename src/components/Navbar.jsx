import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { ThemeContext } from "./ThemeContext";



function Navbar() {

    const { theme, changeTheme } = useContext(ThemeContext);

    const buttonStyle = {
        backgroundColor: theme === "light" ? "#000" : "#fff",
        color: theme === "light" ? "#fff" : "#000",
        padding: "10px 25px",
        border: "none",
        cursor: "pointer",
        borderRadius: "5px",

    };

    return (
        <div>
            <nav>
                <div class="logo">
                    <h1><i>&lt;Hamza Ansari/&gt;</i></h1>
                </div>

                <div class="nav-links">
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
            </nav>
        </div>
    )
}

export default Navbar
