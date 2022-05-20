import React from "react"
import * as styles from "../styles/NavLink.module.scss"

export default function NavLink({ href, name }) {
    return (
        <li>
            <a className={styles.a} href={href}>
                <h3 className={styles.gradienttext}>{name}</h3>
            </a>
        </li>
    )
}
