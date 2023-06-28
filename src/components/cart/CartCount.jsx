import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";
import React from "react";

const CartCount = ({onCartToggle, onClearItems, totalQTY}) => {
  return (
    <>
      <div className="flex items-center justify-between bg-white py-2 p-1">
        <div className="flex items-center gap-3">
          <div className="grid items-center cursor-pointer">
          <button type="button" onClick={()=>onCartToggle()} className=" active:scale-90">
            <ChevronDoubleLeftIcon className="w-5 h-5 text-slate-900 hover:text-orange-500 stroke-[2]" />
            </button>
          </div>
          <div>
            <h1 className="text-base font-medium text-slate-900">Your Cart <span className="bg-theme-cart rounded text-slate-100 px-1 py-0.5 font-normal text-xs">({totalQTY} items)</span></h1>
          </div>
        </div>
        <div className="flex items-center">
          <button onClick={onClearItems} type="button" className="bg-theme-cart rounded p-0.5 active:scale-90">
            <XMarkIcon  className="w-5 h-5 stroke-[2] text-slate-100 " />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCount;
