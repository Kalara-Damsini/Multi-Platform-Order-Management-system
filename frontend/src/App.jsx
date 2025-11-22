import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home'
import AddOrder from './pages/AddOrder/addOrder';

function App() {
  

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/add-order" element={<AddOrder />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
