import React from 'react'
import Footer from '../components/footer'
import Header from '../components/header'

import { Link } from 'gatsby'

const IndexPage = () => {
  return (
    <div>
      <Header/>
      <h1>Hi There,</h1>
      <h2>I'm Dylan, a boss from LA!</h2>
      <p>Need a developer? <Link to="/contact">Contact Me.</Link></p>
      <p>Learn more <Link to="/about">about</Link> me.</p>
      <p>Check out my <Link to="/blog">blog.</Link></p>
      <Footer/>
    </div>
  )
}

export default IndexPage;