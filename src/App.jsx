import About from "./components/about/About.jsx";
import Cases from "./components/Cases";
import Fields from "./components/fields/Fields";
import Footer from "./components/footer/Footer"
import Home from "./components/home/Home.jsx";
import NavBar from "./components/navbar/NavBar.jsx";
import { Route, Routes} from 'react-router-dom';


function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/fields' element={<Fields/>} />
        <Route path='/cases' element={<Cases/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
