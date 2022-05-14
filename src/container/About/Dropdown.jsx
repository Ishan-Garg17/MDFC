import React from 'react'
import './Dropdown.scss'
const Dropdown = ({show}) => {

   let dropdown = document.querySelector('.dropdown');
   dropdown.addEventListener('click',(e)=>{
       
    e.classList.toggle('active');

   }) 

  return (
    <div className="dropdown">
        <input type="text" className="textBox" placeholder="Dropdown Menu"/>
        <div className="option">
            <div onClick={()=>show('HTML')} > HTML</div>
            <div onClick={()=>show('CSS')}>CSS</div>
            <div  onClick={()=>show('JS')}>Javascript</div>
            <div onClick={()=>show('BOOTSTRAP')}>Bootstrap</div>
            <div  onClick={()=>show('REACTJS')}> ReactJS</div>
        </div>
    </div>
  )
}

export default Dropdown