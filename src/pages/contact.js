import React from 'react'
import Layout from '../components/layout'

import { Link } from 'gatsby'

const ContactPage = () => {
    return (
        <Layout>
            <h1>
                Contact Me!
            </h1>
            <p>Want to talk? Reach me at <Link to="https://www.dylankgirard.com" target="_blank">my porfolio site.</Link></p>
        </Layout>
    )
}

export default ContactPage