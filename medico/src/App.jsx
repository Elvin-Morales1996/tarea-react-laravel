//se borro los import

import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePages from "./pages/HomePages"
import AboutPage from "./pages/AboutPage"
import PatientsPage from "./pages/patientsPages"
import CreatePages from "./pages/CreatePages"



function App() {
  

  return (
    <>
  
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<HomePages/>}></Route>
      <Route path="/about" element={<AboutPage/>}></Route>
      <Route path="/patients" element={<PatientsPage/>}></Route>
      <Route path="/create" element={<CreatePages/>}></Route>

    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
