 
 import React from 'react'
 import { BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
const About = React.lazy(()=> import("./Pages/About") )

function App() {
   

  return (
    <>
       <BrowserRouter>
        <Routes>
         <Route path='/' element={<Home/>}/> 
          <Route path='/about' element={<React.Suspense fallback='Loadin'><About/></React.Suspense>} /> 
        </Routes>
       </BrowserRouter>
    </>
  )
}

export default App ;
