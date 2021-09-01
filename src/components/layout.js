import React from 'react'
import PageTransition from "gatsby-plugin-page-transitions"
import Header from '../components/header'
import Footer from '../components/footer'
import '../styles/index.scss'
import * as layoutStyles from './layout.module.scss'


const Layout = (props) => {
    return (
      <PageTransition>
        <div className={layoutStyles.container}>
          <div className={layoutStyles.content}>
            <Header />
            {props.children}
          </div>
          <Footer />
        </div>
      </PageTransition>
    )
}

export default Layout