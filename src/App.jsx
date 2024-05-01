import UserHome from './pages/User/Home/Home'
import Login from './pages/common/Login'
import Register from './pages/common/Register'
import MyBooks from './pages/User/MyBooks/MyBooks'
import AddBook from './pages/User/AddBook/AddBook'
import DetailBook from './pages/User/DetailBook/DetailBook'
import InfoUser from './pages/User/InfoUser/InfoUser'
import InfoBook from './pages/User/InfoBook/InfoBook'
import BuyCoins from './pages/User/BuyCoins/BuyCoins'
import RequireAuth from './components/utils/RequireAuth'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AdminHome from './pages/Admin/Home/AdminHome'
import Bank from './pages/Bank/Bank'
import SubcribeBookPage from './pages/User/SubcribeBookPage/SubcribeBookPage'
import HistoryBookPage from './pages/User/HistoryBookPage/HistoryBookPage'
import AddParagraph from './pages/User/AddParagraph/AddParagraph'
import AddChapter from './pages/User/AddChapter/AddChapter'
import UpdateBook from './pages/User/UpdateBook/UpdateBook'
import SuccessPayment from './pages/Bank/SuccessPayment'
const ROLES = {
  'USER': 'USER',
  'SALER': 'SALER',
  'ADMIN': 'ADMIN'
}

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserHome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/my-books" element={<MyBooks />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/detail-book/:id" element={<DetailBook />} />
        <Route path="/add-chapter" element={<AddChapter />} />
        <Route path="/edit-chapter/:id" element={<AddParagraph />} />
        <Route path="/infoUser" element={<InfoUser />} />
        <Route path="/infoBook/:id" element={<InfoBook />} />

        <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
          <Route path="/admin" element={<AdminHome />} />
        </Route>

        <Route path="/bank" element={<Bank />} />

        <Route element={<RequireAuth allowedRoles={[ROLES.USER]} />}>
          <Route path="/subcribebook" element={<SubcribeBookPage />} />
        </Route>

        <Route path="/historybook" element={<HistoryBookPage />} />

        <Route element={<RequireAuth allowedRoles={[ROLES.USER]} />}>
          <Route path="/update-book/:id" element={<UpdateBook />} />
        </Route>
        {/* private routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.USER]} />}>
          <Route path="/buy-coins" element={<BuyCoins />} />
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.USER]} />}>
          <Route path="/paymentSuccess" element={<SuccessPayment />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
