import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"
import { useState } from 'react'
import PrivateRoute from "./components/PrivateRoute";
import About from './components/about'
import Userpage from './components/userpage'
import Cards from './pages/cards'
function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user,setuser]=useState(false);
  const [range,setRange]=useState(false);
  const [tackle,settackle]=useState(false);
  return (
    <div className="w-[100vw] h-screen  flex flex-col bg-[rgb(0,102,204)]">
    <div className="bg-black rounded-b-[30px] ">
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}  setuser={setuser} setRange={setRange} user={user} range={range} settackle={settackle}/>
    </div>
      <Routes>

        <Route path="/" element= {<Home isLoggedIn={isLoggedIn} setuser={setuser} setRange={setRange} />} />
        <Route path="/login" element = {<Login  setIsLoggedIn={setIsLoggedIn} user={user} range={range} tackle={tackle}/>} />
        <Route path="/signup" element={<Signup  setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element = {
          <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard/>
          </PrivateRoute>
       
        } />
        <Route path="/about" element={<About/>}></Route>
        <Route path="/userpage" element={<Userpage/>}></Route>
        <Route path="/cards" element={<Cards/>}></Route>
      </Routes>

    </div>
    )
}

export default App;
