import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

import { Link } from "gatsby"

const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact Me!</h1>
      <p>
        Want to talk? Reach me at{" "}
        <Link to="https://www.dylankgirard.com" target="_blank">
          my porfolio site.
        </Link>
      </p>
    </Layout>
  )
}

export default ContactPage
