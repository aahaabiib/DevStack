import { useState } from "react"
import {Menu, X} from 'lucide-react'

function Navbar(){
    //check dropdo menu is open or close
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                
                 {/* Hamburger - mobile only */}
                <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={25}/> : <Menu size={25}/>}
                </button>

                {/* logo */}
                <div> 
                    <img src="/logo-text.png" alt="DevStack-logo"  />
                </div>

                {/* Nav links */}
                <ul className="hidden md:flex gap-8 font-medium text-gray-700">
                    <li className="hover:text-pink-600 cursor-pointer">Home</li>
                    <li className="hover:text-pink-600 cursor-pointer">Technologies</li>
                    <li className="hover:text-pink-600 cursor-pointer">Projects</li>
                    <li className="hover:text-pink-600 cursor-pointer">About</li>
                    <li className="hover:text-pink-600 cursor-pointer">Contact</li>
                </ul>

                {/* text and gradient button  */}
                <div className="flex items-center gap-4">
                    <button className="font-medium text-gray-700 hover:text-pink-600">Sign In</button>
                    <button className="px-5 py-2 rounded-full text-white font-medium gradient-button">Sign Up</button>
                </div>
            </div>

            {/* Mobile dropdown menu  */}
            {menuOpen && (
                <ul className="md:hidden flex flex-col gap-4 px-6 pb-4 font-medium text-gray-700">
                    <li className="hover:text-pink-600 cursor-pointer">Home</li>
                    <li className="hover:text-pink-600 cursor-pointer">Technologies</li>
                    <li className="hover:text-pink-600 cursor-pointer">Projects</li>
                    <li className="hover:text-pink-600 cursor-pointer">About</li>
                    <li className="hover:text-pink-600 cursor-pointer">Contact</li>
                </ul>
            )}
        </nav>
    )
}


export default Navbar