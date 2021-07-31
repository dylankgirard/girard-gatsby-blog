import React from 'react'
import Layout from '../components/layout'


import { Link } from 'gatsby'


const AboutPage = () => {
    return (
        <Layout>
            <h1>
                About Me
            </h1>
            <p>I grew up in Oregon, and I also play the trumpet.</p>
            <p>Need to contact me? Go <Link to="/contact">here!</Link></p>
        </Layout>
    )
}

export default AboutPage