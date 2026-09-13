



function Footer(){
    return (
        <footer className='shadow text-black-100 mt-16'>
            <div className='max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10'>
            
            <div className='md:col-span-1'>
                <h2 className='text-2xl font-bold bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent'>
                    Dev Stack
                </h2>
                <p className='text-sm text-gray-400 mt-3'>Discover, compare, and build your perfect development stack from the best modern technologies.
                </p>
                <div className='flex gap-4 mt-4'>
                     <a href="#" className="hover:text-white">GitHub</a>
                     <a href="#" className="hover:text-white">Twitter</a>
                     <a href="#" className="hover:text-white">Linkedin</a>
                                       
                </div>
            </div>

            <div>
                <h3 className='text-white font-semibold mb-3'>Product</h3>
                <ul className='space-y-2 text-sm'>
                    <li className='hover:text-white cursor-pointer'>Technologies</li>
                    <li className='hover:text-white cursor-pointer'>Projects</li>
                    <li className='hover:text-white cursor-pointer'>Pricing</li>
                </ul>
            </div>
            <div>
                <h3 className='text-white font-semibold mb-3'>Company</h3>
                <ul className='space-y-2 text-sm'>
                    <li className='hover:text-white cursor-pointer'>About</li>
                    <li className='hover:text-white cursor-pointer'>Careers</li>
                    <li className='hover:text-white cursor-pointer'>Contact</li>
                </ul>
            </div>
            <div>
                <h3 className='text-white font-semibold mb-3'>Legal</h3>
                <ul className='space-y-2 text-sm'>
                    <li className='hover:text-white cursor-pointer'>Privacy Policy</li>
                    <li className='hover:text-white cursor-pointer'>Terms of Service</li>

                </ul>
            </div>

            </div>

            <div className='border-t border-gray-800 py-5'>
                <div className='max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-400'>
                    <p>&copy; {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
                    <div className='flex gap-4'>
                        <span className='hover:text-white cursor-pointer'>Privacy</span>
                        <span className='hover:text-white cursor-pointer'>Terms</span>
                    </div>
                </div>
            </div>
        </footer>
    )
}


export default Footer