import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/card-slice";


const Cart = () => {
  const quantity = useSelector((state) => state.cart.totalQuantity);
  const dispatch = useDispatch();
  const showCart = () => {
    dispatch(cartActions.setShowCart());
  };
  return (
    
    <div className="cartIcon">
      <h3 onClick={showCart}>{quantity}</h3>
    </div>
  );
};

export default Cart;
