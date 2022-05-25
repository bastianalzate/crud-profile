import { Routes, Route } from "react-router-dom"
import Login from './pages/Login'
import Home from './pages/Home'
import CreateCard from './pages/CreateCard'
import EditProfile from "./pages/EditProfile"

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/home' element={<Home />} />
        <Route path='/create' element={<CreateCard />} />
        <Route path='/editProfile/:id' element={<EditProfile />} />
      </Routes>
    </div>
  )
}

export default App
