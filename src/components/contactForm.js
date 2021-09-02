import React from "react"
import * as contactStyles from "./contactForm.module.scss"

const ContactForm = () => {
  // JSX doesn't like a single </br> tag
  const lineBreak = () => <br></br>

  return (
    <form
      className={contactStyles.contactform}
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input type="hidden" name="form-name" value="contact" />

      <label htmlFor="email">Email</label>
      {lineBreak}

      <input type="email" name="email"></input>
      {lineBreak}

      <label htmlFor="name">Name</label>
      {lineBreak}

      <input type="textarea" name="name"></input>
      {lineBreak}

      <label htmlFor="message">Your Message</label>
      {lineBreak}

      <input type="textarea" name="message"></input>
      {lineBreak}

      <input type="submit" name="submit"></input>
    </form>
  )
}

export default ContactForm
