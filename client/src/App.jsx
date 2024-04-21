import { Routes, Route } from 'react-router-dom'
// import './App.css'
import Nevbar from './components/Nevbar'
import Register from './pages/Register'
import Home from './pages/Home'
import Login from './pages/Login'
import axios from 'axios'
import {Toaster} from 'react-hot-toast'
import { UserContextProvider } from '../context/userContext'
import Dashboard from './pages/Dashboard'
import AddBloodForm from './pages/webPages/BloodInventory'

axios.defaults.baseURL = 'http://localhost:8000'
axios.defaults.withCredentials = true

function App() {
  return (

    <UserContextProvider>
      <Nevbar />
      <Toaster position='bottom-right' toastOptions={{duration:2000}}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/inventory' elemen={<AddBloodForm/>} />


      </Routes>
    </UserContextProvider>
  )
}

export default App
