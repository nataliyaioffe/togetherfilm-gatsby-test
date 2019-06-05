import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <div>
      <Header />
      <h1>About Me</h1>
      <p>My name is Nataliya Ioffe</p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/contact">Contact me</Link>
      </p>

      <Footer />
    </div>
  )
}

export default AboutPage
