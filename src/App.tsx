import './App.css'
import Header from './components/Header.js'
import { Routes,Route } from 'react-router-dom'
import Home from './components/Home.js'
import About from './components/About.js'
import Contact from './components/Contact.js'
import Coffee from './components/Coffee.js'
function App() {


  return (
    <div>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Contact' element={<Contact/>}/>
      <Route path='/Coffee' element={<Coffee/>}/>
    </Routes>
    </div>
  )
}

export default App
