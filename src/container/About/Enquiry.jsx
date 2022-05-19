import React from 'react'
import './Enquiry.scss'
import emailjs from 'emailjs-com'

const Enquiry = () => {

  function sendMail(e){
    e.preventDefault();
    const afterSubmit = document.getElementById('afterSubmit') 
    
    emailjs.sendForm('service_jkr5r3g', 'template_xqimv7q', e.target, 'Kk4iOfHC6kz-zQpYd')
      .then(() => {
        e.target.style.display = "none";
        afterSubmit.style.display = "block"
      }, (error) => {
          console.log(error.text);
      });
    e.target.reset()
  }
  
  
  return (
    <>
    <div id="afterSubmit">
        <h2>Thanks For Submitting, We will get back to you soon.</h2>
    </div>
    <form onSubmit={sendMail} className='enquiry__form'>
        <div>
        <label htmlFor="service">Class/Service</label>
        <br />
        <select name="service" id="service-select">
            <option value="Salsa Dance">The Salsa Dance</option>
            <option value="Hip Hop">Hip Hop</option>
            <option value="Jazz">Jazz</option>
            <option value="Zumba">Zumba</option>
       </select>

        </div>

        <div>
        <label htmlFor="name">Your Name</label>
        <br />
        <input type="text" id='name' placeholder='Full Name' name='from_name'  required/>
        </div>

        <div>
        <label htmlFor="email-id">Email Address</label>
        <br />
        <input type="email" id='email-id' name='user_email' placeholder='Your Email-ID'  required/>
        </div>

        <div>
          <input type="submit" className='button' placeholder="Enquire Now" required/>
        </div>

    </form>
    </>
  )
}

export default Enquiry