import React, {useState} from 'react'
import {images} from '../../constants'
import {appWrap, MotionWrap} from "../../wrapper";
import {client} from '../../client'
import './Contact Me.scss';
const ContactMe = () => {
  const [formData, setFormData] = useState({name: '', email: '', message: ''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const {name, email, message} = formData;
  const handleChangeInput = (e) =>{
    const{name, value} = e.target;
    setFormData({...formData, [name]: value});

  }
  const handleSubmit= () =>{
    setLoading(true);
    const contact = {
      _type: 'contact',
      name: formData.name,
      email: email,
      message: message,
    }
    client.create(contact)
    .then(() =>{
      setLoading(false);
      setIsFormSubmitted(true);
    })
  }
  return (
    <>
    <h2 className='head-text'> Take a coffe & chat with me</h2>
    <div className='app__footer-cards'>
      <div className='app__footer-card'>
        <img src={images.email} alt="email" />
        <a href="mailto:francoalvarezn97@gmail.com" className='p-text-header'>francoalvarezn97@gmail.com</a>
      </div>
      <div className='app__footer-card'>
        <img src={images.mobile} alt="mobile" />
        <a href="tell: +54 (341) 347-8824" className='p-text-header'>+54 (341) 347-8824</a>
      </div>
    </div>

    {!isFormSubmitted ?
    <div className='app__footer-form app__flex'>

    <div className='app__flex'>
    <input type="text" className='p-text' placeholder='Your name' name='name' value={name} onChange={handleChangeInput} />
    </div>

    <div className='app__flex'> 
      <input type="text" className='p-text' placeholder='Your email' name='email' value={email} onChange={handleChangeInput} />
    </div>

    <div>
    <textarea className='p-text' 
    placeholder='your message' 
    value={message} 
    name="message"
    onChange={handleChangeInput}
    >

    </textarea>
    </div>
    
    <button type='button' className='p-text' onClick={handleSubmit}>{loading ? 'Sending' : 'Send Message'}</button>
    </div>
    : <div>
      <h3 className='head-text'>
      Thank you for getting in touch
      </h3>
    </div>}
    </>
  )
}

export default appWrap(
  MotionWrap(ContactMe, 'app__footer'),
  'Contact Me',
  "app__whitebg",
  );