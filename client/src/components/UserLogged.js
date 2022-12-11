import React from 'react'
import { NavLink } from 'react-router-dom'

const UserLogged = () => {
    return (
        <div className='userLogged'>
            <article>
                <h1>Logged correctly</h1>
                <h2>Welcome again!!!</h2>
                <br/>
                <h3>What next?</h3>
                <p>Get ready and test your skills <NavLink to='/'>Go!</NavLink></p>
            </article>
        </div>
    )
}

export default UserLogged
