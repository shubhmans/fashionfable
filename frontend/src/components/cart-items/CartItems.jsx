import React, { useContext } from "react";

import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";
const CartItems = () => {
    const { all_product, cartItems, removeFromCart, getTotalCartAmount } =
        useContext(ShopContext);

    return (
        <div className="cart-items">
            <div className="cart-item-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                return (
                    cartItems[e.id] > 0 && (
                        <div>
                            <div className="cart-items-format cart-item-format-main">
                                <img
                                    className="cart-icon-producticon"
                                    src={e.image}
                                    alt=""
                                />
                                <p>{e.name}</p>
                                <p>$ {e.new_price}</p>
                                <button className="cart-items-quantity">
                                    {cartItems[e.id]}
                                </button>
                                <p>$ {e.new_price * cartItems[e.id]}</p>
                                <img
                                    className="cart-items-remove-icon"
                                    src={remove_icon}
                                    alt=""
                                    onClick={() => removeFromCart(e.id)}
                                />
                            </div>
                            <hr />
                        </div>
                    )
                );
            })}
            <div className="cart-items-down">
                <div className="cart-items-total">
                    <h1>Cart total: </h1>
                    <div>
                        <div className="cart-items-total-item">
                            <p>Subtotal</p>
                            <p>$ {getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-items-total-item">
                            <p>Shipping charges</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div className="cart-items-total-item">
                            <h3>Total</h3>
                            <h3>$ {getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                <div className="cart-items-promocode">
                    <p>If you have a promoode, enter here</p>
                    <div className="card-items-promobox">
                        <input type="text" placeholder="promocode" />
                        <button>APPLY</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItems;
