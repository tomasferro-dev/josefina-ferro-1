import About from "./components/about/About.jsx";
import Professionals from "./components/professionals/Professionals.jsx";
import Fields from "./components/fields/Fields";
import Footer from "./components/footer/Footer"
import Home from "./components/home/Home.jsx";
import NavBar from "./components/navbar/NavBar.jsx";
import Contact from "./components/contact/Contact.jsx";
import { Route, Routes} from 'react-router-dom';


function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/fields' element={<Fields/>} />
        <Route path='/professionals' element={<Professionals/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
