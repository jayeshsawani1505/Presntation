import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ImageSlider from './pages/ImageSlider'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Admin from './pages/Admin'
// import Doctor1 from './pages/Doctor1'
// import Doctor2 from './pages/Doctor2'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<ImageSlider/>}/>
      {/* <Route path='/admin' element={<Admin/>}/>
      <Route path='/doctor1' element={<Doctor1/>}/>
      <Route path='/doctor2' element={<Doctor2/>}/> */}


     </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
