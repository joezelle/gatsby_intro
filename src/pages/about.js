import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <p>This is the about page</p>
    <Link to="/">Home</Link>
  </Layout>
)

export default AboutPage
