import React from "react"
import * as contactStyles from "./contactForm.module.scss"

// JSX doesn't like a single </br> tag
const ContactForm = () => {
  const lineBreak = () => <br></br>

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <form
      className={contactStyles.contactform}
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <label>Email</label>
      {lineBreak}

      <input type="text" name="email"></input>
      {lineBreak}

      <label>Name</label>
      {lineBreak}

      <input type="text" name="name"></input>
      {lineBreak}

      <label>Your Message</label>
      {lineBreak}

      <input type="text" name="message"></input>
      {lineBreak}

      <input type="submit" type="Submit"></input>
    </form>
  )
}

export default ContactForm
