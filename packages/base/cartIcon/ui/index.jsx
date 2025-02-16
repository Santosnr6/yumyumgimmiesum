import './index.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

export const CartIcon = ({cartClass}) => {
    const [qty, setQty] = useState(0);
    const cart = useSelector(state => state.cart);
    useEffect(() => {
        setNewQty();
        console.log(cart);        
    }, [cart]);

    const setNewQty = () => {
        let newQty = 0;
        cart?.forEach(item => newQty += item.qty);
        setQty(newQty);
    }

    return (
        <Link to={cart.length > 0 ? '/cart' : '/'} className="link cart-link">
            <figure className={ `cart-icon cart-icon--${cartClass}` }>
                { qty > 0 && cartClass !== "transparent" && <span className="cart-icon__counter">{qty}</span> }
                <img src="./src/assets/cart.svg" alt="Cart Icon" className="cart-icon__image" />
            </figure>
        </Link>
    );
}