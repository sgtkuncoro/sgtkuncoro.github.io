import React from "react"
import { useStaticQuery } from "gatsby"
import { get } from "lodash"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const GetDetailPage = graphql`
  query GetDetailPage {
    allMarkdownRemark(
      filter: { id: { eq: "d57e5e9a-5510-5e64-b736-463d03fbba84" } }
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
          description
          list
        }
        html
      }
    }
  }
`

const HomePage = ({ id }) => {
  const data = useStaticQuery(GetDetailPage)

  const title = get(data, "allMarkdownRemark.nodes[0].frontmatter.title", "")
  const description = get(
    data,
    "allMarkdownRemark.nodes[0].frontmatter.description",
    ""
  )
  // const skills = get(data, "allMarkdownRemark.nodes[0].frontmatter.list", "")
  const content = get(data, "allMarkdownRemark.nodes[0].html", "")

  return (
    <Layout>
      <SEO title={title} description={description} />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

export default HomePage
