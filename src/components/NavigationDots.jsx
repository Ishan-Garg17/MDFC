import React from 'react'


const NavigationDots = ({active}) => (
    <div className='app__navigation'>
        {["home", "about", "work", "skills","testimonials","contact"].map((item,index) => (
          <a 
          className="app__navigation-dot" 
          href={`#${item}`} 
          key={`Link-${item+index}`} 
          style={active===item?{backgroundColor:'#313BAC'}:{ }}/>
       ))}
    </div>
)

export default NavigationDots