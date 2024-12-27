import React, { useContext } from "react";

import "./CartItems.css";
import { ShopContext } from "../../context/ShopContext";
import remove_icon from "../assets/cart_cross_icon.png";
const CartItems = () => {
    const { all_product, cartItems, removeFromCart } = useContext(ShopContext);

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
                console.log(cartItems[e.id]);

                cartItems[e.id] > 0 && (
                    <div>
                        <div className="cart-items-format">
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
                            <p>{e.new_price * cartItems[e.id]}</p>
                            <img
                                src={remove_icon}
                                alt=""
                                onClick={() => removeFromCart(e.id)}
                            />
                        </div>
                        <hr />
                    </div>
                );
            })}
        </div>
    );
};

export default CartItems;
