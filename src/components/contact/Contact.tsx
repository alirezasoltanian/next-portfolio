import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import React,{useRef} from 'react' ;
import './contact.css';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cgqgv3f', 'template_7vdcbi7', form.current, 'tpoQYrbbyqt2mz_UL')
      
    e.target.reset()
  };

  return (
    <section id = 'contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
            <article data-aos="zoom-in"  data-aos-easing="ease-out-cubic" data-aos-duration="900" className="contact__option">
              <MdEmail className='contact__option-icon' />
              <h4>Email</h4>
              <h5>asoltanian76@gmail.com</h5>
              <a href="mailto:asoltanian76@gmail.com" target='_blank'>Send </a>
            </article>
            <article data-aos="zoom-in"  data-aos-easing="ease-out-cubic" data-aos-duration="1200" className="contact__option">
              <FaTelegramPlane className='contact__option-icon' />
              <h4>telegram</h4>
              <h5>@ali76rez</h5>
              <a href="https://t.me/ali76rez" target='_blank'>Send </a>
            </article>
            <article data-aos="zoom-in"  data-aos-easing="ease-out-cubic" data-aos-duration="1500" className="contact__option">
              <IoLogoWhatsapp  className='contact__option-icon' />
              <h4>Whatsapp</h4>
              <h5>number</h5>
              <a target='_blank' href="https://api.whatsapp.com/send?phone=1XXXXXXXXXX">Send </a>
            </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form data-aos="zoom-in"  data-aos-easing="ease-out-cubic" data-aos-duration="700" ref={form} onSubmit={sendEmail} >
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name='Email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section >
  )
}

export default Contact