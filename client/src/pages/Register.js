import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Animation from '../components/Animation'
import UserRegistered from '../components/UserRegistered'
import { saveUser } from '../services/saveUser'

const Register = () => {

  const [isUserRegistered, setIsUserRegistered] = useState(false)
  const [formValues, setFormValues] = useState({
    name: "",
    surname: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormValues({ ...formValues, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const newUser = await saveUser({ ...formValues })
      
      if (newUser.data.usersRegistered) {
        alert('usuario registrado correctamente')
        setFormValues({
          name: "",
          surname: "",
          email: "",
          password: ""
        })
        setIsUserRegistered(true)
      } else {
        alert('error al registrarse')
      }
    } catch (error) {
      alert(error)
    }

    // console.log(formValues)
  }

  if (isUserRegistered) {
    return (
      <UserRegistered />
    )
  }

  return (
    <div className='register'>
      <h1>Contact Form</h1>
      <p>Forma parte de la familia, registrate como miembro</p>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Nombre</label>
        <input
          name='name'
          type='text'
          placeholder='escribe tu nombre'
          value={formValues.name}
          onChange={handleChange}
        />

        <label htmlFor='surname'>Apellidos</label>
        <input
          name='surname'
          type='text'
          placeholder='escribe tus apellidos'
          value={formValues.surname}
          onChange={handleChange}
        />

        <label htmlFor='email'>Email</label>
        <input
          name='email'
          type='email'
          placeholder='escribe tu email'
          value={formValues.email}
          onChange={handleChange}
        />

        <label htmlFor='password'>Password</label>
        <input
          name='password'
          type='password'
          placeholder='escribe tu contraseña'
          value={formValues.password}
          onChange={handleChange}
        />

        <input
          type='submit'
          name='register'
          value='register' />
      </form>

      <NavLink to='/login' className='goToRegister'>¿Ya estás registrado?</NavLink>
      <Animation />
    </div>
  )
}

export default Register
