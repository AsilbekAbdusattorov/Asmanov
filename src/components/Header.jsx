import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../img/Logo.svg";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Menyu ochilganda scrollni to'xtatish
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [menuOpen]);

  return (
    <header className="py-5 bg-[#223695] relative">
      <div className="flex justify-between items-center w-full max-w-7xl mx-auto px-5">
        <Link className="text-5xl font-bold" to="/">
          <img src={Logo} alt="Logo" className="w-60 md:w-full sm:w-80" />
        </Link>

        {/* Desktop Navigation (yashirilgan) */}
        <nav className="hidden md:flex space-x-8 font-semibold text-xl text-blue-400">
          <NavLink to="/">BLOG</NavLink>
          <NavLink to="/about">(703) 420-5374</NavLink>
          <NavLink to="/contact">LOCATION</NavLink>
          <NavLink to="/contact">CONTACT</NavLink>
        </nav>

        {/* Menyu Tugmasi (hamma ekranlar uchun ko'rinadi) */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-blue-400 hover:text-white text-xl"
        >
          {menuOpen ? "✖" : "MENU"}
        </button>
      </div>

      {/* Dropdown Menyu (hamma ekranlar uchun ko'rinadi) */}
      {menuOpen && (
        <div className="absolute left-0 top-full w-full bg-[#223695] shadow-lg p-6 max-h-[600px] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 text-lg">
            {/* Mobile Navigation Links (faqat mobil uchun) */}
            <div className="md:hidden">
              <ul className="text-blue-400 text-xl text-center space-y-4">
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/">BLOG</Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/about">(703) 420-5374</Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/contact">LOCATION</Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/contact">CONTACT</Link>
                </li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="font-bold mb-10 text-center text-3xl">About</h3>
              <ul className="text-blue-400 text-xl text-center space-y-4">
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/about-us">About Us</Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/blog">Blog</Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/what-sets-us-apart">What Sets Us Apart</Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/charles-kirksey">Charles D. Kirksey, DDS</Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/milan-simanek">Milan Simanek, DDS</Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/milan-simanek">Touraj Kamali, DDS</Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/milan-simanek">Fairfax Office</Link>
                </li>
              </ul>
            </div>

            {/* Cosmetic */}
            <div>
              <h3 className="font-bold mb-10 text-center text-3xl">Cosmetic</h3>
              <ul className="text-blue-400 text-xl text-center space-y-4">
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/cosmetic-dentistry">Cosmetic Dentistry</Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/dental-bonding">Dental Bonding</Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/invisalign">Invisalign</Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/charles-kirksey">Orthodontics</Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/veneers">Veneers</Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/smile-makeover">Smile Makeover</Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/smile-makeover">Teeth Whitening</Link>
                </li>
              </ul>
            </div>

            {/* Restorative */}
            <div>
              <h3 className="font-bold mb-10 text-center text-3xl">
                Restorative
              </h3>
              <ul className="text-blue-400 text-xl text-center space-y-4">
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/dental-bridges">Dental Bridges</Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/dental-crowns">Dental Crowns</Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/dental-implants">Dental Implants</Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/dentures">Dentures</Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/full-mouth-reconstruction">
                    Full Mouth Reconstruction
                  </Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/full-mouth-reconstruction">
                    Restorative Dentistry
                  </Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/full-mouth-reconstruction">
                    Dental Implants Cost
                  </Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/full-mouth-reconstruction">Root Canal</Link>
                </li>
              </ul>
            </div>

            {/* General */}
            <div>
              <h3 className="font-bold mb-10 text-center text-3xl">General</h3>
              <ul className="text-blue-400 text-xl text-center space-y-4">
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/teeth-cleaning">Teeth Cleaning</Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/emergency-dentist">Emergency Dentist</Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/gum-disease">Gum Disease</Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/oral-cancer-screenings">
                    Oral Cancer Screenings
                  </Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/pediatric-dentistry">Pediatric Dentistry</Link>
                </li>
              </ul>
            </div>

            {/* Oral Surgery */}
            <div>
              <h3 className="font-bold mb-10 text-center text-3xl">
                Oral Surgery
              </h3>
              <ul className="text-blue-400 text-xl text-center space-y-4">
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/bone-grafting">Bone Grafting</Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/gum-graft">Gum Graft</Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/sinus-lift">Sinus Lift</Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/tooth-extraction">Tooth Extraction</Link>
                </li>
                <li className="pb-8 hover:text-white border-b border-blue-300">
                  <Link to="/wisdom-teeth-removal">Wisdom Teeth Removal</Link>
                </li>
              </ul>
            </div>

            {/* View All Services */}
            <div className="col-span-1 md:col-span-5 flex justify-center mt-6 pb-20">
              <Link
                className="text-5xl text-center text-blue-500 hover:text-white"
                to="/all-services"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
