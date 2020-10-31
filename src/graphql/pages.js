/**
import { graphql } from "gatsby"

export const queries = {
  GetDetailPage: graphql`
    query GetDetailPage($id: String) {
      allMarkdownRemark(filter: { id: { eq: $id } }) {
        nodes {
          id
          excerpt
          frontmatter {
            title
            slug
            description
            skills
          }
        }
      }
    }
  `,

  GetAllPages: graphql`
    query GetAllPages {
      allMarkdownRemark {
        nodes {
          excerpt
          id
          frontmatter {
            title
            slug
            description
            list
          }
        }
      }
    }
  `,
}

export const mutations = {}

 */
