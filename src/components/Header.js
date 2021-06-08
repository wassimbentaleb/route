import React from 'react'
import { Link } from 'react-router-dom'
function Header(props) {
    return (
        <ul>
            <li>
                <Link to='/home'>Home</Link>
            </li>
            <li>
                <Link to='/profile'>Profile</Link>
            </li>
            <li>
                <Link to='/settings'>Settings</Link>
            </li>
        </ul>

    )
}
export default Header