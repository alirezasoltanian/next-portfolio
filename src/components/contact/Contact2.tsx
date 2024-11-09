// @ts-nocheck

import { MdEmail } from "react-icons/md";
import { FaTelegramPlane } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import React,{useRef , useState , useEffect} from 'react' ;
import './contact.css';
import emailjs from '@emailjs/browser';
import Link from "next/link";

const Contact = () => {
  const divRef = useRef<HTMLButtonElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    setPosition({ x: 0, y: 0 });
    setOpacity(0);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };
  const form = useRef(undefined);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cgqgv3f', 'template_7vdcbi7', form.current, 'tpoQYrbbyqt2mz_UL')
      
    e.target.reset()
  };

  return (
    <section id = 'contact'>
      
      <h2>ارتباط با من</h2>
      <div className='flex justify-center mb-3'>
        <Link
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            href='/calendly'
            className='btn group relative '
            target='_blank'
            rel='noopener noreferrer'
          >
            <div className='absolute inset-1 -z-10 rounded-lg bg-gradient-to-b from-[rgb(199,210,254)] to-[#8678f9] opacity-75 blur transition-all duration-500 group-hover:-inset-1 ' />
            <div
              className='pointer-events-none absolute inset-[-12px] -z-10 rounded-[4px] blur transition duration-300'
              style={{
                opacity,
                background: `radial-gradient(120px circle at ${position.x}px ${position.y}px, rgba(199, 210, 254,1), transparent 40%)`,
              }}
            />
            <h4>Get In Meet</h4>
          </Link>
      </div>
      <div className="container contact__container">
        <div className="contact__options">
            <article data-aos="zoom-in"  data-aos-easing="ease-out-cubic" data-aos-duration="900" className="contact__option">
              <MdEmail className='contact__option-icon' />
              <h4>ایمیل</h4>
              <h5>asoltanian76@gmail.com</h5>
              <a href="mailto:asoltanian76@gmail.com" target='_blank'>ارسال </a>
            </article>
            <article data-aos="zoom-in"  data-aos-easing="ease-out-cubic" data-aos-duration="1200" className="contact__option">
              <FaTelegramPlane className='contact__option-icon' />
              <h4>تلگرام</h4>
              <h5>@ali76rez</h5>
              <a href="https://t.me/ali76rez" target='_blank'>ارسال </a>
            </article>
            <article data-aos="zoom-in"  data-aos-easing="ease-out-cubic" data-aos-duration="1500" className="contact__option">
              <IoLogoWhatsapp  className='contact__option-icon' />
              <h4>واتس اپ</h4>
              <h5>number</h5>
              <a target='_blank' href="https://api.whatsapp.com/send?phone=1XXXXXXXXXX">ارسال </a>
            </article>
        </div>
        {/* END OF CONTACT OPTION */}
        <form className="form-contact" data-aos="zoom-in"  data-aos-easing="ease-out-cubic" data-aos-duration="700" ref={form} onSubmit={sendEmail} >
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name='Email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>ارسال پیام</button>
        </form>
      </div>
    </section >
  )
}

export default Contact