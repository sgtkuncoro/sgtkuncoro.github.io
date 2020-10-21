import React from "react"
import { useStaticQuery } from "gatsby"
import { get } from "lodash"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const GetContactQuery = graphql`
  query GetContactQuery {
    allMarkdownRemark(
      filter: { id: { eq: "a2b17201-e7b9-59ed-beb4-a9026fe6ff6f" } }
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
          description
        }
        html
      }
    }
  }
`

const ContactPage = ({ id }) => {
  const data = useStaticQuery(GetContactQuery)
  const title = get(data, "allMarkdownRemark.nodes[0].frontmatter.title", "")
  const description = get(
    data,
    "allMarkdownRemark.nodes[0].frontmatter.description",
    ""
  )
  const content = get(data, "allMarkdownRemark.nodes[0].html", "")

  return (
    <Layout>
      <SEO title={title} description={description} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

export default ContactPage
