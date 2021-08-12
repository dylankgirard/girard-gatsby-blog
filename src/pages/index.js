import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import Head from "../components/head"
import LA from '../assets/WallpaperDog-975523.jpg'

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <h1>Hi There,</h1>
      <h2>I'm Dylan, a software developer from LA!</h2>
      <img
        src={LA}
        alt="Los Angeles"
      ></img>
      <p>
        Need a developer? <Link to="/contact">Contact Me.</Link>
      </p>
    </Layout>
  )
}

export default IndexPage
