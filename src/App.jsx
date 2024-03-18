import UserHome from './pages/User/Home/Home'
import Login from './pages/common/Login'
import Register from './pages/common/Register'
import MyBooks from './pages/User/MyBooks/MyBooks'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-books" element={<MyBooks />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
