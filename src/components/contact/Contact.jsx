import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>sanchit.bharadwaj@outlook.com</h5>
            <a href="mailto:sanchit.bharadwaj@outlook.com">Send a Message</a>
          </article>

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>sanchit.bharadwaj@outlook.com</h5>
            <a href="mailto:sanchit.bharadwaj@outlook.com">Send a Message</a>
          </article>

          <article className='contact__option'>
            <MdOutlineEmail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>sanchit.bharadwaj@outlook.com</h5>
            <a href="mailto:sanchit.bharadwaj@outlook.com">Send a Message</a>
          </article>

        </div>
        {/* End of Contact Options */}


      </div>
    </section>
  )
}

export default Contact