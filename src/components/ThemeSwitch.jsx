import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useCookies } from "react-cookie";
import * as styles from "../styles/ThemeSwitch.module.scss";

export default function ThemeSwitch() {
  const [cookies, setCookie, removeCookie] = useCookies(['theme']);
  const [isDark, setIsDark] = useState(getDefaultTheme());
  return (
    <div class={styles.themeswitch} onClick={() => setTheme(!isDark)}>
      <Helmet>
        <link rel="stylesheet" href={isDark ? "/themes/vardark.css" : "/themes/varlight.css"}/>
        <link rel="stylesheet" href="/themes/var.css" />
      </Helmet>
      <i class={"fas " + (isDark ? "fa-moon" : "fa-sun") + " " + styles.i}></i>
    </div>
  )

  function getDefaultTheme() {
      const theme = cookies.theme;
      if (theme == true) return true
      else if (theme == false) return false
      else if(typeof window !== "undefined") { if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return true }
      else return false
  }
  function setTheme(isDark) {
      setCookie('theme', isDark);
      setIsDark(isDark);
  }
}
