import "./index.css";
import { toUpper } from '@yumyumApp/utils';
import { useSelector } from "react-redux";
import { CartListItem } from "@yumyumApp/cartListItem";
import { useEffect, useState } from "react";

export const CartList = ({ onClick }) => {
    const cart = useSelector(state => state.cart);

    const sortOrder = {
        wonton: 1,
        dip: 2,
        drink: 3
    };

    const sortedCart = [...cart].sort((a, b) => {
        return (sortOrder[a.type] || 99) - (sortOrder[b.type] || 99);
    });

    return (
        <ul className="cart">
            {
                sortedCart?.map(product => {
                    return <CartListItem key={product.id} product={product} />
                })
            }
        </ul>
    );
};