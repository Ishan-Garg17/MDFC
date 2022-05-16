import logo from './logo.svg';
import './App.scss';

import {About, Header, Work, Testimonials, Footer, Skills} from './container'
import {Navbar} from './components'

function App() {
  // window.addEventListener('scroll',()=>{

  //   if(window.scrollY>100){
  //     console.log("huaaa")
  //   }
  // })

  const openMap = ()=>{
  
    console.log("hello world")
  
  }

  return (
    <div className="App">
        {/* <Navbar/> */}
        <Header/>
        <About/>
        <Footer openMap={openMap} /> 
        {/* <Work/>
          <Skills/>
          <Testimonials/>
         */}
    </div>
  );
}

export default App;
