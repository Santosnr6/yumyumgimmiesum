import './index.css';
import { Link } from 'react-router-dom';

export const CartIcon = ({cartClass}) => {
    const cart = [1];
    return (
        <Link to="/cart" className="link">
            <figure className={ `cart-icon cart-icon--${cartClass}` }>
                { cart.length > 0 && cartClass !== "transparent" && <span className="cart-icon__counter">{cart.length}</span> }
                <img src="./src/assets/cart.svg" alt="Cart Icon" className="cart-icon__image" />
            </figure>
        </Link>
    );
}