import React, { useContext, useRef, useState } from "react";
import "./Navbar.css";
import logo from "../assets/logo_32.png";
import cartIcon from "../assets/cart_icon.png";
import dropDownIcon from "../assets/nav_dropdown.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const Navbar = () => {
    const [menu, setMenu] = useState("shop");
    const { getTotalItemsInCart } = useContext(ShopContext);
    const menuRef = useRef();

    const dropDownToggle = (event) => {
        menuRef.current.classList.toggle("nav-menu-visible");
        event.target.classList.toggle("open");
    };
    return (
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>FASHIONFABLE</p>
            </div>
            <img
                className="nav-dropdown"
                onClick={dropDownToggle}
                src={dropDownIcon}
                alt=""
            />
            <ul ref={menuRef} className="nav-menu">
                <li
                    onClick={() => {
                        setMenu("shop");
                    }}
                >
                    <Link to="/">Shop</Link>
                    {menu === "shop" && <hr />}
                </li>
                <li
                    onClick={() => {
                        setMenu("men");
                    }}
                >
                    <Link to="/men">Men</Link> {menu === "men" && <hr />}
                </li>
                <li
                    onClick={() => {
                        setMenu("women");
                    }}
                >
                    <Link to="/women">Women</Link> {menu === "women" && <hr />}
                </li>
                <li
                    onClick={() => {
                        setMenu("kids");
                    }}
                >
                    <Link to="/kids">Kids</Link> {menu === "kids" && <hr />}
                </li>
            </ul>
            <div className="nav-login-cart">
                <Link to="/login">
                    <button>Login</button>
                </Link>
                <Link to="/cart">
                    <img src={cartIcon} alt="" />
                </Link>
                <div className="nav-cart-count">{getTotalItemsInCart()}</div>
            </div>
        </div>
    );
};

export default Navbar;
