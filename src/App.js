import logo from './logo.svg';
import './App.scss';

import {About, Header, Work, Testimonials, Footer, Skills} from './container'
import {Navbar} from './components'
import { Component } from 'react';

class App extends Component{
  // window.addEventListener('scroll',()=>{

  //   if(window.scrollY>100){
  //     console.log("huaaa")
  //   }
  // })

  openMap = (e)=>{
      console.log(e.target.value)
  }

  render(){
  return (
    <div className="App">
        {/* <Navbar/> */}
        <Header/>
        <About/>
        <Footer openMap={this.openMap} /> 
        {/* <Work/>
          <Skills/>
          <Testimonials/>
         */}
    </div>
       );
  }
}

export default App;
