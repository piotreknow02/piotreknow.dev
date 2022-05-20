import React, { useState } from "react"
import { Helmet } from "react-helmet"
import * as styles from "../styles/ThemeSwitch.module.scss"

export default function ThemeSwitch() {
    const [isDark, setIsDark] = useState(getDefaultTheme())
    return (
        <div className={styles.themeswitch} onClick={() => setTheme(!isDark)}>
            <Helmet>
                <link
                    rel="stylesheet"
                    href={
                        isDark ? "/themes/vardark.css" : "/themes/varlight.css"
                    }
                />
                <link rel="stylesheet" href="/themes/var.css" />
            </Helmet>
            <i
                className={
                    "fas " + (isDark ? "fa-moon" : "fa-sun") + " " + styles.i
                }
            ></i>
        </div>
    )

    function getDefaultTheme() {
        const theme = window.localStorage.getItem("theme")
        if (theme === 'true') return true
        else if (theme === 'false') return false
        else if (typeof window !== "undefined") {
            if (
                window.matchMedia &&
                window.matchMedia("(prefers-color-scheme: dark)").matches
            )
                return true
        } else return false
    }
    function setTheme(isDark) {
        setIsDark(isDark)
        localStorage.setItem("theme", isDark)
    }
}
