import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Balance from '../components/balance'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `open banking`, `react`]} />
    <Balance />
  </Layout>
)

export default IndexPage
