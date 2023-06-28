import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import React from "react";
import emptybag from "../../assets/emptybag.png";
import { useDispatch } from "react-redux";
import { setCloseCart } from "../app/CartSlice";
const CartEmpty = () => {
  const dispatch = useDispatch();

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center h-screen px-11 text-center gap-7">
        <img
          src={emptybag}
          alt=""
          className="w-40 lg:w-36 sm:w-28 h-auto object-fill transition-all duration-300 hover:scale-110"
        />
        <button
          onClick={onCartToggle}
          type="button"
          className="button-theme bg-gradient-to-b from-amber-500 to-orange-500 flex items-center justify-center gap-3 shadow-lg shadow-orange-500 text-slate-900 py-2 text-sm font-semibold active:scale-110"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          <span className="">Back To Nike Store</span>
        </button>
      </div>
    </>
  );
};

export default CartEmpty;
