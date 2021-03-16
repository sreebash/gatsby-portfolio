import { Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import styles from '../styles/home.css'

export default function Home() {
  return (

    <Layout>

      <section className="header">

        <div>
          <h2>Design</h2>
          <h3>Develop & Deploy</h3>
          <p>Full Stack Web Developer</p>
          <Link className="btn" to="/projects">My Portfolio Projects</Link>

        </div>
        <img src="/banner.png" alt="site banner" style={{maxWidth:'100%'}}/>
      </section>

    </Layout>
  )
}

