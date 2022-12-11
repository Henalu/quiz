import React from 'react'
import Animation from '../components/Animation'

const Contact = () => {
  return (
    <div className='contact'>
      <h1>Contact Form</h1>
      <p>Resolvemos tus dudas</p>
      <form>
        <label htmlFor='name'>Nombre</label>
        <input name='name' type='text' placeholder='escribe tu nombre'/>

        <label htmlFor='surname'>Apellidos</label>
        <input name='surname' type='text' placeholder='escribe tus apellidos'/>

        <label htmlFor='email'>Email</label>
        <input name='email' type='email' placeholder='escribe tu email'/>

        <label htmlFor='message'>Mensaje</label>
        <textarea name='message' placeholder='Escribe aqui tu mensaje'></textarea>

        <input type='submit' value='enviar'/>
      </form>
      <Animation/>
    </div>
  )
}

export default Contact
