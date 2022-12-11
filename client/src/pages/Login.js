import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Animation from '../components/Animation'
import UserLogged from '../components/UserLogged'
import { getUser } from '../services/getUser'

const Login = () => {

  const [isUserLogged, setIsUserLogged] = useState(false)
  const [formValues, setFormValues] = useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleLogin = async e => {
    e.preventDefault();

    try {
      const user = await getUser({ ...formValues })
      if (user.data.usersRegistered) {
        alert('Logged in correctly')
        setIsUserLogged(true)
      } else {
        alert('failed to log in')
      }
    } catch (error) {
      alert(error)
    }
  }

  if (isUserLogged) {
    return (<UserLogged/>)
  }

  return (
    <div className='loginPage'>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor='email'>Username</label>
        <input
          name='email'
          type='text'
          placeholder='type your email'
          value={formValues.email}
          onChange={handleChange}
        />

        <label htmlFor='password'>Password</label>
        <input
          name='password'
          type='password'
          placeholder='type your password'
          value={formValues.password}
          onChange={handleChange}
        />

        <input type='submit' value='login' />
      </form>
      <NavLink to='/register' className='goToRegister'>¿Aun no estás registrado?</NavLink>
      <Animation />
    </div>
  )
}

export default Login
