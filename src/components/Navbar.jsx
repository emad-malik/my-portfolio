import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-9 h-9 object-contain' />
          <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            Emad &nbsp;
            <span className='sm:block hidden'> | Data Scientist</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10 items-center'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li>
            <a
              href='https://github.com/emad-malik'
              target='_blank'
              rel='noopener noreferrer'
              className='text-secondary hover:text-white text-[24px] cursor-pointer transition-colors'
              aria-label='GitHub Profile'
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href='https://www.linkedin.com/in/malik-emad/'
              target='_blank'
              rel='noopener noreferrer'
              className='text-secondary hover:text-white text-[24px] cursor-pointer transition-colors'
              aria-label='LinkedIn Profile'
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li className='border-t border-secondary/20 pt-4 mt-2 w-full'>
                <div className='flex gap-6'>
                  <a
                    href='https://github.com/emad-malik'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-secondary hover:text-white text-[24px] cursor-pointer transition-colors'
                    aria-label='GitHub Profile'
                  >
                    <FaGithub />
                  </a>
                  <a
                    href='https://www.linkedin.com/in/emad-malik/'
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-secondary hover:text-white text-[24px] cursor-pointer transition-colors'
                    aria-label='LinkedIn Profile'
                  >
                    <FaLinkedin />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
