import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/solid";
import React from "react";
import { useDispatch } from "react-redux";
import {
  setDecreaseItemQTY,
  setIncreaseItemQTY,
  setRemoveItemToCart,
} from "../app/CartSlice";

const CartItem = ({
  item: { id, color, shadow, title, text, img, price, cateQuantity },
}) => {
  const dispatch = useDispatch();

  const onRemoveToCart = () => {
    dispatch(
      setRemoveItemToCart({
        id,
        color,
        shadow,
        title,
        text,
        img,
        price,
        cateQuantity,
      })
    );
  };

  const onIncreaseItem = () => {
    dispatch(
      setIncreaseItemQTY({
        id,
        color,
        shadow,
        title,
        text,
        img,
        price,
        cateQuantity,
      })
    );
  };

  const onDecreaseItem = () => {
    dispatch(
      setDecreaseItemQTY({
        id,
        color,
        shadow,
        title,
        text,
        img,
        price,
        cateQuantity,
      })
    );
  };

  return (
    <>
      <div className="flex items-center justify-between w-full px-5">
        <div className="flex items-center gap-5">
          <div
            className={`bg-gradient-to-b ${color} ${shadow} relative rounded p-3 hover:scale-105 transition-all duration-75 ease-in-out grid items-center`}
          >
            <img
              src={img}
              alt={`img/${id}`}
              className="h-auto w-36 object-fill lg:w-28"
            />
            <div className="absolute right-1 top-1 blur-theme-effect bg-white/80 text-black text-sm px-1 rounded">
              ${price}
            </div>
          </div>
          <div className="grid items-center gap-4 ">
            <div className="grid items-center leading-none">
              <h1 className="font-medium text-lg text-slate-900 lg:text-sm">
                {title}
              </h1>
              <p className="text-sm text-slate-800 lg:text-xs">{text}</p>
            </div>
            <div className="flex items-center justify-around w-full">
              <button
                type="button"
                onClick={onDecreaseItem}
                className="bg-theme-cart rounded flex items-center h-6 w-6 lg:w-5 lg:h-5 justify-center active:scale-90"
              >
                <MinusIcon className="h-5 w-5 lg:w-4 lg:h-4 text-white storke-[2] " />
              </button>

              <div>
                <p>{cateQuantity}</p>
              </div>

              <button
                type="button"
                className="bg-theme-cart rounded flex items-center h-6 w-6 lg:w-5 lg:h-5 justify-center active:scale-90"
                onClick={onIncreaseItem}
              >
                <PlusIcon className="h-5 w-5 lg:w-4 lg:h-4 text-white storke-[2]" />
              </button>
            </div>
          </div>
        </div>
        <div className="grid items-center gap-5">
          <div className="grid items-center justify-center">
            <h1 className="text-lg lg:text-base text-slate-900 font-medium">
              ${price * cateQuantity}
            </h1>
          </div>
          <div>
            <button
              type="button"
              className="bg-theme-cart rounded flex items-center h-6 w-6 lg:w-5 lg:h-5 justify-center active:scale-90 cursor-pointer"
              onClick={onRemoveToCart}
            >
              <TrashIcon className="h-5 w-5 lg:w-4 lg:h-4 text-white storke-[2]" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
