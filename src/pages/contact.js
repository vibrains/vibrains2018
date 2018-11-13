import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const contact = () => (
	<Layout>

  <form name="contact" netlify netlify-honeypot="bot-field" hidden>
  <input type="text" name="name" />
  <input type="email" name="email" />
  <textarea name="message"></textarea>
  </form>

  <Link to="/">Go back to the homepage</Link>
  </Layout>
  )

export default contact
