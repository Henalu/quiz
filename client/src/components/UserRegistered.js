import React from 'react'
import { NavLink } from 'react-router-dom'

const UserRegistered = () => {
    return (
        <div className='userRegistered'>
            <article>
                <h1>Registered correctly</h1>
                <h2>Welcome to the family!!!</h2>
                <br/>
                <h3>What next?</h3>
                <p>Make sure to <NavLink to='/login'>login</NavLink> and then go test your skills on the game</p>
            </article>
        </div>
    )
}

export default UserRegistered
