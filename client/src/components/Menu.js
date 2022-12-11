import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'


const Menu = () => {

    // Para los estados del menu desplegable
    const [about, setAbout] = useState('¿?')
    const [buttonGoMenu, setButtonGoMenu] = useState('buttonGoMenu')

    const clickAbout = e => {
        if (about === '¿?') {
            setAbout('>')
            setButtonGoMenu('exitMenu')
        } else {
            setAbout('¿?')
            setButtonGoMenu('buttonGoMenu')
        }
    }

    return (
        <div className='menuBar'>
            {about === '¿?'
                ? (
                    <div className='menuBar'>
                        <NavLink to='/login' className='login'>&#128125;<span>Login</span></NavLink>
                        <button className={buttonGoMenu} onClick={e => clickAbout(e)}>{about}</button>
                    </div>
                )
                : (<nav className='navbar'>
                    <button className={buttonGoMenu} onClick={e => clickAbout(e)}>{about}</button>
                    <ul className='menu'>
                        <li><a href='/'>Home</a></li>
                        <li><NavLink to='/stats'>Stats</NavLink></li>
                        <li><NavLink to='/about'>About</NavLink></li>
                        <li><NavLink to='/contact'>Contact</NavLink></li>
                    </ul >
                </nav >)
            }

        </div>
    )
}

export default Menu
