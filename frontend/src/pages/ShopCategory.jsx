import React, { useContext } from "react";

import "./css/ShopCategory.css";
import { ShopContext } from "../context/ShopContext";
import dropdown_icon from "../components/assets/dropdown_icon.png";
import Item from "../components/item/Item";

const ShopCategory = (props) => {
    const { all_product } = useContext(ShopContext);

    return (
        <div className="shop-category">
            <img className="shop-category-banner" src={props.banner} alt="" />
            <div className="shop-category-index-sort">
                <p>
                    <span>Showing 1-12</span> out of 36 products
                </p>
                <div className="shop-category-sort">
                    Sort by <img src={dropdown_icon} alt="" />
                </div>
            </div>
            <div className="shop-category-products">
                {all_product.map((item, i) => {
                    return props.category === item.category ? (
                        <Item
                            key={i}
                            id={item.id}
                            productName={item.name}
                            image={item.image}
                            newPrice={item.new_price}
                            oldPrice={item.old_price}
                        />
                    ) : null;
                })}
            </div>
            <div className="shop-category-loadmore">Explore more</div>
        </div>
    );
};

export default ShopCategory;
