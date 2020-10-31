import React from "react"

import Layout from "../components/Layout"
import SEO from "../components/SEO"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>Not Found</h1>
    <p>You just hit a route that doesn't exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
