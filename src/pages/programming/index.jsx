import React from "react"
import Layout from "../../components/Layout"
import Seo from "../../components/Seo"
import * as styles from "../../styles/programming.module.scss"

const badges = [
    {
        src: "https://img.shields.io/badge/c%23-%23239120.svg?style=for-the-badge&amp;logo=c-sharp&amp;logoColor=white",
        alt: "C#",
    },
    {
        src: "https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&amp;logo=css3&amp;logoColor=white",
        alt: "CSS3",
    },
    {
        src: "https://img.shields.io/badge/dart-%230175C2.svg?style=for-the-badge&amp;logo=dart&amp;logoColor=white",
        alt: "Dart",
    },
    {
        src: "https://img.shields.io/badge/elixir-%234B275F.svg?style=for-the-badge&amp;logo=elixir&amp;logoColor=white",
        alt: "Elixir",
    },
    {
        src: "https://img.shields.io/badge/go-%2300ADD8.svg?style=for-the-badge&amp;logo=go&amp;logoColor=white",
        alt: "Go",
    },
    {
        src: "https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&amp;logo=html5&amp;logoColor=white",
        alt: "HTML5",
    },
    {
        src: "https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&amp;logo=javascript&amp;logoColor=%23F7DF1E",
        alt: "JavaScript",
    },
    {
        src: "https://img.shields.io/badge/python-3670A0?style=for-the-badge&amp;logo=python&amp;logoColor=ffdd54",
        alt: "Python",
    },
    {
        src: "https://img.shields.io/badge/ruby-%23CC342D.svg?style=for-the-badge&amp;logo=ruby&amp;logoColor=white",
        alt: "Ruby",
    },
    {
        src: "https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&amp;logo=gnu-bash&amp;logoColor=white",
        alt: "Shell Script",
    },
    {
        src: "https://img.shields.io/badge/Solidity-%23363636.svg?style=for-the-badge&amp;logo=solidity&amp;logoColor=white",
        alt: "Solidity",
    },
    {
        src: "https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&amp;logo=typescript&amp;logoColor=white",
        alt: "TypeScript",
    },
    {
        src: "https://img.shields.io/badge/.NET-5C2D91?style=for-the-badge&amp;logo=.net&amp;logoColor=white",
        alt: ".Net",
    },
    {
        src: "https://img.shields.io/badge/Electron-191970?style=for-the-badge&amp;logo=Electron&amp;logoColor=white",
        alt: "Electron.js",
    },
    {
        src: "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&amp;logo=express&amp;logoColor=%2361DAFB",
        alt: "Express.js",
    },
    {
        src: "https://img.shields.io/badge/Flutter-%2302569B.svg?style=for-the-badge&amp;logo=Flutter&amp;logoColor=white",
        alt: "Flutter",
    },
    {
        src: "https://img.shields.io/badge/Gatsby-%23663399.svg?style=for-the-badge&amp;logo=gatsby&amp;logoColor=white",
        alt: "Gatsby",
    },
    {
        src: "https://img.shields.io/badge/JWT-black?style=for-the-badge&amp;logo=JSON%20web%20tokens",
        alt: "JWT",
    },
    {
        src: "https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&amp;logo=nestjs&amp;logoColor=white",
        alt: "NestJS",
    },
    {
        src: "https://img.shields.io/badge/Next-black?style=for-the-badge&amp;logo=next.js&amp;logoColor=white",
        alt: "Next JS",
    },
    {
        src: "https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&amp;logo=node.js&amp;logoColor=white",
        alt: "NodeJS",
    },
    {
        src: "https://img.shields.io/badge/rails-%23CC0000.svg?style=for-the-badge&amp;logo=ruby-on-rails&amp;logoColor=white",
        alt: "Rails",
    },
    {
        src: "https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&amp;logo=react&amp;logoColor=%2361DAFB",
        alt: "React",
    },
    {
        src: "https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&amp;logo=react&amp;logoColor=%2361DAFB",
        alt: "React Native",
    },
    {
        src: "https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&amp;logo=SASS&amp;logoColor=white",
        alt: "SASS",
    },
    {
        src: "https://img.shields.io/badge/svelte-%23f1413d.svg?style=for-the-badge&amp;logo=svelte&amp;logoColor=white",
        alt: "Svelte",
    },
    {
        src: "https://img.shields.io/badge/Xamarin-3199DC?style=for-the-badge&amp;logo=xamarin&amp;logoColor=white",
        alt: "Xamarin",
    },
    {
        src: "https://img.shields.io/badge/nginx-%23009639.svg?style=for-the-badge&amp;logo=nginx&amp;logoColor=white",
        alt: "Nginx",
    },
    {
        src: "https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&amp;logo=mariadb&amp;logoColor=white",
        alt: "MariaDB",
    },
    {
        src: "https://img.shields.io/badge/Microsoft%20SQL%20Sever-CC2927?style=for-the-badge&amp;logo=microsoft%20sql%20server&amp;logoColor=white",
        alt: "MicrosoftSQLServer",
    },
    {
        src: "https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&amp;logo=mongodb&amp;logoColor=white",
        alt: "MongoDB",
    },
    {
        src: "https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&amp;logo=mysql&amp;logoColor=white",
        alt: "MySQL",
    },
    {
        src: "https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&amp;logo=postgresql&amp;logoColor=white",
        alt: "Postgres",
    },
    {
        src: "https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&amp;logo=redis&amp;logoColor=white",
        alt: "Redis",
    },
    {
        src: "https://img.shields.io/badge/ansible-%231A1918.svg?style=for-the-badge&amp;logo=ansible&amp;logoColor=white",
        alt: "Ansible",
    },
    {
        src: "https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&amp;logo=babel&amp;logoColor=black",
        alt: "Babel",
    },
    {
        src: "https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&amp;logo=docker&amp;logoColor=white",
        alt: "Docker",
    },
    {
        src: "https://img.shields.io/badge/kubernetes-%23326ce5.svg?style=for-the-badge&amp;logo=kubernetes&amp;logoColor=white",
        alt: "Kubernetes",
    },
    {
        src: "https://img.shields.io/badge/-Swagger-%23Clojure?style=for-the-badge&amp;logo=swagger&amp;logoColor=white",
        alt: "Swagger",
    },
]

export default function Programming() {
    return (
        <Layout>
            <Seo title="Programming" />{" "}
            <div className={styles.programming}>
                <h1 className={styles.gradienttext}>Programming</h1>
            </div>
            <div className={styles.programming}>
                <h3>My tech stack 📚</h3>
                <p>
                    {badges.map(({ src, alt }, i) => (
                        <span key={i}>  
                            <img src={src} alt={alt} />
                            {" "}
                        </span>
                    ))}
                </p>
            </div>
        </Layout>
    )
}
