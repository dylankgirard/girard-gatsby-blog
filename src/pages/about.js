import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

import { Link } from 'gatsby'


const AboutPage = () => {
    return (
        <div>
             <Header/>
            <h1>
                About Me
            </h1>
            <p>I grew up in Oregon, and I also play the trumpet.</p>
            <p>Need to contact me? Go <Link to="/contact">here!</Link></p>
            <Footer/>
        </div>
    )
}

export default AboutPage