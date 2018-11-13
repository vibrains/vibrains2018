import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

const contact = () => (
	<Layout>
  <div className="qfc-container">
  <form name="contact" method="POST" netlify>
  <p class="hidden">
  <label>Don’t fill this out if you're human: <input name="bot-field" /></label>
  </p>
  <div>
  <input placeholder="Full Name" name="name" type="text" required />
  </div>
  <div>
  <input placeholder="Email Address" name="email" type="email" required />
  </div>
  <div>
  <textarea placeholder="Eg. Enter your messages here" name="message"></textarea>
  </div>
  <p>
  <button type="submit">Send</button>
  </p>
  </form>
  </div>
  <Link to="/">Go back to the homepage</Link>
  </Layout>
  )

export default contact
