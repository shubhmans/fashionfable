import React from "react";

import "./Popular.css";
import data_product from "../assets/data";
import Item from "../item/Item";

const Popular = () => {
    return (
        <div className="popular">
            <h1>Popular in women</h1>
            <hr />
            <div className="popular-item">
                {data_product.map((item, i) => {
                    return (
                        <Item
                            key={i}
                            id={item.id}
                            productName={item.name}
                            image={item.image}
                            newPrice={item.new_price}
                            oldPrice={item.old_price}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Popular;
