


function Navbar(){
    return (
        <nav className="sticky top-0 z-50 bg-white shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <div>
                    <img src="/src/assets/logo-text.png" alt="DevStack-logo" />
                </div>

                <ul className="hedden md:flex gap-8 font-medium text-gray-700">
                    <li className="hover:text-pink-600 cursor-pointer">Home</li>
                    <li className="hover:text-pink-600 cursor-pointer">Technologies</li>
                    <li className="hover:text-pink-600 cursor-pointer">Projects</li>
                    <li className="hover:text-pink-600 cursor-pointer">About</li>
                    <li className="hover:text-pink-600 cursor-pointer">Contact</li>
                </ul>

                <div className="flex items-center gap-4">
                    <button className="font-medium text-gray-700 hover:text-pink-600">Sign In</button>
                    <button className="px-5 py-2 rounded-full text-white font-medium bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600">Sign Up</button>
                </div>
            </div>
        </nav>
    )
}


export default Navbar