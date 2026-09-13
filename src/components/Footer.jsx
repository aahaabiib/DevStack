function Footer() {
  return (
    <footer className="text-black-100 mt-16 border-t border-b border-gray-200">
        
      <div className=" max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-5 gap-10">
        
        <div className="md:col-span-2">
          
            <img src="/src/assets/logo-text.png" alt="DevStack-logo" />
          
          <p className="text-sm text-gray-400 mt-3">
            Discover, compare, and build your perfect development stack from the
            best modern technologies.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-pink-600 cursor-pointer">
              GitHub
            </a>
            <a href="#" className="hover:text-pink-600 cursor-pointer">
              Twitter
            </a>
            <a href="#" className="hover:text-pink-600 cursor-pointer">
              Linkedin
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-black font-semibold mb-3">Product</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-pink-600 cursor-pointer text-gray-400">
              Technologies
            </li>
            <li className="hover:text-pink-600 cursor-pointer text-gray-400">
              Projects
            </li>
            <li className="hover:text-pink-600 cursor-pointer text-gray-400">
              Pricing
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-black font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-pink-600 cursor-pointer text-gray-400">
              About
            </li>
            <li className="hover:text-pink-600 cursor-pointer text-gray-400">
              Careers
            </li>
            <li className="hover:text-pink-600 cursor-pointer text-gray-400">
              Contact
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-black font-semibold mb-3">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-pink-600 cursor-pointer text-gray-400">
              Privacy Policy
            </li>
            <li className="hover:text-pink-600 cursor-pointer text-gray-400">
              Terms of Service
            </li>
          </ul>
        </div>
      </div>

      <div className=" max-w-7xl mx-auto py-5 px-6 border-t border-gray-200">
        <div className=" max-w-7xl mx-auto px-6  flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-gray-400">
          <p>
            &copy; 2026 Dev Stack. All rights reserved.
          </p>
          <div className="flex gap-4">
            <span className="hover:text-pink-600 cursor-pointer">Privacy</span>
            <span className="hover:text-pink-600 cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
