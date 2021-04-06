import React from 'react'
import {Link} from 'react-router-dom'
import './../assets/nav.css'
export function Nav(){
    return(
        <ul>
            <li><Link to='/search'>Search</Link></li>
        </ul>
    )
}