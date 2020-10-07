import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <React.Fragment>
    <SEO title="Home" />
    <Layout>
      <p>Hello!</p>
    </Layout>
  </React.Fragment>
)

export default IndexPage;
