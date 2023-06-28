import React, { useEffect } from "react";
import CartItem from "./cart/CartItem";
import CartEmpty from "./cart/CartEmpty";
import CartCount from "./cart/CartCount";
import { useDispatch, useSelector } from "react-redux";
import {
  setCloseCart,
  selectCartState,
  selectCartItems,
  setClearCartItem,
  setGetTotals,
  selectTotalAmount,
  selectTotalQTY,
} from "./app/CartSlice.js";

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector(selectCartState);
  const CartItems = useSelector(selectCartItems);
  const totalAmount = useSelector(selectTotalAmount)
  const totalQTY = useSelector(selectTotalQTY)

  useEffect(() => {
    dispatch(setGetTotals())
  

  }, [CartItems, dispatch])
  

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };

  const onClearItems = () => {
    dispatch(setClearCartItem())
  }
  return (
    <>
      <div
        className={`${
          ifCartState ? "" : "hidden"
        } fixed top-0 left-0 right-0 bottom-0 blur-effect-theme w-full h-screen opacity-100 z-[250]`}
      >
        <div
          className={`absolute right-0 blur-effect-theme max-w-xl w-full h-screen`}
        >
          <CartCount totalQTY={totalQTY} onCartToggle={onCartToggle} onClearItems={onClearItems} />
          {CartItems?.length > 0 ? (
            <div>
              <div className="flex flex-col items-start justify-start gap-y-7 lg:gap-y-5 overflow-y-scroll h-[81vh] scroll-smooth scroll-hidden py-3">
                {CartItems?.map((item, i) => (
                  <CartItem key={i} item={item} />
                ))}
              </div>

              <div className="ficed bottom-0 bg-white w-full px-5 py-2 grid items-center">
                <div className="flex items-center justify-between">
                  <h1 className="text-base font-semibold uppercase">SubTotal</h1>
                  <h1 className="text-sm rounded bg-theme-cart text-slate-100 px-2 py-0.5">${totalAmount}</h1>
                </div>
                <div className="grid items-center gap-2">
                  <p className="text-sm font-medium text-center">
                    Taxes and Shipping Will Calcualte At Shipping
                  </p>
                  <button type="button" className="button-theme bg-theme-cart text-white">Check Out</button>
                </div>
              </div>
            </div>
          ) : (
            <CartEmpty />
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
