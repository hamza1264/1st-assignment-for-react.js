import React from 'react'
import { NavLink } from 'react-router-dom'
import './Footer.css'

function Footer() {
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
                </div>
            </footer>
        </div>
    )
}

export default Footer
