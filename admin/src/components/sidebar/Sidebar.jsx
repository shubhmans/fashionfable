import React from "react";

import "./Sidebar.css";
import { Link } from "react-router-dom";
import addProductIcon from "../../assets/Product_Cart.svg";
import listProductIcon from "../../assets/Product_list_icon.svg";

const Sidebar = () => {
    return (
        <div className="sidebar">
            <Link to={"/add-product"} style={{ textDecoration: "none" }}>
                <div className="sidebar-item">
                    <img src={addProductIcon} alt="" />
                    <p>Add product</p>
                </div>
            </Link>
            <Link to={"/list-product"} style={{ textDecoration: "none" }}>
                <div className="sidebar-item">
                    <img src={listProductIcon} alt="" />
                    <p>List products</p>
                </div>
            </Link>
        </div>
    );
};

export default Sidebar;
