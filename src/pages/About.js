import React from "react"
import { useStaticQuery } from "gatsby"
import { get } from "lodash"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const GetAboutQuery = graphql`
  query GetAboutQuery {
    allMarkdownRemark(
      filter: { id: { eq: "c487c9ef-5db8-5eea-a892-977ceeb68b52" } }
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

const AboutPage = ({ id }) => {
  const data = useStaticQuery(GetAboutQuery)

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

export default AboutPage
