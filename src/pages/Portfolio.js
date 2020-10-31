import React from "react"
import { useStaticQuery } from "gatsby"
import { get } from "lodash"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const GetPortfolioQuery = graphql`
  query GetPortfolioQuery {
    allMarkdownRemark(
      filter: { id: { eq: "dfb2e8b9-7d7c-57a8-a244-889fbfeffedc" } }
    ) {
      nodes {
        id
        frontmatter {
          title
          summary
          slug
        }
        html
      }
    }
  }
`

const PortfolioPage = () => {
  const data = useStaticQuery(GetPortfolioQuery)
  const title = get(data, "allMarkdownRemark.nodes[0].frontmatter.title", "")
  const summary = get(
    data,
    "allMarkdownRemark.nodes[0].frontmatter.summary",
    ""
  )
  const content = get(data, "allMarkdownRemark.nodes[0].html", "")

  return (
    <Layout>
      <SEO title={title} description={summary} />
      <h2>{title}</h2>
      <p>{summary}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </Layout>
  )
}

export default PortfolioPage
