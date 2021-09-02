import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"
import santaMonicaVid from "../assets/motionplaces0035c065q001-480.mp4"

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <video className="landing-vid" autoPlay muted loop id="santamonica">
        <source src={santaMonicaVid} type="video/mp4" />
      </video>
    </Layout>
  )
}

export default IndexPage

