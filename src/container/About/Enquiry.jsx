import React from 'react'
import './Enquiry.scss'
import emailjs from 'emailjs-com'

const Enquiry = () => {
  

  function sendMail(e){
    e.preventDefault();
    const afterSubmit = document.getElementById('afterSubmit')   
    const loading = document.getElementById('loading') 
    e.target.style.display = "none";
    loading.style.display = "block";
    
    emailjs.sendForm('service_jkr5r3g', 'template_xqimv7q', e.target, 'Kk4iOfHC6kz-zQpYd')
      .then(() => {
        e.target.reset()
        loading.style.display = "none"
        afterSubmit.style.display = "block"
      }, (error) => {
          console.log(error.text);
          e.target.style.display = "block";
          e.target.reset()
      })
    
  }
  
  
  return (
    <>
    <div id="afterSubmit" className='message_div'>
        <h2>Thanks For Submitting, We will get back to you soon.</h2>
    </div>
    
    <div id="loading" className='message_div'>
        <h2>Please Wait...</h2>
    </div>
    <form onSubmit={sendMail} className='enquiry__form'>
        <div>
        <label htmlFor="service">Age Group</label>
        <br />
        <select name="service" id="service-select">
            <option value="1.5 years - 2.5 years">1.5-2.5 years</option>
            <option value="3-5 years">3-5 years</option>
            <option value="6-10 years">6-10 years</option>
            <option value="10+ years">10+ years</option>
            <option value="45+ years">45+ years</option>
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
        <label htmlFor="phone_no">Contact No.</label>
        <br />
        <input type='text' id='phone_no' name='phone_no' pattern="[789][0-9]{9}" placeholder='Your 10 Digit M.No' required/>
        </div>

        <div>
          <input type="submit" className='button' placeholder="Enquire Now"/>
        </div>

    </form>
    </>
  )
}

export default Enquiry