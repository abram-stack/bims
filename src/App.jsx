import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout/> }>
          <Route index element={<Home />} />
          <Route path='about' element={<About/>}/>
          <Route path='projects' element={<Projects />} />
        </Route>

      </Routes>
    </BrowserRouter>
      
  )
}

export default App
