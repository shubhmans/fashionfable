import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrum from "../components/breadcrumbs/BreadCrum";
import ProductDisplay from "../components/product-display/ProductDisplay";
import DescriptionBox from "../components/description-box/DescriptionBox";
import RelatedProducts from "../components/related-products/RelatedProducts";

const Product = () => {
    const { all_product } = useContext(ShopContext);
    const { productId } = useParams();

    const product = all_product.find((e) => e.id === Number(productId));
    return (
        <div>
            <BreadCrum product={product} />
            <ProductDisplay product={product} />
            <DescriptionBox />
            <RelatedProducts />
        </div>
    );
};

export default Product;
