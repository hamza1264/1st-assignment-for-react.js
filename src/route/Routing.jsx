import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Home from '../pages/Home'
import About from '../pages/About'
import Skills from '../pages/Skills'
import Cartificate from '../pages/Cartificate'
import Project from '../pages/Project'
import Cartificatevisit from '../pages/CartificateVisit'
import NotFoundPage from '../pages/NotFoundPage'
import Footer from '../components/Footer'

function Routing() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='*' element={<NotFoundPage />} />
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />} />
                <Route path='/skills' element={<Skills />} />
                <Route path='/certificate' element={<Cartificate />} />
                <Route path='/cartificatevisit/:id' element={<Cartificatevisit/>} />
                <Route path='/project' element={<Project />} />

            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default Routing
