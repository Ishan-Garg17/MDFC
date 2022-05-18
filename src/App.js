import './App.scss';

import {About, Header, OurExpert, Testimonials, Footer} from './container'
import {Navbar} from './components'
import { Component } from 'react';

class App extends Component{
  
    render(){
      const date = new Date()
      const year = date.getFullYear()
    
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <About/>
        <OurExpert/>
        {/* 
          <Testimonials/>
        */}
        <Footer/> 
        <div className="copyright">
        <span>Copyright {year}. All rights resrved. </span>
        </div>
    </div>
       );
  }
}

export default App;
