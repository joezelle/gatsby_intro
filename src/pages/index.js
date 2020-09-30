import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi peeps</h1>
    <p>Welcome to my website, check out more of it down below.</p>
    <Link to="/about">About Page</Link>
  </Layout>
)

export default IndexPage
