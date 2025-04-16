// src/components/Navbar.jsx
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import img from "../../assets/Capture.ico";
export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Destination", href: "/destination" },
    { label: "Crew", href: "/crew" },
    { label: "Technology", href: "/technology" },
  ];
  // pt-6 sm:pt-0 md:pt-6
  return (
    <header className="absolute top-0 w-full z-50 text-white">
      <div className="navContainer flex justify-between items-center mt-0">
        <div className="text-2xl font-bold logo xxl:ps-8">
          <img src={img} className="w-[50px] h-[45px] rounded-full" alt="logo" />
        </div>
        <div className="hidden  xxl:block xxl:w-[800px]  h-[1px] bg-[#8b8f9bb0] relative xxl:left-[60px]  xxl:z-50"></div>
        {/* Desktop Nav */}
        <nav className="hidden navbar fontstyle  md:flex gap-10 px-12 py-8 bg-white/10 backdrop-blur-md   tracking-widest uppercase text-sm">
          {navItems.map((item, index) => (
            <NavLink key={index} to={item.href} className="navlink">
              <span className="font-bold">0{index}</span> {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden nav-menu"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={40} /> : <Menu size={40} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden min-h-[89vh] w-[75%]  ms-auto backdrop-blur-lg text-center text-white py-4 space-y-4">
          {navItems.map((item, index) => (
            <NavLink
              onClick={() => setOpen(false)}
              key={index}
              to={item.href}
              className="block uppercase  tracking-widest"
            >
              <span className="font-bold">0{index}</span> {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
