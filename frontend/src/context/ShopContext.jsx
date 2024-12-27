import React, { createContext, useCallback, useState } from "react";

import all_product from "../components/assets/all_product";
export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index < all_product.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = useCallback(
        (itemId) => {
            console.log(itemId);

            setCartItems((prev) => ({
                ...prev,
                [itemId]: prev[itemId] + 1,
            }));
            console.log(cartItems);
        },
        [cartItems]
    );

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] - 1,
        }));
    };

    let contextVal = { all_product, cartItems, addToCart, removeFromCart };

    return (
        <ShopContext.Provider value={contextVal}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
