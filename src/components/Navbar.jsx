import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { to: "/", text: "Home" },
    { to: "/gallery", text: "Gallery" },
    { to: "/about", text: "About" },
    { to: "/contact", text: "Contact" },
  ];

  return (
    <nav className={`fixed w-full z-50 ${scrolled ? "bg-red-800 py-2 shadow-lg" : "bg-red-900/90 py-4"} transition-all duration-300`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center text-white font-bold text-xl">
          <svg className="w-8 h-8 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
          PixelStock
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-2">
          {links.map(({ to, text }) => (
            <Link 
              key={to} 
              to={to} 
              className="text-white hover:bg-red-700 px-4 py-2 rounded-lg transition-colors duration-300 font-medium"
            >
              {text}
            </Link>
          ))}
        </div>

        {/* Auth Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Link to="/login" className="text-white hover:text-red-200 px-3 py-2 transition-colors duration-300">
            Login
          </Link>
          <Link to="/signup" className="bg-white text-red-700 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors duration-300 font-medium">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-red-800 px-4 py-4 shadow-lg">
          <div className="flex flex-col space-y-3">
            {links.map(({ to, text }) => (
              <Link 
                key={to} 
                to={to} 
                className="text-white hover:bg-red-700 px-4 py-2 rounded-lg transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {text}
              </Link>
            ))}
            <div className="pt-4 border-t border-red-700 mt-3 flex flex-col space-y-3">
              <Link 
                to="/login" 
                className="text-white hover:bg-red-700 px-4 py-2 rounded-lg transition-colors duration-300 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="bg-white text-red-700 hover:bg-red-50 px-4 py-2 rounded-lg transition-colors duration-300 text-center font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;