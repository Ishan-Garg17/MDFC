import './App.scss';

import {About, Header, OurExpert, Testimonials, Footer} from './container'
import {Navbar} from './components'
import { Component } from 'react';

class App extends Component{
  
    render(){
    // window.addEventListener('scroll',()=>{
  
    //   if(window.scrollY>100){
    //     console.log("huaaa")
    //   }
    // })
    
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
    </div>
       );
  }
}

export default App;
