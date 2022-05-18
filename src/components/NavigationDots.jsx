import React from 'react'


const NavigationDots = ({active}) => {
  return(
  <div className='app__navigation'>
        {["home", "Classes", "our_expert","contact"].map((item,index) => (
          <a 
          className="app__navigation-dot" 
          href={`#${item}`} 
          key={`Link-${item+index}`} 
          style={active===item?{backgroundColor:'black'}:{ }}/>
       ))}
    </div>
)
}

export default NavigationDots