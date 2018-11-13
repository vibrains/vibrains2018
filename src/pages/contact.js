import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const contact = () => (
	<Layout>

  <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
  <input type="hidden" name="contact" value="contact" />  
  <div>
  <input placeholder="Full Name" name="name" type="text" required />
  </div>
  <div>
  <input placeholder="Email Address" name="email" type="email" required />
  </div>
  <div>
  <textarea placeholder="Message" name="message"></textarea>
  </div>
  <p>
  <button type="submit">Send</button>
  </p>
  </form>

  <Link to="/">Go back to the homepage</Link>
  </Layout>
  )

export default contact
