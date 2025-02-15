import "./index.css";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { toUpper } from "@yumyumApp/utils";
import { Button } from "@yumyumApp/button";
import { addToCart } from "@yumyumApp/reducers";
import { SpecialModalItem } from "@yumyumApp/specialModalItem";

export const Modal = ({ product, closeModal }) => {
    const [qty, setQty] = useState(0);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);

    useEffect(() => {
        const selected = cart.find(item => item.id === product.id);
        if(selected) setQty(selected.qty);
    }, [cart]);

    const decrease = () => { if(qty > 0) setQty(q => q - 1); }
    
    const increase = () => setQty(q => q + 1); 

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
            <Button onClick={ handleAddToCart } text={cart.some(p => p.id === product.id) ? 'update cart' : 'add to cart'} type="solid" />
        </section>
    );
}

export const SpecialModal = ( {products, closeModal} ) => {
    const [specialProducts, setSpecialProducts] = useState([]);
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart);
    
    useEffect(() => {
        if (products.items.length > 0) {
            const updatedProducts = products.items.map(product => {
                const cartItem = cart.find(item => item.id === product.id);
                return {
                    ...product,
                    qty: cartItem ? cartItem.qty : 0
                };
            });
            setSpecialProducts(updatedProducts);
        }
    }, [products.items, cart]);

    const handleAddToCart = (event) => {
        closeModal(event);
        // const addedProducts = specialProducts.filter(product => product.qty > 0);
        // console.log(addedProducts);
        specialProducts.forEach(product => dispatch(addToCart( {product, qty: product.qty} )));
    }

    return (
        <section className="modal">
            <h2 className="modal__title">{toUpper(products.name)}</h2>
            <ul className="modal__list">
                {
                    specialProducts.map(product => {
                        return <SpecialModalItem key={ product.id } product={ product } />
                    })
                }
            </ul>
            <Button onClick={ handleAddToCart } text={specialProducts.some(p => p.qty !== 0) ? 'update cart' : 'add to cart'} type="solid" />
        </section>
    );
}