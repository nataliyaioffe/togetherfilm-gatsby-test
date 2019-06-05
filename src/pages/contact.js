import React from "react"
import Header from "../components/header"
import Footer from "../components/footer"

import { Link } from "gatsby"

const ContactPage = () => {
  return (
    <div>
      <Header />
      <h1>Contact</h1>
      <p>Toronto, Ontario, Canada</p>
      <p>
        <Link to="/">Home</Link>
      </p>
      <p>
        <Link to="/about">About Me</Link>
      </p>

      <Footer />
    </div>
  )
}

export default ContactPage
