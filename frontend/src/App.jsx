import './App.css'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/home'
import Login from './components/Login/login'
import Signup from './components/Signup/signup.jsx'

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        {/* <Route index element={<Home />} /> */}
        <Route index element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
 