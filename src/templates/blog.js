import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

// For template files like this one, cant use usestaticquery.
// We must define query separately and export it
// currently no way to access "context" with usestaticquery here
// variable $slug comes from context when we set up the page (gatsby-node.js)

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
    }
  }
`

const Blog = props => {
  return (
    <Layout>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>
    </Layout>
  )
}

export default Blog

// SEE GATSBY-NODE.JS WHICH USES THIS TEMPLATE IN CREATING PAGES
