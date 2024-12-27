import React from "react";

import "./RelatedProducts.css";
import data_product from "../assets/data";
import Item from "../item/Item";
const RelatedProducts = () => {
    return (
        <div className="related-products">
            <h1>Related Products</h1>
            <hr />
            <div className="related-products-item">
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

export default RelatedProducts;
