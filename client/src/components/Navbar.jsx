import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";
import { motion } from "framer-motion";

const BookIcon = () => (
  <svg
    className="w-4 h-4 text-gray-700"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4"
    />
  </svg>
);

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Hotels", path: "/rooms" },
    { name: "Experience", path: "/" },
    { name: "About", path: "/" },
  ];

  const bgColors = {
    first: "bg-transparent",
    second: "bg-black",
  };

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [bg, setBg] = useState("first");

  const navItemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15 + 0.5,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const buttonVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { delay: 1, duration: 0.5, ease: "easeOut" },
    },
  };

  const iconVariant = {
  hidden: { opacity: 0, scale: 0.8, y: -10 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: 0.7, duration: 0.5, ease: "easeOut" }
  },
};

  const { openSignIn } = useClerk();
  const { user } = useUser();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== "/") {
      setIsScrolled(true);
      setBg("second");
      return;
    } else {
      setIsScrolled(false);
    }

    setIsScrolled((prev) => (location.pathname !== "/" ? true : prev));

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

  return (
    <nav
      className={`fixed top-0 left-0  w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${
        isScrolled
          ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
          : "py-4 md:py-6"
      }`}
    >
      {/* Logo */}
      <Link to="/" className="flex items-center">
        {/* <img
  src={assets.stayora}
  alt="Stayora Logo"
  className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 max-w-[160px] sm:max-w-[180px] md:max-w-[200px] object-contain bg-white/60 rounded-tr-3xl rounded-bl-3xl p-1.5"/> */}
        <motion.img
          src={assets.stayora}
          alt="Stayora Logo"
          className="h-10 sm:h-12 md:h-14 lg:h-16 xl:h-20 max-w-[160px] sm:max-w-[180px] md:max-w-[200px] object-contain bg-white/60 rounded-tr-3xl rounded-bl-3xl p-1.5 cursor-pointer"
          initial={{ opacity: 0, x: 80, scale: 0.6 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            type: "spring",
            stiffness: 200,
            damping: 10,
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        />
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-4 lg:gap-8">
        {/* {navLinks.map((link, i) => (
          <a
            key={i}
            href={link.path}
            className={`group flex flex-col gap-0.5 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {link.name}
            <div
              className={`${
                isScrolled ? "bg-gray-700" : "bg-white"
              } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </a>
        ))} */}
        {navLinks.map((link, i) => (
          <motion.a
            key={i}
            href={link.path}
            custom={i}
            initial="hidden"
            animate="visible"
            variants={navItemVariant}
            className={`group flex flex-col gap-0.5 ${
              isScrolled ? "text-gray-700" : "text-white"
            }`}
          >
            {link.name}
            <div
              className={`${
                isScrolled ? "bg-gray-700" : "bg-white"
              } h-0.5 w-0 group-hover:w-full transition-all duration-300`}
            />
          </motion.a>
        ))}
        {/* 
        <button
  className={`px-4 py-2 text-sm font-light rounded-full cursor-pointer transition-all duration-300 outline-2  ${
    isScrolled ? "bg-black text-white" : "bg-transparent text-white"
  }`}
  onClick={() => navigate('/owner')}
>
  Dashboard
</button> */}
        <motion.button
          variants={buttonVariant}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-4 py-2 text-sm font-light rounded-full cursor-pointer transition-all duration-300 outline-2  ${
            isScrolled ? "bg-black text-white" : "bg-transparent text-white"
          }`}
          onClick={() => navigate("/owner")}
        >
          Dashboard
        </motion.button>
      </div>

      {/* Desktop Right */}
      <div className="hidden md:flex items-center gap-4 ">
<motion.img
  src={assets.searchIcon}
  alt="search icon"
  variants={buttonVariant}
  initial="hidden"
  animate="visible"
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className={`h-7 transition-all duration-500 cursor-pointer ${isScrolled ? "invert" : ""}`}
/>


        {user ? (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Booking"
                labelIcon={<BookIcon />}
                onClick={() => navigate("/my-bookings")}
              />
            </UserButton.MenuItems>
          </UserButton>
        ) : (
          //         <button
          //   onClick={openSignIn}
          //   className={`px-8 py-2.5 rounded-full ml-4 cursor-pointer transition-all duration-300 outline-2 ${
          //     isScrolled ? "bg-black text-white out" : "bg-transparent text-white"
          //   }`}
          // >
          //   Login
          // </button>
          <motion.button
            onClick={openSignIn}
            variants={buttonVariant}
            initial="hidden"
            animate="visible"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-2.5 rounded-full ml-4 cursor-pointer transition-all duration-300 outline-2 ${
              isScrolled
                ? "bg-black text-white out"
                : "bg-transparent text-white"
            }`}
          >
            Login
          </motion.button>
        )}
      </div>

      {/* Mobile Menu Button */}

      <div className="flex items-center gap-3 md:hidden">
        {user && (
          <UserButton>
            <UserButton.MenuItems>
              <UserButton.Action
                label="My Booking"
                labelIcon={<BookIcon />}
                onClick={() => navigate("/my-bookings")}
              />
            </UserButton.MenuItems>
          </UserButton>
        )}
        <img
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          src={assets.menuIcon}
          alt=""
          className={`${isScrolled && "invert"} h-4`}
        />
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <img src={assets.closeIcon} alt="" className="h-6.5" />
        </button>

        {navLinks.map((link, i) => (
          <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
            {link.name}
          </a>
        ))}

        {user && (
          <button
            className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all"
            onClick={() => navigate("/owner")}
          >
            Dashboard
          </button>
        )}

        {!user && (
          <button
            onClick={openSignIn}
            className="bg-black text-white px-8 py-2.5 rounded-full cursor-pointer transition-all duration-500"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
