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
            setCartItems((prev) => ({
                ...prev,
                [itemId]: prev[itemId] + 1,
            }));
        },
        [cartItems]
    );

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] - 1,
        }));
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            totalAmount +=
                cartItems[item] > 0
                    ? all_product.find((product) => product.id === Number(item))
                          .new_price * cartItems[item]
                    : 0;
        }
        return totalAmount;
    };

    const getTotalItemsInCart = () => {
        let count = 0;
        for (const item in cartItems) {
            count += cartItems[item];
        }
        return count;
    };

    let contextVal = {
        all_product,
        cartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        getTotalItemsInCart,
    };

    return (
        <ShopContext.Provider value={contextVal}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
