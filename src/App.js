/* eslint-disable jsx-a11y/anchor-is-valid*/
import Hero from './pages/Hero'
import Contact from './pages/Contact'
import Gallery from'./pages/Gallery'
import Services from'./pages/Services'
import Navbar from './components/Navbar'
import Testimonials from './pages/Testimonials'
import { useRef } from 'react'


function App() {



  return (
    <div className="App bg-black">
      <Navbar />
      <Hero />
      <Services />
      <Gallery />
      <Testimonials />
      <Contact />
      
     
    </div>
  );
}

export default App;
