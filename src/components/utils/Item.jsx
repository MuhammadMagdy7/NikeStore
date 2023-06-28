import React from "react";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { setAddItemToCart, setOpenCart } from "../app/CartSlice";
const Item = ({
  ifExists,
  id,
  color,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  const dispatch = useDispatch();

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  const onAddToCart = () => {
    const item = { id, color, shadow, title, text, img, price };

    dispatch(setAddItemToCart(item));
  };
  return (
    <>
      <div
        className={` relative bg-gradient-to-b ${color} ${shadow} grid items-center 
        ${
          ifExists ? " justify-items-start" : "justify-items-center"
        } rounded-xl py-4 px-5 transition-all duration-700 ease-in-out w-full hover:scale-105`}
      >
        <div
          className={`grid items-center ${
            ifExists ? " justify-items-start" : "justify-items-center"
          } gap-1`}
        >
          <h1 className="text-slate-200 text-xl lg:text-lg md:text-base font-medium filter drop-shadow">
            {title}
          </h1>
          <p className="text-slate-200 md:text-sm text-base font-normal filter drop-shadow">
            {text}
          </p>
          <div className="flex items-center justify-between w-28">
            <div className="bg-white/80 px-1 rounded">
              <h1 className="text-black text-sm font-medium">${price}</h1>
            </div>
            <div className="flex items-center gap-1">
              <StarIcon className="icon-style w-5 h-5 md:w-4 md:h-4" />
              <h1 className="md:text-sm font-normal text-slate-100">
                {rating}
              </h1>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onAddToCart}
              type="button"
              className="bg-white/90 blur-effect-theme shadow shadow-sky-200 button-theme p-0.5"
            >
              <ShoppingBagIcon className="icon-style text-slate-900" />
            </button>
            <button
              onClick={()=>{onAddToCart(); onCartToggle();}}
              type="button"
              className="bg-white/90 blur-effect-theme shadow shadow-sky-200 button-theme py-1 px-2 text-sm text-black"
            >
              {btn}
            </button>
          </div>
        </div>
        <div
          className={`flex items-center ${
            ifExists ? " absolute top-5 right-1" : "justify-items-center"
          } `}
        >
          <img
            src={img}
            alt={`image/item/${id}`}
            className={` transitions-theme hover:-rotate-12 ${
              ifExists
                ? " h-auto w-56 lg:w-48 md:w-44 -rotate-[35deg]"
                : "h-36 w-64"
            }`}
          />
        </div>
      </div>
    </>
  );
};

export default Item;
