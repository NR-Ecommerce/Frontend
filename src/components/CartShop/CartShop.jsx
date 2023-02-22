import React from "react";
import { BiCartAlt } from "react-icons/bi";
import './CartShop.scss'

const CartShop = ({number}) => {
  return (
    <div className="cartShop__container">
      <BiCartAlt className="cartShop__icon" />
        <div className="cartShop__counter">{number}</div>
    </div>
  );
};

export default CartShop;
