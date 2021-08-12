import React from 'react'
import Layout from '../components/layout'
import Head from "../components/head"

import oregon from '../assets/Sunrise-landscape-Mountain-meadow-flower-red-sky-Sparks-Lake-Deschutes-National-Forest-Oregon-USА-1920x1080.jpg'
import { Link } from 'gatsby'


const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>
                About Me
            </h1>

            <h2>I grew up in Oregon, and I also play the trumpet.</h2>
            <img src={oregon} alt='Oregon'></img>
            <p>Need to contact me? Go <Link to="/contact">here!</Link></p>
        </Layout>
    )
}

export default AboutPage