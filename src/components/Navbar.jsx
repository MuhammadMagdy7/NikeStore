import React, { useState, useEffect } from "react";
import {
  MagnifyingGlassIcon,
  HeartIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";
import { selectTotalQTY, setOpenCart } from "./app/CartSlice.js";
const Navbar = () => {
  const dispatch = useDispatch();
  const totalQTY = useSelector(selectTotalQTY)

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  const [nav, setNav] = useState(false);

  const onNav = () => {
    if (window.scrollY > 30) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", onNav);
    return () => {
      window.removeEventListener("scroll", onNav);
    };
  }, []);

  return (
    <>
      <header
        className={
          !nav
            ? "absolute top-7 left-0 right-0 opacity-100 z-50"
            : "fixed top-0 left-0 right-0 h-[9vh] flex items-center justify-center opacity-100 z-[200] blur-effect-theme"
        }
      >
        <nav className="flex items-center justify-between nike-container">
          <div className="flex items-center">
            <img
              src={logo}
              alt="logo"
              className={`w-16 h-auto ${nav && "filter brightness-0"} `}
            />
          </div>
          <ul className="flex items-center justify-center gap-2">
            <li className="grid items-center">
              <MagnifyingGlassIcon
                className={`icon-style ${
                  nav && "text-slate-900 transition-all duration-300"
                } `}
              />
            </li>
            <li className="grid items-center">
              <HeartIcon
                className={`icon-style ${
                  nav && "text-slate-900 transition-all duration-300"
                } `}
              />
            </li>
            <li className="grid items-center">
              <button
                onClick={onCartToggle}
                type="button"
                className=" border-none outline-none active:scale-110 transition-all duration-300 relative"
              >
                <ShoppingBagIcon
                  className={`icon-style ${
                    nav && "text-slate-900 transition-all duration-300"
                  } `}
                />
                <div
                  className={`absolute top-4 right-0  shadow  w-4 h-4 text-[0.65rem] leading-tight font-medium rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-all duration-300 ${
                    nav
                      ? "bg-slate-900 text-slate-100 shadow-slate-900"
                      : "bg-slate-100 text-slate-900 shadow-slate-100"
                  } `}
                >
                  {totalQTY}
                </div>
              </button>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
