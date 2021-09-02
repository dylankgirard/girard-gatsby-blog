import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import ContactForm from "../components/contactForm"


const ContactPage = () => {
  return (
    <Layout>
      <Head title="Contact" />
      <h1>Contact</h1>
      <p>Need a developer? Reach out using the form below.</p>
      <ContactForm/>
    </Layout>
  )
}

export default ContactPage
