import './index.css';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '@yumyumApp/reducers';
import { usePostOrderMutation } from '@yumyumApp/api';
import { toUpper } from '@yumyumApp/utils';
import { Header } from '@yumyumApp/header';
import { CartList } from "@yumyumApp/cartList";
import { Button } from '@yumyumApp/button';

export const CartPage = () => {
    const [sum, setSum] = useState(0);
    const cart = useSelector(state => state.cart);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [postOrder, { data, isError, isLoading }] = usePostOrderMutation();

    useEffect(() => {
        setSum(0);
        cart.forEach(product => setSum(s => s += (product.qty * product.price)));
    }, [cart]);

    const placeOrder = async () => {
        const items = cart.flatMap(item => Array(item.qty).fill(item.id));
    
        try {
            const response = await postOrder({ items }).unwrap();
            dispatch(clearCart());
            navigate(`/order/${response.order.id}`);
        } catch (error) {
            console.error('Misslyckades att lägga order:', error);
        }
    };

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
                    <Button text={ 'take my money!' } onClick={ placeOrder } type={ 'solid' } />
                </section>
            </section>
        </main>
    );
}