import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>

      <h5>Get in touch</h5>
      <h2>Contact me</h2>

      <div className='container contact__container'>

        <div className='contact__options'>

          <article className='contact__option'>

            <MdOutlineEmail className='contact__option-icon'/>

            <h4>Email</h4>
            <h5>johanna.bw1@gmail.com</h5>

            <a href="mailto:johanna.bw1@gmail.com">Send a message</a>

          </article>

          <article className='contact__option'>

            <BsMessenger className='contact__option-icon'/>

            <h4>Messenger</h4>
            <h5>Johanna Backlund</h5>

            <a href="https://m.me/johanna.backlundwass.3/">Send a message</a>

          </article>

        </div>

      </div>

    </section>
  )
}

export default Contact