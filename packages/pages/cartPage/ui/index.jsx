import './index.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { toUpper } from '@yumyumApp/utils';
import { Header } from '@yumyumApp/header';
import { CartList } from "@yumyumApp/cartList";
import { Button } from '@yumyumApp/button';

export const CartPage = () => {
    const [sum, setSum] = useState(0);
    const cart = useSelector(state => state.cart);
    const navigate = useNavigate();

    useEffect(() => {
        setSum(0);
        cart.forEach(product => setSum(s => s += (product.qty * product.price)));
    }, [cart]);

    const handleBtnClick = () => {
        navigate('/order');
    }

    return (
        <main className="page cart-page">
            <Header logo={false} cartClass={'transparent'} />
            <section className="cart-page__content">
                <CartList />
                <section className="cart-page__bottom-group">
                    <div className="cart-page__summary">
                        <p className="cart-page__total">{ toUpper('totalt') }</p>
                        <p className="cart-page__sum">{`${sum} ${toUpper('sek')}`}</p>
                    </div>
                    <Button text={ 'take my money!' } onClick={ handleBtnClick } type={ 'solid' } />
                </section>
            </section>
        </main>
    );
}