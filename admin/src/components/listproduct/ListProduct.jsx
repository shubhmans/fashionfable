import React, { useEffect, useState } from "react";

import "./ListProduct.css";
import crossIcon from "../../assets/cross_icon.png";

const ListProduct = () => {
    const [allProducts, setAllProducts] = useState([]);

    const fetchInfo = async () => {
        await fetch("http://localhost:4000/products")
            .then((res) => res.json())
            .then((data) => setAllProducts(data));
    };

    useEffect(() => {
        fetchInfo();
    }, []);
    return (
        <div className="list-product">
            <h1>All products</h1>
            <div className="list-products-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Old price</p>
                <p>New price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>

            <div className="list-products-all-products">
                <hr />
                {allProducts.map((product, index) => {
                    return (
                        <div
                            key={index}
                            className="list-product-format-main list-product-format"
                        >
                            <img
                                className="list-product-product-icon"
                                src={product.image}
                                alt=""
                            />
                            <p>{product.name}</p>
                            <p>${product.old_price}</p>
                            <p>${product.new_price}</p>
                            <p>{product.category}</p>
                            <img
                                className="list-product-remove-icon"
                                src={crossIcon}
                                alt=""
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ListProduct;
