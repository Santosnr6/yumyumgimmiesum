import "./index.css";
import { toUpper } from '@yumyumApp/utils';
import { useEffect, useState } from "react";

export const CartListItem = ({ product }) => {
    

    return (
        <li className="cart__list-item">
            <p className="cart__list-item-name">{ toUpper(product.name) }</p>
            <span className="cart__dots"></span>
            <p className="cart__list-item-price">{ `${ product.price * product.qty } ${ toUpper('sek') }` }</p>
        </li>
    );
}