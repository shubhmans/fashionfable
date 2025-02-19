import React, { useState } from "react";

import "./AddProduct.css";
import uploadArea from "../../assets/upload_area.svg";

const AddProduct = () => {
    const [image, setImage] = useState(false);
    const [productDetails, setProductDetails] = useState({
        name: "",
        image: "",
        category: "women",
        new_price: "",
        old_price: "",
    });

    const imageHandler = (event) => {
        setImage(event.target.files[0]);
    };

    const changeHandler = (event) => {
        setProductDetails({
            ...productDetails,
            [event.target.name]: event.target.value,
        });
    };

    const addProduct = async () => {
        let responseData;
        let product = productDetails;

        let formData = new FormData();
        formData.append("product", image);

        await fetch("http://localhost:4000/upload", {
            method: "POST",
            headers: {
                Accept: "application/json",
            },
            body: formData,
        })
            .then((res) => res.json())
            .then((data) => {
                responseData = data;
            });
        if (responseData.success) {
            product.image = responseData.image_url;
            await fetch("http://localhost:4000/add-product", {
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(product),
            })
                .then((res) => res.json())
                .then((data) => {
                    data.success
                        ? alert("Product added")
                        : alert("Failed to add product");
                });
        }
    };
    return (
        <div className="add-product">
            <div className="add-product-item-field">
                <p>Product title</p>
                <input
                    value={productDetails.name}
                    onChange={changeHandler}
                    type="text"
                    name="name"
                    placeholder="Type here"
                />
            </div>
            <div className="add-product-price">
                <div className="add-product-item-field">
                    <p>Price</p>
                    <input
                        value={productDetails.old_price}
                        onChange={changeHandler}
                        type="text"
                        name="old_price"
                        placeholder="Type here"
                    />
                </div>
            </div>
            <div className="add-product-price">
                <div className="add-product-item-field">
                    <p>Offer Price</p>
                    <input
                        value={productDetails.new_price}
                        onChange={changeHandler}
                        type="text"
                        name="new_price"
                        placeholder="Type here"
                    />
                </div>
            </div>
            <div className="add-product-item-field">
                <p>Product category</p>
                <select
                    name="category"
                    className="add-product-selector"
                    value={productDetails.category}
                    onChange={changeHandler}
                >
                    <option value="women">Women</option>
                    <option value="men">Men</option>
                    <option value="kid">Kids</option>
                </select>
            </div>
            <div className="add-product-item-field">
                <label htmlFor="file-input">
                    <img
                        src={image ? URL.createObjectURL(image) : uploadArea}
                        className="add-product-thumbnail-image"
                        alt=""
                    />
                </label>
                <input
                    onChange={imageHandler}
                    type="file"
                    name="image"
                    id="file-input"
                    hidden
                />
            </div>
            <button
                onClick={() => {
                    addProduct();
                }}
                className="add-product-btn"
            >
                Add
            </button>
        </div>
    );
};

export default AddProduct;
