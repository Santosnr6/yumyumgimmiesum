import "./index.css";
import { useState, useEffect } from "react";
import { toUpper } from "@yumyumApp/utils";
import { Button } from "@yumyumApp/button";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "@yumyumApp/reducers";

export const Modal = ({ product, closeModal }) => {
    const [qty, setQty] = useState(0);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    useEffect(() => {
        const selected = cart.find(item => item.id === product.id);
        if(selected) setQty(selected.qty);
    }, [cart]);

    const decrease = () => {
        console.log('dec');
        
        if(qty > 0) setQty(q => q - 1);
    }
    
    const increase = () => {
        console.log('dec');
        setQty(q => q + 1);
    }

    const handleAddToCart = (event) => {
        console.log('halloj');
        dispatch(addToCart( {product, qty: qty} ));
        closeModal(event);
    }

    return (
        <section className="modal">
            <h2 className="modal__title">{toUpper(product.name)}</h2>
            <div className="modal__counter">
                <p onClick={ decrease } className="modal__counter-item">-</p>
                <p className="modal__counter-item">{ qty }</p>
                <p onClick={ increase } className="modal__counter-item">+</p>
            </div>
            <Button onClick={ handleAddToCart } text={'add to cart'} type="solid" />
        </section>
    );
}