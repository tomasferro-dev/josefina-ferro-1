import About from "./components/About";
import Cases from "./components/Cases";
import Fields from "./components/Fields";
import Footer from "./components/Footer"
import Landing from "./components/landing/Landing.jsx"
import NavBar from "./components/navbar/NavBar.jsx";
import { Route, Routes} from 'react-router-dom'

function App() {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<Landing/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/fields' element={<Fields/>} />
        <Route path='/cases' element={<Cases/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App
