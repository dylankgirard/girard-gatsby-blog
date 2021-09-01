import React from "react"
import * as contactStyles from "./contactForm.module.scss"

// JSX doesn't like a single </br> tag
const lineBreak = () => <br></br>

const ContactForm = () => {
  return (
    <form className={contactStyles.contactform}>
      <label>Email</label>
      {lineBreak()}

      <input type="text" name="email"></input>
      {lineBreak()}

      <label>Name</label>
      {lineBreak()}

      <input type="text" name="name"></input>
      {lineBreak()}

      <label>Your Message</label>
      {lineBreak()}

      <input type="text" name="message"></input>
      {lineBreak()}

      <input type="submit" type="Submit"></input>
      
    </form>
  )
}

export default ContactForm
