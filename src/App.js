import logo from './logo.svg';
import './App.scss';

import {About, Header, Work, Testimonials, Footer, Skills} from './container'
import {Navbar} from './components'

function App() {
  window.addEventListener('scroll',()=>{

    if(window.scrollY>100){
      console.log("huaaa")
    }
  })
  return (
    <div className="App">
        <Navbar/>
        <Header/>
        <About/>
        <Work/>
        <Skills/>
        <Testimonials/>
        <Footer/>
    </div>
  );
}

export default App;
