import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

// For template files like this one, cant use usestaticquery.
// We must define query separately and export it
// currently no way to access "context" with usestaticquery here
// variable $slug comes from context when we set up the page (gatsby-node.js)
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
    </Layout>
  )
}

export default Blog
