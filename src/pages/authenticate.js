import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Authenticate from '../components/Authenticate'

const AuthenticatePage = () => (
  <Layout headerTitle="Saldo - Logg inn">
    <SEO title="Authenticate" />
    <Authenticate />
  </Layout>
)

export default AuthenticatePage
