import React from 'react'
import { Link } from 'gatsby'

import * as headerStyles from './header.module.scss'

const Header = () => {
    return (
      <header className={headerStyles.header}>
        <h1>
          <Link className={headerStyles.title} to="/">
            DG - Software Engineer
          </Link>
        </h1>
        <nav>
          <ul className={headerStyles.navList}>
            <li>
              <Link className={headerStyles.navItem} to="/about">
                About
              </Link>
            </li>
            <li>
              <Link className={headerStyles.navItem} to="/contact">
                Contact
              </Link>
            </li>
            <li>
              <Link className={headerStyles.navItem} to="/blog">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
}

export default Header