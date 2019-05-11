import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import Authenticate from '../components/Authenticate'

const AuthenticatePage = () => (
  <Layout headerTitle="Saldo - Logg inn">
    <SEO title="Authenticate" />
    <Authenticate />
  </Layout>
)

export default AuthenticatePage
