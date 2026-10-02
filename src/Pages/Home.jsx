import { Link } from "react-router-dom"
import React from "react"

export default function Home(){
    return(
        <>
        <h1> Home Page</h1>
         <nav>
            <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Account</a> </li>
            </ul>
         </nav>

        </>
    )
}