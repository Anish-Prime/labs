import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Hero } from './components/Hero'
import { Navbar } from './components/navbar'
import { Homepage } from './components/Homepage'
import { Resources } from './components/Resources'
import { Project } from './components/project'
import { Footer } from './components/Footer'
import { Gallery } from './components/Gallery'
import { Publications } from './components/publications'
import { People } from './components/People'

function App() {

  return (
        <BrowserRouter>
        <Hero/>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/resources" element={<Resources/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/people" element={<People/>}/>
          <Route path="/publications" element={<Publications/>}/>
        </Routes>
        <Footer/>
        </BrowserRouter>
  )
}

export default App
 