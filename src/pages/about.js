import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const about = () => (
  <Layout>
  <h1>Hi from the about page</h1>
  <p>Welcome to about page</p>
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ex inventore facere quae sunt perferendis at, labore blanditiis itaque dolorem, eum dolor reiciendis delectus laudantium impedit cum repellendus laborum quod.</p>
  <Link to="/">Go back to the homepage</Link>
  </Layout>
  )

export default about