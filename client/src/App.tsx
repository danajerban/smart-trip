import { Routes, Route } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/Navbar/Navbar'
import PrivateRoute from './components/PrivateRoute'
import Explore from './pages/Explore/Explore'
import Chat from './pages/Chat/Chat'
import Home from './pages/Home/Home'
import Profile from './pages/User/Profile'
import SignIn from './pages/User/SignIn'
import SignUp from './pages/User/SignUp'
import ForgotPassword from './pages/User/ForgotPassword'
function App() {
  
  return (
    <>
      <div className='app-container'>
        <div className='page-container'>
        <Routes>
          <Route path='/' element={<Home />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/chat' element={<Chat />} />
            <Route path='/profile' element={<PrivateRoute />}>
            <Route path='/profile' element={<Profile />} />
          </Route>
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='/sign-up' element={<SignUp />} />
          <Route path='/forgot-password' element={<ForgotPassword />} />
        </Routes>
        <Navbar />
        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default App