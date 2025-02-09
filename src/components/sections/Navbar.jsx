import { useState, useEffect } from "react";
import navData from '../../data/navData.json';
import { MenuIcon } from "../../../public/icons/MenuIcon";
import { CloseIcon } from "../../../public/icons/CloseIcon";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-slate-800/90 backdrop-blur-sm shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="text-2xl font-bold text-cyan-400">
            <img className="w-15" src="../../../public/images/logo.png" alt="" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4">
            {navData.map((item) => (
              <a key={item.label} href={item.link} className="text-slate-300 hover:text-cyan-400 transition-colors">
                {item.label}
              </a>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="outline-none p-2 md:hidden text-slate-300 hover:text-cyan-400"
            >
              {isMobileMenuOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-slate-800 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navData.map((item) => (
                <a
                  key={item.label}
                  href={item.link}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-700 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
