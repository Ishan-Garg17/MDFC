import React from 'react'
import './Enquiry.scss'


const Enquiry = () => {
  return (
    <div className='enquiry__form'>
        <div>
        <label htmlFor="service">Class/Service</label>
        <br />
        <select name="service" id="service-select">
            <option value="">The Salsa Dance</option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="hamster">Hamster</option>
       </select>

        </div>

        <div>
        <label htmlFor="service">Your Name</label>
        <br />
        <input type="text" id='service' placeholder='Full Name' />
        </div>

        <div>
        <label htmlFor="service">Email Address</label>
        <br />
        <input type="text" id='service' placeholder='Your Email-ID' />
        </div>

        <div>
          <button className='btn'>Enquire Now</button>
        </div>

    </div>
  )
}

export default Enquiry