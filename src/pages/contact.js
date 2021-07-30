import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'
import { Link } from 'gatsby'

const ContactPage = () => {
    return (
        <div>
            <Header/>
            <h1>
                Contact Me!
            </h1>
            <p>Want to talk? Reach me at <Link to="https://www.dylankgirard.com" target="_blank">my porfolio site.</Link></p>
            <Footer/>
        </div>
    )
}

export default ContactPage