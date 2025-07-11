import { useState, useEffect, useRef } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { BiMenu } from "react-icons/bi";
import { BiMenuAltRight } from "react-icons/bi";
import { GrMenu } from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaTwitch,
  FaTiktok,
  FaXTwitter,
  FaEnvelope,
  FaPhone,
} from 'react-icons/fa6';
import { IoClose } from 'react-icons/io5';
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredNavItem, setHoveredNavItem] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);


  const navbarRef = useRef(null);
  const menuRef = useRef([]);


  const navItems = [
    {
      id: 1,
      name: "Home",
      path: "/",
      hasDropdown: true,
    },
    {
      id: 2,
      name: "About Us",
      path: "/programs",
      link: "#aboutus",
      hasDropdown: true,
    },
    {
      id: 3,
      name: "Our Work",
      path: "/resources",
      link: "#ourwork",
      hasDropdown: true,
    },
    {
      id: 4,
      name: "Our Team",
      path: "/team",
      link: "#ourteam",
      hasDropdown: true,
    },
    {
      id: 5,
      name: "Contact",
      path: "/contact",
      link: "#contact",
      hasDropdown: true,
    },

  ];

  const Dropdownlist = [
    {
      id: 1,
      name: "item1",
      link: "/#",
    },
    {
      id: 2,
      name: "item2",
      link: "/#",
    },
  ];

  useGSAP(() => {
    if (navbarRef.current) {
      gsap.from(navbarRef.current, {
        y: -20,
        opacity: 0,
        duration: 0.5,
        ease: 'power1.in',
      });
    }
  }, []);


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const toggleContact = () => {
    setIsContactOpen(!isContactOpen);
    if (isOpen) {
      setIsOpen(false);
    }
  };

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={navbarRef}
      id="navbar"
      className={`w-full lg:h-[8ch] h-[9ch] flex items-center justify-between md:px-6 sm:px-6 px-3 fixed top-0 transition-all ease-in-out duration-300 z-[70] ${isScrolled ? "bg-black" : "bg-transparent"
        }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-2 md:pr-16 pr-0">
        <a href="/" className="text-lg font-semibold text-sky-700 flex items-center gap-x-2">
          <img className="h-[3ch] bg-transparent" src="/aakash.png" alt="logo" />
        </a>
      </div>

      <div className="flex flex-row justify-end">
        <div className="flex flex-row justify-center items-center">
          {/* Navbar items and buttons */}
          <div
            className={`fixed lg:static top-[8.5ch] left-1/2 transform ${isOpen ? "-translate-x-1/2" : "translate-x-full"
              } lg:translate-x-0 h-fit lg:h-auto w-[95%] lg:w-full bg-zinc-900 lg:bg-transparent z-60`}
          >

            {/* Logo and close icon Inside Toggle Menu */}
            <div className=" flex flex-col">
              {/* Divider */}
              <div className="flex-1 flex flex-col md:flex-row items-start justify-between gap-5 p-4 md:p-0">
                {/* Navbar items */}
                <ul className="group1 flex flex-col lg:flex-row pl-3 gap:6 lg:gap-8 mx-3 text-base text-zinc-50 lg:text-zinc-50 font-normal ">
                  {navItems.map((item, index) => (
                    <li ref={(el) => (menuRef.current[item.id] = el)}
                      key={index}
                      onMouseEnter={() => setHoveredNavItem(item.id)}
                      onMouseLeave={() => setHoveredNavItem(null)} className="relative m-3 lg:m-0 origin-center border-b-2 border-transparent lg:hover:border-zinc-100 ">
                      <a className="group py-[23px] px-2" href={item.link}>
                        <span className="relative inline-flex overflow-hidden">
                          <span className="translate-y-0 transition duration-500 group-hover:translate-y-[-160%]">
                            {item.name}
                          </span>
                          <span className="absolute translate-y-[164%] transition duration-500 group-hover:translate-y-0">
                            {item.name}
                          </span>
                        </span>
                      </a>
                      {item.hasDropdown && hoveredNavItem === item.id && (
                        <div className='absolute z-[9999] hidden lg:group1-hover:block w-[250px] bg-black -left-[16px] p-2 mt-6 text-zinc-400 shadow-md'>
                          <ul>
                            {Dropdownlist.map((data) => (
                              <li key={data.id}>
                                <a href={data.link} className='inline-block w-full rounded-md p-2 hover:bg-primary/20'>
                                  {data.name}
                                </a>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </div>

            </div>

          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-row items-center gap-2">
          <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} onClick={toggleContact} className="hidden sm:block w-fit px-6 py-2 rounded-full text-base text-neutral-50 font-medium bg-transparent transition-colors duration-200 cursor-pointer">
            {isContactOpen ? (
              <RxCross1 size={18} />
            ) : isHovered ? (
              <BiMenu size={24} />
            ) : (
              <BiMenuAltRight size={24} />
            )}


          </div>
          <button className="group contact hidden sm:flex justify-center w-fit px-6 py-2 rounded-3xl text-thin text-zinc-50 bg-transparent cursor-pointer items-end border-2 border-zinc-50 sm:hover:bg-red-800">
            <span className="relative inline-flex overflow-hidden">
              <div className="flex gap-1 translate-y-0 transition duration-500 group-hover:translate-y-[-160%]">
                Get in Touch <GoArrowUpRight className="flex justify-center" size={20} />
              </div>
              <div className="absolute translate-y-[164%] transition duration-500 group-hover:translate-y-0">
                <div className="flex">
                  <a href="#getintouch">
                    Get in Touch <GoArrowUpRight className="flex justify-center" size={20} />
                  </a>
                </div>
              </div>
            </span>

          </button>

          <button
            onClick={toggleNavbar}
            className="lg:hidden text-neutral-400 focus:outline-none ml-4"
          >
            {isOpen ? <RxCross1 size={24} /> : <GrMenu size={24} />}
          </button>
        </div>
        <div className={`w-[380px] h-screen bg-black text-white z-50 pt-8 pl-9 flex flex-col fixed top-0 right-0 transition-transform duration-300 ease-in-out transform flex-1 ${isContactOpen ? 'translate-x-0 z-50' : 'translate-x-full'} `}>
          {/* Close Button */}
          <div className="flex justify-end pr-3">
            <button onClick={toggleContact}>
              <IoClose size={35} className="text-3xl cursor-pointer" />
            </button>
          </div>

          {/* Logo and Description */}
          <div className="mt-6">
            <img className="h-10 mb-6" src="/aakash.png" alt="logo" />

            <p className="text-md font-normal text-gray-300">
              Creative Modern Agency and Portfolio Aakashlabs.
            </p>
          </div>

          {/* Contact Info */}
          <div className="mt-9">
            <h3 className="uppercase text-sm font-semibold tracking-widest mb-4">Contacts</h3>
            <div className="flex items-center gap-3 mb-5">
              <div className="bg-red-700 p-1.5 rounded">
                <FaEnvelope className="text-white text-md" />
              </div>
              <span>geral@example.com</span>
            </div>
            <div className="flex items-center gap-3">
              <div className="bg-red-700 p-1.5 rounded">
                <FaPhone className="text-white text-md" />
              </div>
              <span>(+23) 345 322 233</span>
            </div>
          </div>

          {/* Social Icons */}
          <div className="mt-10">
            <h3 className="uppercase text-sm font-bold tracking-widest mb-9">Follow Us</h3>
            <div className="flex items-center pl-3 gap-4 text-lg">
              <a href="https://www.facebook.com/">
                <FaFacebookF />
              </a>
              <a href="https://www.linkedin.com/">
                <FaLinkedinIn />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram />
              </a>
              <a href="https://www.twitch.tv/">
                <FaTwitch />
              </a>
              <a href="https://www.tiktok.com/">
                <FaTiktok />
              </a>
              <FaXTwitter />
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Navbar