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
import NewBookPage from './pages/User/BookPage/NewBookPage'
import SubcribeBookPage from './pages/User/BookPage/SubcribeBookPage'
import HistoryBookPage from './pages/User/BookPage/HistoryBookPage'
import AddParagraph from './pages/User/AddParagraph/AddParagraph'
import AddChapter from './pages/User/AddChapter/AddChapter'
import UpdateBook from './pages/User/UpdateBook/UpdateBook'
import SuccessPayment from './pages/Bank/SuccessPayment'
import EnterCode from './pages/common/EnterCode'
import ProfileUser from './pages/User/ProfileUser/ProfileUser'
import ManageBook from './pages/Admin/ManageBook/ManageBook'
import ManageUser from './pages/Admin/ManageUser/ManageUser'
import DetailUser from './pages/Admin/ManageUser/DetailUser/DetailUser'
import NotFound from './pages/common/NotFound/NotFound'
import DashBoard from './pages/Admin/DashBoard/DashBoard'
import ManageGenre from './pages/Admin/ManageGenre/ManageGenre'
import SearchPage from './pages/User/BookPage/SearchPage'

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
        <Route path="/search" element={<SearchPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/confirm-email" element={<EnterCode />} />
        <Route path="/newbook" element={<NewBookPage />} />
        <Route path="/profile/:idUser" element={<ProfileUser />} />
        <Route path="/not-found" element={<NotFound />} />

        <Route path="/book">
          <Route path=":idBook">
            <Route path="" element={<InfoBook />} />
            <Route path="chapter" >
              <Route path=":idChap" >
                <Route path="" element={<DetailBook />} />
                <Route element={<RequireAuth allowedRoles={[ROLES.USER]} />}>
                  <Route path="edit" element={<AddParagraph />} />
                </Route>
              </Route>
              <Route element={<RequireAuth allowedRoles={[ROLES.USER]} />}>
                <Route path="add" element={<AddChapter />} />
              </Route>
            </Route>

            <Route element={<RequireAuth allowedRoles={[ROLES.USER]} />}>
              <Route path="update" element={<UpdateBook />} />
            </Route>
          </Route>

          {/* private route */}
          <Route element={<RequireAuth allowedRoles={[ROLES.USER]} />}>
            <Route path="add" element={<AddBook />} />
          </Route>
        </Route>

        <Route element={<RequireAuth allowedRoles={[ROLES.ADMIN]} />}>
          <Route path="/admin" element={<AdminHome />} >
            <Route path=":manage-book" element={<ManageBook />} />
            <Route path=":manage-user" element={<ManageUser />} >
              <Route path=":idUser" element={<DetailUser />} />
            </Route>
            <Route path=":manage-genre" element={<ManageGenre />} />
            <Route path=":dashboard" element={<DashBoard/>} />
          </Route>
        </Route>

        {/* private routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.USER]} />}>
          <Route path="/subcribebook" element={<SubcribeBookPage />} />
          <Route path="/infoUser" element={<InfoUser />} />
          <Route path="/historybook" element={<HistoryBookPage />} />
          <Route path="/buy-coins" element={<BuyCoins />} />
          <Route path="/paymentSuccess" element={<SuccessPayment />} />
          <Route path="/bank" element={<Bank />} />
          <Route path="/my-books" element={<MyBooks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
