import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
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

            </nav>
        </div>
    )
}

export default Navbar
