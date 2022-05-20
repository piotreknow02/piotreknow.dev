import * as React from "react"
import * as styles from "../styles/Icons.module.scss"
const links = [
    {
        icon: "fa-brands fa-github",
        link: "https://github.com/piotreknow02",
    },
    {
        icon: "fa-solid fa-envelope",
        link: "mailto:kontakt@piotreknow.ml",
    },
    {
        icon: "fa-brands fa-facebook",
        link: "https://fb.me/100015708576031",
    },
    {
        icon: "fa-brands fa-facebook-messenger",
        link: "https://m.me/100015708576031",
    },
]

export default function Icons() {
    return (
        <div className={styles.wrapper}>
            {links.map(({ icon, link }) => (
                <a key={link} href={link} target="_blank">
                    <i className={icon + " " + styles.icon} />
                </a>
            ))}
        </div>
    )
}
