import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import Stats from '../pages/Stats'
import Contact from '../pages/Contact'
import About from '../pages/About'
import Register from '../pages/Register'
import Login from '../pages/Login'

const MainRoutes = () => {
    return (
        <div className='main'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/stats' element={<Stats />} />
                <Route path='/about' element={<About />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/register' element={<Register />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </div>

    )
}

export default MainRoutes
