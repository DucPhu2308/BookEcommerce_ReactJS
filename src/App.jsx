import UserHome from './pages/User/Home/Home'
import Login from './pages/common/Login'
import Register from './pages/common/Register'
import MyBooks from './pages/User/MyBooks/MyBooks'
import AddBook from './pages/User/AddBook/AddBook'
import DetailBook from './pages/User/DetailBook/DetailBook'
import AddChapter from './pages/User/AddChapter/AddChapter'
import InfoUser from './pages/User/InfoUser/InfoUser'
import InfoBook from './pages/User/InfoBook/InfoBook'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminHome from './pages/Admin/Home/AdminHome'



function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserHome />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/my-books" element={<MyBooks />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/detail-book" element={<DetailBook />} />
          <Route path="/add-chapter" element={<AddChapter />} />
          <Route path="/infoUser" element={<InfoUser />} />
          <Route path="/infoBook" element={<InfoBook />} />

          <Route path="/admin" element={<AdminHome/>}/>
        </Routes>
      </BrowserRouter>
  )
}

export default App
