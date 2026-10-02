import { Link} from "react-router-dom"
import React from "react"
export default function Home(){
    return(
        <>
        <h1> Home Page </h1>
        <h3>Click on About to see Lazy Loading with suspense</h3>
         <nav>
            <ul>
                <li><Link to='/about'>About</Link></li>
                <li><a href="#">Account</a> </li>
            </ul>
         </nav>

        </>
    )
}