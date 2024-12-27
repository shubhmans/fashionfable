import React from "react";

import "./NewCollections.css";
import new_collections from "../assets/new_collections";
import Item from "../item/Item";

const NewCollections = () => {
    return (
        <div className="new-collections">
            <h1>New Collections</h1>
            <hr />
            <div className="collections">
                {new_collections.map((item, i) => {
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

export default NewCollections;
