import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const snaps = () => (
  <Layout>
  <h1>Hi from the snaps page</h1>
  <p>Welcome to snaps page</p>
  <Link to="/">Go back to the homepage</Link>
  </Layout>
  )

export default snaps