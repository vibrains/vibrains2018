import React from 'react'
import { Link } from 'gatsby'
import '../styles/contact.scss'
import Layout from '../components/layout'

const contact = () => (
	<Layout>
	<form name="contact" method="POST" netlify>
	<p class="hidden">
	<label>Don’t fill this out if you're human: <input name="bot-field" /></label>
	</p>
	<p>
	<label>Name: <input type="text" name="name" /></label>   
	</p>
	<p>
	<label>Email: <input type="email" name="email" /></label>
	</p>
	<p>
	<label>Message: <textarea name="message"></textarea></label>
	</p>
	<p>
	<button type="submit">Send</button>
	</p>
	</form>
	<Link to="/">Go back to the homepage</Link>
	</Layout>
	)

export default contact
