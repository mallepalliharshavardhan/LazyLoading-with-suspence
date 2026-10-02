import { Link} from "react-router-dom"
import React from "react"
export default function Home(){
    return(
        <>
        <h1> Home Page </h1>
        <div className='flex min-h-screen flex-col items-center justify-center p-4'>
         <h3 className='text-blue-300'>Click on About to see Lazy Loading with suspense</h3>
         <nav className='flex  text-black'>
            <ul>
                <li className="bg-linear-to-r from-blue-300 to-violet-500 rounded-md p-2"><Link to='/about'>About</Link></li>
                <li><a href="#">Account</a> </li>
            </ul>
         </nav>
          </div>
        </>
    )
}