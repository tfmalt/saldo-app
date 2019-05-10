import React from 'react'

import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Balance from '../components/Balance'

const IndexPage = () => (
  <Layout headerTitle="Saldo - Again">
    <SEO title="Home" keywords={[`gatsby`, `open banking`, `react`]} />
    <Balance />
  </Layout>
)

export default IndexPage
