import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Authenticate from '../components/authenticate'

const AuthenticatePage = () => (
  <Layout>
    <SEO title="Authenticate" />
    <Authenticate />
  </Layout>
)

export default AuthenticatePage
