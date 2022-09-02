import React from 'react'
import "./Home.scss"
import Hero from '../Pages/Hero'
import About from '../Pages/About/About'
import Choose from './Choose'
import Numbers from './Numbers'
import Menu from '../Pages/Menu'
import Events from '../Pages/Events'
import Chefs from '../Pages/Chefs'
import Gallery from '../Pages/Gallery'
import Contact from '../Pages/Contact'
import Footer from './Footer'

const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <Choose />
            <Numbers />
            <Menu />
            <Events />
            <Chefs />
            <Gallery />
            <Contact />
            <Footer />
        </>
    )
}

export default Home
