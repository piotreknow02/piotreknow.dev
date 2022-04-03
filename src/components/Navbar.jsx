import React from "react"
import * as styles from "../styles/Navbar.module.scss"

import NavLink from "./NavLink"
import ThemeSwitch from "./ThemeSwitch"

export default function Navbar() {
  return (
    <>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <li>
            <a className={styles.a} href="/">
              <h1 className={styles.gradienttext}>Piotreknow</h1>
            </a>
          </li>
          <NavLink name="About me" href="/about" />
          <NavLink name="Programming" href="/programming" />
          <NavLink name="Cyber Security" href="/cybersec" />
          <NavLink name="Graphics" href="/graphics" />
          <NavLink name="Photography" href="https://www.instagram.com/piotreknow_photography/" />
          <li>
            <ThemeSwitch />
          </li>
        </ul>
      </nav>
      <div class={styles.spacer}></div>
    </>
  )
}
