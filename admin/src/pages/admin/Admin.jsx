import React from "react";
import "./Admin.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Route, Routes } from "react-router-dom";
import AddProduct from "../../components/addproduct/AddProduct";
import ListProduct from "../../components/listproduct/ListProduct";

const Admin = () => {
    return (
        <div className="admin">
            <Sidebar />
            <Routes>
                <Route path="/add-product" element={<AddProduct />} />
                <Route path="/list-product" element={<ListProduct />} />
            </Routes>
        </div>
    );
};

export default Admin;
