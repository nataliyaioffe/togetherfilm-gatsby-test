import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"

import { Link } from "gatsby"

const IndexPage = () => {
  return (
    <div>
        <Header />
      <h1>Together BioRemediation</h1>
      <h2>Together film</h2>
      <p>
        <Link to="/about">About Me</Link>
      </p>
      <p>
        <Link to="/contact">Contact me</Link>
      </p>

      <Footer />
    </div>
  )
}

export default IndexPage
