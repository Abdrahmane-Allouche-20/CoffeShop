import './App.css'
import Header from './pages/Header.js'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home.js'
import About from './pages/About.js'
import Contact from './pages/Contact.js'
import Coffee from './pages/Coffee.js'
function App() {


  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Coffee' element={<Coffee/>}/>
    </Routes>
    </>
  )
}

export default App
